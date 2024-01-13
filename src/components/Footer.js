import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
            <ul>
              <li>
                <Link className="h-color" href="/">
                  Giva Bot
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <li>
                <Link className="p-color" href="#">
                  /support
                </Link>
              </li>
              <li>
                <Link className="p-color" href="#">
                  /discord-server
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              Created with ❤️ by{" "}
              <Link
                href="https://aaravm.me/"
                className="h-color no-decoration"
              >
                Aarav Mehta
              </Link>
            </p>
            <p className="p-color">{year} &copy; All rights reserved!</p>
          </div>
          <div className="footer-sec2-link">
            <Link className="p-color no-decoration" href="#">
              /support
            </Link>
            <Link
              target="_blank"
              className="p-color no-decoration"
              href="https://aaravm.me/404.html"
            >
              /source-code
            </Link>
            <Link className="p-color no-decoration" href="#">
              /privacy-policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
