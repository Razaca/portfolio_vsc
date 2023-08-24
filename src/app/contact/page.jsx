import FormContact from "@/components/FormContact";
import styles from "./styles.module.css";

const contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.socials}>
        <h3>Reach Out Via Socials</h3>
        <span>.socials{"{"}</span>
        <span className={styles.key}>
          email:
          <span className={styles.value}>r33n84@gmail.com</span>;
        </span>
        <span className={styles.key}>
          linkedin:
          <span className={styles.value}>renzo-cervantes</span>;
        </span>
        <span className={styles.key}>
          github:
          <span className={styles.value}>razaca</span>;
        </span>
        <span>{"}"}</span>
      </div>
      <FormContact />
    </div>
  );
};

export default contact;
