import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // CV Page
    'cv.location': 'Rome, Italy',
    'cv.born': '01 - 01 - 2003, Rome, Italy',
    'cv.bio.short': 'Fashion Designer born in 2003 with a clean but original aesthetic, particularly attached to the world of military and avant-garde clothing, from England to Japan. Strong spirit of dedication to work, co-working and leadership.',
    'cv.background.title': 'Background',
    'cv.background.text': 'Francesco Salvatori was born in Rome on January 1, 2003. After completing his studies at Stanislao Cannizzaro state scientific high school, he pursued law for one year at Sapienza University of Rome before discovering his true passion. In 2021, he enrolled at the European Institute of Design, where he specialized in Fashion Design, graduating on July 7, 2025.',
    'cv.experience.title': 'Experience',
    'cv.experience.tabula': '"Tabula Rasa", IED x Cotonificio Albini 1876',
    'cv.work.title': 'Work Experience',
    'cv.work.present': '2025 - present',
    'cv.work.vicino': 'Currently waiter at Vicino Enoteca, Largo Pannonia, 13',
    'cv.work.coalsa': 'Waiter at CO.AL.SA, Sabaudia, LT',
    'cv.skills.title': 'Skills & Values',
    'cv.skills.personal': 'Personal Values',
    'cv.skills.personal.1': 'Problem solving',
    'cv.skills.personal.2': 'Responsibility',
    'cv.skills.personal.3': 'Dedication',
    'cv.skills.personal.4': 'Flexibility',
    'cv.skills.personal.5': 'Cooperation',
    'cv.skills.personal.6': 'Humility',
    'cv.skills.personal.7': 'Curiosity',
    'cv.skills.personal.8': 'Organization',
    'cv.skills.personal.9': 'Punctuality',
    'cv.skills.professional': 'Professional Skills',
    'cv.skills.professional.1': 'Men Collection',
    'cv.skills.professional.2': 'Women Collection',
    'cv.skills.professional.3': 'Knitwear Collection',
    'cv.skills.professional.4': 'Sportswear Collection',
    'cv.skills.professional.5': 'Textile Research',
    'cv.skills.professional.6': 'Modeling',
    'cv.skills.professional.7': 'Trend Research',
    'cv.contacts.title': 'Contacts',
    'cv.contacts.city': 'City:',
    'cv.contacts.email': 'E-mail:',
    'cv.contacts.cell': 'Cell:',
    'cv.contacts.linkedin': 'Linkedin:',
    'cv.view.gallery': 'View Gallery',
    
    // Portfolio Page
    'portfolio.title': 'Gallery',
    'portfolio.description': 'A curated selection of my most representative fashion projects. Each collection explores the balance between form and function, tradition and contemporary innovation.',
    
    // Projects
    'project.1.title': 'Gladio - Menswear Collection',
    'project.2.title': 'Prigionieri - Thesis Project',
    'project.3.title': 'Tabula Rasa - IED x Albini 1876',
    'project.4.title': 'Akira - Womenswear Collection',
    'project.5.title': 'Marcel - Graphic Design Project',
    'project.6.title': 'Prigionieri - Print Design Project',
    
    // Project Details
    'project.back': 'Back to Gallery',
    'project.year': 'Year',
    'project.category': 'Category',
    'project.viewLookbook': 'View Lookbook',
    'project.openLookbook': 'Open Lookbook',
    'project.viewCollection': 'View 3D Collection',
    'project.viewGraphics': 'View Graphics Gallery',
    'project.credits': 'Credits',
    'project.uploadImage': 'Upload Image',
    'project.save': 'Save',
    'project.saved': 'Saved!',
    'project.scrollImages': 'Scroll to see images',
    
    // Categories
    'category.menswear': 'Menswear',
    'category.womenswear': 'Womenswear',
    'category.thesis': 'Thesis',
    'category.collaboration': 'Collaboration',
    'category.graphicDesign': 'Graphic Design',
    'category.printDesign': 'Print Design',
    
    // Project Descriptions
    'project.1.description': 'A collection that explores the duality between protection and imprisonment through the iconography of the 17th-century plague doctor. The elongated silhouettes and architectural volumes recall the ceremonial robes of Venetian doctors, reinterpreted through the lens of Japanese avant-garde by Yohji Yamamoto and Rei Kawakubo. Absolute black dialogues with bone white, while the iconic masks transform into sculptural elements that fragment and redefine the body. The contemporary English tailoring approach meets Japanese deconstruction: deconstructed trench coats, complex layering, and asymmetrical draping create a narrative about the boundary between body and garment, individual and society. Modern technical materials merge with historical artisanal techniques, evoking a sense of elegant dystopia where protection becomes an aesthetic statement. A reflection on social distancing, isolation, and the mask as a second skin, translated into a wardrobe that is simultaneously armor and expressive liberation.',
    'project.2.description': '"Prisoners" is the title of my thesis, which finds expression in the theme of the uniform as a symbol of identity, discipline, and transformation. The basis is rooted in archive study, meticulously drawing on the historical context of various uniform trends, from military and naval to professional, while distancing itself from more contemporary and rebellious uniforms such as punk or grunge. Through the use of contemporary volumes and fits, fabrics as faithful as possible to those tied to tradition, and treatments and finishes, "Prisoners" aims to bring the authentic into the contemporary, without distorting it.',
    'project.3.description': 'The participation in the Albini project stems from the need to get involved and, through our collective imagination, give life to what would have been the first project entirely thought, structured and created by our minds. The starting point about this project was related to the study of a specific historical period: the \'700 on Anglo-Saxon soil. From here comes a real stream of consciousness that will soon lead us to mingle with historical roots also elements related to the literary and architectural field. In particular, a source of extreme inspiration for us was the novel "The Pillars of the Earth" by Ken Follet, whose nuances were in fact decisive for the creation of our project.',
    'project.4.description': 'Womenswear collection inspired by Japanese cyberpunk aesthetics. A dialogue between dystopian future and contemporary craftsmanship.',
    'project.5.description': 'The brand was born from a pure communicative need; the two reference concepts exist in the contrast between order and chaos, specifically identified by the rigor of brutalist architecture, an architectural movement that first expanded in the early 1950s in England, and by the disorder embodied in the concept of inner chaos, an intrinsic feeling that has been part of human beings since the origins.',
    'project.6.description': 'Development of patterns and prints for the Prigionieri collection, with a focus on experimental printing techniques.',
  },
  it: {
    // CV Page
    'cv.location': 'Roma, Italia',
    'cv.born': '01 - 01 - 2003, Roma, Italia',
    'cv.bio.short': 'Fashion Designer nato nel 2003 con un\'estetica pulita ma originale, particolarmente legato al mondo dell\'abbigliamento militare e d\'avanguardia, dall\'Inghilterra al Giappone. Forte spirito di dedizione al lavoro, collaborazione e leadership.',
    'cv.background.title': 'Biografia',
    'cv.background.text': 'Francesco Salvatori nasce a Roma il 1 gennaio 2003. Dopo aver completato gli studi presso il liceo scientifico statale Stanislao Cannizzaro, frequenta per un anno giurisprudenza all\'Università La Sapienza di Roma prima di scoprire la sua vera passione. Nel 2021 si iscrive all\'Istituto Europeo di Design, dove si specializza in Fashion Design, diplomandosi il 7 luglio 2025.',
    'cv.experience.title': 'Esperienza',
    'cv.experience.tabula': '"Tabula Rasa", IED x Cotonificio Albini 1876',
    'cv.work.title': 'Esperienza Lavorativa',
    'cv.work.present': '2025 - presente',
    'cv.work.vicino': 'Attualmente cameriere presso Vicino Enoteca, Largo Pannonia, 13',
    'cv.work.coalsa': 'Cameriere presso CO.AL.SA, Sabaudia, LT',
    'cv.skills.title': 'Competenze & Valori',
    'cv.skills.personal': 'Valori Personali',
    'cv.skills.personal.1': 'Problem solving',
    'cv.skills.personal.2': 'Responsabilità',
    'cv.skills.personal.3': 'Dedizione',
    'cv.skills.personal.4': 'Flessibilità',
    'cv.skills.personal.5': 'Cooperazione',
    'cv.skills.personal.6': 'Umiltà',
    'cv.skills.personal.7': 'Curiosità',
    'cv.skills.personal.8': 'Organizzazione',
    'cv.skills.personal.9': 'Puntualità',
    'cv.skills.professional': 'Competenze Professionali',
    'cv.skills.professional.1': 'Collezione Uomo',
    'cv.skills.professional.2': 'Collezione Donna',
    'cv.skills.professional.3': 'Collezione Maglieria',
    'cv.skills.professional.4': 'Collezione Sportswear',
    'cv.skills.professional.5': 'Ricerca Tessile',
    'cv.skills.professional.6': 'Modellistica',
    'cv.skills.professional.7': 'Ricerca Trend',
    'cv.contacts.title': 'Contatti',
    'cv.contacts.city': 'Città:',
    'cv.contacts.email': 'E-mail:',
    'cv.contacts.cell': 'Tel:',
    'cv.contacts.linkedin': 'Linkedin:',
    'cv.view.gallery': 'Vedi Galleria',
    
    // Portfolio Page
    'portfolio.title': 'Galleria',
    'portfolio.description': 'Una selezione curata dei miei progetti di moda più rappresentativi. Ogni collezione esplora l\'equilibrio tra forma e funzione, tradizione e innovazione contemporanea.',
    
    // Projects
    'project.1.title': 'Gladio - Collezione Menswear',
    'project.2.title': 'Prigionieri - Progetto di Tesi',
    'project.3.title': 'Tabula Rasa - IED x Albini 1876',
    'project.4.title': 'Akira - Collezione Womenswear',
    'project.5.title': 'Marcel - Progetto Graphic Design',
    'project.6.title': 'Prigionieri - Progetto Print Design',
    
    // Project Details
    'project.back': 'Torna alla Galleria',
    'project.year': 'Anno',
    'project.category': 'Categoria',
    'project.viewLookbook': 'Vedi Lookbook',
    'project.openLookbook': 'Apri Lookbook',
    'project.viewCollection': 'Vedi Collezione 3D',
    'project.viewGraphics': 'Vedi Galleria Grafica',
    'project.credits': 'Crediti',
    'project.uploadImage': 'Carica Immagine',
    'project.save': 'Salva',
    'project.saved': 'Salvato!',
    'project.scrollImages': 'Scorri per vedere le immagini',
    
    // Categories
    'category.menswear': 'Menswear',
    'category.womenswear': 'Womenswear',
    'category.thesis': 'Thesis',
    'category.collaboration': 'Collaboration',
    'category.graphicDesign': 'Graphic Design',
    'category.printDesign': 'Print Design',
    
    // Project Descriptions
    'project.1.description': 'Una collezione che esplora la dualità tra protezione e imprigionamento attraverso l\'iconografia del medico della peste del XVII secolo. Le silhouette allungate e i volumi architettonici ricordano le vesti cerimoniali dei medici veneziani, reinterpretate attraverso la lente dell\'avanguardia giapponese di Yohji Yamamoto e Rei Kawakubo. Il nero assoluto dialoga con il bianco osso, mentre le maschere iconiche si trasformano in elementi scultorei che frammentano e ridiscono il corpo. L\'approccio alla sartoria inglese contemporanea incontra la destrutturazione giapponese: giacche da trincea destrutturate, stratificazioni complesse e pieghe asimmetriche creano una narrazione sulla frontiera tra corpo e vestito, individuo e società. Materiali tecnici moderni si fondono con tecniche artigianali storiche, evocando un senso di distopia elegante dove la protezione diventa un\'affermazione estetica. Una riflessione sulla distanza sociale, l\'isolamento e la maschera come una seconda pelle, tradotta in un guardaroba che è contemporaneamente armatura e liberazione espressiva.',
    'project.2.description': '"Prigionieri" è il titolo della mia tesi, che si esprime nel tema dell\'uniforme come simbolo di identità, disciplina e trasformazione. La base si trova nell\'studio degli archivi, tracciando con cura il contesto storico di varie tendenze uniformi, da militari e navali a professionali, mantenendosi distante da uniformi più contemporary e ribelli come punk o grunge. Tramite l\'uso di volumi e taglie contemporanei, tessuti il più fedeli possibile a quelli legati alla tradizione e trattamenti e finiture, "Prigionieri" mira a portare l\'autentico nel contemporaneo, senza distorcerlo.',
    'project.3.description': 'La partecipazione al progetto Albini deriva dalla necessità di coinvolgersi e, attraverso l\'immaginazione collettiva, dare vita a ciò che sarebbe stato il primo progetto interamente pensato, strutturato e creato dalle nostre menti. Il punto di partenza di questo progetto era legato allo studio di un periodo storico specifico: il \'700 su suolo anglosassone. Da qui nasce un vero flusso di coscienza che presto ci porterà a mescolarci con le radici storiche anche elementi legati al campo letterario e architettonico. In particolare, una fonte di ispirazione estrema per noi è stata la novella "Le Colonne della Terra" di Ken Follett, le cui sfumature erano in effetti decisive per la creazione del nostro progetto.',
    'project.4.description': 'Collezione Womenswear ispirata all\'estetica cyberpunk giapponese. Un dialogo tra futuro distopico e artigianato contemporaneo.',
    'project.5.description': 'La marca è nata da una pura necessità comunicativa; i due concetti di riferimento esistono nel contrasto tra ordine e caos, specificamente identificati dalla rigorosa architettura brutalista, un movimento architettonico che si è esteso per la prima volta negli anni \'50 in Inghilterra, e dal disordine incarnato nel concetto di caos interno, un sentimento intrinseco che è stato parte degli esseri umani fin dagli origini.',
    'project.6.description': 'Sviluppo di modelli e stampi per la collezione Prigionieri, con un focus su tecniche di stampa sperimentali.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}