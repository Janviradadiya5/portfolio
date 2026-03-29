import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutPage1() {
  return (
    <div className="page-wrap section-beige">
      <Header className="black-header" />
      <section className="container" style={{marginTop: 120, marginBottom: 32}}>
        <h1 style={{fontSize: '2.2rem', textAlign: 'center', marginBottom: 16}}>About Me</h1>
        <img src="https://tse1.mm.bing.net/th/id/OIP.CVBvM03GJQ3CIxhlZNvcvwHaC0?rs=1&pid=ImgDetMain&o=7&rm=3" alt="About Me" style={{width: '100%', maxWidth: 400, height: 260, objectFit: 'cover', borderRadius: 12, display: 'block', margin: '0 auto 24px'}} />
        <p style={{fontSize: '1.15rem', color: '#444', textAlign: 'center', maxWidth: 700, margin: '0 auto'}}>
          I am Janvi, a final-year Computer Engineering student with a strong interest in software development and project execution. Throughout my academic journey, I have focused on building a solid foundation in programming and web development, while actively working on real-world projects to gain practical experience beyond the classroom.<br /><br />
          I have completed an internship in Python development, where I worked on backend-focused tasks and developed a deeper understanding of how real applications are designed and implemented. During this experience, I was involved in writing clean and efficient code, understanding project workflows, and collaborating on development tasks.<br /><br />
          In addition to my internship, I have worked on a cyber benchmark project, where I contributed to API design and database architecture. This helped me understand how to structure backend systems, design efficient APIs, and create well-organized databases for scalable applications. I have also worked on multiple projects that involve CRUD operations, REST API development, and data handling, which strengthened my problem-solving and development skills.<br /><br />
          My goal is to become a Project Manager, where I can combine my technical background with planning, coordination, and decision-making skills to manage and deliver successful software projects. I am particularly interested in understanding system workflows, improving team efficiency, and ensuring that projects are completed with quality and within timelines.<br /><br />
          I am continuously learning and improving my skills, with a focus on writing scalable code, understanding system design, and gaining practical exposure to real-world development challenges.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage1;
