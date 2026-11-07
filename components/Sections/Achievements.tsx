import React from 'react';
import { ArrowUpRight, Flag, Trophy } from 'lucide-react';
import './Achievements.css';

const achievements = [
  {
    id: 'infinity-ai-buildfest',
    title: 'The Infinity AI Buildfest 2026',
    category: 'AI Hackathon',
    organizer: 'CloudCamp Bangladesh',
    result: 'Finalist',
    field: 'Among 600 teams',
    image: '/assets/certifications/ai-buildfest.png',
    imageWidth: 2000,
    imageHeight: 1414,
    alt: 'The Infinity AI Buildfest 2026 participation certificate awarded to Mehedi Hasan',
    icon: Trophy,
  },
  {
    id: 'hi-cyber-con',
    title: 'HI Cyber Con 2026',
    category: 'International CTF',
    organizer: 'Hidden Investigations',
    result: '123rd',
    field: 'Out of 1,119 teams worldwide',
    image: '/assets/certifications/international-ctf.png',
    imageWidth: 1201,
    imageHeight: 847,
    alt: 'HI Cyber Con 2026 certificate for Mehedi Hasan showing a global rank of 123rd out of 1,119 teams',
    icon: Flag,
  },
];

const Achievements: React.FC = () => (
  <section
    id="achievements"
    aria-labelledby="achievements-heading"
    className="achievements-section"
  >
    <div className="container mx-auto px-6">
      <div className="achievements-header">
        <span className="achievements-eyebrow">
          05. Achievements
        </span>
        <h2 id="achievements-heading" className="achievements-title">
          Achievements &amp; <span>Certificates</span>
        </h2>
        <p className="achievements-intro">
          Milestones in AI innovation and cybersecurity.
        </p>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;

          return (
            <article
              key={achievement.id}
              className="achievement-card"
            >
              <a
                href={achievement.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${achievement.title} certificate at full size (opens in a new tab)`}
                className="achievement-preview"
              >
                <img
                  src={achievement.image}
                  alt={achievement.alt}
                  width={achievement.imageWidth}
                  height={achievement.imageHeight}
                  loading="lazy"
                  decoding="async"
                  className="achievement-image"
                />
              </a>

              <div className="achievement-body">
                <div className="achievement-category">
                  <Icon size={14} aria-hidden="true" />
                  {achievement.category}
                </div>
                <h3 className="achievement-title">
                  {achievement.title}
                </h3>
                <p className="achievement-organizer">
                  {achievement.organizer}
                </p>

                <div className="achievement-footer">
                  <div className="achievement-result">
                    <p className="achievement-rank">{achievement.result}</p>
                    <p className="achievement-field">{achievement.field}</p>
                  </div>
                  <a
                    href={achievement.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${achievement.title} certificate (opens in a new tab)`}
                    className="achievement-link"
                  >
                    Certificate
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Achievements;
