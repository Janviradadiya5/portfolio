
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


function AboutMePage() {
  // Slider with 4 selected images
  const [activeSlide, setActiveSlide] = useState(0);
  const [isResettingSlide, setIsResettingSlide] = useState(false);
  const sliderImages = [
    "https://static.vecteezy.com/system/resources/thumbnails/021/632/854/small_2x/goals-white-wooden-signpost-with-one-arrow-and-sunset-sky-in-background-photo.jpg", // Eco Shop homepage with hands and plant
    "https://dowritemyessay.com/wp-content/uploads/2024/06/Essay-Introduction.webp", // AI Resume Scanner
    "https://th.bing.com/th/id/R.84a235ac5befc687380f72e189e9364b?rik=Wn75VfUBL1JS9Q&riu=http%3a%2f%2fwww.tmc.ac.uk%2fmedia%2ffiler_public%2f6a%2f73%2f6a736155-6b09-4b23-b39a-6e576675a38d%2fthe-four-skills-employers-want.jpg&ehk=uQSGeIcyfPSAvjnjha0gMcHW2HdTVUBJwlRAhBq2Id4%3d&risl=&pid=ImgRaw&r=0", // Fake News Detector
    "https://logodix.com/logo/70406.png"  // Search Results
  ];
  const loopedSliderImages = [...sliderImages, sliderImages[0]];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => prev + 1);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [sliderImages.length]);

  const handleSliderTransitionEnd = () => {
    if (activeSlide === sliderImages.length) {
      setIsResettingSlide(true);
      setActiveSlide(0);
    }
  };

  useEffect(() => {
    if (!isResettingSlide) return;
    const id = window.setTimeout(() => setIsResettingSlide(false), 40);
    return () => window.clearTimeout(id);
  }, [isResettingSlide]);

  // About Me data (3 images, text, Read More links)
  const aboutCards = [
    {
      title: "About Me",
      image: "https://tse3.mm.bing.net/th/id/OIP.QtctLuN3AURoM6_t-V3weAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      excerpt: "I am Janvi, currently in the final year of Computer Engineering, with hands-on experience in real-world project development and a strong foundation in Python-based technologies. I have completed an internship in Python development, where I worked on practical applications and gained experience in backend development. Additionally, I contributed to a cyber benchmark project, focusing on API design and database architecture.",
      link: "/about-page-1"
    },
    {
      title: "My Goal",
      image: "https://static.vecteezy.com/system/resources/previews/005/252/618/non_2x/future-goal-and-plans-business-target-new-year-resolutions-success-plan-or-career-achievement-concept-vector.jpg",
      excerpt: "My goal is to grow into a Project Manager role, where I can combine my technical background with planning, coordination, and problem-solving skills to lead successful and efficient software projects.",
      link: "/about-page-2"
    },
    {
      title: "Technical Skills",
      image: "https://imageio.forbes.com/specials-images/imageserve/630317507c39bc12ccfa8c6c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      excerpt: "Python, Flask, FastAPI, Django\nHTML, CSS, JavaScript\nSQLite, PostgreSQL\nREST API Development, CRUD Operations\nGit & Version Control",
      link: "/about-page-3"
    }
  ];

  return (
    <div className="page-wrap section-beige">
      <Header />

      {/* Slider Section */}
      <section className="photography-hero-slider">
        <div
          className={`photography-hero-slider__track ${isResettingSlide ? "is-resetting" : ""}`}
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          onTransitionEnd={handleSliderTransitionEnd}
        >
          {loopedSliderImages.map((image, idx) => (
            <div key={`${image}-${idx}`} className="photography-hero-slider__slide">
              <img src={image} alt={`About slider ${idx + 1}`} />
            </div>
          ))}
        </div>
        <div className="photography-hero-slider__dots">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`photography-hero-slider__dot ${idx === (activeSlide % sliderImages.length) ? "is-active" : ""}`}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to about slider ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Me Cards */}
      <section className="photography-title-wrap section-light">
        <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: 8 }}>About Me</h2>
        <p style={{ fontSize: '1.15rem', color: '#444', textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          Welcome to my digital space! Here you can learn more about my journey, my creative process, and how we can connect.
        </p>
      </section>

      <section className="photography-list container">
        {aboutCards.map((item) => (
          <article className="photography-card" key={item.title}>
            <div className="photography-card__image-link">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="photography-card__head">
              <h3>{item.title}</h3>
            </div>
            <p className="photography-card__excerpt">{item.excerpt}</p>
            <Link to={item.link} className="photography-card__readmore">
              READ MORE
              <span aria-hidden="true">&#8594;</span>
            </Link>
          </article>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default AboutMePage;
