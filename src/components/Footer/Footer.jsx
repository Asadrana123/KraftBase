import {
  Lightning,
  InstagramLogo,
  PaperPlaneTilt,
  Heart,
  MoonStars,
  EnvelopeSimple,
  MapPin,
} from '@phosphor-icons/react';
import Button from '../common/Button';
import { NAV_LINKS } from '../../data/nav';
import { FOOTER } from '../../data/footer';
import './Footer.css';

/**
 * Last section of the page: a "Contact Us" CTA banner on an arched panel
 * (clip-path ellipse, not a giant blurred circle) with decorative icons
 * that sit as independent siblings of the panel — two of them straddle
 * its curved bottom edge, half inside the colour, half hanging over the
 * white below. If they were nested inside .footer__arch instead, the
 * panel's own clip-path would clip them too and hide that overlap.
 */
export default function Footer() {
  return (
    <footer className="footer">
      {/* ---- CTA banner ---- */}
      <div className="footer__stage">
        <div className="footer__arch" aria-hidden="true" />

        {/* Fully inside the arch */}
        <span className="footer__deco footer__deco--instagram" aria-hidden="true">
          <InstagramLogo size={18} weight="fill" color="#fff" />
        </span>
        <span className="footer__deco footer__deco--heart" aria-hidden="true">
          <Heart size={14} weight="fill" color="#fff" />
        </span>

        {/* Straddling the arch's curved edge */}
        <span className="footer__deco footer__deco--plane" aria-hidden="true">
          <PaperPlaneTilt size={18} weight="fill" color="#1952f1" />
        </span>
        <span className="footer__deco footer__deco--moon" aria-hidden="true">
          <MoonStars size={16} weight="fill" color="#fff" />
        </span>

        <div className="container footer__cta">
          <span className="footer__badge">
            <Lightning size={24} weight="fill" color="#fff" />
          </span>

          <span className="eyebrow">{FOOTER.eyebrow}</span>

          <h2 className="footer__title">
            We also need to have <span className="footer__title-accent">contact</span>
            <br />
            form on the <span className="footer__title-accent">website</span>
          </h2>

          <p className="footer__subtitle">{FOOTER.subtitle}</p>

          <Button variant="primary" arrow="up-right" className="footer__cta-btn">
            {FOOTER.ctaLabel}
          </Button>
        </div>
      </div>

      {/* ---- Footer info ---- */}
      <div className="footer__bottom">
        <div className="container footer__grid">
          <div className="footer__col">
            <p className="footer__col-title">Navigation</p>
            <nav className="footer__links" aria-label="Footer">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer__col footer__col--brand">
            <div className="footer__brand-logo">
              <span className="footer__brand-mark">
                <Lightning size={14} weight="fill" color="#fff" />
              </span>
              {FOOTER.brandName}
            </div>
            <p className="footer__brand-desc">{FOOTER.brandDesc}</p>
          </div>

          <div className="footer__col footer__col--contact">
            <p className="footer__col-title">Contact</p>
            <div className="footer__contact-item">
              <EnvelopeSimple size={15} weight="bold" />
              <span>{FOOTER.contactEmail}</span>
            </div>
            <div className="footer__contact-item">
              <MapPin size={15} weight="bold" />
              <span>{FOOTER.contactAddress}</span>
            </div>
          </div>
        </div>

        <p className="footer__copy">{FOOTER.copyright}</p>
      </div>
    </footer>
  );
}