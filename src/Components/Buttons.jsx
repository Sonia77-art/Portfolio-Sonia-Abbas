import Cv from "../Cv.pdf";

export default function Buttons() {
  return (
    <div className="Buttons">
      <button>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href={Cv} className="btn" download>
          Download Resume
        </a>
      </button>

      <button>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="contacts" className="btn-2">
          Let's Talk More
        </a>
      </button>
    </div>
  );
}
