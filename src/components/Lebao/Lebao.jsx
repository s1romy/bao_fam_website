import LebaoProfile from "../../assets/images/Profile_lebao.jpg";
import Lepic_1 from "../../assets/images/gal_lebao_1.jpg";
import Lepic_2 from "../../assets/images/gal_lebao_2.jpg";
import Lepic_3 from "../../assets/images/gal_lebao_3.jpg";
import Lepic_4 from "../../assets/images/gal_lebao_4.jpg";
import Lepic_5 from "../../assets/images/gal_lebao_5.jpg";
import Lepic_6 from "../../assets/images/gal_lebao_6.jpeg";
import Lepic_7 from "../../assets/images/gal_lebao_7.jpeg";
import Lepic_8 from "../../assets/images/gal_lebao_8.jpg";
import Lepic_9 from "../../assets/images/gal_lebao_9.jpg";
import "./Lebao.scss";

const Lebao = () => {
  return (
    <>
      <div className="absolute left-24 right-10 mt-5 lebaopage">
        <div className="flex flex-col md:flex-row md:items-start md:gap-4 ml-14 ">
          <img className="mask mask-heart w-96" src={LebaoProfile} />
          <div className="mt-16 md:pt-0 md:ml-14 desc-container">
            <div className="lebao-name text-3xl">Lebao</div>
            <div className="lebao-desc mt-3 ml-1">
              <p>
                Meaning: a treasure that gives happiness
                <br />
                Birth date: July 28, 2012
                <br />
                Gender: Male
                <br />
                Birth place: Dujiangyan Panda Base (China)
              </p>
              <div className="gallery mt-3 mr-32">
                <div className="carousel rounded-box">
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Lepic_1} alt="Lebao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Lepic_2} alt="Lebao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Lepic_3} alt="Lebao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Lepic_4} alt="Lebao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Lepic_5} alt="Lebao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Lepic_6} alt="Lebao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Lepic_7} alt="Lebao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Lepic_8} alt="Lebao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Lepic_9} alt="Lebao" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-10 md:mt-0 ml-14">
            <i className="fab fa-youtube text-3xl"></i>
            <span className="text-2xl mt-0 video-title">
              &nbsp;Recommended Videos
            </span>
            <div className="ml-10 mt-2 flex gap-5">
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/wkAnasbC3II"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/jsZ91uW2V-M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/vk0-2_bFhZo"
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

export default Lebao;
