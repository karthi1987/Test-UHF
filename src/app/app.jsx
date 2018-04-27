//libs and utils
import 'babel-polyfill';
import React from 'react';
import { render }  from 'react-dom';
//shared
import Header from './header/header';
import Nav from './nav/nav';
import Footer from './footer/footer';

/*
 *  1. App (Root level component)
 *  2. App Provider and DOM Render
 */

/*
 * 1. App (root level component)
 */
class App extends React.Component {

    constructor( props ) {
        super( props );

        /*
         * set our default hostname
         */
        this.state = {
            siteHost: null
        };

        this.renderApp = this.renderApp.bind( this );
    }

    componentWillMount(){
        const siteName = document.location.host;
        if( siteName ) {
            this.setState({
                siteHost: siteName
            });
        }
    }

    renderApp(){
        const {
            siteHost
        } = this.state;

        const nonApprovedRoute = [ 'cvqfv56766.stage.lithium.com', 'community.stage.anaplan.com', 'community.anaplan.com' ];
        const canWeRunAllDom = nonApprovedRoute.indexOf( siteHost );
        if( canWeRunAllDom == -1 ) {
            return(
                <div className="app-wrapper">
                    <Header />
                    <Nav />
                    <Footer />
                </div>
            );
        } else {
            return(
                <div className="app-wrapper">
                    <Header />
                    <Nav />
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                { this.renderApp() }
            </div>
        );
    }
}

export default App;

/*
 * 2. App Provider and DOM Render
 *
 */
render(
    <App />,
    document.getElementById( 'app-root' )
);

