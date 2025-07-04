'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const navigate = (name) =>{
    router.push(name)
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello My Next App</h1>
        <Link href='/login'>Go To Login page</Link>
        <br />
        <br />
        <Link href='/about'>Go To About Us page</Link>
        <button onClick={()=>alert("Hello Next js")}>Click Me</button>
        <button onClick={()=>navigate('/login')}>Login</button>
        <button onClick={()=>navigate('/about')}>About</button>
      </main>
    </div>
  );
}
