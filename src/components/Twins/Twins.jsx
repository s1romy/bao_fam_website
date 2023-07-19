import TwinsProfile from "../../assets/images/Profile_twins.jpg";
import Twinspic_1 from "../../assets/images/gal_twins_1.jpeg";
import Twinspic_2 from "../../assets/images/gal_twins_2.jpeg";
import Twinspic_3 from "../../assets/images/gal_twins_3.jpeg";
import Twinspic_4 from "../../assets/images/gal_twins_4.jpg";
import Twinspic_5 from "../../assets/images/gal_twins_5.jpeg";
import Twinspic_6 from "../../assets/images/gal_twins_6.jpg";

import "./Twins.scss";

const Twins = () => {
  return (
    <>
      <div className="absolute left-24 right-10 mt-5 twinsbaopage">
        <div className="ml-14 mt-16 flex h-[380px]">
          <img className="mask mask-heart w-96 h-96" src={TwinsProfile} />
          <div className="pt-4 ml-14">
            <div className="twinsbao-name text-3xl">Bao Twins</div>
            <div className="twinsbao-desc mt-3">
              <p>
                Name: they do not have name rignt now. They will get name after
                100 days by fans.
                <br />
                Birth date: July 7, 2023
                <br />
                Gender: Female
                <br />
                Birth place: Yongin Everland (Republic of Korea)
              </p>
              <div className="gallery mt-3 mr-32">
                <div className="carousel rounded-box">
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Twinspic_1} alt="Twins" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Twinspic_2} alt="Twins" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Twinspic_3} alt="Twins" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Twinspic_4} alt="Twins" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Twinspic_5} alt="Twins" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Twinspic_6} alt="Twins" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="ml-14 mt-12">
            <i className="fa-brands fa-youtube text-3xl"></i>
            <span className="text-2xl mt-0 video-title">
              &nbsp;Recommended Videos
            </span>
            <div className="ml-10 mt-2 flex gap-5">
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/554pmIaz6xg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/SW-oQGfInVw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/XDZvxCofJ4c"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Twins;
