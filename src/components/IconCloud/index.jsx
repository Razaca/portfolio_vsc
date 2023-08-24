"use client";
import styles from "./styles.module.css";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import {
  siTypescript,
  siJavascript,
  siNextdotjs,
  siMongodb,
  siPostgresql,
  siRedux,
  siPassport,
  siExpress,
  siJsonwebtokens,
  siCss3,
  siHtml5,
  siSass,
  siStyledcomponents,
  siAuth0,
  siVisualstudiocode,
  siFigma,
  siGit,
  siGithub,
  siMarkdown,
  siReact
} from "simple-icons";

const icons = [
  siTypescript,
  siJavascript,
  siNextdotjs,
  siMongodb,
  siPostgresql,
  siRedux,
  siPassport,
  siExpress,
  siJsonwebtokens,
  siCss3,
  siHtml5,
  siSass,
  siStyledcomponents,
  siAuth0,
  siVisualstudiocode,
  siFigma,
  siGit,
  siGithub,
  siMarkdown,
  siReact
].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
      onClick: (e) => e.preventDefault(),
    },
  });
});

const IconCloud = () => {
  return (
    <div className={styles.container}>
      <Cloud>{icons}</Cloud>
    </div>
  );
};

export default IconCloud;
