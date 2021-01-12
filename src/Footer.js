import React from "react";
import "./styles.css";

const company = [
  "About us",
  "Careers",
  "Terms",
  "Privacy",
  "Interest Based",
  "Ads",
  "Ad Preferences",
  "Help"
];

const workWithUs = ["Authors", "Advertise", "Authors & ads blog", "API"];

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="company">
          <h2>COMPANY</h2>
          {company.map((link) => {
            return (
              <a key={link} href="">
                {link}
              </a>
            );
          })}
        </div>
        <div className="work-with-us">
          <h2>WORK WITH US</h2>
          {workWithUs.map((link) => {
            return (
              <a key={link} href="">
                {link}
              </a>
            );
          })}
        </div>
        <div className="connect">
          <h2>CONNECT</h2>
          <div className="links">
            <a href="">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="mobile-app">
          <p>© 2021 Goodbooks, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
