import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow.jsx";
import blogData from "../data/blog.json";

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogData.find(blog => blog.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0a192f', color: '#ccd6f6' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#ccd6f6' }}>Post Not Found</h1>
          <button 
            onClick={() => navigate("/")}
            className="px-6 py-3 border transition-all duration-300 text-sm"
            style={{
              borderColor: '#64ffda',
              color: '#64ffda',
              fontFamily: 'monospace'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="scroll-smooth min-h-screen relative" style={{ backgroundColor: '#0a192f', color: '#ccd6f6' }}>
      <CursorGlow />
      <div className="max-w-[900px] mx-auto px-6 md:px-12 pt-32 pb-20 relative z-10">
        <button
          onClick={() => navigate("/")}
          className="mb-8 text-sm transition-colors inline-flex items-center gap-2"
          style={{ color: '#64ffda', fontFamily: 'monospace' }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          ← Back
        </button>

        <article>
          <div className="mb-8">
            <span className="text-sm" style={{ color: '#64ffda', fontFamily: 'monospace' }}>
              {post.year}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ color: '#ccd6f6' }}>
              {post.title}
            </h1>
            <div className="h-px w-24" style={{ backgroundColor: '#64ffda' }}></div>
          </div>

          <div 
            className="prose prose-invert max-w-none"
            style={{ color: '#8892b0' }}
          >
            <p className="text-lg leading-relaxed mb-6">
              {post.description}
            </p>

            {post.intro && (
              <p className="text-base leading-relaxed mb-4">
                {post.intro}
              </p>
            )}

            {post.execution && (
              <p className="text-base leading-relaxed mb-6">
                {post.execution}
              </p>
            )}

            {post.alpacaLink && (
              <a
                href={post.alpacaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm mb-8 transition-colors"
                style={{ border: "1px solid #64ffda", color: "#64ffda", fontFamily: "monospace" }}
              >
                View Alpaca Paper Trading Profile
              </a>
            )}

            {post.strategyOverview && post.strategyOverview.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: '#ccd6f6' }}>
                  10 Strategy Modules
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {post.strategyOverview.map((strategy) => (
                    <article
                      key={strategy.title}
                      className="rounded p-4"
                      style={{ backgroundColor: "#112240", border: "1px solid #233554" }}
                    >
                      <h3 className="text-base font-semibold mb-2" style={{ color: "#ccd6f6" }}>
                        {strategy.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#8892b0" }}>
                        {strategy.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )}

          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
}

export default BlogPost;
