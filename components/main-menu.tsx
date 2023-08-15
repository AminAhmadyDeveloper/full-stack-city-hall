import { Fragment } from "react";
import Image from "next/image";
import darkLogo from "../assets/images/logo/logo-black.png";
import lightLogo from "../assets/images/logo/logo-black.png";

const mainMenu: {
  title: string;
  children?: {
    title: string;
  }[];
}[] = [
  {
    title: "صفحه اصلی",
  },
];

export const MainMenu = () => {
  return (
    <Fragment>
      <header dir="rtl" className="header axil-header  header-light header-sticky ">
        <div className="header-wrap">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12">
              <div className="logo">
                <a href="index.html">
                  <Image className="dark-logo" src={darkLogo} width={0} height={0} alt="Blogar logo" />
                  <Image className="light-logo" src={lightLogo} width={0} height={0} alt="Blogar logo" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 d-none d-xl-block">
              <div className="mainmenu-wrapper">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    {mainMenu.map((menu) => (
                      <Fragment key={menu.title}>
                        <li className={menu.children && menu.children.length > 0 ? "menu-item-has-children" : ""}>
                          <a href="#">{menu.title}</a>
                          {menu.children && menu.children.length > 0 && (
                            <ul className="axil-submenu">
                              {menu.children.map((childMenu) => (
                                <li key={childMenu.title}>
                                  <a className="hover-flip-item-wrapper" href="index.html">
                                    <span className="hover-flip-item">
                                      <span data-text="Home Default">Home Default</span>
                                    </span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      </Fragment>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-8 col-md-8 col-sm-9 col-12"></div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
