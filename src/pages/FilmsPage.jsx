import Header from "../components/Header";
import Footer from "../components/Footer";
import { projectCards } from "../data/siteData";
import { Link } from "react-router-dom";

function FilmsPage() {
  return (
    <div className="page-wrap section-beige">
      <Header light />

      <section className="films-page-title container">
        <h1>Creative Tech Projects</h1>
      </section>

      <section className="films-list container">
        {projectCards.map((item) => (
          <article className="film-showcase-card" key={item.title}>
            <div className="film-showcase-card__media">
              <img
                src={item.image}
                alt={item.title}
                className="film-showcase-card__image"
              />
              <a href={item.live} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{marginTop: 12, display: 'inline-block'}}>Live Link</a>
            </div>

            <div className="film-showcase-card__head">
              <h3>{item.title}</h3>
            </div>
            <p className="film-showcase-card__excerpt">{item.excerpt}</p>
            <Link to={item.details} className="film-showcase-card__readmore">
              READ MORE
              <span aria-hidden="true">&#8594;</span>
            </Link>
          </article>
        ))}
      </section>

      <section className="closing-banner section-beige container">
        <h3>Explore innovative apps, smart tools, and impactful digital experiences—crafted for the modern world.</h3>
      </section>

      <Footer />
    </div>
  );
}

export default FilmsPage;
