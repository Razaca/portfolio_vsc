import styles from "./styles.module.css";

const about = () => {
  return (
    <div className={styles.about}>
      <div className={styles.skills}>
        <span className={styles.color1}>import {`{`}</span>{" "}
        <span className={styles.color2}>
          HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS,
          Node.js, Python, MongoDB, PostgreSQL, figma, git{" "} 
        </span>
        <span className={styles.color1}>{`}`} from </span>
        <span className={styles.color2}>{'"Relevant Skills"'}</span>
        <span className={styles.color1}>;</span>
      </div>

      <div className={styles.function}>
        <span className={styles.color3}>
          <span className={styles.color1}>function</span>
          <span className={styles.color2}> About</span>
          {`() {`}
        </span>
        <span className={`${styles.color1} ${styles.margin1}`}>
          return {`(`}
        </span>
        <span className={`${styles.color4} ${styles.margin1}`}>{`<main>`}</span>
        <span className={`${styles.color4} ${styles.margin2}`}>{`<h1>`}</span>
        <h3 className={`${styles.margin3}`}>Hola, soy Renzo Cervantes!</h3>
        <span className={`${styles.color4} ${styles.margin2}`}>{`</h1>`}</span>
        <span className={`${styles.color4} ${styles.margin2}`}>{`<p>`}</span>
        <p className={`${styles.margin3}`}>
          Soy un desarrollador full stack de Argentina. Recientemente completé
          mi formación en Henry, donde adquirí conocimientos en todas las áreas
          del desarrollo web. Mis principales intereses en programación son el
          front end, aunque últimamente he encontrado una nueva pasión por el
          desarrollo del lado del servidor. Llevo poco más de un año
          programando, pero me gusta mantenerme actualizado en las últimas
          tendencias y tecnologías del mundo de la programación. Estoy en la
          búsqueda de un proyecto grande y desafiante que me permita seguir
          creciendo como desarrollador. En mi perfil de
          <a href="#"> GitHub</a> puedes encontrar algunos de mis proyectos
          personales y contribuciones a proyectos de código abierto. ¡No dudes
          en <a href="#">contactarme </a>
          si quieres saber más sobre mi trabajo o si estás interesado en
          colaborar en algún proyecto juntos!
        </p>
        <span className={`${styles.color4} ${styles.margin2}`}>{`</p>`}</span>
        <span
          className={`${styles.color4} ${styles.margin1}`}
        >{`</main>`}</span>
        <span className={`${styles.color1} ${styles.margin1}`}>{`);`}</span>
        <span className={styles.color3}>{`}`}</span>
        <span className={styles.color1} style={{ marginTop: "2rem" }}>
          export default <span className={styles.color2}>About;</span>
        </span>
      </div>
    </div>
  );
};

export default about;
