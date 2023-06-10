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
                <div id="button">
                    <a href="/Main">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Welcome
                    </a>
                </div>
            </header>
        );
    }
}
/**
 * The component that is the main
 */
class Main extends Application {
    render() {
        return <main></main>;
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
