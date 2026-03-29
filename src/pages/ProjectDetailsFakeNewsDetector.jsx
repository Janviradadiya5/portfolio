import Header from "../components/Header";
import Footer from "../components/Footer";

function ProjectDetailsFakeNewsDetector() {
  return (
    <div className="page-wrap section-beige">
      <Header light />
      <section className="project-details container" style={{marginTop: 32}}>
        <h1 style={{textAlign: 'center', marginBottom: 18}}>Fake News Detector</h1>
        <img
          src="/fake-news.png"
          alt="Fake News Detector"
          style={{ width: "100%", maxWidth: 700, borderRadius: 12, margin: "24px auto 32px", boxShadow: '0 4px 32px rgba(0,0,0,0.10)', display: 'block' }}
        />
        <div style={{ margin: "0 auto", maxWidth: 700 }}>
          <h2 style={{textAlign: 'center', marginBottom: 16}}>Project Overview</h2>
          <p style={{textAlign: 'center', fontSize: '1.13rem', lineHeight: 1.7, color: '#333', marginBottom: 28}}>
            This Fake News Detector is a smart web app built with Python, Flask, and machine learning. It uses real and fake news headlines to train a text classification model (Multinomial Naive Bayes) with TF-IDF vectorization. Users can enter any news headline and instantly get feedback on whether it’s likely real or fake.<br /><br />
            The app is easy to run: just install the requirements, train the model if needed, and launch the Flask server. It also includes scripts for scraping news and making predictions from RSS feeds, making it a complete pipeline for fake news detection and demonstration.
          </p>
          <a href="https://fake-news-detector-5bc5.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn--gold live-link-btn-attractive">🔗 Live Link</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProjectDetailsFakeNewsDetector;
