import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhotographyPage from "./pages/PhotographyPage";
import FilmsPage from "./pages/FilmsPage";
import EditorialPage from "./pages/EditorialPage";
import BlogsPage from "./pages/BlogsPage";
import RestApiBestPracticesPage from "./pages/RestApiBestPracticesPage";
import FlaskVsFastapiPage from "./pages/FlaskVsFastapiPage";
import SqliteToPostgresMigrationPage from "./pages/SqliteToPostgresMigrationPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import AboutPage1 from "./pages/AboutPage1";
import AboutPage2 from "./pages/AboutPage2";
import AboutPage3 from "./pages/AboutPage3";
import ProjectDetailsFakeNewsDetector from "./pages/ProjectDetailsFakeNewsDetector";
import ProjectDetailsEcoShop from "./pages/ProjectDetailsEcoShop";
import ProjectDetailsAIResumeScanner from "./pages/ProjectDetailsAIResumeScanner";
import ProjectDetailsProjectManagementTool from "./pages/ProjectDetailsProjectManagementTool";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/photography" element={<PhotographyPage />} />
      <Route path="/films" element={<FilmsPage />} />
      <Route path="/editorial" element={<EditorialPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/rest-api-best-practices" element={<RestApiBestPracticesPage />} />
      <Route path="/blogs/flask-vs-fastapi" element={<FlaskVsFastapiPage />} />
      <Route path="/blogs/sqlite-to-postgres-migration" element={<SqliteToPostgresMigrationPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/about-page-1" element={<AboutPage1 />} />
      <Route path="/about-page-2" element={<AboutPage2 />} />
      <Route path="/about-page-3" element={<AboutPage3 />} />
      <Route path="/projects/fake-news-detector" element={<ProjectDetailsFakeNewsDetector />} />
      <Route path="/projects/eco-shop" element={<ProjectDetailsEcoShop />} />
      <Route path="/projects/ai-resume-scanner" element={<ProjectDetailsAIResumeScanner />} />
      <Route path="/projects/project-management-tool" element={<ProjectDetailsProjectManagementTool />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
