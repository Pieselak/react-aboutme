import { useEffect } from "react";
import { Link } from "react-router-dom";
import setTitle from "../utilities/setTitle";
import cryingCat from "../assets/cryingcat.png";
import Copyrights from "../components/Copyrights";

const NotFoundPage = () => {
  useEffect(() => {
    setTitle("Not Found");
  });

  return (
    <>
      <div className="NotFound_Page">
        <div className="NotFound_Text">
          <h1>404!</h1>
          <p>The page you are looking for does not exist</p>
        </div>
        <div className="NotFound_Bottom">
          <span>I ate this page it was too spicy</span>
          <img src={cryingCat} alt="Crying Cat" className="NotFound_Image" />
          <Link to="/" className="NotFound_Return">
            <i className="bx bx-arrow-back" /> Return to the homepage
          </Link>
        </div>
      </div>
      <Copyrights />
    </>
  );
};

export default NotFoundPage;
