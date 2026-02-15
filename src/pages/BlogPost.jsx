import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow.jsx";
import blogData from "../data/blog.json";

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogData.find(blog => blog.slug === slug);
  const narrativeParagraphs = post?.paragraphs?.length
    ? post.paragraphs
    : [post?.intro, post?.execution, post?.note, post?.basicObservations].filter(Boolean);
  const containerWidthClass = post?.statsReportPath ? "max-w-[1500px]" : "max-w-[900px]";

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
      <div className={`${containerWidthClass} mx-auto px-6 md:px-12 pt-32 pb-20 relative z-10`}>
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
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6" style={{ color: '#ccd6f6' }}>
              {post.title}
            </h1>
            {post.headerCaption && (
              <p className="text-base md:text-lg mb-6" style={{ color: "#8892b0" }}>
                {post.headerCaption}
              </p>
            )}
            <div className="h-px w-24" style={{ backgroundColor: '#64ffda' }}></div>
          </div>

          <div 
            className="prose prose-invert max-w-none"
            style={{ color: '#8892b0' }}
          >
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#64ffda" }}>
              {post.description}
            </p>

            {narrativeParagraphs.map((paragraph, index) => (
              <p key={`${post.slug}-paragraph-${index}`} className="text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}

            {post.strategyOverview && post.strategyOverview.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: '#ccd6f6' }}>
                  Algorithm Strategy Overview
                </h2>
                <p className="text-lg leading-relaxed mb-4" style={{ color: "#8892b0" }}>
                  These are the 10 algorithms I put together to make diversification attainable without losing all returns by combining different sectors with strong long-term return profiles over decades.
                </p>
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
                      {(strategy.backtestStart || strategy.cagr || strategy.sharpe || strategy.maxDrawdown) && (
                        <div className="text-xs mb-3 space-y-1" style={{ color: "#a8b2d1", fontFamily: "monospace" }}>
                          {strategy.backtestStart && <p>Backtest start: {strategy.backtestStart}</p>}
                          {strategy.cagr && <p>CAGR: {strategy.cagr}</p>}
                          {strategy.sharpe && <p>Sharpe: {strategy.sharpe}</p>}
                          {strategy.maxDrawdown && <p>Max Drawdown: {strategy.maxDrawdown}</p>}
                        </div>
                      )}
                      <p className="text-base leading-relaxed" style={{ color: "#8892b0" }}>
                        {strategy.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {post.statsReportPath && (
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ccd6f6" }}>
                  Performance Report
                </h2>
                <a
                  href={post.statsReportPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm mb-4 transition-colors"
                  style={{ border: "1px solid #64ffda", color: "#64ffda", fontFamily: "monospace" }}
                >
                  Open Full Report in New Tab
                </a>
                <div
                  className="w-full rounded overflow-hidden"
                  style={{ border: "1px solid #233554", backgroundColor: "#112240" }}
                >
                  <iframe
                    src={post.statsReportPath}
                    title="QuantStats Performance Report"
                    className="w-full"
                    style={{ height: "80vh", minHeight: "720px", backgroundColor: "#ffffff" }}
                  />
                </div>
              </section>
            )}

            {post.combinationSummary && (
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ccd6f6" }}>
                  Why This Combination Works
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#8892b0" }}>
                  {post.combinationSummary}
                </p>
              </section>
            )}

            {post.keyRegimeMoments && post.keyRegimeMoments.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ccd6f6" }}>
                  Key Regime Moments
                </h2>
                <div className="space-y-5">
                  {post.keyRegimeMoments.map((moment) => (
                    <article key={moment.title}>
                      <h3 className="text-base font-semibold mb-2" style={{ color: "#ccd6f6" }}>
                        {moment.title}
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "#8892b0" }}>
                        {moment.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {(post.overfitConcernSummary || (post.overfitConcernPoints && post.overfitConcernPoints.length > 0)) && (
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ccd6f6" }}>
                  Overfitting And Reliability Notes
                </h2>
                {post.overfitConcernSummary && (
                  <p className="text-lg leading-relaxed mb-4" style={{ color: "#8892b0" }}>
                    {post.overfitConcernSummary}
                  </p>
                )}
                {post.overfitConcernPoints && post.overfitConcernPoints.length > 0 && (
                  <ul className="space-y-3 list-disc pl-5">
                    {post.overfitConcernPoints.map((point) => (
                      <li key={point} className="text-lg leading-relaxed" style={{ color: "#8892b0" }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {post.closingObservation && (
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ccd6f6" }}>
                  From What I Have Seen Over The Full Backtest
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#8892b0" }}>
                  {post.closingObservation}
                </p>
              </section>
            )}

          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
}

export default BlogPost;
