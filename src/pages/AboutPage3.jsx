import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutPage3() {
  return (
    <div className="page-wrap section-beige">
      <Header />
      <section className="container" style={{marginTop: 120, marginBottom: 32}}>
        <h1 style={{fontSize: '2.2rem', textAlign: 'center', marginBottom: 16}}>Technical Skills</h1>
        <img src="https://imageio.forbes.com/specials-images/imageserve/630317507c39bc12ccfa8c6c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="Technical Skills" style={{width: '100%', maxWidth: 400, height: 260, objectFit: 'cover', borderRadius: 12, display: 'block', margin: '0 auto 24px'}} />
        <div style={{fontSize: '1.15rem', color: '#444', textAlign: 'left', maxWidth: 700, margin: '0 auto'}}>
          <strong>Programming & Backend:</strong>
          <ul style={{marginTop: 4, marginBottom: 12}}>
            <li>Python , Django, Flask, FastAPI</li>
          </ul>
          <strong>Web Technologies:</strong>
          <ul style={{marginTop: 4, marginBottom: 12}}>
            <li>HTML, CSS, JavaScript</li>
          </ul>
          <strong>API Development:</strong>
          <ul style={{marginTop: 4, marginBottom: 12}}>
            <li>REST API Design, CRUD Operations, API Integration</li>
          </ul>
          <strong>Database Management:</strong>
          <ul style={{marginTop: 4, marginBottom: 12}}>
            <li>SQLite, PostgreSQL, Database Design, SQL</li>
          </ul>
          <strong>Tools & Version Control:</strong>
          <ul style={{marginTop: 4, marginBottom: 12}}>
            <li>Git, GitHub, Docker</li>
          </ul>
          <strong>Core Concepts:</strong>
          <ul style={{marginTop: 4, marginBottom: 0}}>
            <li>Backend Development, Data Handling, Problem Solving, Basic System Design</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage3;
