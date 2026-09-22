import { UsersThree, Sliders } from '@phosphor-icons/react';
import { ContactsVisual, NodesVisual } from './FeatureVisuals';
import { FEATURES } from '../../data/features';
import './Features.css';

const ICONS = { UsersThree, Sliders };
const VISUALS = { contacts: ContactsVisual, nodes: NodesVisual };

export default function Features() {
  return (
    <section className="features section" id="for-lenders">
      <div className="container">
        {/* Section heading */}
        <div className="features__head">
          <span className="eyebrow">{FEATURES.eyebrow}</span>
          <h2 className="features__title">{FEATURES.heading}</h2>
        </div>

        <div className="features__divider" />

        {/* Two feature columns */}
        <div className="features__grid">
          {FEATURES.cards.map((card) => {
            const Icon = ICONS[card.icon];
            const Visual = VISUALS[card.visual];
            return (
              <div className="feature" key={card.id}>
                <div className="feature__head">
                  <span className="feature__icon">
                    <Icon size={22} weight="fill" color="#1952f1" />
                  </span>
                  <h3 className="feature__title">
                    {card.titlePlain}
                    <span className="feature__title-accent">{card.titleAccent}</span>
                  </h3>
                </div>
                <p className="feature__desc">{card.description}</p>
                <Visual />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
