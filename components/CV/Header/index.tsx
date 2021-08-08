/* eslint-disable @next/next/no-img-element */
import Logo from "assets/images/logos/logo-192x192.png";
import Image from "next/image";
import NextLink from "next/link";

const Header = () => {
    return (
        <>
            <header className="mobile-header-1">
                <div className="container">
                    <div className="menu-icon d-inline-flex mr-4">
                        <button>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
            <header className="desktop-header-1 d-flex align-items-start flex-column">
                <div className="site-logo button">
                    <NextLink href="/" passHref>
                        <a>
                            <Image src={Logo} alt="DoLT" width={33} height={33} />
                        </a>
                    </NextLink>
                </div>
                <nav>
                    <ul className="vertical-menu scrollspy">
                        <li className="active">
                            <a href="#home">
                                <i className="icon-home"></i>Home
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                <i className="icon-user-following"></i>About
                            </a>
                        </li>
                        <li>
                            <a href="#services">
                                <i className="icon-briefcase"></i>Services
                            </a>
                        </li>
                        <li>
                            <a href="#experience">
                                <i className="icon-graduation"></i>Experience
                            </a>
                        </li>
                        <li>
                            <a href="#works">
                                <i className="icon-layers"></i>Works
                            </a>
                        </li>
                        <li>
                            <a href="#blog">
                                <i className="icon-note"></i>Blog
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <i className="icon-bubbles"></i>Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="footer">
                    <span className="copyright">© 2021 TĐ.VN</span>
                </div>
            </header>
        </>
    );
};

export default Header;
