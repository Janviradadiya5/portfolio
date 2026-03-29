import Header from "../components/Header";
import Footer from "../components/Footer";

function ProjectDetailsEcoShop() {
  return (
    <div className="page-wrap section-beige">
      <Header light />
      <section className="project-details container" style={{marginTop: 32}}>
        <h1 style={{textAlign: 'center', marginBottom: 18}}>Eco Shop</h1>
        <img
          src="/eco-shop.png"
          alt="Eco Shop"
          style={{ width: "100%", maxWidth: 700, borderRadius: 12, margin: "24px auto 32px", boxShadow: '0 4px 32px rgba(0,0,0,0.10)', display: 'block' }}
        />
        <div style={{ margin: "0 auto", maxWidth: 700 }}>
          <h2 style={{textAlign: 'center', marginBottom: 16}}>Project Overview</h2>
          <p style={{textAlign: 'center', fontSize: '1.13rem', lineHeight: 1.7, color: '#333', marginBottom: 28}}>
            Eco Shop is your sustainable shopping assistant! With a modern, interactive UI, you can search for eco-friendly products across categories like bathroom, beauty, cleaning, and kitchen. The app features a smart search panel, real-time product filtering, and clear sustainability ratings—making it easy to find and buy green alternatives for everyday needs.<br /><br />
            All product data is managed in a dynamic JavaScript array, and the experience is fast and responsive. Eco Shop’s goal is to make sustainable shopping simple and accessible for everyone.
          </p>
          <a href="https://janviradadiya5.github.io/sustainable-shopping-assistant/index.html" target="_blank" rel="noopener noreferrer" className="btn btn--gold live-link-btn-attractive">🔗 Live Link</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProjectDetailsEcoShop;
