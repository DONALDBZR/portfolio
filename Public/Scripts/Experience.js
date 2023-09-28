/**
 * The Application that is going to be rendered in the DOM
 */
class Application extends React.Component {
    render() {
        return [<Header />, <Main />, <Footer />];
    }
}
/**
 * The component that is the header
 */
class Header extends Application {
    render() {
        return (
            <header>
                <nav>
                    <div></div>
                    <div>
                        <div>
                            <a href="/About">About</a>
                        </div>
                        <div>
                            <a href="/Experience" class="active">
                                Experience
                            </a>
                        </div>
                        <div>
                            <a href="/Projects">Projects</a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
/**
 * The component that is the main
 */
class Main extends Application {
    render() {
        return (
            <main>
                <div>
                    <div>Andy Ewen Gaspard</div>
                    <div>Full-Stack Web Developer</div>
                    <div>I build applications and web-based applications.</div>
                </div>
                <div id="experienceBar">
                    <div>
                        <div>Jul - Present</div>
                        <div>
                            <div>Junior Software Developer - FinClub</div>
                            <div>
                                <p>
                                    Maintain and improve applications that are
                                    used internally by the company.
                                </p>
                            </div>
                            <div>
                                <div>JavaScript</div>
                                <div>PHP</div>
                                <div>Python</div>
                                <div>MySQL</div>
                                <div>Linux</div>
                                <div>ExpressJS</div>
                                <div>Selenium</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>2020 - Present</div>
                        <div>
                            <div>Freelance Full-Stack Web Developer</div>
                            <div>
                                <p>
                                    Deliver high-quality applications and
                                    web-based systems for various projects for
                                    clients including,{" "}
                                    <a
                                        href="https://www.sedeco.fr/"
                                        target="__blank"
                                    >
                                        SEDECO
                                    </a>
                                    ,{" "}
                                    <a
                                        href="http://rakatooassociatesltd.com/"
                                        target="__blank"
                                    >
                                        Rakatoo Associates
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="https://udm.ac.mu/fr/"
                                        target="__blank"
                                    >
                                        Université Des Mascareignes
                                    </a>
                                    .
                                </p>
                            </div>
                            <div>
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>JavaScript</div>
                                <div>PHP</div>
                                <div>MySQL</div>
                                <div>Linux</div>
                                <div>React</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Jun - Aug 2022</div>
                        <div>
                            <div>Associate Software Engineer - Agileum</div>
                            <div>
                                <p>
                                    Maintaining and improving systems such as{" "}
                                    <a
                                        href="https://supremecourt.govmu.org/"
                                        target="__blank"
                                    >
                                        Supreme Court System
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="https://eservices.mra.mu/"
                                        target="__blank"
                                    >
                                        E-Filing System
                                    </a>{" "}
                                    for their main client.
                                </p>
                            </div>
                            <div>
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>JavaScript</div>
                                <div>PHP</div>
                                <div>MySQL</div>
                                <div>Linux</div>
                                <div>React</div>
                                <div>Drupal</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Dec 2021 - Mar 2022</div>
                        <div>
                            <div>Junior Software Developer - RT Knits</div>
                            <div>
                                <p>
                                    Maintaining and improving their core
                                    production system.
                                </p>
                            </div>
                            <div>
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>JavaScript</div>
                                <div>PHP</div>
                                <div>MySQL</div>
                                <div>Mac</div>
                                <div>FileMaker</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="/Public/PDF/Resume.pdf" target="__blank">
                            View Full Resume
                        </a>
                    </div>
                </div>
            </main>
        );
    }
}
/**
 * The component that is the footer
 */
class Footer extends Application {
    render() {
        return (
            <footer>
                <div>
                    <a href="https://github.com/DONALDBZR">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
                <div>
                    <a href="https://www.facebook.com/Darkness4869">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/darkness_4869/">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/andy-gaspard/">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </footer>
        );
    }
}
// Rendering the page
ReactDOM.render(<Application />, document.body);
