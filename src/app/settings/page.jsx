import CardTheme from "@/components/CardTheme";
import styles from "./styles.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <CardTheme
          name="visual studio clasic"
          publisher="visual studio"
          theme="classic"
          description="GitHub theme for VS Code"
        />
        <CardTheme
          name="visual studio red"
          publisher="visual studio"
          theme="red"
          description="Official Dracula Theme. A dark theme for many editors, shells, and more."
        />
    </div>
  );
};

export default page;
