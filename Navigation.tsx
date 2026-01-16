import { motion } from 'motion/react';

interface NavigationProps {
  currentPage: 'cv' | 'portfolio';
  onPageChange: (page: 'cv' | 'portfolio') => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-6">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => onPageChange('cv')}
          className="text-xs tracking-[0.2em] uppercase text-neutral-300 hover:text-white transition-colors"
        >
          CV
        </motion.button>
        
        <div className="flex gap-8">
          <motion.button
            whileHover={{ y: -2 }}
            onClick={() => onPageChange('portfolio')}
            className="text-xs tracking-[0.2em] uppercase text-neutral-300 hover:text-white transition-colors"
          >
            PORTFOLIO
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
