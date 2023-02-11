import lock from "../assets/lock.png";
import refresh from "../assets/refresh.png";
import app from "../assets/image 1.png";
export default function Preview() {
  return (
    <div className="preview">
      <div className="topbar">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="searchbar">
          <img src={lock} alt={lock} width="15px" />
          <p>https://nowted.app</p>
          <img src={refresh} alt={refresh} width="11.25px" />
        </div>
      </div>
      <img src={app} alt={app} className="app_img" />
    </div>
  );
}
