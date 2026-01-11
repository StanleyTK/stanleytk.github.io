import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="scroll-smooth min-h-screen relative" style={{ backgroundColor: '#0a192f', color: '#ccd6f6' }}>
            <CursorGlow />
            <div className="min-h-screen w-full pt-12 md:pt-16 relative z-10">
                <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-20">
                    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                        <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{ color: '#64ffda' }}>404</h1>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#ccd6f6' }}>
                            Page Not Found
                        </h2>
                        <p className="text-base md:text-lg mb-8 max-w-xl" style={{ color: '#8892b0' }}>
                            The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        </p>
                        <button 
                            onClick={() => navigate("/")} 
                            className="px-6 py-3 border transition-all duration-300 text-sm"
                            style={{ 
                                borderColor: '#64ffda', 
                                color: '#64ffda',
                                fontFamily: 'monospace',
                                backgroundColor: 'transparent'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default NotFound