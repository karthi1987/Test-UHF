/*
 * language and other constants for the entire react app are stored here
 * use a constant in the case that any plain text needs to be rendered that is not served from the database,
 * or to set global constanst for values used consistanly throught he app
 */

export const LOGIN = {
    DEFAULT_ERROR_MESSAGE: 'Something went wrong. Please contact Technical Support.'
};

export const HEADER = {
	BRAND_NAME_ONE: 'iSiteWatch',
	BRAND_NAME_TWO: 'Dashboard'
};

export const FILTER = {
	CHANNEL_FILTER_LABEL: 'Select channel',
	REGION_FILTER_LABEL: 'Select region',
	DISTRICT_FILTER_LABEL: 'Select district',
	AREA_FILTER_LABEL: 'Select area',
	OFFICE_FILTER_LABEL: 'Select office'
};

export const NAVIGATION = {
	MAXIMUM: 'Max Queue Time',
	AVERAGE: 'Avg Queue Time',
	QUEUE: 'In Queue Now',
	TRANSACTION_TIME: 'MTD Avg Exp',
    LOCATION_LEVEL_STRING:"(Territory):"
};

export const SCORECARD_MODULE = {
	TITLE: 'Scorecard',
    LEADERBOARD_TITLE: 'Leaderboard',
	TIMESTAMP_LABEL: 'Updated as of: ',
    DRILLDOWN_REPORT: 'Drilldown Report',
    NO_REPORT_MESSAGE: 'Drilldown Categories are unavailable at this time. Please reach out to your local Market Ops contact to either setup the Drilldown Category parameters or for future assistance'
};

export const MESSAGE_CENTER_MODULE = {
	TITLE: 'Message Center',
    LEARN_MORE: 'Learn More'
};

export const LEADERBOARD_MODULE = {
	TITLE: 'Leaderboard',
    RANKING_TITLE: 'Rep Ranking',
	END_DATE_LABEL: 'Ends',
	MESSAGE_TEXT: "Includes today's results",
	YOU: 'YOU'
};

export const AGENDA_VIEW = {
	BACK_TO_AGENDA: 'Back to Agenda'
};

export const BREAKPOINT = {
    DESKTOP: 1601,
    LAPTOP: 1281,
    LB: 1200,
    LARGE_TABLET: 992,
    TABLET: 767,
    MOBILE_LANDSCAPE: 550,
    MOBILE: 386
};

export const VALUE_TYPE_CHAR = {
    PCT: '%',
    CUR: '$'
};

export const LEADERBOARD_VIEW = {
    RANK_TITLE: 'My Rank',
    TERRITORY_SELECT: 'Select territory',
    RANK_TABLE_HEADER: 'Rank',
    CHANGE_TABLE_HEADER: 'Change',
    NAME_TABLE_HEADER: 'Name',
    TOTAL_TABLE_HEADER: 'Total',
    COMMENTS_TABLE_HEADER: 'Comments',
    LIKES_TABLE_HEADER: 'Likes',
    MOBILE_CHANGE_TABLE_HEADER: '+/-',
    LIKES_MODAL_HEADER_SINGLE_TEXT: 'Person ',
    LIKES_MODAL_HEADER_MULTIPLE_TEXT: 'People ',
    LIKES_MODAL_HEADER_LIKE_TEXT: 'like this',
    LIKES_MODAL_FIRST_TO_LIKE: 'Be the first to like this',
    COMMENTS_MODAL_HEADER_TEXT: 'Comments',
    FLAG_COMMENT_TEXT: 'Flag as inappropriate',
    COMMENT_FLAGGED_TEXT: 'Flagged',
    COMMENT_CONTROL_PLACEHOLDER: 'Write a comment...',
    COMMENT_BUTTON_TEXT: 'Comment',
    LIKE_BUTTON_TEXT: 'Like',
    UNLIKE_BUTTON_TEXT: 'Unlike',
    YOU: 'You',
    NO_LEADERBOARD_RESULTS: 'No Leaderboards Available.',
    ORDINAL_INDICATORS: {
        1: 'st',
        2: 'nd',
        3: 'rd'
    },
    CHANGE_CODE_ICON_NAMES: {
        E: 'static-arrow',
        I: 'positive-arrow',
        D: 'negative-arrow'
    },
    X_POS_1: 'left',
    X_POS_2: 'right'
};

export const TICKER = {
    STICKER: 'Ticker'
};

export const VIDEOS_VIEW = {
    ARCHIVED_TAB: 'Archived',
    CURRENT_TAB: 'Current',
    ADDED_LABEL: 'Added',
    DROPDOWN_LABEL: 'Select category',
    DROPDOWN_SELECT_ID: 'select category',
    DROPDOWN_ALL_ID: 'all categories',
    CURRENT_ID: 'C',
    ARCHIVED_ID: 'A'
};

export const FILTER_TYPEs = {
    GET_LEADERBOARD_CHANNEL_FILTERS: 'getLeaderboardChannelFilters',
    GET_LEADERBOARD_REGION_FILTERS: 'getLeaderboardRegionFilters',
    GET_LEADERBOARD_DISTRICT_FILTERS: 'getLeaderboardDistrictFilters',
    GET_LEADERBOARD_AREA_FILTERS: 'getLeaderboardAreaFilters',
    GET_LEADERBOARD_OFFICE_FILTERS: 'getLeaderboardOfficeFilters',
    GET_AGENDA_CHANNEL_FILTERS: 'getAgendaChannelFilters',
    GET_AGENDA_REGION_FILTERS: 'getAgendaRegionFilters',
    GET_AGENDA_DISTRICT_FILTERS: 'getAgendaDistrictFilters',
    GET_AGENDA_AREA_FILTERS: 'getAgendaAreaFilters',
    GET_AGENDA_OFFICE_FILTERS: 'getAgendaOfficeFilters',

    LOAD_LEADERBOARD_CHANNEL_FILTERS: 'loadLeaderboardChannelFilters',
    LOAD_LEADERBOARD_REGION_FILTERS: 'loadLeaderboardRegionFilters',
    LOAD_LEADERBOARD_DISTRICT_FILTERS: 'loadLeaderboardDistrictFilters',
    LOAD_LEADERBOARD_AREA_FILTERS: 'loadLeaderboardAreaFilters',
    LOAD_LEADERBOARD_OFFICE_FILTERS: 'loadLeaderboardOfficeFilters',
    LOAD_AGENDA_CHANNEL_FILTERS: 'loadAgendaChannelFilters',
    LOAD_AGENDA_REGION_FILTERS: 'loadAgendaRegionFilters',
    LOAD_AGENDA_DISTRICT_FILTERS: 'loadAgendaDistrictFilters',
    LOAD_AGENDA_AREA_FILTERS: 'loadAgendaAreaFilters',
    LOAD_AGENDA_OFFICE_FILTERS: 'loadAgendaOfficeFilters',

    CLEAR_LEADERBOARD_DRILLDOWN_FILTERS: 'clearLeaderboardDrilldownFilters',
    CLEAR_AGENDA_DRILLDOWN_FILTERS: 'clearLAgendaDrilldownFilters',

    RESET_LEADERBOARD_HIERARCHY_AND_FILTERS: 'resetLeaderboardHierarchyAndFilters',
    RESET_AGENDA_HIERARCHY_AND_FILTERS: 'resetAgendaHierarchyAndFilters'
};
export function ERRORs() {

    // if we have retail customer type use the following error message strings,
    // otherwise use the defaults for all other customer types.
    if (  GlobalAppState && GlobalAppState.redux && GlobalAppState.redux.lang.channel === '2016' ) {
        return {
            DEFAULT_MESSAGE: 'Please reach out to your local Market Ops. or End User Support contact.',
            AGENDA_VIEW_NO_RESULTS: 'No agenda results found.',
            LEADERBOARD_VIEW_NO_RESULTS: 'No Rep Ranking results found.',
            REP_RANKING_NO_RESULTS: 'No Rep Ranking results found.',
            QUICK_HITS_VIEW_NO_RESULTS: 'No quick hits results found.',
            VIDEOS_VIEW_NO_RESULTS: 'No video results found.',
            SCORECARD_MODULE_NO_RESULTS: 'No leaderboard results found',
            QUICK_HITS_MODULE_NO_RESULTS: 'No quick hits results found.',
            LEADERBOARD_MODULE_NO_RESULTS: 'No Rep Ranking results found.',
            MESSAGE_CENTER_MODULE_NO_RESULTS: 'No message center results found.'
        };
    } else {
        return {
            DEFAULT_MESSAGE: 'Please reach out to your local Market Ops. or End User Support contact.',
            AGENDA_VIEW_NO_RESULTS: 'No agenda results found.',
            LEADERBOARD_VIEW_NO_RESULTS: 'No leaderboard results found.',
            REP_RANKING_NO_RESULTS: 'No Rep Ranking results found.',
            QUICK_HITS_VIEW_NO_RESULTS: 'No quick hits results found.',
            VIDEOS_VIEW_NO_RESULTS: 'No video results found.',
            SCORECARD_MODULE_NO_RESULTS: 'No scorecard results found',
            QUICK_HITS_MODULE_NO_RESULTS: 'No quick hits results found.',
            LEADERBOARD_MODULE_NO_RESULTS: 'No leaderboard results found.',
            MESSAGE_CENTER_MODULE_NO_RESULTS: 'No message center results found.'
        };
    }

}
