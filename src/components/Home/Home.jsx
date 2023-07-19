import "./Home.scss";
import Lepic from "../../assets/images/home_lebao.jpg";
import Aipic from "../../assets/images/home_aibao.jpg";
import Fupic from "../../assets/images/home_fubao.jpg";
import Twinspic from "../../assets/images/home_twins.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="absolute left-24 right-10 top-12 bottom-0 mt-5 flex flex-col home-page">
        <div className="piczone flex flex-row h-screen">
          <div className="pic-container w-1/4 h-full overflow-hidden">
            <Link to="/Lebao">
              <img
                className="w-full h-full object-cover "
                src={Lepic}
                alt="Lebao"
              />
            </Link>
          </div>
          <div className="pic-container w-1/4 h-full overflow-hidden">
            <Link to="/Aibao">
              <img
                className="w-full h-full object-cover"
                src={Aipic}
                alt="Aibao"
              />
            </Link>
          </div>
          <div className="pic-container w-1/4 h-full overflow-hidden">
            <Link to="/Fubao">
              <img
                className="w-full h-full object-cover"
                src={Fupic}
                alt="Fubao"
              />
            </Link>
          </div>
          <div className="pic-container w-1/4 h-full overflow-hidden">
            <Link to="/Twins">
              <img
                className="w-full h-full object-cover"
                src={Twinspic}
                alt="Twins Bao"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
