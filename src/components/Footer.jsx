import { Link } from "react-router-dom";
import { contactDetails } from "../data/siteData";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main custom-footer-grid">
        <div className="site-footer__col site-footer__col--left">
          <span className="site-footer__contact-label">Contact Us</span>
        </div>
        <div className="site-footer__col site-footer__col--center">
          <div className="site-footer__brand-wrap">
            <div className="site-footer__brand">PORTFOLIO</div>
          </div>
        </div>
        <div className="site-footer__col site-footer__col--right">
          <div className="site-footer__info">
            <a href="https://instagram.com/janviradadiya" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="site-footer__ig-link">
              <svg width="26" height="26" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="30" height="30" rx="8" stroke="#171616" strokeWidth="2.2" fill="none"/>
                <circle cx="19" cy="19" r="7.5" stroke="#080808" strokeWidth="2.2" fill="none"/>
                <circle cx="26" cy="12" r="1.5" fill="#090909"/>
              </svg>
            </a>
            <a href="tel:9898708901" className="site-footer__phone">+91 9898708901</a>
            <a href="mailto:janviradadiya61@gmail.com" className="site-footer__email">janviradadiya61@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom custom-footer-bottom">
        <span className="site-footer__copyright">COPYRIGHTS © 2026, PORTFOLIO, ALL RIGHTS RESERVED.</span>
        <span className="site-footer__designer">Designed by Janvi</span>
      </div>
    </footer>
  );
}

export default Footer;
