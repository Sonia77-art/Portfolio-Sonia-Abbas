import Picture from "../soniapicture.jpg";
import "../App.css";

export default function Image() {
  return (
    <div>
      <img
        ClassName="Pic"
        src={Picture}
        alt="soniapicture"
        width="100%"
        height="180%"
      />
    </div>
  );
}
