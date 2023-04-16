import React from "react";

type FooterProps = {
  showSearchHeader: boolean
}

const Footer = ({ showSearchHeader }: FooterProps) => {
  const scrollUp = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const element = document.querySelector("#header") as HTMLElement | undefined;
    element?.scrollIntoView();
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      {!showSearchHeader && (
        <div className="footer-moveup">
          <a onClick={scrollUp} href="#header" className="footer-moveup-btn">
            <span>
              Go up <i className="fas fa-arrow-circle-up"></i>
            </span>
          </a>
        </div>
      )}

      <ul className="footer-copyright">
        <li>
          &copy; {currentYear}{" "}
          <a
            href="https://www.jaesmadeit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JAES Made It
          </a>
        </li>
        <li>
          Made with{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ReactJS
          </a>{" "}
          +{" "}
          <a
            href="https://pixabay.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Pixabay{" "}
          </a>{" "}
          +{" "}
          <a
            href="https://github.com/jhonnierandrey/dasimaginare"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.jhonnierandrey.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            See more
          </a>
        </li>
        <li>
          <a
            href="https://www.buymeacoffee.com/jhonnierandrey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-coffee"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
