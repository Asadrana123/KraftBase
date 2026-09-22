import { useState } from 'react';
import { Star, FacebookLogo, Quotes, CaretLeft, CaretRight } from '@phosphor-icons/react';
import Avatar from '../common/Avatar';
import Button from '../common/Button';
import { TESTIMONIALS } from '../../data/testimonials';
import './Testimonials.css';

/**
 * "Trusted by Professionals" — a 3-up peeking carousel (prev / active / next).
 * Only the active card is interactive content; prev/next are faded previews
 * that swap in on click. Mirrors the mount-animation pattern used by
 * Features (.feature) and FloatingCards (.hero__float): fade + scale in.
 */
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const len = TESTIMONIALS.length;
  const prevIdx = (active - 1 + len) % len;
  const nextIdx = (active + 1) % len;

  const goPrev = () => setActive(prevIdx);
  const goNext = () => setActive(nextIdx);

  const renderCard = (t, variant) => (
    <div
      className={`tcard tcard--${variant}`}
      key={variant === 'active' ? `active-${t.id}` : variant}
      aria-hidden={variant !== 'active'}
    >
      <Quotes className="tcard__quote-mark" size={34} weight="fill" aria-hidden="true" />

      <div className="tcard__head">
        <Avatar name={t.name} src={t.avatar} size={48} />
        <div>
          <p className="tcard__name">{t.name}</p>
          <p className="tcard__role">{t.role}</p>
        </div>
      </div>

      <p className="tcard__quote">{t.quote}</p>

      <div className="tcard__foot">
        <div className="tcard__stars" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} weight="fill" color={i < t.rating ? '#ffb020' : '#e6e9f2'} />
          ))}
        </div>
        <span className="tcard__social" aria-hidden="true">
          <FacebookLogo size={15} weight="fill" />
        </span>
      </div>
    </div>
  );

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials__head">
          <span className="eyebrow">Testimonial</span>
          <h2 className="testimonials__title">Trusted by Professionals</h2>
        </div>

        <div className="testimonials__carousel">
          {renderCard(TESTIMONIALS[prevIdx], 'prev')}
          {renderCard(TESTIMONIALS[active], 'active')}
          {renderCard(TESTIMONIALS[nextIdx], 'next')}
        </div>

        <div className="testimonials__nav">
          <button className="tnav-btn tnav-btn--prev" onClick={goPrev} aria-label="Previous testimonial">
            <CaretLeft size={16} weight="bold" />
          </button>
          <button className="tnav-btn tnav-btn--next" onClick={goNext} aria-label="Next testimonial">
            <CaretRight size={16} weight="bold" />
          </button>
        </div>

        <div className="testimonials__cta">
          <Button variant="outline" arrow="up-right" className="testimonials__viewall">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
