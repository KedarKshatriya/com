import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/KedarKshatriya007">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kedar-kshatriya">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kays_writings/">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.github.com/KedarKshatriya">
                  <i class="fa fa-github"></i>
                </a>
              </li>
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2019 </li>
              <li>
                Design by <a title="Styleshout"> Kedar Kshatriya</a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
