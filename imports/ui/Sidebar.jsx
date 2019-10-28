import React from 'react';
import {Link, NavLink, BrowserRouter} from "react-router-dom";
import {withRouter} from 'react-router';

class Sidebar extends React.Component {
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Onepoint MDM</h3>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <NavLink to={'/home'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/formRenderer'}>Form Renderer</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/formRendererTComb'}>Form Renderer TComb</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/formRendererTCombSchema'}>Form Renderer TComb Schema</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(Sidebar);