import Bamboo from "../../assets/icon/bamboo.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <header className="inline-block items-center header-container">
          <div className="mt-4 text-4xl flex items-center title">
            Bao Family in Everland
            <img src={Bamboo} alt="Bamboo" className="ml-1 -mt-3" />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
