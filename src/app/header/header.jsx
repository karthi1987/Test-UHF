//libs and utils
import React from 'react';
//scss
import './header.scss';

/*******************************************************************************
 *  1. Header
 */

const CONSTs = {
    formAction: 'https://community.anaplan.com/t5/forums/searchpage/tab/message',
    headerLogo: 'https://help.anaplan.com/anapedia/Content/img/AnaplanCommunity_logo.svg',
    searchSubmit: '/t5/forums/searchpage/tab/message'
}
/*
 * 1. Header
 */
export default class Header extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
        };
    }

    render() {

        return (
            <div id="anaplan-header" className="uhf-main-header">
                <header id="uhf-header">
                    <div className="uhf-content">
                        <a href="/" className="uhf-logo">
                            <img className="uhf-logo-img" src={ CONSTs.headerLogo } alt="Anaplan Community Logo" />
                        </a>
                        <div className="uhf-search is-hidden">
                            <form className="uhf-search-form" action={ CONSTs.searchSubmit }>
                                <input name="q" type="search" placeholder="Global Search" />
                                <button className="btn-search">
                                    <span className="search-anaplan"></span>
                                </button>
                            </form>
                        </div>
                        <a href="#0" className="nav-trigger">
                            <span></span>
                        </a>
                        <nav className="uhf-nav">
                            <div className="uhf-top-nav"></div>
                        </nav>
                        <div style={{"clear":"both"}}></div>
                    </div>
                </header>
            </div>
        );
    }
}
