import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    title: "Web Development",
    description: "I create websites that look great and work well on any device, so your business can shine online."
  },
  {
    title: "Backend Development",
    description: "I build the behind-the-scenes parts of websites and apps, making sure everything runs smoothly and securely."
  },
  {
    title: "Python Development",
    description: "I write Python code to automate tasks, build websites, and solve problems in a simple way."
  },
  {
    title: "Data Analysis",
    description: "I help you understand your data by cleaning it up and showing it in easy-to-read charts and reports."
  },
  {
    title: "Frontend Development",
    description: "I design the parts of websites you see and click, making them easy and fun to use."
  },
  {
    title: "Databases (Postgres & MongoDB)",
    description: "I organize and manage your information so it’s safe and easy to find when you need it."
  },
  {
    title: "Version Control (Git & GitHub)",
    description: "I use tools to keep track of changes in your code, so nothing gets lost and teamwork is simple."
  }
];

export default function EditorialPage() {
  return (
    <div className="page-wrap section-beige">
      <Header light />
      <section className="container services-head" style={{ marginTop: 40, marginBottom: 32 }}>
          <h1 style={{ fontSize: '3rem', marginBottom: 12, textAlign: 'center' }}>Services</h1>
          <p style={{ fontSize: '1.1rem', color: '#444', textAlign: 'center' }}>
            Here are the professional services I offer to help you build, scale, and optimize your digital presence:
          </p>
      </section>
      <section className="container services-list" style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'center' }}>
        {services.map((service) => (
          <div key={service.title} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '28px 22px', minWidth: 260, maxWidth: 320, flex: '1 1 260px', marginBottom: 16 }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 10, color: '#181818' }}>{service.title}</h2>
            <p style={{ fontSize: '1.18rem', color: '#333' }}>{service.description}</p>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
