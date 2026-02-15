import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow.jsx";
import blogData from "../data/blog.json";

function Blog() {
  return (
    <div className="scroll-smooth min-h-screen relative" style={{ backgroundColor: "#0a192f", color: "#ccd6f6" }}>
      <CursorGlow />
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-12 md:pt-20 pb-12 md:pb-20 relative z-10">
        <div className="mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4" style={{ color: "#ccd6f6" }}>
            Blogs
          </h1>
          <div className="h-px w-32" style={{ backgroundColor: "#64ffda" }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogData.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.slug}`} className="block">
              <article
                className="p-6 rounded transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer"
                style={{ backgroundColor: "#112240" }}
              >
                <div className="mb-4">
                  <span className="text-sm" style={{ color: "#64ffda", fontFamily: "monospace" }}>
                    {blog.year}
                  </span>
                  <h3
                    className="text-xl font-semibold mt-2 mb-3 transition-colors"
                    style={{ color: "#ccd6f6" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#ccd6f6")}
                  >
                    {blog.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed" style={{ color: "#8892b0" }}>
                  {blog.description || blog.intro}
                </p>
              </article>
            </Link>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Blog;
