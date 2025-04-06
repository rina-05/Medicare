import React from "react"; 
import heroImg01 from "../assets/images/heroImg01.png";
import heroImg002 from "../assets/images/heroImg002.jpg";
import heroImg003 from "../assets/images/heroImg003.png";


const Home = () => {

    return <>
    {/*=====hero section=====*/}
    <>
    <section className="her_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
            <div className="flex flex-col  lg:flex-row gap-[90px] items-center justify-between">

                {/*====== hero content =====*/}
                <div>
                    <div className="lg:w-[570px]">
                        <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                            We help patients live a healthy, longer life.</h1>
                        <p className="text__para">
                            Welcome to our clinic, where your health and well-being are our top priorities. We are committed to providing compassionate, high-quality care in a comfortable and welcoming environment. Our team of experienced medical professionals uses the latest technology and treatment methods to ensure you receive the best possible care. Whether you're visiting for a routine check-up or specialized treatment, we are here to support you every step of the way.</p>
                        <button className="btn">Request An Appointment</button>
                    </div>
                    {/*====== hero counter =====*/}
                    <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                        <div>
                            <h2 className="mt-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                            <span className="w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]"></span>
                            <p className="text__para">Years of Experience</p>
                        </div>

                        <div>
                            <h2 className="mt-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">15+</h2>
                            <span className="w-[100px] h-2 bg-purple-900 rounded-full block mt-[-14px]"></span>
                            <p className="text__para">Clinic Locations</p>
                        </div>

                        <div>
                            <h2 className="mt-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                            <span className="w-[100px] h-2 bg-red-700 rounded-full block mt-[-14px]"></span>
                            <p className="text__para">Patient Satisfaction</p>
                        </div>
                        

                    </div>
                </div>
                {/*====== hero content =====*/}
                <div className="flex gap-[30px] justify-end">
                    <div>
                        <img className="w-full" src={heroImg01} alt=""/>
                    </div>
                    <div className="mt-[30px]">
                        <img src={heroImg002} alt=""  className="w-full mb-[30px]"/>
                        <img src={heroImg003} alt=""  className="w-full mb-[30px]"/>
                        

                    </div>
                </div>
            </div>
        </div>

    </section>
     {/*=====hero section end=====*/}
     <section>
        <div className="container">
            <div className="lg:w-[470px] mx-auto">
                <h2 className="heading text-center">Providing the best medical services</h2>
            </div>
           
        </div>
     </section>
   
    
    </>
    </>

};
export default Home;