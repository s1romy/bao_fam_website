import FubaoProfile from "../../assets/images/Profile_fubao.jpg";
import Fupic_1 from "../../assets/images/gal_fubao_1.jpg";
import Fupic_2 from "../../assets/images/gal_fubao_2.jpeg";
import Fupic_3 from "../../assets/images/gal_fubao_3.jpg";
import Fupic_4 from "../../assets/images/gal_fubao_4.jpg";
import Fupic_5 from "../../assets/images/gal_fubao_5.jpg";
import Fupic_6 from "../../assets/images/gal_fubao_6.jpg";
import Fupic_7 from "../../assets/images/gal_fubao_7.jpg";
import Fupic_8 from "../../assets/images/gal_fubao_8.jpg";
import Fupic_9 from "../../assets/images/gal_fubao_9.jpeg";
import "./Fubao.scss";

const Fubao = () => {
  return (
    <>
      <div className="absolute left-24 right-10 mt-5 fubaopage">
        <div className="ml-14 mt-16 flex h-[380px]">
          <img className="mask mask-heart w-96" src={FubaoProfile} />
          <div className="pt-1 ml-14">
            <div className="fubao-name text-3xl">Fubao</div>
            <div className="fubao-desc mt-3">
              <p>
                Meaning: a lucky treasure
                <br />
                Birth date: July 20, 2020
                <br />
                Gender: Female
                <br />
                Birth place: Yongin Everland (Repulic of Korea)
              </p>
              <div className="gallery mt-3 mr-32">
                <div className="carousel rounded-box">
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Fupic_1} alt="Fubao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Fupic_2} alt="Fubao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Fupic_3} alt="Fubao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Fupic_4} alt="Fubao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Fupic_5} alt="Fubao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Fupic_6} alt="Fubao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Fupic_7} alt="Fubao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Fupic_8} alt="Fubao" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-44 h-full" src={Fupic_9} alt="Fubao" />
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
                src="https://www.youtube.com/embed/1Rmuwc2ETcM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/zw6qnqtakD8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/a5LcejfmQGI"
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

export default Fubao;
