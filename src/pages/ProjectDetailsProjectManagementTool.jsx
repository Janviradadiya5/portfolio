import Header from "../components/Header";
import Footer from "../components/Footer";

function ProjectDetailsProjectManagementTool() {
  return (
    <div className="page-wrap section-beige">
      <Header light />
      <section className="project-details container" style={{marginTop: 32}}>
        <h1 style={{textAlign: 'center', marginBottom: 18}}>Project Management Tool</h1>
        <img
          src="/project-management.png"
          alt="Project Management Tool"
          style={{ width: "100%", maxWidth: 700, borderRadius: 12, margin: "24px auto 32px", boxShadow: '0 4px 32px rgba(0,0,0,0.10)', display: 'block' }}
        />
        <div style={{ margin: "0 auto", maxWidth: 700 }}>
          <h2 style={{textAlign: 'center', marginBottom: 16}}>Project Overview</h2>
          <p style={{textAlign: 'center', fontSize: '1.13rem', lineHeight: 1.7, color: '#333', marginBottom: 28}}>
            Project Management Tool is a robust Django-based web app for teams and organizations. It features modular apps for tasks, comments, notifications, and more—each with its own models and APIs for easy scaling and maintenance. PostgreSQL and Redis are used for fast, reliable data and caching, all managed with Docker Compose.<br /><br />
            The frontend (React/Vue) is separated for speed and flexibility. The system supports role-based access, team collaboration, task tracking, notifications, and detailed activity logs—perfect for remote teams and organizations. APIs allow integration with other tools, and the documentation is clear for easy onboarding and development.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProjectDetailsProjectManagementTool;
