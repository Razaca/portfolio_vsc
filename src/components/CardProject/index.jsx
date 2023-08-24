import styles from "./styles.module.css";
import Image from "next/image";

const CardProject = ({ project }) => {
  return (
    <div className={styles.CardProject}>
      <Image
        src={project.image}
        alt={project.name}
        height={150}
        width={200}
        style={{ objectFit: "cover", borderRadius: "15px", width: "100%" }}
      />
      <h3>{project.name}</h3>
      <p>{project.description}</p>

      {project.demo ? (
        <div className={styles.contButtons}>
          <div className={styles.button}>Code</div>
          <div className={styles.button}>Deploy</div>
        </div>
      ) : (
        <div className={styles.contButtons}>
          <div className={styles.button}>Code</div>
        </div>
      )}
    </div>
  );
};

export default CardProject;
