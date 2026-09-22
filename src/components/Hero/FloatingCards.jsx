import { CaretDown, SealCheck, CurrencyDollar, Phone } from '@phosphor-icons/react';
import GaugeRing from '../common/GaugeRing';
import BarChart from '../common/BarChart';
import Avatar from '../common/Avatar';
import { AFL_STATS } from '../../data/hero';
import './FloatingCards.css';

export function OperationalHealthCard() {
  return (
    <div className="fcard fcard--health">
      <div className="fcard__head">
        <div>
          <p className="fcard__title">Operational Health</p>
          <p className="fcard__sub">April 2025</p>
        </div>
        <CaretDown size={16} weight="bold" className="fcard__caret" />
      </div>
      <GaugeRing value={80} size={120} stroke={13} />
      <p className="fcard__foot">
        Address Actionable Cases Promptly To Maintain A Healthy Score.
      </p>
    </div>
  );
}

export function AflServicesCard() {
  return (
    <div className="fcard fcard--afl">
      <p className="fcard__title">
        AFL Services <SealCheck size={16} weight="fill" color="#1952f1" />
      </p>
      <p className="fcard__sub">Cities Serviced: Bangalore, Chennai</p>
      <div className="fcard__stats">
        {AFL_STATS.map((s) => (
          <div className="fcard__stat" key={s.label}>
            <span className="fcard__stat-value">{s.value}</span>
            <span className="fcard__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="fcard__afl-foot">
        <span className="fcard__sub fcard__sub--tiny">Operating Since 2016</span>
        <button className="fcard__enquiry">Send Enquiry</button>
      </div>
    </div>
  );
}

export function InteractionsCard() {
  return (
    <div className="fcard fcard--chart">
      <div className="fcard__head">
        <div>
          <p className="fcard__title">Interactions and amount collected</p>
          <p className="fcard__sub">Totals For 31 Feb</p>
        </div>
        <span className="fcard__badge">
          <CurrencyDollar size={16} weight="bold" color="#fff" />
        </span>
      </div>
      <BarChart />
    </div>
  );
}

export function ContactCard({ name = 'Cheyenne Gouse', phone = '+91 98XXXXXXXX' }) {
  return (
    <div className="fcard fcard--contact">
      <span className="fcard__contact-icon">
        <Phone size={16} weight="fill" color="#fff" />
      </span>
      <Avatar name={name} size={44} />
      <div>
        <p className="fcard__contact-name">{name}</p>
        <p className="fcard__sub">{phone}</p>
      </div>
    </div>
  );
}
