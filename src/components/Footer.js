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
                <Link className="p-color" href="https://discord.gg/X7VTsN7G64">
                  /support
                </Link>
              </li>
              <li>
                <Link className="p-color" href="https://discord.gg/X7VTsN7G64">
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
            <Link className="p-color no-decoration" href="https://discord.gg/X7VTsN7G64">
              /support-server
            </Link>
            <Link
              target="_blank"
              className="p-color no-decoration"
              href="https://github.com/AaravMehta59/giva-landing/"
            >
              /source-code
            </Link>
            <Link className="p-color no-decoration" href="https://aaravm.me/">
              /aarav-mehta
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
                                                                    