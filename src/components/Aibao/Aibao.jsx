import AibaoProfile from "../../assets/images/Profile_aibao.jpg";
import Aipic_1 from "../../assets/images/gal_aibao_1.jpg";
import Aipic_2 from "../../assets/images/gal_aibao_2.jpg";
import Aipic_3 from "../../assets/images/gal_aibao_3.jpg";
import Aipic_4 from "../../assets/images/gal_aibao_4.jpg";
import Aipic_5 from "../../assets/images/gal_aibao_5.jpg";
import Aipic_6 from "../../assets/images/gal_aibao_6.jpg";
import Aipic_7 from "../../assets/images/gal_aibao_7.png";
import Aipic_8 from "../../assets/images/gal_aibao_8.jpg";
import Aipic_9 from "../../assets/images/gal_aibao_9.jpg";
import "./Aibao.scss";

const Aibao = () => {
  return (
    <>
      <div className="absolute left-24 right-10 mt-5 aibaopage">
        <div className="ml-14 mt-12 flex h-[380px]">
          <img className="mask mask-heart w-96" src={AibaoProfile} />
          <div className="pt-4 ml-14">
            <div className="aibao-name text-3xl">Aibao</div>
            <div className="aibao-desc mt-3">
              <p>
                Meaning: an adorable treasure
                <br />
                Birth date: July 13, 2013
                <br />
                Gender: Female
                <br />
                Birth place: Dujiangyan Panda Base (China)
              </p>
              <div className="gallery mt-3 mr-32">
                <div className="carousel rounded-box">
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Aipic_1} alt="Aibao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Aipic_2} alt="Aibao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Aipic_3} alt="Aibao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Aipic_4} alt="Aibao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Aipic_5} alt="Aibao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Aipic_6} alt="Aibao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Aipic_7} alt="Aibao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Aipic_8} alt="Aibao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Aipic_9} alt="Aibao" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="ml-14 mt-16">
            <i className="fa-brands fa-youtube text-3xl"></i>
            <span className="text-2xl mt-0 video-title">
              &nbsp;Recommended Videos
            </span>
            <div className="ml-10 mt-2 flex gap-5">
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/K9BwxSoF8ps"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/agsOX395JMk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/y-zIJLsl4YU"
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

export default Aibao;
