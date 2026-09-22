import Button from '../common/Button';
import Avatar from '../common/Avatar';
import {
  OperationalHealthCard,
  AflServicesCard,
  InteractionsCard,
  ContactCard,
} from './FloatingCards';
import { HERO, BANK_LOGOS } from '../../data/hero';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Floating cards — desktop only */}
        <div className="hero__float hero__float--tl">
          <div className="hero__float-inner"><OperationalHealthCard /></div>
        </div>
        <div className="hero__float hero__float--bl">
          <div className="hero__float-inner"><AflServicesCard /></div>
        </div>
        <div className="hero__float hero__float--tr">
          <div className="hero__float-inner"><InteractionsCard /></div>
        </div>
        <div className="hero__float hero__float--br">
          <div className="hero__float-inner"><ContactCard /></div>
        </div>

        {/* Center content */}
        <div className="hero__content">
          <div className="hero__eyebrow">
            <div className="hero__avatars">
              {HERO.avatars.map((a) => (
                <Avatar key={a.name} name={a.name} size={30} className="hero__avatar" />
              ))}
              <span className="hero__avatar-count">{HERO.extraCount}</span>
            </div>
            <span>{HERO.eyebrow}</span>
          </div>

          <h1 className="hero__title">
            {HERO.titlePlain}
            <span className="hero__title-accent">
              <span className="hero__cursor" aria-hidden="true" />
              {HERO.titleAccent}
            </span>
          </h1>

          <p className="hero__subtitle">{HERO.subtitle}</p>

          <div className="hero__actions">
            <Button variant="primary" arrow="up-right">
              {HERO.primaryCta}
            </Button>
            <Button variant="outline" arrow="down-right">
              {HERO.secondaryCta}
            </Button>
          </div>

          <p className="hero__proof">
            Join <strong>{HERO.socialProof.count}</strong> {HERO.socialProof.text}
          </p>
        </div>
      </div>

      {/* Bank logos strip */}
      <div className="hero__logos">
        <div className="container hero__logos-track">
          {BANK_LOGOS.map((logo, i) => (
            <span className="hero__logo" key={i}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
