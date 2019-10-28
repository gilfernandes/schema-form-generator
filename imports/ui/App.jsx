import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './Home.jsx';
import FormRenderer from './FormRenderer.jsx';
import Sidebar from "./Sidebar";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {FormRendererTComb} from "./FormRendererTComb";
import {FormRendererTCombSchema} from "./FormRendererTCombSchema";

const App = () => (
    <div className="wrapper">
        <BrowserRouter>
            <Sidebar/>
            <div id="content" className="container">
                <div>
                    <Switch>
                        <Route component={Home}
                               key="Home"
                               path="/home"
                        />
                        <Route component={FormRenderer}
                               key="Form Renderer"
                               path="/formRenderer"
                        />
                        <Route component={FormRendererTComb}
                               key="Form Renderer TComb"
                               path="/formRendererTComb"
                        />
                        <Route component={FormRendererTCombSchema}
                               key="Form Renderer TComb"
                               path="/formRendererTCombSchema"
                        />
                    </Switch>

                </div>
            </div>
        </BrowserRouter>
    </div>
);

export default App;
