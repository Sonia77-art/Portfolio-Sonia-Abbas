import "../App.css";
import { useState } from "react";
import { SiHomeassistant } from "react-icons/si";
import { ImUser } from "react-icons/im";
import { BiBookReader } from "react-icons/bi";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
      <a
        href="Experience"
        onclick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiBookReader />
      </a>
    </nav>
  );
}
