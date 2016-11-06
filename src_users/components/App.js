import React from "react";
import Menu from "./common/Menu";
import "../stylesheets/main.scss";

// App component
export default class App extends React.Component {
    // render
    render() {
        return (
            <div className="container">
                <header>
                    <Menu/>
                </header>
                <section>
                    {this.props.children}
                </section>
                <footer>
                    Simple users app built with {' '}
                    <a href="http://redux-minimal.js.org/" target="_blank">
                        redux-minimal
                    </a>
                </footer>
            </div>
        );
    }
}