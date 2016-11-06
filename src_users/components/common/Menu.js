import React from "react";
import {Nav, NavItem} from "react-bootstrap";
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";

// Menu component
export default class Menu extends React.Component {
    // render
    render() {
        return (
            <Nav bsStyle="pills">
                <IndexLinkContainer to="/">
                    <NavItem>Home</NavItem>
                </IndexLinkContainer>
                <LinkContainer to="/user">
                    <NavItem>Users</NavItem>
                </LinkContainer>
                <NavItem href="http://redux-minimal.js.org/" target="_blank">
                    redux-minimal
                </NavItem>
            </Nav>
        );
    }
}