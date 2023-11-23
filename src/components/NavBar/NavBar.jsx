import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
      <nav>
      <div className="d-flex justify-content-around p-3">
      <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/11/attachment_78456430-e1541654366936.jpeg?auto=format&q=60&fit=max&w=930" alt="" style={{width:"150px"}} />
      <button className="btn btn-danger mx-2">Home</button>
      <button className="btn btn-danger mx-2">Mesas</button>
      <button className="btn btn-danger mx-2">Sillas</button>
      <button className="btn btn-danger mx-2">Dormitorio</button>
      </div>
      </nav>
    )
  }