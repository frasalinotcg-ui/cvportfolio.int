import { motion } from 'motion/react';
import signatureImage from 'figma:asset/2db91d7beaed4405f8a5f5b6532c690b03dcea7b.png';
import profileImage from 'figma:asset/8cae1dad0087ecaa797363e27b5ab111dc8f3b50.png';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../utils/languageContext';

interface CVPageProps {
  onViewProjects?: () => void;
}

export function CVPage({ onViewProjects }: CVPageProps) {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-24 pb-20 px-8 md:px-16 bg-white">
      <LanguageToggle />
      <div className="max-w-[1400px] mx-auto">
        {/* Single Page Layout */}
        <div 
          className="shadow-2xl relative overflow-hidden"
          style={{
            background: 'white',
          }}
        >
          {/* Paper grain texture */}
          <div 
            className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px'
            }}
          />
          
          {/* Fine paper fibers */}
          <div 
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='turbulence' baseFrequency='2.5' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)' opacity='0.4'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '150px 150px'
            }}
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="p-12 md:p-20 relative font-[Montserrat]"
          >
            {/* Top Section with Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 border-b border-neutral-400 pb-8">
              {/* Left side */}
              <div className="relative flex flex-col">
                <div className="text-xs text-neutral-800 mb-8 relative z-10">
                  CV & Fashion Portfolio —<br />
                  <span className="italic">Gallery</span>
                </div>
                
                {/* Name and Bio Section - moved here */}
                <div className="mb-8">
                  <h1 className="text-3xl mb-3" style={{ letterSpacing: '-0.02em' }}>
                    Francesco Salvatori
                  </h1>
                  
                  {/* Decorative underline */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-[1px] bg-neutral-400"></div>
                    <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                    <div className="w-6 h-[1px] bg-neutral-400"></div>
                  </div>
                  
                  <div className="text-xs leading-relaxed text-neutral-800">
                    {t('cv.bio.short')}
                  </div>
                </div>
                
                {/* Contacts Section - centered vertically */}
                <div className="flex-1 flex items-center">
                  <div className="text-xs text-neutral-800 relative z-10 w-full">
                    {/* Decorative elements */}
                    <div className="absolute -top-4 left-0 w-full h-[1px] bg-neutral-300"></div>
                    
                    {/* Decorative corner element */}
                    <div className="absolute -left-3 -top-3 w-2 h-2 border-l border-t border-neutral-400"></div>
                    
                    <div className="font-medium mb-3 uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
                      {t('cv.contacts.title')}
                    </div>
                    
                    <div className="space-y-2 text-neutral-700">
                      <div className="flex items-start gap-2">
                        <span className="text-neutral-500">{t('cv.contacts.city')}</span>
                        <span>{t('cv.location')}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-neutral-500">{t('cv.contacts.email')}</span>
                        <span>salvatori780@gmail.com</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-neutral-500">{t('cv.contacts.cell')}</span>
                        <span>+39 3471605323</span>
                      </div>
                      <div className="flex items-start gap-2 relative">
                        <span className="text-neutral-500">{t('cv.contacts.linkedin')}</span>
                        <span>linkedin.com/in/francesco-salvatori-1a515036a/</span>
                        
                        {/* View Gallery Button - aligned with last contact line */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={onViewProjects}
                          className="absolute left-[420px] -top-3 px-8 py-3 border-2 border-neutral-900 text-[10px] tracking-[0.3em] uppercase text-neutral-900 hover:bg-neutral-900 hover:text-[#e8e3d8] transition-colors duration-300"
                        >
                          {t('cv.view.gallery')}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Photo with vertical text */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center z-10" style={{ width: '60px' }}>
                  <div 
                    className="text-2xl tracking-widest text-neutral-900"
                    style={{ 
                      writingMode: 'vertical-rl',
                      textOrientation: 'upright',
                      letterSpacing: '0.3em'
                    }}
                  >
                    神は見下さない
                  </div>
                </div>
                
                <div className="ml-16 flex flex-col">
                  <div className="w-full h-[400px] overflow-hidden relative">
                    {/* Profile image */}
                    <img 
                      src={profileImage} 
                      alt="Francesco Salvatori" 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 25%' }}
                    />
                  </div>
                  <div className="text-[10px] text-neutral-700 mt-2">
                    {t('cv.born')}
                  </div>
                </div>
              </div>
            </div>

            {/* Biography Section */}
            <div className="max-w-[1100px] mx-auto">
              <div className="grid grid-cols-[200px_1fr] gap-12 mb-12">
                <div className="relative">
                  {/* Section number */}
                  <div className="text-[10px] text-neutral-500 tracking-widest mb-1">— 01</div>
                  <h2 className="text-sm mb-4 text-neutral-900">
                    {t('cv.background.title')}
                  </h2>
                </div>
                
                <div>
                  <p className="text-sm leading-relaxed text-neutral-800 mb-6">
                    {t('cv.background.text')}
                  </p>
                </div>
              </div>

              {/* Experience Section */}
              <div className="grid grid-cols-[200px_1fr] gap-12 mb-12">
                <div className="relative">
                  {/* Section number */}
                  <div className="text-[10px] text-neutral-500 tracking-widest mb-1">— 02</div>
                  <h2 className="text-sm mb-4 text-neutral-900">
                    {t('cv.experience.title')}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="relative pl-6">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full border border-neutral-400"></div>
                    
                    <div className="text-xs text-neutral-600 mb-1">
                      2024
                    </div>
                    <p className="text-sm text-neutral-900">{t('cv.experience.tabula')}</p>
                  </div>
                </div>
              </div>

              {/* Work Experience Section */}
              <div className="grid grid-cols-[200px_1fr] gap-12 mb-12">
                <div className="relative">
                  {/* Section number */}
                  <div className="text-[10px] text-neutral-500 tracking-widest mb-1">— 03</div>
                  <h2 className="text-sm mb-4 text-neutral-900">
                    {t('cv.work.title')}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="relative pl-6">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full border border-neutral-400"></div>
                    
                    <div className="text-xs text-neutral-600 mb-1">
                      {t('cv.work.present')}
                    </div>
                    <p className="text-sm text-neutral-900">{t('cv.work.vicino')}</p>
                  </div>
                  <div className="relative pl-6">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full border border-neutral-400"></div>
                    
                    <div className="text-xs text-neutral-600 mb-1">
                      2021
                    </div>
                    <p className="text-sm text-neutral-900">{t('cv.work.coalsa')}</p>
                  </div>
                </div>
              </div>

              {/* Skills Table Section */}
              <div className="grid grid-cols-[200px_1fr] gap-12 mb-12">
                <div className="relative">
                  {/* Section number */}
                  <div className="text-[10px] text-neutral-500 tracking-widest mb-1">— 04</div>
                  <h2 className="text-sm mb-4 text-neutral-900">
                    {t('cv.skills.title')}
                  </h2>
                </div>
                
                <div>
                  {/* Skills Table */}
                  <div className="text-xs text-neutral-800 relative grid grid-cols-2 gap-6">
                    {/* Decorative elements around the section */}
                    <div className="absolute -top-4 left-0 w-full h-[1px] bg-neutral-300"></div>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neutral-400"></div>
                    
                    <div className="relative">
                      {/* Decorative corner element */}
                      <div className="absolute -left-3 -top-3 w-2 h-2 border-l border-t border-neutral-400"></div>
                      
                      <div className="font-medium mb-3 uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
                        {t('cv.skills.personal')}
                      </div>
                      <ul className="space-y-1 text-neutral-700">
                        <li>• {t('cv.skills.personal.1')}</li>
                        <li>• {t('cv.skills.personal.2')}</li>
                        <li>• {t('cv.skills.personal.3')}</li>
                        <li>• {t('cv.skills.personal.4')}</li>
                        <li>• {t('cv.skills.personal.5')}</li>
                        <li>• {t('cv.skills.personal.6')}</li>
                        <li>• {t('cv.skills.personal.7')}</li>
                        <li>• {t('cv.skills.personal.8')}</li>
                        <li>• {t('cv.skills.personal.9')}</li>
                      </ul>
                    </div>
                    
                    {/* Vertical divider line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-neutral-300"></div>
                    
                    <div className="relative">
                      {/* Decorative corner element */}
                      <div className="absolute -right-3 -top-3 w-2 h-2 border-r border-t border-neutral-400"></div>
                      
                      <div className="font-medium mb-3 uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
                        {t('cv.skills.professional')}
                      </div>
                      <ul className="space-y-1 text-neutral-700">
                        <li>• {t('cv.skills.professional.1')}</li>
                        <li>• {t('cv.skills.professional.2')}</li>
                        <li>• {t('cv.skills.professional.3')}</li>
                        <li>• {t('cv.skills.professional.4')}</li>
                        <li>• {t('cv.skills.professional.5')}</li>
                        <li>• {t('cv.skills.professional.6')}</li>
                        <li>• {t('cv.skills.professional.7')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature bottom right */}
            <div className="text-right mt-12">
              <img 
                src={signatureImage} 
                alt="Francesco Salvatori signature" 
                className="inline-block h-12 opacity-80"
                style={{ 
                  filter: 'contrast(1.2)',
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}