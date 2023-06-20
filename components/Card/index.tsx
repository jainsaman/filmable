import styles from "./Card.module.scss";
import Tagline from "../Tagline";

type CardProps = {
  src: string;
  title: string;
  content: string;
};

export default function Card({ src, title, content }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={`Cards/${src}.svg`} alt="Social Feed" />
      </div>
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardContent}>{content}</p>
    </div>
  );
}
