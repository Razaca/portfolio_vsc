import styles from "./styles.module.css";
import { VscError, VscWarning, VscBell, VscCheckAll } from "react-icons/vsc";
import { SiNextdotjs } from "react-icons/si";

const BottomBar = () => {
  return (
    <div className={styles.BottomBar}>
      <div>
        <span>
          <svg
            width="14"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"></path>
          </svg>
          main
        </span>
        <span>
          <VscError size={14} /> 0
        </span>
        <span>
          <VscWarning size={14} /> 0
        </span>
      </div>
      <div>
        <span>
          <SiNextdotjs /> Powered by Next.js
        </span>
        <span>
          <VscCheckAll />
          Prettier
        </span>
        <span>
          <VscBell />
        </span>
      </div>
    </div>
  );
};

export default BottomBar;
