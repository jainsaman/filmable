import styles from "./Features.module.scss";
import Tagline from "../Tagline";
import Card from "../Card";

type FeaturesProps = {};

export default function Features({}: FeaturesProps) {
  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div className={styles.featuresContent}>
          <Tagline content="app features" />
          <p className={styles.title}>We specialise in</p>
        </div>
        <div className={styles.cardContainer}>
          <Card
            src="social"
            title="social feed"
            content="Get inspired and stay informed with our social feed feature - connect with other creatives and stay up-to-date on industry news and trends."
          />
          <Card
            src="portfolio"
            title="film portfolios"
            content="Create a stunning film portfolio on our app, showcase your work to industry professionals and elevate your career in the world of cinema."
          />
          <Card
            src="workshops"
            title="workshops"
            content="Take a deep dive into the world of cinema with our expert-led workshops - designed to help you master your craft."
          />
          <Card
            src="film"
            title="film making classes"
            content="In-depth instruction and training in all aspects of filmmaking, including acting, screenwriting, cinematography, directing, editing, sound design, and more."
          />
          <Card
            src="virtual"
            title="virtual auditions"
            content="Showcase your talent globally with Filmable’s virtual auditions - convenient, accessible, and flexible through our app."
          />
          <Card
            src="chamber"
            title="film chamber"
            content="Look no further than our app, which provides a diverse range of opportunities for creative professionals, from job postings and collaboration projects to mentorship programs and more. "
          />
        </div>
      </div>
    </div>
  );
}
