import "./App.css";
import im1 from "./assets/1.png";
import im2 from "./assets/2.png";
import im3 from "./assets/3.png";
import im4 from "./assets/4.png";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-inner">
          <nav className="hero-nav">
            <div className="brand">
              <div className="logo-dot" aria-hidden />
              <span>The Pearl</span>
            </div>
            <div className="nav-ctas">
              <a href="#features" className="nav-link">Features</a>
              <a href="#contact" className="nav-link">Contact</a>
              <a href="#brochure" className="btn-outline">Brochure</a>
            </div>
          </nav>
          <div className="hero-content">
            <div className="hero-text">
              <h1>Discover The Pearl</h1>
              <p className="lead">
                Luxury residences by <strong>Auro Realty</strong> — thoughtfully designed, centrally located, and crafted for lifelong comfort.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn-primary">Enquire Now</a>
                <a href="#brochure" className="btn-secondary">Download Brochure</a>
              </div>
              <ul className="hero-highlights">
                <li>Spacious 2-4 BHK apartments</li>
                <li>Rooftop amenities & landscaped gardens</li>
                <li>Starting ₹1.2Cr* | GST Included</li>
              </ul>
            </div>
            <div className="hero-card" aria-hidden>
              {[im1, im2, im3].map((img, i) => (
                <div className={`card-img card-${i}`} key={i}>
                  <img src={img} alt={`preview-${i}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="pearls">
            <span className="pearl p1" />
            <span className="pearl p2" />
            <span className="pearl p3" />
          </div>
        </div>
        <section id="info" className="info-section">
          <div className="info-card">
            <div><strong>Trade Name:</strong> AURO REALTY PRIVATE LIMITED</div>
            <div><strong>Legal Name:</strong> AURO REALTY PRIVATE LIMITED</div>
          </div>
        </section>
      </header>
      <main>
        <section id="features" className="features-section">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature"><img src={im1} alt="1" /></div>
            <div className="feature"><img src={im2} alt="2" /></div>
            <div className="feature"><img src={im3} alt="3" /></div>
            <div className="feature"><img src={im4} alt="4" /></div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your full name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="name@domain.com"/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell us what you're looking for"></textarea>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </section>
      </main>
      <footer className="footer-section">
        <p>📞 +91 96527 55020</p>
        <p>📍 Galaxy, 21st Floor, Wing A Plot No 1, Sy No 83/1, Opp IKEA Hyderabad Knowledge City, TSIIC Raidurg Panmaktha, Hitech City, Hyderabad, Telangana 500032</p>
        <p>GST Number: 36AAICM3245N1Z3</p>
      </footer>
    </div>
  );
}
export default App;