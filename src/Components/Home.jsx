import "../App.css";
import { ImLinkedin } from "react-icons/im";
import { GrFacebook } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

export default function Home() {
  return (
    <div className="Homi">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a classname="Link" href="https://linkedin.com" target="_blank">
        <ImLinkedin />
      </a>
      <br />
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="face" href="https://facebook.com" target="_blank">
        <GrFacebook />
      </a>
      <br />
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="Git" href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <br />
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="Insta" href="https://instagram.com" target="_blank">
        <SiInstagram />
      </a>
    </div>
  );
}
