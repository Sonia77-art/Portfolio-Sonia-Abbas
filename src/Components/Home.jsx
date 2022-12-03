import "../App.css";
import { ImLinkedin } from "react-icons/im";
import { GrFacebook } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

export default function Home() {
  return (
    <div className="Homi">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="https://linkedin.com">
        <ImLinkedin />
      </a>
      <br />
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="https://facebook.com">
        <GrFacebook />
      </a>
      <br />
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="https://github.com">
        <BsGithub />
      </a>
      <br />
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="https://instagram.com">
        <SiInstagram />
      </a>
    </div>
  );
}
