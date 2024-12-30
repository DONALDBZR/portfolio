/**
 * The Application that is going to be rendered in the DOM
 */
class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    year: 2024,
                    name: "Corporate Database Builder & Analyzer",
                    from: "Darkness4869",
                    technologiesUsed: [
                        "Python",
                        "Selenium",
                        "MySQL",
                        "React",
                    ],
                    link: "",
                    status: "Development",
                },
                {
                    year: 2024,
                    name: "FinCorp",
                    from: "Finance Club LTD",
                    technologiesUsed: [
                        "Python",
                        "Selenium",
                        "MySQL",
                    ],
                    link: "https://finclub.mu",
                    status: "Complete",
                },
                {
                    year: 2023,
                    name: "FinID",
                    from: "Finance Club LTD",
                    technologiesUsed: [
                        "Python",
                        "Selenium",
                        "MySQL",
                        "React",
                    ],
                    link: "https://finclub.mu",
                    status: "Complete",
                },
                {
                    year: 2023,
                    name: "FinClub",
                    from: "Finance Club LTD",
                    technologiesUsed: [
                        "ExpressJS",
                        "PHP",
                        "Flask",
                        "MySQL",
                        "Angular",
                        "React",
                        "Selenium",
                    ],
                    link: "https://finclub.mu",
                    status: "Complete",
                },
                {
                    year: 2023,
                    name: "Parkinston",
                    from: "Université Des Mascareignes",
                    technologiesUsed: ["PHP", "MySQL", "React"],
                    link: "https://github.com/DONALDBZR/GamingOrientedPlatform.local",
                    status: "Complete",
                },
                {
                    year: 2023,
                    name: "Stationery",
                    from: "SEDECO",
                    technologiesUsed: ["JavaScript", "PHP", "MySQL"],
                    link: "",
                    status: "Complete",
                },
                {
                    year: 2023,
                    name: "Extractio",
                    from: "Darkness4869",
                    technologiesUsed: [
                        "Python",
                        "MySQL",
                        "Flask",
                        "Selenium",
                        "React",
                    ],
                    link: "https://omnitechbros.ddns.net:591/",
                    status: "Complete",
                },
                {
                    year: 2022,
                    name: "Chat Application",
                    from: "Darkness4869",
                    technologiesUsed: ["PHP", "MySQL", "React"],
                    link: "https://github.com/DONALDBZR/chat",
                    status: "Development",
                },
                {
                    year: 2022,
                    name: "Supreme Court Portal",
                    from: "Agileum LTD",
                    technologiesUsed: ["PHP", "MySQL", "React", "Drupal"],
                    link: "https://supremecourt.govmu.org/",
                    status: "Complete",
                },
                {
                    year: 2022,
                    name: "E-Filing",
                    from: "Agileum LTD",
                    technologiesUsed: ["PHP", "MySQL", "React", "Drupal"],
                    link: "https://eservices.mra.mu/",
                    status: "Complete",
                },
                {
                    year: 2021,
                    name: "RT Knits Production System",
                    from: "RT Knits LTD",
                    technologiesUsed: ["FileMaker"],
                    link: "",
                    status: "Complete",
                },
                {
                    year: 2021,
                    name: "Educatio",
                    from: "Université Des Mascareignes",
                    technologiesUsed: ["PHP", "MySQL", "React"],
                    link: "https://github.com/DONALDBZR/LMS",
                    status: "Complete",
                },
                {
                    year: 2020,
                    name: "Rakatoo Associates Website",
                    from: "Rakatoo Associates LTD",
                    technologiesUsed: ["PHP", "React"],
                    link: "http://rakatooassociatesltd.com",
                    status: "Complete",
                },
            ],
        };
    }
    /**
     * Handling the status of the project
     * @param {string} status
     * @returns {HTMLElement}
     */
    handleStatus(status) {
        if (status == "Complete") {
            return <i class="fa-solid fa-check"></i>;
        } else {
            return <i class="fa-solid fa-spinner fa-spin"></i>;
        }
    }
    /**
     * Handling the link of the project
     * @param {string} link
     * @returns {HTMLElement}
     */
    handleLink(link) {
        if (link.includes("github")) {
            return (
                <a href={link} target="__blank">
                    <i class="fa-brands fa-github"></i>
                </a>
            );
        } else {
            return (
                <a href={link} target="__blank">
                    {link}
                </a>
            );
        }
    }
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
                <div>
                    <a href="/Projects">Andy Ewen Gaspard</a>
                </div>
                <div>All Projects</div>
            </header>
        );
    }
}
/**
 * The component that is the main
 */
class Main extends Application {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Name</th>
                            <th>Made At</th>
                            <th>Built With</th>
                            <th>Link</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map((project) => {
                            return (
                                <tr>
                                    <td>{project.year}</td>
                                    <td>{project.name}</td>
                                    <td>{project.from}</td>
                                    <td>
                                        <div>
                                            {project.technologiesUsed.map(
                                                (technology) => {
                                                    return (
                                                        <div>{technology}</div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </td>
                                    <td>{this.handleLink(project.link)}</td>
                                    <td>{this.handleStatus(project.status)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
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
