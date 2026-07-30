import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI for Ethiopia',
    icon: '🌍',
    description: (
      <>
        Harnessing artificial intelligency to solve local challenges-from agriculture
        to healthcare. We tailor cutting-edge AI education to Ethiopia's unique context.
      </>
    ),
  },
  {
    title: 'Hands-on Learning',
    icon: '💻',
    description: (
      <>
       Build real-world projects with mentorship from industry experts. Our labs
       and hackathons turns theory into practical, deployable solutions.
      </>
    ),
  },
  {
    title: 'Community-Driven',
    icon: "🫱🏾‍🫲🏿",
    description: (
      <>
        Join a vibrant network of AI enthusiasts, researchers, and entrepreneurs.
        Collaborate, share knowledge, and grow together in Ethiopia's AI ecosystem.
      </>
    ),
  },
  {
    title: 'Ethiopian Language AI',
    icon: '📚',
    description: (
      <>
      Breaking language barriers-we develop NLP models for Amharic, Oromifa,
       Somaligna, and more, making AI accessible to all Ethiopians.
      </>
    )
  }
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}
      
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
