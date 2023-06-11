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
                            <a href="/About" class="active">
                                About
                            </a>
                        </div>
                        <div>
                            <a href="/Experience">Experience</a>
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
                <div>
                    <p>
                        Back in 2016, I decided to try to develop a game to
                        entertain myself and tumbled head first into the
                        universe of coding where I learn different things.
                        Fast-forward to today where I take on projects for
                        clients as a freelance web developer.
                    </p>
                    <p>
                        My main focus these days is building products and
                        leading projects for clients. In my free time, I also
                        keep on polishing my skills by developing applications
                        that I will use on daily basis.
                    </p>
                    <p>
                        When I'm not at the computer, I'm usually spending time
                        travelling, sight-seeing, hanging out with my friends
                        and family or simply playing video games.
                    </p>
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
