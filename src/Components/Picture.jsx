import Picture from "../soniapicture.jpg";
import "../App.css";

export default function Image() {
  return (
    <div className="Pic">
      <img src={Picture} alt="soniapicture" width="20%" height="20%" />
    </div>
  );
}
