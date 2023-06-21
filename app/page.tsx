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
  Navigation,
} from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Landing />
        <Learn />
        <Navigation navId="About" />
        <About />
        <Navigation navId="Features" />
        <Features />
        <Navigation navId="Screens" />
        <AppScreens />
        <Partners />
        <Navigation navId="Team" />
        <Team />
        <Navigation navId="Contact" />
        <Signup />
        <Footer />
      </main>
    </div>
  );
}
