
import './portfolio.css'
import sid from '../../assets/sidhu.png'
import As1 from '../../assets/AS1.jpg'
import As2 from '../../assets/img2.png'
import As3 from '../../assets/img4.png'
import Swiper from 'swiper'
import React, { useState, useEffect, useRef } from 'react';


const Portfolio = () => {
  // Initialize swiper

  // Swiper
  useEffect(() => {
    // Swiper
    const mySwiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 15,
      breakpoints: {
        480: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
    });

    // Handle scroll event
    // const navbar = document.getElementById('navbar');


  }, []);

  const testimonials = [
    {
      text: 'He is a skilled web developer who learns all his lessons quickly, and the work he produces is truly amazing',
      name: 'Aravind, Project Manager in Exposys dataLabs',
    },
    {
      text: 'Working with Mr. Anandakrishnan has been an absolute pleasure. His expertise in web development is evident in the flawless execution of our project. I highly recommend him for any web development needs',
      name: 'Alan Varghese Paul, Web Developer',
    },
    {
      text: 'Mr. Anandakrishnan\'s work as a web developer surpassed all our expectations. The attention to detail, creativity, and technical proficiency showcased in our website are outstanding',
      name: 'Albin Stanly, Xynapse Technologies Company Owner',
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const displayTestimonial = () => {
    const testimonial = testimonials[testimonialIndex];

    // const testimonialDiv = document.getElementById('testimonial');
    // testimonialDiv.innerHTML = '';

    const testDiv = document.createElement('div');
    testDiv.className = 'test';

    const textPara = document.createElement('p');
    textPara.textContent = testimonial.text;

    const name = document.createElement('h4');
    name.textContent = testimonial.name;

    testDiv.appendChild(textPara);
    testDiv.appendChild(name);

    // testimonialDiv.appendChild(testDiv);
  };

  useEffect(() => {
    displayTestimonial();
  }, [testimonialIndex]);

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const certificates = [
    {
      name: 'TECHKRITI\'22-24 Hrs HACKATHON',
      company: 'SCMS School of Engineering and Technology',
    },
    {
      name: 'IEEEEXtreme 16.0 Programming First-Prize',
      company: 'IEEEEXtreme',
    },
    {
      name: 'Full Stack Developer Internship Certificate',
      company: 'Exposys DataLabs',
    },
    {
      name: 'NPTEL - Problem Solving Through Programming in C',
      company: 'NPTEL',
    },
  ];

  const [certificateIndex, setCertificateIndex] = useState(0);

  const displayCertificate = () => {
    const certificate = certificates[certificateIndex];

    // const certificateDiv = document.getElementById('certificate');
    // certificateDiv.innerHTML = '';

    const certDiv = document.createElement('div');
    // certDiv.classList = 'cert';

    const textPara = document.createElement('p');
    textPara.textContent = certificate.name;

    const company = document.createElement('h4');
    company.textContent = certificate.company;

    certDiv.appendChild(textPara);
    certDiv.appendChild(company);
    // certificateDiv.appendChild(certDiv);
  };

  useEffect(() => {
    displayCertificate();
  }, [certificateIndex]);

  const handlePrevCertificate = () => {
    setCertificateIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  const handleNextCertificate = () => {
    setCertificateIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };
  return (
    <>
      {/* <!-- ABOUT SECTION --> */}
      <section id="about">
        <div className="about-section">
          <div className="about-container">
            <div className="about-left">
              <h3 className="name">Hi, My name is Sidharth Udaykumar</h3>
              <p className="about-me">
                I'm from God's own Country Kerala. Currently Masters Student at Amrita Viswa Vidyapeetham University. 
                I am also a working professional currently building my career in the field of Information Technolgy,
                working at Vaisesika Pvt LTD Kochi Kerala.
              </p>
              <div className="two-skills">
                <div className="skill">
                  <p className="skill-name">TOSCA AUTOMATION TESTER</p>
                </div>
                <div className="skill">
                  <p className="skill-name">REACT/NODE DEVELOPER</p>
                </div>
              </div>
            </div>
            <div className="about-right">
              <div className="image-div">
                <img src={sid} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SKILL SECTION --> */}
      <section id="skill">
        <div className="skill-section">
          <div className="box">
            <p className="title">Skills</p>
          </div>
          <p className="para">
            Here present some of the skills which I developed during the past
            years
          </p>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide" id="first">
                <div className="image">
                  <img
                    src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?w=740&t=st=1688815673~exp=1688816273~hmac=0f30a104964131183563307afc73b255182edcaba72cfb870834e8bc1a711dd4"
                    alt=""
                  />
                </div>
                <div className="skillName-box">
                  <h4>REACT JS</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image">
                  <img
                    src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1688815520~exp=1688816120~hmac=9fd0b2d0a2dccdeceecab8355f299505398dd000f93cc750de1b537405352e6a"
                    alt=""
                  />
                </div>
                <div className="skillName-box">
                  
                  <h4>HTML, CSS, JS</h4>
                  
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image">
                  <img
                    src="https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-2801.jpg?w=740&t=st=1688815585~exp=1688816185~hmac=2833fa501ca9861779a2b48f99f68d4883fd89239b72273b7281d722a9be46a1"
                    alt=""
                  />
                </div>
                <div className="skillName-box">
                 
                  <h4>TOSCA</h4>
                  
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image">
                  <img
                    src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1688815825~exp=1688816425~hmac=4c4a3d8d383b5bac2a1409acdfa3380c7f4db42e0f6912935e89e89045e2465a"
                    alt=""
                  />
                </div>
                <div className="skillName-box">
                <h4>ANDROID</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image">
                  <img
                    src="https://img.freepik.com/premium-vector/web-app-developers-development-team-software-website-programming-usability-digital-design-develop-technology-content-recent-vector-concept_543062-1716.jpg?w=900"
                    alt=""
                  />
                </div>
                <div className="skillName-box">
                  
                  <h4>SELINIUM-JAVA</h4>
                  
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      {/* <!-- EXPERIENCE --> */}
      <section id="experience">
        <div className="experience-section">
          <div className="box">
            <p className="title">Experience</p>
          </div>
          <div className="experience-container">
            <div className="card-container">
              <div className="card-left">
                <div>
                  <p className="header">Experience</p>
                  <div className="exp">
                    <p>Associate Software Engineer at Vaisesika pvt Ltd</p>
                    <p>Vaisesika - React/Node JS Internship</p>
                    <p>Vaisesika -  Software Testing Internship</p>
                    <p>
                      TOSCA Automation Certificate - AS1 and AS2 Certificate
                    </p>
                  </div>
                </div>
                <div>
                  <p className="header">CGPI</p>
                  <div className="cgpi">
                    <p className="point">CGPI - 8.99</p>
                  </div>
                </div>
                <div>
                  <p className="header">LANGUAGE</p>
                  <div className="language">
                    <p className="lang">English</p>
                    <p className="lang">Malayalam</p>
                    <p className="lang">Hindi</p>
                  </div>
                </div>
              </div>
              <div className="card-right">
                <div className="top-cards">
                  <div className="certificate">
                    <div className="certificate1">
                      <p className="certPara">Certificates</p>
                      <div className="button" >
                        <a id="btn3"  className="btn">&lt;</a>
                        <a id="btn4"  className="btn">&gt;</a>
                      </div>
                    </div>
                    <div id="certificate"></div>
                  </div>
                  <div className="hello">
                    <h3>Hello 👋</h3>
                    <p>
                      Here are some of the certificates, internship details,
                      social media sites and achievements I have obtained
                    </p>
                  </div>
                </div>
                <div className="bottom-cards">
                  <div className="social">
                    <div className="icons">
                      <div className="icon">
                        <a href="https://github.com/Sidharthn2001"><i className="bi bi-github"></i></a>
                      </div>
                      <div className="icon">
                        <a
                          href="https://www.linkedin.com/in/sidharth-udaykumar-3250a9250"><i className="bi bi-linkedin"></i ></a>
                      </div>
                    </div>
                    <div className="icons">
                      <div className="icon">
                        <a
                          href="https://www.facebook.com/profile.php?id=100074386342798&mibextid=ZbWKwL"><i className="bi bi-facebook"></i></a>
                      </div>
                      <div className="icon">
                        <a href="https://www.instagram.com/_sidharth.sidhu/"><i className="bi bi-instagram"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial">
                    <div className="testimonial1">
                      <p className="testPara">Testimonial</p>
                      <div className="button">
                        <button id="btn1" className="btn">&lt;</button>
                        <button id="btn2" className="btn">&gt;</button>
                      </div>
                    </div>
                    <div id="testimonial"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- PROJECT --> */}
      <section id="project">
        <div className="project-section">
          <div className="project-container">
            <div className="box">
              <p className="title">Project</p>
            </div>
            <p className="para">Projects help me learn more, and here I present some of my recent projects</p>
            <div className="project-div">
              <div className="bottom">
                <div className="project">
                  <img src={As2} alt="" />
                </div>
                <div className="project">
                  <img src={As1} alt="" />
                </div>
                <div className="project">
                  <img src={As3} alt="" />
                </div>
              </div>
              {/* <div className="read">
                <a href="https://github.com/Sidharthn2001"><button>&gt;</button></a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CONTACT SECTION --> */}
      {/* <section id="contact">
      <div className="contact-section">
        <div className="contact-container">
          <div className="box">
            <p className="title">Contact Me</p>
          </div>
          <div className="contact-div">
            <div className="contact-left">
              <img
                src="https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?w=1060&t=st=1688730291~exp=1688730891~hmac=f95485b302e268d3f9f9b7f5a07cd40d287f305b264ee057e80517eb42123b90"
                alt=""
              />
            </div>
            <div className="contact-right">
              <form action="">
                <div className="form-groups">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-groups">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-groups">
                  <label htmlFor="mesaage">message</label>
                  <textarea
                    name="message"
                    id=""
                    cols={30}
                    rows={10}
                    placeholder="Message me"
                  ></textarea>
                </div>
                <div className="form-groups">
                  <button type="submit">Hire Me</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  </section> */}

</>

  );
}

export default Portfolio;
