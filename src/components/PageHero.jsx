function PageHero({ image, title, subtitle, dark = false }) {
  return (
    <section className={`page-hero ${dark ? "page-hero--dark" : ""}`}>
      <img src={image} alt="Hero" className="page-hero__image" />
      <div className="page-hero__overlay">
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </section>
  );
}

export default PageHero;
