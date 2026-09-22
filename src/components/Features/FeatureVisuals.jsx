import { Gear, Code, Database, Cards, Lightning } from '@phosphor-icons/react';
import Avatar from '../common/Avatar';
import { CONTACTS } from '../../data/features';
import './FeatureVisuals.css';

/* Stacked, staggered contact cards (Intuitive & Agent Focused) */
export function ContactsVisual() {
  return (
    <div className="fvisual fvisual--contacts">
      {CONTACTS.map((c, i) => (
        <div className={`contact-row contact-row--${i}`} key={c.name}>
          <Avatar name={c.name} size={38} />
          <div>
            <p className="contact-row__name">{c.name}</p>
            <p className="contact-row__loc">{c.location}</p>
          </div>
        </div>
      ))}
      <span className="fvisual__peek" aria-hidden="true">
        <Avatar name="Team Member" size={40} />
      </span>
    </div>
  );
}

/* Node diagram (Highly Customizable) — center hub + 4 connected icons */
export function NodesVisual() {
  const nodes = [
    { icon: Gear, pos: 'tl' },
    { icon: Database, pos: 'tr' },
    { icon: Code, pos: 'bl' },
    { icon: Cards, pos: 'br' },
  ];
  return (
    <div className="fvisual fvisual--nodes">
      <div className="nodes__diagram">
        {/* dashed connector lines */}
        <svg className="nodes__lines" viewBox="0 0 260 180" fill="none" aria-hidden="true">
          <path d="M60 45 H110 Q130 45 130 70 V90" stroke="#c9d6f5" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M200 45 H150 Q130 45 130 70 V90" stroke="#c9d6f5" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M60 135 H110 Q130 135 130 110 V90" stroke="#c9d6f5" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M200 135 H150 Q130 135 130 110 V90" stroke="#c9d6f5" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

        {/* center hub */}
        <span className="node node--hub">
          <Lightning size={22} weight="fill" color="#1952f1" />
        </span>

        {/* satellite nodes */}
        {nodes.map(({ icon: Icon, pos }) => (
          <span className={`node node--${pos}`} key={pos}>
            <Icon size={18} weight="regular" color="#1952f1" />
          </span>
        ))}
      </div>
      <button className="nodes__pill">API integration</button>
    </div>
  );
}
