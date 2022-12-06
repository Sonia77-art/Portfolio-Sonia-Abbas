import Picture from "../Picture.jpg";
import "../App.css";

export default function Image() {
  return (
    <>
      <div>
        <img src={Picture} alt="img" width="80%" height="100%" />
      </div>
    </>
  );
}
