/*******************************************************************************
 *  1. check user agent
 *
 *
 * USE AS A LAST RESORT
 * sets some values based on navigator.userAgent, to make a modification based on OS or browser
 */
var checkUserAgent = () => {
    const userAgent = navigator.userAgent;
    if( userAgent.indexOf( 'Windows NT 6.1' ) > 0 ) {
        window.UA_WINDOWS = true;
    }
    if( userAgent.indexOf( 'Macintosh' ) > 0 ) {
        window.UA_MAC = true;
    }
    if( userAgent.indexOf( 'Internet Explorer' ) > 0 ) {
        window.UA_IE = true;
    }
    if( userAgent.indexOf( 'Firefox' ) > 0 ) {
        window.UA_FIREFOX = true;
    }
    if( userAgent.indexOf( 'Safari' ) > 0 && navigator.userAgent.indexOf( 'Chrome' ) < 1 ) {
        window.UA_SAFARI = true;
    }
     if( userAgent.indexOf( 'Chrome' ) > 0 ) {
        window.UA_CHROME = true;
    }
};

/*
 * fix for older versions of Windows Phone
 * fixes the size of virtual px vs real px.
 */
var msViewPortFix = () => {
    if ( navigator.userAgent.match( /IEMobile\/10\.0/ ) ) {
        const msViewportStyle = document.createElement( 'style' );
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.getElementsByTagName( 'head' )[ 0 ].
        appendChild( msViewportStyle );
    }
};


var getRandomIntInclusive = ( min, max ) => {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
};

export {
    msViewPortFix as msViewPortFix,
    getRandomIntInclusive as getRandomIntInclusive,
    checkUserAgent as checkUserAgent
};
