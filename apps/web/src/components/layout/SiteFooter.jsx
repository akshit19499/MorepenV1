import { Link } from "react-router-dom";
import { footerColumns, footerUsefulLinks, socialChannels } from "@morepen/shared";
import { asset } from "../../lib/assets.js";
import { SocialIcon } from "./SocialIcons.jsx";

function FooterLink({ link }) {
  if (link.href) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer">
        {link.label} ↗
      </a>
    );
  }
  return <Link to={link.path}>{link.label}</Link>;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" aria-label="Morepen home">
              <img src={asset("morepen-logo-40.png")} alt="Morepen. 40 years of excellence. The joy of growing together." />
            </Link>
            <p>
              Building today.
              <br />
              Transforming tomorrow.
            </p>
            <p>
              API expertise. Scientific ambition.
              <br />
              Long-term pharmaceutical partnerships.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div className="footer-col" key={column.heading}>
              <h4>{column.heading}</h4>
              {column.links.map((link) => (
                <FooterLink key={link.label} link={link} />
              ))}
            </div>
          ))}
          <div className="footer-col footer-social-col">
            <h4>Follow Morepen</h4>
            <div className="footer-social-icons" aria-label="Morepen social media channels - links will be activated later">
              {socialChannels.map((name) => (
                <SocialIcon key={name} name={name} />
              ))}
            </div>
            <div className="footer-social-label">Social channels shown for layout review; links will be activated later.</div>
            <h4 className="footer-mini-head">Useful links</h4>
            {footerUsefulLinks.map((link) => (
              <FooterLink key={link.label} link={link} />
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Morepen Laboratories Limited &nbsp; | &nbsp; Morepen Laboratories</div>
          <div>
            <Link to="/company">Company</Link> &nbsp; · &nbsp; <Link to="/api">API</Link> &nbsp; · &nbsp;{" "}
            <Link to="/cdmo">CDMO</Link> &nbsp; · &nbsp; <Link to="/investors">Investors</Link> &nbsp; · &nbsp;{" "}
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
