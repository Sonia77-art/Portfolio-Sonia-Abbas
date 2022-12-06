import "../App.css";
import { useState } from "react";
import { SiHomeassistant } from "react-icons/si";
import { ImUser } from "react-icons/im";
import { BiBookReader } from "react-icons/bi";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav id="Nav" className="Social">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#social"
        onclick={() => setActiveNav("Social")}
        className={activeNav === "#" ? "active" : ""}
      >
        <SiHomeassistant />
      </a>
      <a
        href="#Education"
        onclick={() => setActiveNav("Education")}
        className={activeNav === "#" ? "active" : ""}
      >
        <ImUser />
      </a>
      <a
        href="#Projects"
        onclick={() => setActiveNav("Projects")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiBookReader />
      </a>
    </nav>
  );
}
