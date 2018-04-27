//libs and utils
import React from 'react';

const CONSTs = {
    anaplanDotCom: 'https://anaplan.com',
    communityAnaplan: 'https://community.anaplan.com/',
    formAction: 'https://community.anaplan.com/t5/forums/searchpage/tab/message',
    footerLogo: 'https://help.anaplan.com/anapedia/Content/img/Anaplan_logo_white.svg',
    platformUpdates: '/t5/Platform-Updates/ct-p/Platform-Updates',
    anaplanNews: 'https://www.anaplan.com/news/',
    anaplanSupport: 'https://www.anaplan.com/support/',
    privacyPolicy: 'https://www.anaplan.com/privacy-policy/',
    termsOfUse: 'https://www.anaplan.com/terms-of-use/',
    cookiePolicy: 'https://www.anaplan.com/cookie-policy/',
    communityGuidelines: '/t5/Anaplan-Community/ct-p/COMM'
}

/*
 * 1. App Footer(root level component)
 */
class Footer extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {

        };
    }
    render() {
        return (
            <div id="anaplan-footer">
                <footer id="uhf-footer">
                    <div className="sub-element"></div>
                    <div className="uhf-links">
                        <div className="uhf-footer-logo">
                            <a href={ CONSTs.communityAnaplan } className="footer-logo">
                                <img className="footer-logo-img" src={ CONSTs.footerLogo } alt="Anaplan Logo" />
                            </a>
                        </div>
                        <div className="uhf-info">
                            <div className="uhf-info-elements">
                                <span className="unf-element anaplan-site">
                                    <a href={ CONSTs.anaplanDotCom }>Anaplan.com</a>
                                </span>
                                <span className="unf-element support">
                                    <a href={ CONSTs.anaplanSupport }>Support</a>
                                </span>
                                <span className="unf-element platform-updates">
                                    <a href={ CONSTs.platformUpdates }>Platform Updates</a>
                                </span>
                                <span className="unf-element news">
                                    <a href={ CONSTs.anaplanNews }>News</a>
                                </span>
                            </div>
                        </div>
                        <div style={{"clear":"both"}}></div>
                    </div>
                    <div className="uhf-copyright">
                        <div className="uhf-sub-elements">
                            <div className="anaplan-copyrights">
                                <span className="copyright-element rights-reserved">© 2018 Anaplan, Inc. All rights reserved.</span>
                                <span className="copyright-element privacy-rights">
                                    <a href={ CONSTs.privacyPolicy }>Privacy rights </a>
                                </span>
                                <span className="copyright-element terms-of-policy">
                                    <a href={ CONSTs.termsOfUse }>Terms of service</a>
                                </span>
                                <span className="copyright-element cookie-policy">
                                    <a href={ CONSTs.cookiePolicy }>Cookie policy</a>
                                </span>
                                <span className="copyright-element community-guidelines">
                                    <a href={ CONSTs.communityGuidelines }>Community guidelines</a>
                                </span>
                            </div>
                             <div style={{"clear":"both"}}></div>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
}

export default Footer;

