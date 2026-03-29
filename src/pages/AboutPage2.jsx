import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutPage2() {
  return (
    <div className="page-wrap section-beige">
      <Header />
      <section className="container" style={{marginTop: 120, marginBottom: 32}}>
        <h1 style={{fontSize: '2.2rem', textAlign: 'center', marginBottom: 16}}>My Goal</h1>
        <img src="https://static.vecteezy.com/system/resources/previews/005/252/618/non_2x/future-goal-and-plans-business-target-new-year-resolutions-success-plan-or-career-achievement-concept-vector.jpg" alt="Project Management Goal" style={{width: '100%', maxWidth: 400, height: 260, objectFit: 'cover', borderRadius: 12, display: 'block', margin: '0 auto 24px'}} />
        <p style={{fontSize: '1.15rem', color: '#444', textAlign: 'center', maxWidth: 700, margin: '0 auto'}}>
          My goal is to grow into a Project Manager role in the software development industry, where I can effectively combine my technical knowledge with leadership and management skills. With a background in Computer Engineering and hands-on experience in Python development, API design, and database architecture, I aim to bridge the gap between technical teams and project requirements.<br /><br />
          I am particularly interested in understanding the complete lifecycle of software projects—from planning and requirement analysis to development, testing, and final delivery. I want to develop the ability to manage teams, allocate resources efficiently, and ensure that projects are completed on time while maintaining high quality standards.<br /><br />
          I also aim to strengthen my skills in communication, decision-making, and problem-solving, which are essential for successfully handling real-world project challenges. By gaining practical exposure and continuously learning modern tools and methodologies, I want to contribute to building well-structured, scalable, and impactful software solutions.<br /><br />
          In the long term, I aspire to lead projects that not only meet business goals but also create meaningful value for users, while ensuring smooth collaboration between cross-functional teams.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage2;
