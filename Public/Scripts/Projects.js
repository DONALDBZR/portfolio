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
                        <a href="http://parkinston.ddns.net" target="__blank">
                            <div>
                                <div>
                                    <img src="/Public/Images/Parkinston.png" />
                                </div>
                                <div>
                                    <div>Online game analyzer</div>
                                    <p>
                                        A web application that allows a player
                                        of League of Legends or Player Unknown
                                        Battle Grounds to analyze his/her game
                                        performance as well as analyzing the
                                        game performance of his/her allies or
                                        opponents.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="project">
                        <a
                            href="https://omnitechbros.ddns.net"
                            target="__blank"
                        >
                            <div>
                                <div>
                                    <img src="/Public/Images/Extractio.png" />
                                </div>
                                <div>
                                    <div>YouTube Downloader</div>
                                    <p>
                                        A web application that allows anyone to
                                        currently download content from YouTube.
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
