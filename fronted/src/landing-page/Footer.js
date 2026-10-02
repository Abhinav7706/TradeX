import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light border-top mt-5 pt-5 text-secondary" style={{ backgroundColor: '#fbfbfb' }}>
      <div className="container">
        {/* Main Grid: Brand Column + Navigation Links */}
        <div className="row g-4 pb-4">
          {/* Brand Info & Socials */}
          <div className="col-lg-4 col-md-6 col-12 pe-lg-4">
            <Link to="/" className="d-inline-block mb-3 text-decoration-none">
              <img src="media/images/logo.svg" alt="TradeX logo" style={{ width: "160px", height: "auto" }} />
            </Link>
            <p className="text-muted small lh-base mb-3">
              TradeX is India's next-generation discount brokerage and financial technology platform, pioneering zero-brokerage investments, ultra-low latency trading, and modern wealth-building tools.
            </p>
            <p className="text-muted small mb-3">
              &copy; 2020 - 2026, TradeX Technologies &amp; Broking Ltd.<br />All rights reserved.
            </p>
            
            {/* Social Media Links */}
            <div className="d-flex gap-2 align-items-center mt-3 mb-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="Twitter / X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noreferrer" className="social-icon-btn" title="Telegram">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="col-lg-2 col-md-3 col-6">
            <h6 className="text-dark fw-bold mb-3 fs-6">Company</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/product" className="footer-link">Products</Link></li>
              <li><Link to="/pricing" className="footer-link">Pricing &amp; Fees</Link></li>
              <li><a href="#referral" className="footer-link">Referral Program</a></li>
              <li>
                <a href="#careers" className="footer-link d-inline-flex align-items-center gap-1">
                  Careers <span className="badge bg-primary-subtle text-primary border border-primary-subtle" style={{ fontSize: '0.65rem' }}>Hiring</span>
                </a>
              </li>
              <li><a href="#tech" className="footer-link">TradeX.tech Blog</a></li>
              <li><a href="#press" className="footer-link">Press &amp; Media</a></li>
              <li><a href="#csr" className="footer-link">TradeX Cares (CSR)</a></li>
            </ul>
          </div>

          {/* Column 2: Support & Education */}
          <div className="col-lg-3 col-md-3 col-6">
            <h6 className="text-dark fw-bold mb-3 fs-6">Support &amp; Learning</h6>
            <ul className="list-unstyled">
              <li><Link to="/support" className="footer-link">Contact &amp; Support</Link></li>
              <li><Link to="/support" className="footer-link">Support Portal</Link></li>
              <li><a href="#connect" className="footer-link">TradeX Connect Blog</a></li>
              <li><Link to="/pricing" className="footer-link">List of Charges</Link></li>
              <li><a href="#downloads" className="footer-link">Downloads &amp; Forms</a></li>
              <li><a href="#varsity" className="footer-link">Varsity Mobile App</a></li>
              <li><a href="#videos" className="footer-link">Video Tutorials</a></li>
              <li><a href="#market" className="footer-link">Market Overview</a></li>
            </ul>
          </div>

          {/* Column 3: Trading & Accounts */}
          <div className="col-lg-3 col-md-6 col-12">
            <h6 className="text-dark fw-bold mb-3 fs-6">Account &amp; Trading</h6>
            <ul className="list-unstyled mb-4">
              <li><Link to="/signup" className="footer-link fw-semibold text-primary">Open an Account &rarr;</Link></li>
              <li><a href="#funds" className="footer-link">Instant UPI Fund Transfer</a></li>
              <li><a href="#challenge" className="footer-link">60-Day Challenge</a></li>
              <li><a href="#ipo" className="footer-link">IPO Bidding with UPI</a></li>
              <li><a href="#gold" className="footer-link">Sovereign Gold Bonds (SGB)</a></li>
            </ul>

            {/* Quick Badges */}
            <div className="bg-white p-3 rounded-3 border shadow-sm">
              <span className="text-muted small d-block mb-2 fw-semibold">Regulated &amp; Verified by</span>
              <div className="d-flex flex-wrap gap-1">
                <span className="badge bg-light text-dark border">NSE</span>
                <span className="badge bg-light text-dark border">BSE</span>
                <span className="badge bg-light text-dark border">MCX</span>
                <span className="badge bg-light text-dark border">CDSL</span>
                <span className="badge bg-light text-dark border">SEBI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Legal Compliance Block */}
        <div className="border-top pt-4 mt-2 mb-4" style={{ fontSize: '0.78rem', lineHeight: '1.6', color: '#64748b' }}>
          <p className="mb-2">
            <strong>TradeX Broking &amp; Technologies Ltd.:</strong> Member of NSE, BSE &amp; MCX &ndash; SEBI Registration no.: <span className="text-dark fw-medium">INZ000031633</span>. CDSL/NSDL: Depository services through TradeX Broking Ltd. &ndash; SEBI Registration no.: <span className="text-dark fw-medium">IN-DP-431-2019</span>. Registered Office Address: TradeX Towers, #153/154, 4th Cross, Dollars Colony, Financial District, Bengaluru - 560078, Karnataka, India.
          </p>
          <p className="mb-2">
            For any complaints pertaining to securities broking please write to <a href="mailto:complaints@tradex.com" className="text-decoration-none text-primary">complaints@tradex.com</a>, and for DP related queries to <a href="mailto:dp@tradex.com" className="text-decoration-none text-primary">dp@tradex.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
          </p>
          <p className="mb-2">
            <strong>Procedure to file a complaint on SEBI SCORES:</strong> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, Email ID. Benefits: Effective Communication, Speedy redressal of grievances. Smart Online Dispute Resolution | Grievances Redressal Mechanism.
          </p>
          <p className="mb-2 text-dark fw-semibold">
            &ldquo;Investments in securities market are subject to market risks; read all the related documents carefully before investing.&rdquo;
          </p>
          <p className="mb-0">
            <strong>Attention Investors:</strong> 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your email and phone number with your stock broker / depository participant and receive OTP directly from depository on your email and/or mobile number to create pledge. 3) Prevent unauthorized transactions in your account. Receive information of transactions directly from Exchange at the end of the day.
          </p>
        </div>

        {/* Bottom Legal Navigation Bar */}
        <div className="border-top py-3 d-flex flex-wrap justify-content-between align-items-center gap-2">
          <div className="d-flex flex-wrap gap-3">
            <a href="#nse" className="footer-legal-link">NSE</a>
            <a href="#bse" className="footer-legal-link">BSE</a>
            <a href="#mcx" className="footer-legal-link">MCX</a>
            <a href="#terms" className="footer-legal-link">Terms &amp; Conditions</a>
            <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
            <a href="#disclosure" className="footer-legal-link">Risk Disclosure</a>
            <a href="#charter" className="footer-legal-link">Investor Charter</a>
            <a href="#cyber" className="footer-legal-link">Cybersecurity</a>
          </div>
          <div className="text-muted small">
            Designed with <span className="text-danger">&hearts;</span> for Indian Traders &bull; <span className="text-dark fw-semibold">TradeX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;