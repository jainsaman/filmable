import styles from "./Tagline.module.scss";

type TaglineProps = {
  content: string;
};

export default function Tagline({ content }: TaglineProps) {
  return (
    <div className={styles.tagline}>
      <div className={styles.taglineBar}></div>
      <span className={styles.taglineContent}>{content}</span>
    </div>
  );
}
