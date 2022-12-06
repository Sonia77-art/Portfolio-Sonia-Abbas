import Picture from "../Picture.jpg";
import "../App.css";

export default function Image() {
  return (
    <>
      <div className="Pic">
        <img src={Picture} alt="img" width="40%" height="40%" />
      </div>
    </>
  );
}
