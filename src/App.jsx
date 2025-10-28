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
    title: "Impact of Mitacs Globalink Research Internship in Emerging Clinicians",
    excerpt: "I was particularly inspired by the master’s and PhD students, all of whom were women leading their projects with remarkable dedication...",
    category: "Research",
    date: "Mar 10, 2024",
    author: {
      name: "Nancy Ruíz",
      title: "M.D. Graduate, University of Guanajuato",
      initials: "NR",
      linkedin: "https://linkedin.com/in/nancy-ruiz-dominguez"
    },
    content: (
      <div>
        <p>
          Being awarded the Mitacs Globalink Research Internship in 2023 was a transformative experience that significantly contributed to my professional growth. During that summer, I joined the Oweida Lab (Radioimmunobiology Lab) at the Université de Sherbrooke, where I participated in projects investigating the role of radiotherapy and immune regulation in lung, head, and neck cancers. Although it wasn’t my first time working in a lab, it allowed me to deepen my understanding of how basic science can inform and guide clinical decisions.
        </p>
        <p>
          Working alongside graduate students and faculty, I learned to navigate the rhythm of scientific research, from troubleshooting experiments to interpreting results with precision and patience. The experience strengthened my technical and analytical skills, but more importantly, it taught me the value of perseverance and collaboration.
        </p>
        <p>
          Living and working in a different country also broadened my perspective. I was particularly inspired by the master’s and PhD students, all of whom were women leading their projects with remarkable dedication and confidence. Being surrounded by skilled female scientists and by a principal investigator who fostered an environment of respect and mentorship showed me the importance of representation and supportive leadership in research.
        </p>
        <p>
          Now, as I complete my medical degree with a social service internship at the HIV Clinic of the Instituto Nacional de Ciencias Médicas y Nutrición “Salvador Zubirán,” where I focus mainly on clinical and epidemiological research, I continue to apply what I learned through the Mitacs program, bridging clinical practice with scientific inquiry. This experience solidified my interest in academic medicine and inspired my path toward a medical residency in Internal Medicine next year.
        </p>
      </div>
    )
  },
  {
    id: 2,
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
    id: 3,
    title: "Chihuahua: Building a Global Innovation Ecosystem through Talent",
    excerpt: "Positioned between northern trade corridors and central agricultural regions, Chihuahua offers both geographic connectivity and...",
    category: "Innovation",
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
    id: 4,
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
  },
  {
    id: 5,
    title: "From Local Tests to National Transformation: The Strategic Logic Behind China’s Special Economic Zones",
    excerpt: "Concentrating the initial experiments in this southern cluster allowed...",
    category: "Geopolitics",
    date: "Oct 28, 2025",
    author: {
      name: "Joshua Avilés",
      title: "B.S. Graduate from the Technological University of Chihuahua BIS",
      initials: "JA",
      linkedin: "https://linkedin.com/in/josha07"
    },
    content: (
      <div>
        <p>
          Before China’s economic reforms began, the capitalist economies of Hong Kong and Macau played a decisive role in shaping the country’s vision for modernization. Under British and Portuguese administration, these territories operated as open, trade-driven financial hubs, characterized by low taxation, private property protection, and global market integration. Their success demonstrated the material benefits of market-oriented policies while remaining culturally and geographically intertwined with China’s southern coast. As the Chinese leadership observed the prosperity and dynamism of these cities it recognized the potential of controlled exposure to capitalist mechanisms as a catalyst for national development. This insight laid the intellectual and strategic groundwork for the establishment of Special Economic Zones (SEZs) on the mainland, where similar policies could be tested within a socialist framework.
        </p>
        <p>
          China’s SEZs, first established in the late 1970s and early 1980s in Shenzhen, Zhuhai, and Shantou, were conceived as experimental zones designed to introduce market-oriented reforms within a controlled environment. These zones offered preferential policies (including tax incentives, flexible regulatory frameworks, and open access to foreign investment) to attract capital, technology, and managerial expertise. By concentrating reforms in a limited geographic area, the government was able to test liberalization strategies, stimulate rapid industrialization, and build export-oriented economic hubs without exposing the entire nation to systemic risk.
        </p>
        <p>
          The selection of Shenzhen, Zhuhai, and Shantou was deliberate and geographically strategic. All three cities were in Guangdong Province, adjacent to Hong Kong and Macau, positioning them as natural gateways for foreign trade, investment, and knowledge transfer. Shenzhen, bordering Hong Kong, became the core testing ground for industrial and financial openness; Zhuhai, across from Macau, leveraged its tourism and light industry potential; and Shantou, with its strong links to the overseas Chinese diaspora, aimed to channel remittances and entrepreneurial capital from abroad. Concentrating the initial experiments in this southern cluster allowed for tighter central supervision and rapid policy adjustment while creating a competitive dynamic among the zones.
        </p>
        <p>
          The success of China’s SEZs in the early 1980s marked a decisive turning point in the nation’s economic transformation, demonstrating that socialist governance could coexist with capitalist enterprise. Encouraged by the rapid development of Shenzhen and its sister zones, the central government expanded the model to Open Coastal Cities such as Shanghai, Tianjin, and Xiamen by the mid-1980s, followed by the creation of development and high-tech zones throughout the Yangtze and Pearl River Deltas. By the 1990s, reforms had spread inland. The return of the Special Administrative Regions (SARs) of Hong Kong in 1997 and Macau in 1999, under the “One Country, Two Systems” framework, reinforced China’s reform path: both regions retained their capitalist economies, independent legal systems, and global financial networks, serving as proof of concept that economic pluralism could thrive under unified political authority. With this foundation, China’s accession to the World Trade Organization (WTO) in 2001 institutionalized market competition and foreign investment nationwide, consolidating the lessons of the SEZs and SARs into a national strategy for economic modernization and global integration.
        </p>
        <p>
          As of 2025, the three pioneering SEZs each reflect a distinct outcome of China’s reform journey. Shenzhen has grown into a global innovation hub, home to Huawei, Tencent, DJI, and BYD, leading in telecommunications, AI, and advanced manufacturing. Zhuhai has specialized in green energy, biopharmaceuticals, and precision electronics, with firms such as Gree Electric Appliances anchoring its industrial base. Shantou, while less dynamic, has revitalized its economy through textiles, plastics, and port logistics, promoting balanced, export-driven growth. Together, these cities demonstrate the power of localized experimentation, refining governance mechanisms and scaling successful models across China.
        </p>
      </div>
    )
  },
  {
    id: 6,
    title: "USMCA: Experimenting Regional Innovation and Integration in North America",
    excerpt: "Just as China’s zones transformed underdeveloped areas into engines of modernization, North America can...",
    category: "Geopolitics",
    date: "Oct 28, 2025",
    author: {
      name: "Joshua Avilés",
      title: "B.S. Graduate from the Technological University of Chihuahua BIS",
      initials: "JA",
      linkedin: "https://linkedin.com/in/josha07"
    },
    content: (
      <div>
        <p>
          The USMCA Test Zones initiative draws inspiration from China’s Special Economic Zones, which served as laboratories for reform and innovation before nationwide implementation. These zones demonstrated how localized experimentation could stimulate economic development, attract investment, and generate knowledge that could later be scaled across the country. Similarly, North America can adopt a philosophy of territorial experimentation, using strategically selected regions to pilot initiatives in technology, energy, agriculture, and workforce development before broader adoption.
        </p>
        <p>
          Within this framework, Chihuahua emerges as Mexico’s ideal candidate. The state combines industrial, agricultural, and academic capacities, providing a unique environment where innovation can thrive outside major metropolitan centers. Its geographic position—linking northern trade corridors with central agricultural regions—offers connectivity, access to logistics networks, and institutional flexibility. Chihuahua has a growing manufacturing base, particularly in automotive, aerospace, and electronics industries, which could serve as platforms for testing advanced production technologies and smart logistics solutions. The state’s universities and technical institutes also provide a strong foundation for workforce development programs, applied research, and innovation clusters. In renewable energy, Chihuahua’s solar and wind potential can be leveraged for pilot projects that integrate clean energy production with industrial and agricultural applications. By combining industrial capacity, academic expertise, and renewable energy potential, Chihuahua provides a comprehensive ecosystem for testing and scaling innovative programs.
        </p>
        <p>
          Canada can contribute through its Atlantic provinces and prairie regions, aligning with federal priorities to support development outside major metropolitan areas. The prairie provinces, Manitoba and Saskatchewan offer extensive agricultural expertise and energy infrastructure that can complement pilot initiatives in agri-tech, bioenergy, and clean energy integration. Atlantic provinces such as Nova Scotia, New Brunswick, and Prince Edward Island provide experience in small-scale industrial development, fisheries, and coastal energy projects. These regions are already a focus for federal initiatives aimed at strengthening rural economies, enhancing regional connectivity, and creating local innovation hubs. By pairing these areas with Chihuahua, Canada can participate in knowledge exchange and sector-specific experimentation, focusing on sustainability, technology adoption, and workforce training in regions that mirror Chihuahua’s scale and opportunities.
        </p>
        <p>
          In the United States, participation may be uneven due to differences in regional priorities, federal-level policy focus, and state-level variability. Interior and northern regions such as New Mexico, western Texas, the Upper Midwest, and parts of New England possess industrial, agricultural, and technological capacities compatible with Chihuahua’s ecosystem. Pilot programs could include renewable energy integration, digital logistics networks, advanced manufacturing, and workforce upskilling initiatives. By extending the focus beyond border cities, these regions allow for experimentation in areas with diverse economies, lower population density, and regional flexibility. Coordinating efforts across these U.S. regions can create a network of complementary test zones, capable of collaborating on cross-border initiatives while adapting to local policy environments and priorities.
        </p>
        <p>
          In conclusion, the USMCA Test Zones illustrate how North America can pursue integration through smaller, underutilized regions while complementing existing continental trade agreements. By piloting initiatives in energy, technology, agriculture, and workforce development, these zones act as laboratories for sustainable, inclusive growth. Flexible bilateral and multilateral collaboration at the regional level allows Mexico, Canada, and the United States to advance innovation even amid evolving federal-level policies, emphasizing adaptability, resilience, and regional leadership.
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
