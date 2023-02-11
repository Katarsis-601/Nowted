import vector from "../assets/Vector.png";
export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="title-bar">
          <h1 className="title">Nowted</h1>
          <img src={vector} alt={vector} width="15px" />
        </div>
        <ul className="nav">
          <li>Home</li>
          <li>Product</li>
          <li>Support</li>
          <li>Contact Us</li>
        </ul>
        <button className="login-btn">Login</button>
      </div>
    </>
  );
}
