import Link from "next/link";
import styles from "./page.module.css";
import IconBall from "@/components/IconCloud";
import Subtitle from "@/components/Subtitle";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.title}>renzo cervantes</h1>
        <Subtitle />
        <div className={styles.buttons}>
          <Link href={"/about"}>
            <div className={styles.button}>sobre mi</div>
          </Link>
          <Link  href={"/contact"}>
            <div className={styles.button}>contactarme</div>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <IconBall />
        </div>
      </div>
    </main>
  );
}
