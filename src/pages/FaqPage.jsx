import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { faqItems } from "../data/siteData";

function FaqPage() {
  const [open, setOpen] = useState(-1);

  return (
    <div className="page-wrap section-beige faq-page">
      <Header light />

      <section className="faq-hero container">
        <h1>We&apos;re here to answer all your questions</h1>
        <p>
          We try to answer all your questions here. If you have any further questions
          about IVORY FILMS you can always contact us at hello@ivoryfilms.in. We will
          respond to your inquiry as soon as possible.
        </p>
      </section>

      <section className="container faq-list">
        {faqItems.map((item, idx) => (
          <article className="faq-item" key={item.q}>
            <button
              className="faq-item__btn"
              onClick={() => setOpen((v) => (v === idx ? -1 : idx))}
              aria-expanded={open === idx}
            >
              <span className="faq-item__q">{item.q}</span>
              <span className={`faq-item__icon ${open === idx ? "is-open" : ""}`} aria-hidden="true">
                <span />
              </span>
            </button>
            {open === idx ? <p className="faq-item__a">{item.a}</p> : null}
          </article>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default FaqPage;
