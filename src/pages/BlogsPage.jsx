import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogPosts } from "../data/siteData";
import { Link } from "react-router-dom";

function BlogsPage() {
  // Show the three specific blogs with their detail pages
  const visibleBlogs = [
    blogPosts.find(post => post.link === "/blogs/rest-api-best-practices"),
    blogPosts.find(post => post.link === "/blogs/flask-vs-fastapi"),
    blogPosts.find(post => post.link === "/blogs/sqlite-to-postgres-migration"),
  ];
  const featuredPost = visibleBlogs[0];
  const secondaryPosts = visibleBlogs.slice(1, 3);

  return (
    <div className="page-wrap section-beige">
      <Header light />
      <section className="container blogs-head">
        <h1>Blogs</h1>
      </section>

      <section className="container blogs-feature">
        <article className="blogs-feature__card">
          <Link to={featuredPost.link || "#"} className="blogs-feature__image-link">
            <img src={featuredPost.image} alt={featuredPost.title} />
          </Link>
          <div className="blogs-feature__content">
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.excerpt}</p>
            <Link to={featuredPost.link || "#"} className="blogs-readmore">
              READ MORE
              <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </article>
      </section>

      <section className="container blogs-grid">
        {secondaryPosts.map((post) => (
          <article className="blogs-grid__card" key={post.title}>
            <Link to={post.link || "#"}>
              <img src={post.image} alt={post.title} />
            </Link>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={post.link || "#"} className="blogs-readmore">
              READ MORE
              <span aria-hidden="true">&#8594;</span>
            </Link>
          </article>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default BlogsPage;
