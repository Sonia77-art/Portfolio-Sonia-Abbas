import "../App.css";
import { ImLinkedin } from "react-icons/im";
import { GrFacebook } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

export default function Home() {
  return (
    <div>
      <a href="https://linkedin.com" target="_blank">
        <ImLinkedin />
      </a>
      <a href="https://facebook.com" target="_blank">
        <GrFacebook />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://instagram.com" target="_blank">
        <SiInstagram />
      </a>
    </div>
  );
}
