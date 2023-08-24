import styles from "./styles.module.css";
import { projects } from "./projects";
import CardProject from "@/components/CardProject";

const page = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.grid}>
        {projects.map((el) => (
          <CardProject project={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default page;
