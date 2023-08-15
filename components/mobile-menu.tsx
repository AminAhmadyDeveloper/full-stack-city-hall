import Image from 'next/image'

import logoBlack from "../assets/images/logo/logo-black.png";
import logoWhite from "../assets/images/logo/logo-white2.png";

export const MobileMenu = () => {
  return (
    <div className="popup-mobilemenu-area">
      <div className="inner">
        <div className="mobile-menu-top">
          <div className="logo">
            <a href="index.html">
              <Image className="dark-logo" src={logoBlack} alt="Logo Images" width={0} height={0} />
              <Image className="white-logo" src={logoWhite} alt="Logo Images" width={0} height={0} />
            </a>
          </div>
          <div className="mobile-close">
            <div className="icon">
              <i className="fal fa-times" />
            </div>
          </div>
        </div>
        <ul className="mainmenu">
          <li className="menu-item-has-children">
            <a href="#">Home</a>
            <ul className="axil-submenu">
              <li>
                <a href="index.html">Home Default</a>
              </li>
              <li>
                <a href="home-creative-blog.html">Home Creative Blog</a>
              </li>
              <li>
                <a href="home-seo-blog.html">Home Seo Blog</a>
              </li>
              <li>
                <a href="home-tech-blog.html">Home Tech Blog</a>
              </li>
              <li>
                <a href="home-lifestyle-blog.html">Home Lifestyle Blog</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Categories</a>
            <ul className="axil-submenu">
              <li>
                <a href="post-details.html">Accessibility</a>
              </li>
              <li>
                <a href="post-details.html">Android Dev</a>
              </li>
              <li>
                <a href="post-details.html">Accessibility</a>
              </li>
              <li>
                <a href="post-details.html">Android Dev</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Post Format</a>
            <ul className="axil-submenu">
              <li>
                <a href="post-format-standard.html">Post Format Standard</a>
              </li>
              <li>
                <a href="post-format-video.html">Post Format Video</a>
              </li>
              <li>
                <a href="post-format-gallery.html">Post Format Gallery</a>
              </li>
              <li>
                <a href="post-format-text.html">Post Format Text Only</a>
              </li>
              <li>
                <a href="post-layout-1.html">Post Layout One</a>
              </li>
              <li>
                <a href="post-layout-2.html">Post Layout Two</a>
              </li>
              <li>
                <a href="post-layout-3.html">Post Layout Three</a>
              </li>
              <li>
                <a href="post-layout-4.html">Post Layout Four</a>
              </li>
              <li>
                <a href="post-layout-5.html">Post Layout Five</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Pages</a>
            <ul className="axil-submenu">
              <li>
                <a href="post-list.html">Post List</a>
              </li>
              <li>
                <a href="archive.html">Post Archive</a>
              </li>
              <li>
                <a href="author.html">Author Page</a>
              </li>
              <li>
                <a href="about.html">About Page</a>
              </li>
              <li>
                <a href="maintenance.html">Maintenance</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="404.html">404 Page</a>
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>
        </ul>
        <div className="buy-now-btn">
          <a href="#">
            Buy Now <span className="badge">$15</span>
          </a>
        </div>
      </div>
    </div>
  );
};
