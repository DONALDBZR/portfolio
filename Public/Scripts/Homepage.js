/**
 * The Application that is going to be rendered in the DOM
 */
class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentDisplayed: false,
        };
    }
    /**
     * Hiding the Header to display the
     * @returns {void}
     */
    displayContent() {
        this.setState({ contentDisplayed: true });
    }
    render() {
        return [<Header />, <Main />, <Footer />];
    }
}
/**
 * The component that is the header
 */
class Header extends Application {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.state.contentDisplayed) {
            return (
                <header>
                    <div>Header</div>
                </header>
            );
        } else {
            return (
                <header>
                    <div id="button">
                        <button onClick={this.displayContent}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Welcome
                        </button>
                    </div>
                </header>
            );
        }
    }
}
/**
 * The component that is the main
 */
class Main extends Application {
    render() {
        if (this.state.contentDisplayed) {
            return (
                <main>
                    <div>Main</div>
                </main>
            );
        }
    }
}
/**
 * The component that is the footer
 */
class Footer extends Application {
    render() {
        return <footer></footer>;
    }
}
// Rendering the page
ReactDOM.render(<Application />, document.body);
