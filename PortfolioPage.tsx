import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { ProjectDetail } from './ProjectDetail';
import coverImage from 'figma:asset/e440981171f18df8d259272659bf83d03c490103.png';
import prigionieriImage from 'figma:asset/9e76c9bbf54ce1ad01edc186c86432605d50e9f9.png';
import thirdImage from 'figma:asset/824b77f581f972040f6ed68f41c3137f30a3bce0.png';
import fourthImage from 'figma:asset/4433655dc187a04a3e55f61c376fbf748f067afb.png';
import fifthImage from 'figma:asset/04d470ea235961b181e9f8e76df4a88df44ddd7f.png';
import sixthImage from 'figma:asset/6fc5da40ca8af97efe8be26686b4c97639058008.png';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../utils/languageContext';

export function PortfolioPage() {
  const { t } = useLanguage();
  const [images, setImages] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    
    // Simulating fetching images
    const mockImages = [
      coverImage,
      prigionieriImage,
      thirdImage,
      fourthImage,
      fifthImage,
      sixthImage,
    ];
    
    if (mounted) {
      setImages(mockImages);
    }
    
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <div className="min-h-screen pt-24 pb-20 px-8 md:px-16 bg-white">
        <LanguageToggle />
        <div className="max-w-[1400px] mx-auto">
          {/* Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl text-neutral-900 mb-4" style={{ letterSpacing: '-0.02em', fontFamily: 'Montserrat, sans-serif' }}>
              {t('portfolio.title')}
            </h1>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-neutral-600 leading-relaxed text-sm md:text-base font-[Montserrat]">
              {t('portfolio.description')}
            </p>
          </motion.div>

          {/* Grid Layout - 3 columns x 2 rows */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-3 max-w-4xl mx-auto"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedProject(index)}
              >
                {/* Paper background */}
                <div 
                  className="relative overflow-hidden shadow-lg bg-white"
                >
                  {/* Image container */}
                  <div className="p-2">
                    <div className="relative overflow-hidden" style={{ aspectRatio: '2/3' }}>
                      <img 
                        src={image}
                        alt={`Collection ${Math.floor(index / 2) + 1} - Look ${index + 1}`}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Caption */}
                    <div className="mt-2 text-center">
                      <p className="text-[9px] text-neutral-700 tracking-wider uppercase font-[Montserrat]">
                        {t(`project.${index + 1}.title`)}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative number */}
                <div className="absolute top-2 right-2 text-neutral-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectDetail
            projectIndex={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}