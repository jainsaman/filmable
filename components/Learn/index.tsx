import styles from "./Learn.module.scss";

type LearnProps = {};

export default function Learn({}: LearnProps) {
  return (
    <div className={styles.learn}>
      <img src="Learn.png" alt="People Image" />
      <p className={styles.title}>Learn from the Industry Greats!</p>
      {/* <p className={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500
      </p> */}
    </div>
  );
}
