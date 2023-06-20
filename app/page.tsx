import styles from "../styles/Home.module.scss";
import {
  Navbar,
  Landing,
  Learn,
  About,
  Features,
  AppScreens,
  Partners,
  Team,
  Signup,
  Footer,
} from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Landing />
        <Learn />
        <About />
        <Features />
        <AppScreens />
        <Partners />
        <Team />
        <Signup />
        <Footer />
      </main>
    </div>
  );
}
