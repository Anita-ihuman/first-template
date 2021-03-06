import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Nav from "../component/nav";
import Footer from '../component/footer'
export default function Home() {
  return (
    <div className={styles.container}>
     
      <main className={styles.main}>
        <img src="/img.png" alt="Logo" className={styles.img} />
        <div className={styles.title}>
          <h2>Simply time tracking. Powerful reporting.</h2>
          <p>
            Turn your team on to productivituy with Gravity the time tracker
          </p>
          <button className={styles.btn}>Request early access</button>
        </div>
        <img src="/img.png" alt="Logo" className={styles.img2} />
      </main>
<hr></hr>
      
    </div>
  );
}
