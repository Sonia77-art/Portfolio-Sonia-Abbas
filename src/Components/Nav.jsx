import "../App.css";
import { useState } from "react";
import { SiHomeassistant } from "react-icons/si";
import { ImUser } from "react-icons/im";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onclick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <SiHomeassistant />
      </a>
      <a
        href="about"
        onclick={() => setActiveNav("about")}
        className={activeNav === "#" ? "active" : ""}
      >
        <ImUser />
      </a>
      < href="Experience"
        onclick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}>
    </nav>
  );
}
