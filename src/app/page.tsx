"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [isPortfolioPopupOpen, setIsPortfolioPopupOpen] = useState(false);
  const [portfolioItemDetails, setPortfolioItemDetails] = useState({
    imgSrc: "",
    title: "",
    details: "",
    created: "",
    technologies: "",
    role: "",
    liveUrl: "",
    sourceUrl: "",
  });
  const [activeModal, setActiveModal] = useState<number | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const navHighlighter = () => {
      let scrollY = window.pageYOffset;
      sections.forEach((current: any) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            ?.classList.add("active-link");
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            ?.classList.remove("active-link");
        }
      });
    };

    // Scroll animations
    const animateOnScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll, .slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down, .scale-in, .rotate-in, .bounce-in, .fade-in');
      
      animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate');
        }
      });

      // Animate section titles
      const sectionTitles = document.querySelectorAll('.section-title');
      sectionTitles.forEach((title) => {
        const titleTop = title.getBoundingClientRect().top;
        if (titleTop < window.innerHeight - 100) {
          title.classList.add('animate');
        }
      });
    };

    const handleScroll = () => {
      navHighlighter();
      animateOnScroll();
    };

    window.addEventListener("scroll", handleScroll);
    
    // Trigger animation on initial load
    animateOnScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTabClick = (target: string) => {
    setActiveTab(target);
  };

  const openPortfolioPopup = (
    imgSrc: string,
    title: string,
    details: string,
    created: string,
    technologies: string,
    role: string,
    liveUrl: string,
    sourceUrl: string
  ) => {
    setPortfolioItemDetails({ imgSrc, title, details, created, technologies, role, liveUrl, sourceUrl });
    setIsPortfolioPopupOpen(true);
  };

  const closePortfolioPopup = () => {
    setIsPortfolioPopupOpen(false);
  };

  const openModal = (index: number) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };
  return (
    <>
      <div className="nav-toggle" id="nav-toggle">
        <i className="uil uil-bars"></i>
      </div>

        <aside className="sidebar" id="sidebar">
          <nav className="nav">
            <div className="nav-logo">
              <a href="#" className="nav-logo-text">
                D
              </a>
            </div>

            <div className="nav-menu">
              <div className="menu">
                <ul className="nav-list">
                  <li className="nav-item">
                    <a href="#home" className="nav-link active-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#about" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#skills" className="nav-link">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#work" className="nav-link">
                      Work
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#services" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#contact" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="btn-share">
              <i className="uil uil-share-alt social-share"></i>
            </div>

            <div className="nav-close" id="nav-close">
              <i className="uil uil-times"></i>
            </div>
          </nav>
        </aside>

        <main className="main">
          <section className="home" id="home">
            <div className="home-container container">
              <div className="home-social">
                <span className="home-social-follow">Follow Me</span>
                <div className="home-social-links">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    className="home-social-link"
                  >
                    <i className="uil uil-facebook-f"></i>
                  </a>

                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    className="home-social-link"
                  >
                    <i className="uil uil-instagram"></i>
                  </a>

                  <a
                    href="https://www.x.com"
                    target="_blank"
                    className="home-social-link"
                  >
                    <i className="uil uil-twitter"></i>
                  </a>
                </div>
              </div>

              <div className="home-image-container float-animation">
                <img
                  src="https://i.postimg.cc/3NgvPcZD/home-img.png"
                  alt=""
                  className="home-img scale-in"
                />
              </div>

              <div className="home-content">
                <div className="home-data">
                  <h1 className="home-title">Hi, I'm DevCapo</h1>
                  <h3 className="home-subtitle">Frontend Developer</h3>
                  <p className="home-description">
                    I have high level experience in web design, development
                    knowledge and producing quality work
                  </p>
                  <a href="#about" className="button pulse-animation">
                    <i className="uil uil-user button-icon"></i>
                    More About me!
                  </a>
                </div>
              </div>

              <div className="my-info">
                <div className="info-item">
                  <i className="uil uil-linkedin info-icon"></i>

                  <div>
                    <h3 className="info-title">LinkedIn</h3>
                    <span className="info-subtitle">linkedin.com/in/devcapo</span>
                  </div>
                </div>

                <div className="info-item">
                  <i className="uil uil-github info-icon"></i>

                  <div>
                    <h3 className="info-title">GitHub</h3>
                    <span className="info-subtitle">github.com/devcapo</span>
                  </div>
                </div>

                <div className="info-item">
                  <i className="uil uil-envelope-edit info-icon"></i>

                  <div>
                    <h3 className="info-title">Email</h3>
                    <span className="info-subtitle">user@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="about section animate-on-scroll" id="about">
            <h2 className="section-title" data-heading="My Intro">
              About me
            </h2>

            <div className="about-container container grid">
              <img
                src="https://i.postimg.cc/W1YZxTpJ/about-img.jpg"
                alt=""
                className="about-img slide-in-left"
              />

              <div className="about-data slide-in-right">
                <h3 className="about-heading">
                  Hi, I'm Mariam Wallas, based in Canada
                </h3>
                <p className="about-description">
                  I'm a web developer, with extensive knowledge and years of
                  experience, working with quality work in web technologies, UI
                  and UX design
                </p>

                <div className="about-info stagger-children">
                  <div className="about-box animate-on-scroll">
                    <i className="uil uil-award about-icon"></i>
                    <h3 className="about-title">Experience</h3>
                    <span className="about-subtitle">10 + Years</span>
                  </div>

                  <div className="about-box animate-on-scroll">
                    <i className="uil uil-suitcase-alt about-icon"></i>
                    <h3 className="about-title">Completed</h3>
                    <span className="about-subtitle">60 + Projects</span>
                  </div>

                  <div className="about-box animate-on-scroll">
                    <i className="uil uil-headphones-alt about-icon"></i>
                    <h3 className="about-title">Support</h3>
                    <span className="about-subtitle">Online 24/7</span>
                  </div>
                </div>

                <a href="#contact" className="button bounce-in">
                  <i className="uil uil-navigator button-icon"></i>Contact me
                </a>
              </div>
            </div>
          </section>

          <section className="qualification section animate-on-scroll">
            <h2 className="section-title" data-heading="My Journey">
              Qualifications
            </h2>

            <div className="qualification-container container grid">
              <div className="education slide-in-left">
                <h3 className="qualification-title">
                  <i className="uil uil-graduation-cap"></i>Education
                </h3>

                <div className="timeline stagger-children">
                  <div className="timeline-item animate-on-scroll">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">
                      XYZ University (Sometown, NJ)
                    </h3>
                    <p className="timeline-text">BFA in Graphic Design</p>
                    <span className="timeline-date">
                      <i className="uil uil-calendar-alt"></i>2011 - 2013
                    </span>
                  </div>

                  <div className="timeline-item animate-on-scroll">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">
                      ABC University (Sometown. NJ)
                    </h3>
                    <p className="timeline-text">Diploma in Web Design</p>
                    <span className="timeline-date">
                      <i className="uil uil-calendar-alt"></i>2013 - 2015
                    </span>
                  </div>

                  <div className="timeline-item animate-on-scroll">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">
                      KLM University (Sometown, NJ)
                    </h3>
                    <p className="timeline-text">BS in Web Development</p>
                    <span className="timeline-date">
                      <i className="uil uil-calendar-alt"></i>2015 - 2017
                    </span>
                  </div>
                </div>
              </div>

              <div className="experience slide-in-right">
                <h3 className="qualification-title">
                  <i className="uil uil-suitcase"></i>Experience
                </h3>

                <div className="timeline stagger-children">
                  <div className="timeline-item animate-on-scroll">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">
                      Copalopa Inc. (Sometown, NJ)
                    </h3>
                    <p className="timeline-text">Lead / Senior UX Designer</p>
                    <span className="timeline-date">
                      <i className="uil uil-calendar-alt"></i>2018 - Present
                    </span>
                  </div>

                  <div className="timeline-item animate-on-scroll">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">
                      Gabogle Inc. (Somwtown, NJ)
                    </h3>
                    <p className="timeline-text">Web site / UX Designer</p>
                    <span className="timeline-date">
                      <i className="uil uil-calendar-alt"></i>2015 - 2018
                    </span>
                  </div>

                  <div className="timeline-item animate-on-scroll">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">
                      Copalopa Inc. (Sometown, NJ)
                    </h3>
                    <p className="timeline-text">Junior UX Designer</p>
                    <span className="timeline-date">
                      <i className="uil uil-calendar-alt"></i>2013 - 2015
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="skills section animate-on-scroll" id="skills">
            <h2 className="section-title" data-heading="My Abilities">
              Skills
            </h2>

            <div className="skills-container container grid">
              <div className="skills-tabs slide-in-left">
                <div
                  className={`skills-header ${
                    activeTab === "frontend" ? "skills-active" : ""
                  }`}
                  onClick={() => handleTabClick("frontend")}
                >
                  <i className="uil uil-brackets-curly skills-icon"></i>

                  <div>
                    <h1 className="skills-title">Frontend Developer</h1>
                    <span className="skills-subtitle">More than 4 years</span>
                  </div>

                  <i className="uil uil-angle-down skills-arrow"></i>
                </div>

                <div
                  className={`skills-header ${
                    activeTab === "design" ? "skills-active" : ""
                  }`}
                  onClick={() => handleTabClick("design")}
                >
                  <i className="uil uil-swatchbook skills-icon"></i>

                  <div>
                    <h1 className="skills-title">UI / UX Design</h1>
                    <span className="skills-subtitle">More than 5 years</span>
                  </div>

                  <i className="uil uil-angle-down skills-arrow"></i>
                </div>

                <div
                  className={`skills-header ${
                    activeTab === "backend" ? "skills-active" : ""
                  }`}
                  onClick={() => handleTabClick("backend")}
                >
                  <i className="uil uil-server-network skills-icon"></i>

                  <div>
                    <h1 className="skills-title">Backend Developer</h1>
                    <span className="skills-subtitle">More than 2 years</span>
                  </div>

                  <i className="uil uil-angle-down skills-arrow"></i>
                </div>
              </div>

              <div className="skills-content slide-in-right">
                {activeTab === "frontend" && (
                  <div className="skills-group skills-active">
                    <div className="skills-list grid">
                      <div className="skills-data">
                        <div className="skills-titles">
                          <h3 className="skills-name">HTML</h3>
                          <span className="skills-number">90%</span>
                        </div>

                        <div className="skills-bar">
                          <span
                            className="skills-percentage"
                            style={{ width: "90%" }}
                          ></span>
                        </div>
                      </div>

                      <div className="skills-data">
                        <div className="skills-titles">
                          <h3 className="skills-name">CSS</h3>
                          <span className="skills-number">80%</span>
                        </div>

                        <div className="skills-bar">
                          <span
                            className="skills-percentage"
                            style={{ width: "80%" }}
                          ></span>
                        </div>
                      </div>

                      <div className="skills-data">
                        <div className="skills-titles">
                          <h3 className="skills-name">Javascript</h3>
                          <span className="skills-number">60%</span>
                        </div>

                        <div className="skills-bar">
                          <span
                            className="skills-percentage"
                            style={{ width: "60%" }}
                          ></span>
                        </div>
                      </div>

                      <div className="skills-data">
                        <div className="skills-titles">
                          <h3 className="skills-name">React</h3>
                          <span className="skills-number">85%</span>
                        </div>

                        <div className="skills-bar">
                          <span
                            className="skills-percentage"
                            style={{ width: "85%" }}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "design" && (
                  <div className="skills-group skills-active">
                    <div className="skills-list grid">
                      <div className="skills-data">
                        <div className="skills-titles">
                          <h3 className="skills-name">Figma</h3>
                          <span className="skills-number">90%</span>
                        </div>

                        <div className="skills-bar">
                          <span
                            className="skills-percentage"
                            style={{ width: "90%" }}
                          ></span>
                        </div>
                      </div>

                      <div className="skills-data">
                        <div className="skills-titles">
                          <h3 className="skills-name">Sketch</h3>
                          <span className="skills-number">80%</span>
                        </div>

                        <div className="skills-bar">
                          <span
                            className="skills-percentage"
                            style={{ width: "80%" }}
                          ></span>
                        </div>
                      </div>

                      <div className="skills-data">
                        <div className="skills-titles">
                          <h3 className="skills-name">PhotoShop</h3>
                          <span className="skills-number">70%</span>
                        </div>

                        <div className="skills-bar">
                          <span
                            className="skills-percentage"
                            style={{ width: "70%" }}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "backend" && (
                  <div className="skills-group skills-active">
                    <div className="skills-list grid">
                      <div className="skills-data">
                        <div className="skills-titles">
                          <h3 className="skills-name">PHP</h3>
                          <span className="skills-number">80%</span>
                        </div>

                        <div className="skills-bar">
                          <span
                            className="skills-percentage"
                            style={{ width: "80%" }}
                          ></span>
                        </div>
                      </div>

                      <div className="skills-data">
                        <div className="skills-titles">
                          <h3 className="skills-name">Python</h3>
                          <span className="skills-number">80%</span>
                        </div>

                        <div className="skills-bar">
                          <span
                            className="skills-percentage"
                            style={{ width: "80%" }}
                          ></span>
                        </div>
                      </div>

                      <div className="skills-data">
                        <div className="skills-titles">
                          <h3 className="skills-name">MySQL</h3>
                          <span className="skills-number">70%</span>
                        </div>

                        <div className="skills-bar">
                          <span
                            className="skills-percentage"
                            style={{ width: "70%" }}
                          ></span>
                        </div>
                      </div>

                      <div className="skills-data">
                        <div className="skills-titles">
                          <h3 className="skills-name">Firebase</h3>
                          <span className="skills-number">75%</span>
                        </div>

                        <div className="skills-bar">
                          <span
                            className="skills-percentage"
                            style={{ width: "75%" }}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="work section fade-in-up" id="work">
            <h2 className="section-title slide-in-left" data-heading="My Portfolio">
              Recent Works
            </h2>

            <div className="work-container container grid stagger-children">
              <div className="work-card scale-in">
                <img
                  src="https://i.postimg.cc/43Th5VXJ/work-1.png"
                  alt=""
                  className="work-img"
                />
                <h3 className="work-title">Web Design</h3>
                <div className="work-buttons">
                  <a
                    href="#"
                    className="work-button"
                    onClick={(e) => {
                      e.preventDefault();
                      openPortfolioPopup(
                        "https://i.postimg.cc/43Th5VXJ/work-1.png",
                        "Web Design",
                        "The services we provide for design. Two smartphones displaying a sleek, dark-themed dashboard interface.",
                        "22 Apr 2025",
                        "HTML, CSS, JavaScript",
                        "Frontend Developer",
                        "https://example.com",
                        "https://github.com/example/web-design"
                      );
                    }}
                  >
                    Details
                    <i className="uil uil-arrow-right work-button-icon"></i>
                  </a>
                  <a href="https://example.com" target="_blank" className="work-button work-button-live">
                    View Live
                    <i className="uil uil-external-link-alt work-button-icon"></i>
                  </a>
                  <a href="https://github.com/example/web-design" target="_blank" className="work-button work-button-source">
                    Source Code
                    <i className="uil uil-github work-button-icon"></i>
                  </a>
                </div>
              </div>
              <div className="work-card scale-in">
                <img
                  src="https://i.postimg.cc/sXLjnC5p/work-2.png"
                  alt=""
                  className="work-img"
                />
                <h3 className="work-title">App Design</h3>
                <div className="work-buttons">
                  <a
                    href="#"
                    className="work-button"
                    onClick={(e) => {
                      e.preventDefault();
                      openPortfolioPopup(
                        "https://i.postimg.cc/sXLjnC5p/work-2.png",
                        "App Design",
                        "Mobile App Landing Design & App Maintain. A stylish burger restaurant mobile app interface displayed on two smartphones.",
                        "15 Mar 2025",
                        "React Native, Figma",
                        "UI/UX Designer",
                        "https://example-app.com",
                        "https://github.com/example/app-design"
                      );
                    }}
                  >
                    Demo
                    <i className="uil uil-arrow-right work-button-icon"></i>
                  </a>
                  <a href="https://example-app.com" target="_blank" className="work-button work-button-live">
                    View Live
                    <i className="uil uil-external-link-alt work-button-icon"></i>
                  </a>
                  <a href="https://github.com/example/app-design" target="_blank" className="work-button work-button-source">
                    Source Code
                    <i className="uil uil-github work-button-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {isPortfolioPopupOpen && (
            <div className="portfolio-popup open">
              <div className="portfolio-popup-inner">
                <div className="portfolio-popup-content grid">
                  <span
                    className="portfolio-popup-close"
                    onClick={closePortfolioPopup}
                  >
                    <i className="uil uil-times"></i>
                  </span>
                  <div className="pp-thumbnail">
                    <img
                      src={portfolioItemDetails.imgSrc}
                      alt=""
                      className="portfolio-popup-img"
                    />
                  </div>
                  <div className="portfolio-popup-info">
                    <div className="portfolio-popup-subtitle">
                      Featured - <span>{portfolioItemDetails.title}</span>
                    </div>
                    <div className="portfolio-popup-body">
                      <h3 className="details-title">
                        {portfolioItemDetails.title}
                      </h3>
                      <p className="details-description">
                        {portfolioItemDetails.details}
                      </p>
                      <ul className="details-info">
                        <li>
                          <span>Created - </span>{portfolioItemDetails.created}
                        </li>
                        <li>
                          <span>Technologies - </span>{portfolioItemDetails.technologies}
                        </li>
                        <li>
                          <span>Role - </span>{portfolioItemDetails.role}
                        </li>
                        <li>
                          <span>Live URL - </span>
                          <a href={portfolioItemDetails.liveUrl} target="_blank" rel="noopener noreferrer">
                            {portfolioItemDetails.liveUrl}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <section className="services section fade-in-up" id="services">
            <h2 className="section-title slide-in-left" data-heading="Services">
              What I Offer
            </h2>

            <div className="services-container container grid stagger-children">
              <div className="services-content bounce-in">
                <div>
                  <i className="uil uil-web-grid services-icon"></i>
                  <h3 className="services-title">
                    Web <br />
                    Designer
                  </h3>
                </div>

                <span className="services-button" onClick={() => openModal(0)}>
                  <span className="services-button-text">View More</span>{" "}
                  <i className="uil uil-arrow-right services-button-icon"></i>
                </span>

                {activeModal === 0 && (
                  <div className="services-modal active-modal">
                    <div className="services-modal-content">
                      <i
                        className="uil uil-times services-modal-close"
                        onClick={closeModal}
                      ></i>

                      <h3 className="services-modal-title">Web Designer</h3>

                      <ul className="services-modal-services grid">
                        <li className="services-modal-service">
                          <i className="uil uil-check-circle services-modal-icon"></i>
                          <p className="services-modal-info">
                            User Interface Development
                          </p>
                        </li>

                        <li className="services-modal-service">
                          <i className="uil uil-check-circle services-modal-icon"></i>
                          <p className="services-modal-info">
                            Web Page Development
                          </p>
                        </li>

                        <li className="services-modal-service">
                          <i className="uil uil-check-circle services-modal-icon"></i>
                          <p className="services-modal-info">
                            Responsive Design
                          </p>
                        </li>

                        <li className="services-modal-service">
                          <i className="uil uil-check-circle services-modal-icon"></i>
                          <p className="services-modal-info">
                            Performance Optimization
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="services-content bounce-in">
                <div>
                  <i className="uil uil-arrow services-icon"></i>
                  <h3 className="services-title">
                    UI/UX <br />
                    Designer
                  </h3>
                </div>

                <span className="services-button" onClick={() => openModal(1)}>
                  <span className="services-button-text">View More</span>{" "}
                  <i className="uil uil-arrow-right services-button-icon"></i>
                </span>
                {activeModal === 1 && (
                  <div className="services-modal active-modal">
                    <div className="services-modal-content">
                      <i
                        className="uil uil-times services-modal-close"
                        onClick={closeModal}
                      ></i>

                      <h3 className="services-modal-title">UI/UX Designer</h3>

                      <ul className="services-modal-services grid">
                        <li className="services-modal-service">
                          <i className="uil uil-check-circle services-modal-icon"></i>
                          <p className="services-modal-info">Usability Testing</p>
                        </li>

                        <li className="services-modal-service">
                          <i className="uil uil-check-circle services-modal-icon"></i>
                          <p className="services-modal-info">User Research</p>
                        </li>

                        <li className="services-modal-service">
                          <i className="uil uil-check-circle services-modal-icon"></i>
                          <p className="services-modal-info">Wireframing & Prototyping</p>
                        </li>

                        <li className="services-modal-service">
                          <i className="uil uil-check-circle services-modal-icon"></i>
                          <p className="services-modal-info">Design Systems</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="services-content bounce-in">
                <div>
                  <i className="uil uil-monitor services-icon"></i>
                  <h3 className="services-title">
                    Mobile <br />
                    Developer
                  </h3>
                </div>

                <span className="services-button" onClick={() => openModal(2)}>
                  <span className="services-button-text">View More</span>{" "}
                  <i className="uil uil-arrow-right services-button-icon"></i>
                </span>
                {activeModal === 2 && (
                  <div className="services-modal active-modal">
                    <div className="services-modal-content">
                      <i
                        className="uil uil-times services-modal-close"
                        onClick={closeModal}
                      ></i>

                      <h3 className="services-modal-title">Mobile Developer</h3>

                      <ul className="services-modal-services grid">
                        <li className="services-modal-service">
                          <i className="uil uil-check-circle services-modal-icon"></i>
                          <p className="services-modal-info">React Native Development</p>
                        </li>

                        <li className="services-modal-service">
                          <i className="uil uil-check-circle services-modal-icon"></i>
                          <p className="services-modal-info">iOS & Android Apps</p>
                        </li>

                        <li className="services-modal-service">
                          <i className="uil uil-check-circle services-modal-icon"></i>
                          <p className="services-modal-info">Cross-Platform Development</p>
                        </li>

                        <li className="services-modal-service">
                          <i className="uil uil-check-circle services-modal-icon"></i>
                          <p className="services-modal-info">App Store Deployment</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="contact section fade-in-up" id="contact">
            <h2 className="section-title slide-in-left" data-heading="Get in Touch">
              Contact me
            </h2>

            <div className="contact-container container grid">
              <div className="contact-content slide-in-left">
                <div className="contact-info stagger-children">
                  <div className="contact-card scale-in">
                    <i className="uil uil-envelope-edit contact-card-icon"></i>
                    <h3 className="contact-card-title">Email</h3>
                    <span className="contact-card-data">user@gmail.com</span>
                    <span className="contact-button">
                      Write me
                      <i className="uil uil-arrow-right contact-button-icon"></i>
                    </span>
                  </div>

                  <div className="contact-card scale-in">
                    <i className="uil uil-linkedin contact-card-icon"></i>
                    <h3 className="contact-card-title">LinkedIn</h3>
                    <span className="contact-card-data">linkedin.com/in/devcapo</span>
                    <span className="contact-button">
                      Connect
                      <i className="uil uil-arrow-right contact-button-icon"></i>
                    </span>
                  </div>

                  <div className="contact-card scale-in">
                    <i className="uil uil-github contact-card-icon"></i>
                    <h3 className="contact-card-title">GitHub</h3>
                    <span className="contact-card-data">github.com/devcapo</span>
                    <span className="contact-button">
                      Follow me
                      <i className="uil uil-arrow-right contact-button-icon"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="contact-content slide-in-right">
                <form action="" className="contact-form">
                  <div className="input-container">
                    <input type="text" className="input" />
                    <label htmlFor="">Username</label>
                    <span>Username</span>
                  </div>

                  <div className="input-container">
                    <input type="email" className="input" />
                    <label htmlFor="">Email</label>
                    <span>Email</span>
                  </div>

                  <div className="input-container">
                    <input type="tel" className="input" />
                    <label htmlFor="">Phone</label>
                    <span>Phone</span>
                  </div>

                  <div className="input-container textarea">
                    <textarea name="" id="" className="input"></textarea>
                    <label htmlFor="">Message</label>
                    <span>Message</span>
                  </div>

                  <button type="submit" className="button">
                    <i className="uil uil-navigator button-icon"></i>Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div className="footer-bg">
              <div className="footer-container container grid">
                <div>
                  <h1 className="footer-title">DevCapo</h1>
                  <span className="footer-subtitle">Frontend Developer</span>
                </div>

                <ul className="footer-links">
                  <li>
                    <a href="#services" className="footer-links">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#work" className="footer-links">
                      Work
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="footer-links">
                      Contact
                    </a>
                  </li>
                </ul>

                <div className="footer-socials">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    className="footer-social"
                  >
                    <i className="uil uil-facebook-f"></i>
                  </a>

                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    className="footer-social"
                  >
                    <i className="uil uil-instagram"></i>
                  </a>

                  <a
                    href="https://www.x.com"
                    target="_blank"
                    className="footer-social"
                  >
                    <i className="uil uil-twitter"></i>
                  </a>
                </div>
              </div>

              <p className="footer-copy">
                &#169;
                <a href="https://codepen.io/leonam-silva-de-souza">year Name </a>
                 - Powered by Flick
              </p>
            </div>
          </footer>
        </main>
    </>
  );
};

export default Page;