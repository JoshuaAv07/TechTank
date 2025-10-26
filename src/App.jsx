import { useState } from 'react'
import './App.css'
import { translations } from './translations.js'

// LinkedIn Icon Component
const LinkedInIcon = ({ className }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

// Article Card Component
const ArticleCard = ({ article, onClick }) => (
  <article className="article-card" onClick={() => onClick(article)}>
    <div className="article-header">
      <span className="article-category">{article.category}</span>
      <span className="article-date">{article.date}</span>
    </div>
    <h3 className="article-title">{article.title}</h3>
    <p className="article-excerpt">{article.excerpt}</p>
    <div className="article-author">
      <div className="author-avatar">
        <span>{article.author.initials}</span>
      </div>
      <div className="author-info">
        <p className="author-name">{article.author.name}</p>
        <p className="author-title">{article.author.title}</p>
      </div>
      <a 
        href={article.author.linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        className="linkedin-link"
        aria-label={`Visit ${article.author.name}'s LinkedIn`}
        onClick={(e) => e.stopPropagation()}
      >
        <LinkedInIcon className="linkedin-icon" />
      </a>
    </div>
  </article>
)

// Close Icon Component
const CloseIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

// Language Switcher Component
const LanguageSwitcher = ({ currentLang, onChange }) => (
  <div className="language-switcher">
    <button 
      className={currentLang === 'en' ? 'active' : ''}
      onClick={() => onChange('en')}
    >
      EN
    </button>
    <button 
      className={currentLang === 'es' ? 'active' : ''}
      onClick={() => onChange('es')}
    >
      ES
    </button>
    <button 
      className={currentLang === 'fr' ? 'active' : ''}
      onClick={() => onChange('fr')}
    >
      FR
    </button>
  </div>
)

// Contact Component
const Contact = ({ t }) => (
  <section id="contact" className="contact">
    <div className="container">
      <h2 className="section-title">{t.contact.title}</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-person">
            <div className="contact-avatar">
              <span>JA</span>
            </div>
            <div className="contact-details">
              <h3>Joshua Avilés</h3>
              <p className="contact-title">B.S. Development and Management of Software</p>
              <p className="contact-title">Technological University of Chihuahua BIS</p>
              <p className="contact-role">{t.contact.role}</p>
              <div className="contact-links">
                <a href="mailto:07020alexis@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span>07020alexis@gmail.com</span>
                </a>
                <a 
                  href="https://linkedin.com/in/josha07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <LinkedInIcon className="linkedin-icon" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-message">
          <h3>{t.contact.getInTouch}</h3>
          <p>{t.contact.message1}</p>
          <p>{t.contact.message2}</p>
        </div>
      </div>
    </div>
  </section>
)

// Article Detail Component
const ArticleDetail = ({ article, onClose }) => (
  <div className="article-detail-overlay" onClick={onClose}>
    <div className="article-detail-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={onClose} aria-label="Close article">
        <CloseIcon />
      </button>
      <div className="article-detail-header">
        <span className="article-category">{article.category}</span>
        <span className="article-date">{article.date}</span>
      </div>
      <h1 className="article-detail-title">{article.title}</h1>
      <div className="article-detail-author">
        <div className="author-avatar">
          <span>{article.author.initials}</span>
        </div>
        <div className="author-info">
          <p className="author-name">{article.author.name}</p>
          <p className="author-title">{article.author.title}</p>
        </div>
        <a 
          href={article.author.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-link"
          aria-label={`Visit ${article.author.name}'s LinkedIn`}
        >
          <LinkedInIcon className="linkedin-icon" />
        </a>
      </div>
      <div className="article-detail-body">
        {article.content}
      </div>
    </div>
  </div>
)

// Sample articles data
const articles = [
  {
    id: 1,
    title: "",
    excerpt: "",
    category: "Technology",
    date: "Oct 26, 2025",
    author: {
      name: "Manuel Sandoval",
      title: "MASc Student at the Concordia University",
      initials: "MS",
      linkedin: "https://www.linkedin.com/in/manuel-sandoval-eng"
    },
    content: (
      <div>
        <p>
          
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: "",
    excerpt: "",
    category: "Innovation, Education",
    date: "Mar 10, 2024",
    author: {
      name: "Nancy Ruíz",
      title: "",
      initials: "NR",
      linkedin: "https://linkedin.com/in/nancy-ruiz-dominguez"
    },
    content: (
      <div>
        <p>

        </p>
      </div>
    )
  },
  {
    id: 3,
    title: "",
    excerpt: "",
    category: "Academic Mobility",
    date: "Oct 25, 2025",
    author: {
      name: "Valentina Orozco",
      title: "",
      initials: "VO",
      linkedin: "https://linkedin.com/in/lvalentinaorozcob"
    },
    content: (
      <div>
        <p>
          
        </p>
      </div>
    )
  },
  {
    id: 4,
    title: "Cybersecurity in México and the Future: A Remark by Alejandro Rodriguez",
    excerpt: "In recent years, cyberattacks have surged worldwide, overwhelming governments, private companies, and critical infrastructure worldwide.",
    category: "Technology",
    date: "Oct 24, 2025",
    author: {
      name: "Alejandro Rodríguez",
      title: "B.S. Student at the Politechnic University of Yucatán",
      initials: "AR",
      linkedin: "https://linkedin.com/in/rodajrc"
    },
    content: (
      <div>
        <p>
          In recent years, cyberattacks have surged worldwide, overwhelming governments, private
          companies, and critical infrastructure worldwide. Cybersecurity is no longer an IT problem;
          a single incident can halt operations across hospitals, banks, transportation systems, or
          even entire cities.
        </p>
        <p>
          Traditionally, disruptions often stem from something as small as an IT human error: a
          misconfigured system or a weak password. Today, incidents have evolved, happening for
          an employee falling for a well-crafted phishing email, a zero-day bug discovered by a
          malicious threat actor, or an injected prompt to an AI agent that has access to nearly every
          resource in the organization. These attacks may be launched by an individual with
          advanced social-engineering skills or by a nation-state group with near-military-level
          capabilities (Google Cybersecurity Forecast 2025 report). The playing field is asymmetrical;
          defenders must protect everything, while attackers only need to find one opening.
        </p>
        <p>
          Mexico is currently the second most-targeted country for cyberattacks in Latin America
          (CrowdStrike 2025 Latin America Threat Landscape Report). Financial institutions, military
          agencies, and even small and medium-sized businesses have suffered breaches in recent
          years. Although awareness and regulation have grown, there remains a significant cultural
          and educational gap. Cybersecurity is still often dismissed as a purely technical specialty.
        </p>
        <p>
          The path forward is clear: cybersecurity must be democratized. Not because it is idealistic,
          but because it is necessary. This can be achieved by making it understandable, practical,
          and accessible to everyone. The outdated belief that it is a discipline reserved only for
          "technical people" must end.
        </p>
        <p>
          We now live in an environment of voice-activated homes and smart vehicles, where a
          simple voice command can unlock a door or open a gate. Our financial lives run on cloud
          platforms and mobile banking, where a brief disruption can cascade into economic
          paralysis. Artificial intelligence and autonomous agents are rapidly becoming part of daily
          life. And yet, they too can be manipulated, deceived, or hijacked in ways most users never
          anticipate.
        </p>
        <p>
          Today, nearly every person interacts with digital systems dozens of times a day, often
          without realizing it. That invisibility is precisely the problem. These systems can be
          exploited in seconds, which means every individual is both a potential target.
        </p>
        <p>
          Mexico’s long-term resilience depends on inclusive cybersecurity education starting from
          schools, responsible technology adoption across industries, and a cultural shift that treats
          digital security not as an option, but as a shared duty.
        </p>
      </div>
    )
  },
  {
    id: 5,
    title: "Chihuahua: Building a Global Innovation Ecosystem through Talent",
    excerpt: "Positioned between northern trade corridors and central agricultural regions, Chihuahua offers both geographic connectivity and...",
    category: "Geopolitics",
    date: "Oct 22, 2025",
    author: {
      name: "Joshua Avilés",
      title: "B.S. Graduate from the Technological University of Chihuahua BIS",
      initials: "JA",
      linkedin: "https://linkedin.com/in/josha07"
    },
    content: (
      <div>
        <p>
          Chihuahua’s innovation and entrepreneurship ecosystem has undergone a profound transformation in recent years. The region has established itself as a dynamic hub where academia, government, and industry converge to shape a future driven by technology, sustainability, and global collaboration. The collective efforts of initiatives such as Startup Chihuahua, Chihuahua Futura, and Escuelita Maker have laid the groundwork for an environment that fosters creativity, business formation, and the training of high-impact talent.
        </p>
        <p>
          Startup Chihuahua acts as the connective tissue of the local entrepreneurial community, facilitating networking, incubation, and acceleration for early-stage ventures. Chihuahua Futura extends this vision toward the city’s long-term development, integrating innovation into urban planning and positioning the city as a testbed for smart and sustainable technologies. Escuelita Maker complements these efforts by empowering young creators and technologists, introducing them to design thinking, prototyping, and problem-solving in an inclusive and accessible setting.
        </p>
        <p>
          The region’s emerging specialization in strategic sectors such as semiconductors and artificial intelligence has been strengthened through international collaborations. The semiconductor and AI training program in partnership with Taiwan exemplifies how Chihuahua is building bridges with global technology leaders. At the same time, the participation of local talent in initiatives such as the 200s Programs in Washington D.C., the AI Program in Arizona, and the UTCH Business Program in Wuhan, China, reinforces a vision of global integration. These experiences not only expand technical capabilities but also cultivate a generation of bilingual and multicultural entrepreneurs capable of competing in international markets.
        </p>
        <p>
          Institutions such as ICATECH have also aligned with global leaders like MIT through workshops and the MIT REAP program, bringing world-class innovation methodologies to the local context. These efforts are complemented by the continuous development of SMEs and regional forums that promote the exchange of knowledge and investment, strengthening the bridge between academic research, industrial application, and social impact.
        </p>
        <p>
          The ecosystem’s future lies in its ability to consolidate a collaborative network that connects each of these actors into a coherent strategy. Chihuahua must continue fostering environments where ideas can mature into companies, where talent can find purpose through innovation, and where local initiatives can engage with global value chains. This evolution requires not only technological infrastructure but also a vision that aligns educational programs, industrial needs, and international partnerships into a shared roadmap.
        </p>
        <p>
          In this vision, talent becomes the most strategic resource. The integration of global programs, local educational innovation, and a strong entrepreneurial spirit can transform Chihuahua into a model of regional development led by human capital. The state’s ongoing commitment to research, digitalization, and global connectivity suggests a future where Chihuahua is not only a center of production but also a center of creation — an ecosystem capable of exporting ideas, technology, and talent to the world.
        </p>
      </div>
    )
  },
  {
    id: 6,
    title: "How an internship program abroad can change the ideas for your future",
    excerpt: "1. Find the impact you want to make on others. \n 2. Align it to your personal and professional interests. \n3. Act.",
    category: "Academic Mobility",
    date: "Oct 25, 2025",
    author: {
      name: "Derek Alvarado",
      title: "B.S. Graduate from the Technological University of Chihuahua BIS",
      initials: "DA",
      linkedin: "https://linkedin.com/in/derek-alvarado-480707261"
    },
    content: (
      <div>
        <p>
          I'm an engineer in software development and for ever I had been told that anything beyond my 
          bachelors degree would not be of much value for my professional career. And throughout all my 
          years in university I believed that and I stood strong on my plan of obtaining my bachelors and 
          starting focusing on my professional development through employment. But now, here I am applying 
          for international masters programs and actively looking for the opportunity to be abroad and 
          plan/develop ways to be of impact in my areas of interest. That change of perspective came from 
          my limited but rich abroad personal and professional development experiences. I got impressed 
          with how closed of a perspective I had when I originally planned my career path. So, this is what 
          made me make a 180 degree turn on my "Going corporate to ensure a future" plan.
        </p>
        <p>
          I got the opportunity to be abroad in Washington DC for 3 months doing an internship and attending a 
          summer course at Johns Hopkins SAIS. I was also housed at the International Student house (ISH) of 
          Washington DC. Those experiences immediately let me know that personally it was all about 
          “being of impact” and “reaching others" rather than doing everything for myself. Here is how I came 
          to that conclusion.
        </p>
        <p>
          My internship experience was amazing but I could not really pursue my personal and professional 
          interests, and the scope of impact is way limited for projects that will only be used internally. 
          So I started questioning myself. Finally through the many people that I got to know at SAIS and ISH 
          I noticed that everyone had something in common. The impact they were trying to reach was aligned to 
          their personal and professional interests. That is when it clicked. If I wanted to design my 
          professional development plan I had to do the following:
        </p>
        <p><b>1. </b>Find the impact you want to make on others.</p>
        <p><b>2. </b>Align it to your personal and professional interests.</p>
        <p><b>3. </b>Act.</p>
        <p>
          That is how I ended up changing my  whole professional development plan, it all came from 
          the diverse points of view that come from leaving your home town. The part of it is that if 
          you love your home town you can always go back and be of impact over there. Almost nothing in 
          this life is a straight line but the plan mentioned previously makes me feel sure about every 
          step I take and has made my professional development journey more enjoyable.
        </p>
      </div>
    )
  }
]

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [language, setLanguage] = useState('en')

  const handleArticleClick = (article) => {
    setSelectedArticle(article)
  }

  const handleCloseArticle = () => {
    setSelectedArticle(null)
  }

  const t = translations[language]

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <h1 className="logo">TechTank Foundation</h1>
            <p className="tagline">Innovation • Education • Policy</p>
          </div>
          <div className="header-right">
            <nav className="nav">
              <a href="#about">{t.nav.about}</a>
              <a href="#articles">{t.nav.articles}</a>
              <a href="#contact">{t.nav.contact}</a>
            </nav>
            <LanguageSwitcher currentLang={language} onChange={setLanguage} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2 className="hero-title">{t.hero.title}</h2>
          <p className="hero-subtitle">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="about-content">
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="articles">
        <div className="container">
          <h2 className="section-title">{t.articles.title}</h2>
          <div className="articles-grid">
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} onClick={handleArticleClick} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact t={t} />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>{t.footer.copyright}</p>
          <p className="footer-subtitle">{t.footer.locations}</p>
        </div>
      </footer>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <ArticleDetail article={selectedArticle} onClose={handleCloseArticle} />
      )}
    </div>
  )
}

export default App
