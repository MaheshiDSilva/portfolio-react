import React from "react";
import HeroImage from "../../assets/image/me.png"
import CV from "../../assets/image/Maheshi De Silva-CV/1.jpg"
// import CV from "../../assets/image/Maheshi De Silva-CV/2.jpg"

export const Hero = () => {
    return (
        <section className="pt-0" id="about">
            <div className="container pt-14">
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                    {/*-----------------Hero left content-----------------*/}
                    <div className="w-full md:basis-1/2">
                        <h5 data-aos="fade-right" data-aos-duration="1500"
                            className="text-headingColor font-[600] text-[16px]">Hello, Welcome</h5>
                        <h1 data-aos="fade-up" data-aos-duration="1500" className="text-purple-700 font-[800]
                        text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">I'm Maheshi De Silva <br/>Software
                            Engineer</h1>
                        <div data-aos="fade-up" data-aos-duration="1800" data-aos-delay="200"
                             className="flex items-center gap-6 mt-7">
                            <a href="#contact">
                                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2
                                hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"><i
                                    className="ri-mail-line"></i>Hire me
                                </button>
                            </a>
                            <a href={CV} download="CV.png" className="text-smallTextColor font-[600] text-[16px] border border-solid
                            border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-primaryColor hover:text-white">Download
                                CV</a>
                        </div>
                        <p data-aos="fade-left" data-aos-duration="1500" className="flex gap-2 text-headingColor font-[500]
                             text-[15px] leading-7 sm:pl-14 sm:pr-10 mt-14">
                            <span><i className="ri-apps-2-line"></i></span>
                            I like to try different things with my creativity and ability. I have social skills including
                            listening,
                            respecting personal space, leadership skills, cooperation, empathy and using manners. Also,
                            I’m hard worker and fast learner. And also I'm very fond of web development, UI designing
                            and developing. My passion is make great things.
                        </p>
                        <div className="flex items-center gap-9 mt-14">
                            <span className="text-smallTextColor text-[15px] font-[600]">Connect with me :</span>
                            <span>
                                <a href="https://www.linkedin.com/in/maheshi-de-silva-9b8787264/" className="text-smallTextColor text-[24px] font-[600]"><i
                                    className="ri-linkedin-box-line"></i></a>
                            </span>
                            <span>
                                <a href="https://github.com/MaheshiDSilva" className="text-smallTextColor text-[24px] font-[600]"><i
                                    className="ri-github-fill"></i></a>
                            </span>
                            <span>
                                <a href="#whatsapp" className="text-smallTextColor text-[24px] font-[600]"><i
                                    className="ri-whatsapp-line"></i></a>
                            </span>
                            <span>
                                <a href="#instagram" className="text-smallTextColor text-[24px] font-[600]"><i
                                    className="ri-instagram-line"></i></a>
                            </span>
                        </div>
                    </div>
                    {/*-----------------Hero left end-----------------*/}
                    {/*-----------------Hero image-----------------*/}
                    <div className="basis-5/12 mt-10 sm:mt-0">
                        <figure className="flex items-center justify-center ">
                            <img src={HeroImage} alt="" />
                        </figure>
                    </div>
                    {/*-----------------Hero image end-----------------*/}
                    {/*-----------------Hero content right-----------------*/}

                </div>
            </div>
        </section>
    )


}