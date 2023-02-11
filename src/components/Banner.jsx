import arrow from "../assets/Frame.png";
export default function Banner() {
  return (
    <div className="banner">
      <h2>
        Boost your productivity with our <span>streamlined note-taking</span>{" "}
        solution
      </h2>
      <p>
        Effortlessly access your notes from any device with our convenient
        cloud-based solution.
      </p>
      <button>
        Try For Free <img src={arrow} alt={arrow} />
      </button>
    </div>
  );
}
