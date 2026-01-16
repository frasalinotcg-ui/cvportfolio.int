import { useState, useEffect } from 'react';
import { CVPage } from '../components/CVPage';
import { PortfolioPage } from '../components/PortfolioPage';
import { Navigation } from '../components/Navigation';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageProvider } from '../utils/languageContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'cv' | 'portfolio'>('cv');
  
  // Global error handler for unhandled promises
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      event.preventDefault();
    };
    
    const handleError = (event: ErrorEvent) => {
      console.error('Global error:', event.error);
    };
    
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        
        <AnimatePresence mode="wait">
          {currentPage === 'cv' ? (
            <motion.div
              key="cv"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <CVPage onViewProjects={() => setCurrentPage('portfolio')} />
            </motion.div>
          ) : (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <PortfolioPage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}