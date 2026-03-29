import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProjectDetailsAIResumeScanner() {
  return (
    <>
      <Header />
      <main className="project-details-container" style={{marginTop: 100}}>
        <h1 style={{textAlign: 'center', marginBottom: 18}}>AI Resume Scanner</h1>
        <img
          src="/ai-resume.png"
          alt="AI Resume Scanner"
          style={{ width: "100%", maxWidth: 700, borderRadius: 12, margin: "24px auto 32px", boxShadow: '0 4px 32px rgba(0,0,0,0.10)', display: 'block' }}
        />
        <div style={{ margin: "0 auto", maxWidth: 700 }}>
          <h2 style={{textAlign: 'center', marginBottom: 16}}>Project Overview</h2>
          <p style={{textAlign: 'center', fontSize: '1.13rem', lineHeight: 1.7, color: '#333', marginBottom: 28}}>
            AI Resume Scanner is a smart web app that analyzes your resume using AI and NLP. Upload your PDF or DOCX resume, paste a job description, and add your LinkedIn profile. The app extracts your skills, experience, and education, then matches them to the job using advanced algorithms. You’ll see a job match score, missing skills, estimated salary, and get personalized AI tips to improve your profile. The dashboard is clean and visual, and you even earn a Gold, Silver, or Bronze badge based on your match percentage!
          </p>
          <a
            href="https://ai-resume-scanner-c7ka.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold live-link-btn-attractive">
            🔗 Live Link
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
