import { motion } from 'motion/react';
import { useLanguage } from '../utils/languageContext';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  rightPosition?: string;
}

export function LanguageToggle({ rightPosition = 'right-8' }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  // Extract the desktop positioning from rightPosition and create responsive classes
  // On mobile, always use right-4 to prevent cutoff
  const responsivePosition = rightPosition.includes('right-24') 
    ? 'right-4 md:right-24' 
    : 'right-4 md:right-8';

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={`fixed top-8 md:top-12 ${responsivePosition} z-50 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2`}
    >
      <Languages className="w-3.5 h-3.5 md:w-4 md:h-4 text-neutral-600" strokeWidth={1.5} />
      <button
        onClick={() => setLanguage('en')}
        className={`text-[10px] md:text-xs font-[Montserrat] uppercase tracking-wider px-2 md:px-3 py-1 md:py-1.5 rounded-full transition-all ${
          language === 'en'
            ? 'bg-neutral-900 text-white'
            : 'text-neutral-400 hover:text-neutral-600'
        }`}
      >
        EN
      </button>
      <div className="w-[1px] h-3 md:h-4 bg-neutral-300"></div>
      <button
        onClick={() => setLanguage('it')}
        className={`text-[10px] md:text-xs font-[Montserrat] uppercase tracking-wider px-2 md:px-3 py-1 md:py-1.5 rounded-full transition-all ${
          language === 'it'
            ? 'bg-neutral-900 text-white'
            : 'text-neutral-400 hover:text-neutral-600'
        }`}
      >
        IT
      </button>
    </motion.div>
  );
}