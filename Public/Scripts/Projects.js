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
                            <a href="/Experience">Experience</a>
                        </div>
                        <div>
                            <a href="/Projects" class="active">
                                Projects
                            </a>
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
                <div>
                    <div class="project">
                        <a
                            href="https://omnitechbros.ddns.net:591"
                            target="__blank"
                        >
                            <div>
                                <div>
                                    <img src="/Public/Images/Extractio.png" />
                                </div>
                                <div>
                                    <div>Extractio</div>
                                    <p>
                                        A web application that allows anyone to currently download content from YouTube.  Moreover, it retrieves the current weekly trend based on the usage of the application by the users.  Moreover, it provides an online media player to its users based on the contents that have been downloaded by them as well as access to some online radios.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="project">
                        <a
                            href="https://pypi.org/project/guara/"
                            target="__blank"
                        >
                            <div>
                                <div>
                                    <img src="/Public/Images/Guara.png" />
                                </div>
                                <div>
                                    <div>Guará</div>
                                    <p>
                                        It is a framework to build user-interface testing automation in Page Transactions pattern.  It is a Python package that allows the user to build a test suite for their user-interfaces.  It is a simple and easy-to-use package that allows the user to build a test suite for their user-interfaces.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div id="archive">
                        <a href="/Archive">View Full Project Archive</a>
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
