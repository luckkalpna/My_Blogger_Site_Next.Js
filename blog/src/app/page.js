'use client'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello My Next App</h1>
        <button onClick={()=>alert("Hello Next js")}>Click Me</button>
      </main>
    </div>
  );
}
