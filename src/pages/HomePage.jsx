import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import FauxVideoCard from "../components/FauxVideoCard";
import { filmCards, photoCards } from "../data/siteData";

function HomePage() {
  const heroRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isResettingSlide, setIsResettingSlide] = useState(false);

  // Auto-slide: change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sliderImages = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/4e105f96750899.5eb54f337fb8e.png",
    "https://d3mxt5v3yxgcsr.cloudfront.net/courses/7890/course_7890_image.png",
    "https://miro.medium.com/v2/resize:fit:1200/1*L6Eaowb7nHrLSiH41Tp4sA.png",
    "https://www.pontia.tech/wp-content/uploads/2025/07/Tutorial-flask.jpg",
    "https://www.linuxteknik.com/wp-content/uploads/2022/09/postgresql-ar21.png",
  ];
  const loopedSliderImages = [...sliderImages, sliderImages[0]];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero__content > *", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out"
      });
    });
    return () => ctx.revert();
  }, [sliderImages.length]);

  // Fix: If activeSlide > sliderImages.length, reset to 0 (prevents blank slide)
  useEffect(() => {
    if (activeSlide > sliderImages.length) {
      setActiveSlide(0);
    }
  }, [activeSlide, sliderImages.length]);

  const handleStorySplashTransitionEnd = () => {
    if (activeSlide === sliderImages.length) {
      setIsResettingSlide(true);
      setActiveSlide(0);
    }
  };

  useEffect(() => {
    if (!isResettingSlide) {
      return;
    }

    const id = window.setTimeout(() => setIsResettingSlide(false), 40);
    return () => window.clearTimeout(id);
  }, [isResettingSlide]);

  return (
    <div className="page-wrap">
      <section className="hero" ref={heroRef}>
        <Header className="white-header" />
        <img
          src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/PDaTSuJ/videoblocks-plexus-abstract-network-business-technology-science-background-loop_shckv8rif_thumbnail-1080_12.png"
          alt="Network Science Background"
          className="hero__media"
          style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.7}}
        />
        <div className="hero__centered-content" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          textAlign: 'center',
        }}>
          <h1 className="hero__main-title animated-pop" style={{fontSize: 'clamp(38px, 8vw, 80px)', fontWeight: 700, color: '#181818', margin: 0, letterSpacing: '-1px', textAlign: 'center', textShadow: '0 4px 32px rgba(0,0,0,0.08)'}}>Janvi Radadiya</h1>
          <div className="hero__subtitle animated-fadein" style={{
            fontSize: 'clamp(22px, 3vw, 38px)',
            color: '#222',
            margin: '28px 0 38px 0',
            fontWeight: 700,
            textAlign: 'center',
            letterSpacing: '0.01em',
            textShadow: '0 2px 12px rgba(0,0,0,0.10)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>Python Developer | Web Developer</div>
          <div className="hero__socials animated-fadein" style={{display: 'flex', gap: '38px'}}>
            <a href="https://github.com/Janviradadiya5" className="hero__social-btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{fontSize: '2.7rem', padding: '16px', borderRadius: '50%', background: '#fff', color: '#181818', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'}}>
              <svg width="38" height="38" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49 0C21.95 0 0 21.95 0 49C0 70.6 14.04 88.6 33.52 94.6C36.02 95.04 36.92 93.56 36.92 92.28C36.92 91.12 36.88 87.68 36.86 83.62C23.18 86.46 20.3 77.18 20.3 77.18C18 71.3 14.3 69.74 14.3 69.74C9.62 66.62 14.66 66.68 14.66 66.68C19.82 67.06 22.5 72.02 22.5 72.02C27.18 80.18 35.38 77.7 38.46 76.38C38.92 73.02 40.26 70.74 41.74 69.46C30.4 68.18 18.62 64.06 18.62 45.62C18.62 40.46 20.38 36.18 23.18 32.82C22.74 31.54 21.18 26.62 23.62 20.18C23.62 20.18 27.62 18.82 36.86 25.1C40.66 24.06 44.66 23.54 48.66 23.52C52.66 23.54 56.66 24.06 60.46 25.1C69.7 18.82 73.7 20.18 73.7 20.18C76.14 26.62 74.58 31.54 74.14 32.82C76.94 36.18 78.7 40.46 78.7 45.62C78.7 64.12 66.9 68.16 55.54 69.44C57.38 71.02 59.02 74.16 59.02 79.02C59.02 86.06 58.96 90.74 58.96 92.28C58.96 93.56 59.86 95.06 62.38 94.6C81.96 88.6 96 70.6 96 49C96 21.95 74.05 0 49 0Z" fill="#181717"/></svg>
            </a>
              <a href="https://www.linkedin.com/in/janvi-radadiya-790804343" className="hero__social-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{
                fontSize: '2.7rem', padding: '16px', borderRadius: '50%', background: '#fff', color: '#181818', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', border: 'none'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <rect width="38" height="38" rx="8" fill="#0077B5"/>
                  <path d="M12.5 15.5H16V26H12.5V15.5ZM14.25 13.75C13.42 13.75 12.75 13.08 12.75 12.25C12.75 11.42 13.42 10.75 14.25 10.75C15.08 10.75 15.75 11.42 15.75 12.25C15.75 13.08 15.08 13.75 14.25 13.75ZM18 15.5H21.25V16.85H21.3C21.74 16.02 22.7 15.14 24.08 15.14C27.08 15.14 27.5 17.02 27.5 19.36V26H24V20.14C24 18.98 23.98 17.48 22.38 17.48C20.76 17.48 20.5 18.78 20.5 20.06V26H17V15.5H18Z" fill="#fff"/>
                </svg>
              </a>
          </div>
        </div>
      </section>

      <section className="intro section-beige" style={{marginTop: '48px'}}>
        <div className="intro__heading-wrap">
          <h2 className="intro__heading" style={{fontSize: '2.8rem'}}>Crafting Modern Web Experiences</h2>
        </div>
        <div className="intro__grid container" style={{paddingTop: '32px'}}>
              <img
                className="intro__image intro__image--left"
                src="https://cdni.iconscout.com/illustration/premium/thumb/female-developer-doing-programming-3839570-3202816.png"
                alt="Professional Experience"
                style={{maxWidth: '420px', maxHeight: '340px', width: '100%', height: 'auto', objectFit: 'contain', marginTop: '125px'}}
              />
          <div className="intro__text" style={{fontSize: '1.18rem', lineHeight: '1.7', color: '#222'}}>
            <p><strong>Python Backend Developer</strong><br />
            <span style={{fontWeight: 500}}>Pytact Solutions</span></p>
            <p>
              Worked on CyberBenchmark (Django REST Framework) to improve backend stability and API reliability.<br />
              Centralized role-based access and permission management.<br />
              Collaborated on backend automation pipelines.<br />
              Used custom GPTs for API and database design.
            </p>
            <p>
              Learned JWT, Auth0 OIDC, and custom authentication.<br />
              Worked with PostgreSQL and MongoDB databases.<br />
              Used Docker and Git for development and version control.
            </p>
          </div>
              <img
                className="intro__image intro__image--right"
                src="https://static.vecteezy.com/system/resources/previews/012/697/295/non_2x/3d-python-programming-language-logo-free-png.png"
                alt="Python Programming"
                style={{maxWidth: '420px', maxHeight: '340px', width: '100%', height: 'auto', objectFit: 'contain', marginTop: '-70px'}}
              />
        </div>
      </section>

      <section className="story-splash">
        <div
          className={`story-splash__track ${isResettingSlide ? "is-resetting" : ""}`}
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          onTransitionEnd={handleStorySplashTransitionEnd}
        >
          {loopedSliderImages.map((image, idx) => (
            <div key={`${image}-${idx}`} className="story-splash__slide">
              <img src={image} alt={`Wedding celebration ${(idx % sliderImages.length) + 1}`} />
            </div>
          ))}
        </div>
        <div className="story-splash__dots">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`story-splash__dot ${idx === (activeSlide % sliderImages.length) ? "is-active" : ""}`}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="showcase section-light">
        <SectionTitle
          title="Education"
          subtitle="My academic background and achievements."
        />
        <div className="photo-grid container" style={{ display: 'flex', justifyContent: 'center', gap: '48px' }}>
          {/* College */}
          <article className="photo-card" style={{ flex: '0 1 340px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src="https://th.bing.com/th/id/R.f5eab2881a93fe97ac3c82c0ef0f07d3?rik=LS%2fCVvJmRcM48w&riu=http%3a%2f%2fwww.gtu.ac.in%2fImages%2fLogo_trans2.gif&ehk=F4yYlJC9mrC8wz0ANbjZcTTnsocAobnrPION7%2b0yeMc%3d&risl=&pid=ImgRaw&r=0"
              alt="Gujarat Technological University"
              style={{ width: '100%', height: '220px', objectFit: 'contain', background: '#fff', borderRadius: '12px', marginBottom: '16px' }}
            />
            <h3>B.E. Computer Engineering</h3>
            <p>Gujarat Technological University</p>
          </article>
          {/* 12th Science */}
          <article className="photo-card" style={{ flex: '0 1 340px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.0r4C9qAjmS1KlwXVakoEDgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="12th Science"
              style={{ width: '100%', height: '220px', objectFit: 'contain', background: '#fff', borderRadius: '12px', marginBottom: '16px' }}
            />
            <h3>12th Science (A Group)</h3>
            <p>Gujarat Board</p>
          </article>
        </div>
      </section>

      <section className="media-rec section-beige">
        <SectionTitle
          title={<span style={{ fontSize: '2.5rem', fontWeight: 700 }}>Certificate</span>}
          subtitle={<span style={{ fontSize: '1.7rem', fontWeight: 700, color: '#222' }}>SAP Certification Course</span>}
        />
        <div className="media-logos container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px', fontSize: '1.15rem', fontWeight: 400 }}>
          <span style={{ color: '#333' }}>Under Code Unnati Program by Edunet Foundation</span>
          <span style={{ color: '#444', fontWeight: 500 }}>Gaining skills in <span style={{ color: '#222', fontWeight: 700 }}>Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, NLP, Python Libraries</span></span>
        </div>
      </section>

      {/* Award/SAP logo above Projects section, centered, transparent, with fade-in */}
      <div className="award-logo-wrap fade-in-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" alt="SAP Logo" className="award-logo-img" />
      </div>
      <section className="films-home section-beige">
        <div className="section-title project-section-title fade-in">
          <h2>Projects</h2>
          <div className="project-section-subtitle">A showcase of my work</div>
        </div>
        <div className="video-grid container two-col">
          {/* Project 1 */}
          <div className="project-card fade-in">
            <div className="project-card__video-wrap">
              <video src="/FAKE.mp4" width="100%" height="100%" controls style={{background: 'transparent', width: '100%', height: '100%'}} />
            </div>
            <div className="project-card__info">
              <h3>Fake News Detector</h3>
              <a href="https://github.com/Janviradadiya5/Fake-News-Detector" target="_blank" rel="noopener noreferrer" className="btn btn--gold">GitHub</a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="project-card fade-in">
            <div className="project-card__video-wrap">
              <video src="/AI.mp4" width="100%" height="100%" controls style={{background: 'transparent', width: '100%', height: '100%'}} />
            </div>
            <div className="project-card__info">
              <h3>AI Resume Scanner</h3>
              <a href="https://github.com/Janviradadiya5/AI-Resume-Scanner" target="_blank" rel="noopener noreferrer" className="btn btn--gold">GitHub</a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="project-card fade-in">
            <div className="project-card__video-wrap">
              <video src="/ECO.mp4" width="100%" height="100%" controls style={{background: 'transparent', width: '100%', height: '100%'}} />
            </div>
            <div className="project-card__info">
              <h3>Eco Shop</h3>
              <a href="https://github.com/Janviradadiya5/sustainable-shopping-assistant" target="_blank" rel="noopener noreferrer" className="btn btn--gold">GitHub</a>
            </div>
          </div>
          {/* Project 4 - Placeholder, update image later */}
          <div className="project-card fade-in">
            <div className="project-card__video-wrap">
              <video src="/PROJECT.mp4" width="100%" height="100%" controls style={{background: 'transparent', width: '100%', height: '100%'}} />
            </div>
            <div className="project-card__info">
              <h3>Project Management Tool</h3>
              <a href="https://github.com/Janviradadiya5/project-management" target="_blank" rel="noopener noreferrer" className="btn btn--gold">GitHub</a>
            </div>
          </div>
        </div>
        <div className="center-action" style={{marginTop: '32px'}}>
          <Link to="/films" className="btn btn--gold" style={{padding: '12px 36px', fontSize: '1.1rem', fontWeight: 600, borderRadius: '7px'}}>Explore Projects</Link>
        </div>
      </section>

      <section className="testimonials section-beige">
        <SectionTitle title="Portfolio Highlights" />
        <div className="testimonials__grid container">
          <article className="testimonial">
            <h3>Fake News Detector</h3>
            <p>
              Detects and flags fake news articles using advanced machine learning algorithms. Real-time results and easy-to-use interface.
            </p>
          </article>
          <article className="testimonial">
            <h3>Eco Shop</h3>
            <p>
              A sustainable e-commerce platform for eco-friendly products. Shop green, live clean!
            </p>
          </article>
          <article className="testimonial">
            <h3>AI Resume Scanner</h3>
            <p>
              Scan and analyze resumes using AI to match job requirements and highlight candidate strengths.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-banner">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1900&q=80"
          alt="Contact background"
        />
        <div className="contact-banner__overlay container">
          <h2 style={{ fontFamily: 'Soligant, Cormorant Garamond, serif', fontWeight: 400 }}>
          Building scalable web applications with clean architecture
          </h2>
          <p>
          I design and develop web applications with a focus on performance, maintainability, and structured backend systems, while continuously learning and improving through practical projects.
          </p>
          <Link to="/contact-us" className="btn btn--gold">
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
