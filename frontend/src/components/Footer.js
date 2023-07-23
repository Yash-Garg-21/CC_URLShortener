import React from "react";

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container-fluid">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <p>
                <b>CodeClause</b> <span className="tag">v0.1 (alpha)</span>
              </p>
            </div>
            <div className="level-item">
              <small>
                Disclaimer: Under development project, links might break in
                future
              </small>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              Made with &hearts; by :
              <a
                href="https://github.com/Yash-Garg-21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Yash Garg</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
