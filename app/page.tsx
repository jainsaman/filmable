import Image from "next/image";
import styles from "../styles/Home.module.scss";
import {
  Head,
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
      <Head title="Filamble" />
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
