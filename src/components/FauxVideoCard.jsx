function FauxVideoCard({ title, image, meta }) {
  return (
    <article className="faux-video-card">
      <div className="faux-video-card__image-wrap">
        <img src={image} alt={title} />
        <div className="faux-video-card__controls">
          <span>♡</span>
          <span>◷</span>
          <span>➤</span>
        </div>
      </div>
      <h3>{title}</h3>
      {meta ? <p>{meta}</p> : null}
    </article>
  );
}

export default FauxVideoCard;
