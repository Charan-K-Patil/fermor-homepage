import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo />
            <p className="footer-tag">Smart financial decisions for India.</p>
          </div>
          <nav aria-label="Product">
            <h4>Product</h4>
            <a href="#calculator">Calculator</a>
            <a href="https://fermor.in/calculators">All calculators</a>
            <a href="https://fermor.in/blogs">Blogs</a>
          </nav>
          <nav aria-label="Company">
            <h4>Company</h4>
            <a href="https://fermor.in/about">About</a>
            <a href="https://fermor.in/contact">Contact</a>
            <a href="https://twitter.com/fermor_in">Twitter</a>
          </nav>
          <nav aria-label="Legal">
            <h4>Legal</h4>
            <a href="https://fermor.in/privacy">Privacy policy</a>
            <a href="https://fermor.in/terms">Terms of use</a>
            <a href="https://fermor.in/about">Disclosures</a>
          </nav>
        </div>
        <p className="disclaimer">
          Fermor Technologies Pvt. Ltd. operates fermor.in, a financial calculator and education platform for Indian users. Fermor is not a SEBI-registered investment adviser and does not provide personalised financial, investment or tax advice. All figures on this page are illustrative; projected returns vary and are not guaranteed. This homepage is an independent design exercise.
        </p>
      </div>
    </footer>
  );
}
