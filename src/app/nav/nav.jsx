//libs
import React from 'react';
import $ from 'jquery';
//scss
import './nav.scss';

/*******************************************************************************
 *  1. NavItem
 */

/*
 * 1. Nav
 *
 * Nav holds the sideNav component
 * 
 */
class Nav extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			//To do: 
		};
	}

	componentDidMount(){
		const $rootMenu = $('li.um-root-menu');
		if( $rootMenu && $rootMenu.length > 0 ) {
			$rootMenu.on('mouseenter', function( event ) {
				let $menuItem = $(this);
				let	$submenuWrapper = $('> .um-sub-menu', $menuItem);
				// grab the menu item's position relative to its positioned parent
				let menuItemPos = $menuItem.position();
				// place the submenu in the correct position relevant to the menu item
				$submenuWrapper.css({
				  top: menuItemPos.top,
				  left: menuItemPos.left + Math.round($menuItem.outerWidth() * 1)
				});
			});
		}
	}

	render() {

		return(
			<div id="anaplan-menu">
			    <main className="um-main-content" id="um-left-nav">
			        <nav className="um-side-nav">
			            <ul className="left-nav">
			                <li className="um-home um-root-menu safety-orange"><a className="menu-icon" href="/">Home</a></li>
			                <li className="um-topics um-root-menu category-Topics robin-egg-blue"><a className="menu-icon" href="/t5/Topics/ct-p/Topics">Topics</a>
			                    <ul className="um-sub-menu">
			                        <li className="um-title"><a href="/t5/Topics/ct-p/Topics">Topics</a></li>
			                        <li><a href="/t5/Calculation-Functions/ct-p/CalculationFunctions">Calculation Functions</a></li>
			                        <li><a href="/t5/Modeling/ct-p/Modeling">Modeling</a></li>
			                        <li><a href="/t5/Dashboards-Visualization/ct-p/DV">Dashboards and Visualization</a></li>
			                        <li><a href="/t5/Data-Integration/ct-p/DI">Data Integration</a></li>
			                        <li><a href="/t5/Admin-Security/ct-p/AS"> Administration and Security</a></li>
			                        <li><a href="/t5/Importing-Exporting/ct-p/IE"> Importing and Exporting Data</a></li>
			                        <li><a href="/t5/Application-Lifecycle-Management/ct-p/ALM">Application Lifecycle Management</a></li>
			                        <li><a href="/t5/Extensions-Add-Ins/ct-p/ExtAdd">Extensions and Add-Ins</a></li>
			                        <li><a href="/t5/Bring-Your-Own-Key-BYOK/ct-p/BYOK">Bring Your Own Key</a></li>
			                        <li><a href="/t5/App-Hub/ct-p/APPHUB">App Hub</a></li>
			                        <li><a href="/t5/Topics/ct-p/Topics">All Topics</a></li>
			                    </ul>
			                </li>
			                <li className="um-training um-root-menu category-Training french-rose"><a className="menu-icon" href="/t5/Training/ct-p/Training">Training</a>
			                    <ul className="um-sub-menu">
			                        <li className="um-title"><a href="/t5/Training/ct-p/Training">Training</a></li>
			                        <li><a href="/t5/Start-Your-Anaplan-Journey/ct-p/Anaplan_Journey">Start Your Anaplan Journey</a></li>
			                        <li><a href="/t5/The-Anaplan-Way/ct-p/TAW">The Anaplan Way</a></li>
			                        <li><a href="https://community.anaplan.com/t5/Training-Classes/Upcoming-Classes-and-Registration-Anaplan-Enablement/ta-p/7592">Live Training Classes</a></li>
			                        <li><a href="/t5/Training-Classes/tkb-p/TrainingClasses">OnDemand Training Classes</a></li>
			                        <li><a href="/t5/Anaplan-Certified-Trainers/ct-p/ACT">Certified Trainers</a></li>
			                        <li><a href="/t5/Course-Forums/ct-p/CourseForums">Course Forums</a></li>
			                        <li><a href="https://learning.anaplan.com">Learning Center</a></li>
			                        <li><a href="/t5/Training/ct-p/Training">All Training</a></li>
			                    </ul>
			                </li>
			                <li className="um-masterAnaplanner um-root-menu category-maap iris-blue"><a className="menu-icon" href="/t5/Master-Anaplanner/ct-p/maap">Master Anaplanner</a></li>
			                <li className="um-newsNetworking um-root-menu category-NN citrus"><a className="menu-icon" href="/t5/News-Networking/ct-p/NN">News &amp; Networking</a>
			                    <ul className="um-sub-menu">
			                        <li className="um-title"><a href="/t5/News-Networking/ct-p/NN">News &amp; Networking</a></li>
			                        <li><a href="/t5/Platform-Updates/ct-p/Platform-Updates">Platform Updates</a></li>
			                        <li><a href="/t5/Anaplan-User-Groups/ct-p/usergroup1">Anaplan User Groups</a></li>
			                        <li><a href="/t5/Anaplan-Community/ct-p/COMM">Anaplan Community</a></li>
			                        <li><a href="/t5/User-Research-Program/ct-p/UserResearchProgram">User Research Program</a></li>
			                        <li><a href="/t5/Ask-Me-Anything/ct-p/anaplanAMA">Ask Me Anything</a></li>
			                        <li><a href="/t5/News-Networking/ct-p/NN">All News &amp; Networking</a></li>
			                    </ul>
			                </li>
			                <li className="um-support um-root-menu category-HLP deep-lilac"><a className="menu-icon" href="/t5/Support/ct-p/HLP">Support</a>
			                    <ul className="um-sub-menu">
			                        <li className="um-title"><a href="/t5/Support/ct-p/HLP">Support</a></li>
			                        <li><a href="/t5/Case-Portal/ct-p/CasePortal">Case Portal</a></li>
			                        <li><a href="/t5/HyperCare/ct-p/Hypercare">HyperCare</a></li>
			                        <li><a href="/t5/Anaplan-Support-Knowledge-Base/tkb-p/Support_KB">Support Knowledge</a></li>
			                        <li><a href="/t5/Anaplan-Support-Discussions/bd-p/Anaplan-Support-Discussions">Support Discussions</a></li>
			                        <li><a href="/t5/Known-Issues-and-Workarounds/bd-p/Known-Issue-Workarounds">Known Issues and Workarounds</a></li>
			                        <li><a href="/t5/Success-Accelerators/tkb-p/Success-Accelerators">Success Accelerators</a></li>
			                        <li><a href="/t5/Support/ct-p/HLP">All Support</a></li>
			                    </ul>
			                </li>
			                <li className="um-partners um-root-menu category-partner-portal alizarin"><a className="menu-icon" href="/t5/Partners/ct-p/partner-portal">Partners</a></li>
			                <li className="li-last-element um-anaplaEmployees um-root-menu category-emponboard royal-blue"><a className="menu-icon" href="/t5/Anaplan-Employees/ct-p/emponboard">Employees</a>
			                    <ul className="um-sub-menu">
			                        <li className="um-title"><a href="/t5/Anaplan-Employees/ct-p/emponboard">Employees</a></li>
			                        <li><a href="/t5/Employee-Onboarding/tkb-p/emponboarding">Employee Onboarding</a></li>
			                        <li><a href="/t5/Customer-First/ct-p/Anaplan_Customer_First">Customer First</a></li>
			                        <li><a href="/t5/Connections/ct-p/Connections">Connections</a></li>
			                        <li><a href="/t5/Reality-Based-Leadership/tkb-p/emprbl">Reality Based Leadership</a></li>
			                        <li><a href="/t5/Customer-Care-Center/ct-p/Customer-Care-Center">Customer Care Center</a></li>
			                        <li><a href="/t5/Customer-Success-Portal/ct-p/CS-Portal">Customer Success Portal</a></li>
			                        <li><a href="/t5/Formula-A/ct-p/pods">Formula A</a></li>
			                        <li><a href="/t5/Platform-Communications/ct-p/Platform-Communications">Platform Communications</a></li>
			                        <li><a href="/t5/Anaplan-Employees/ct-p/emponboard">All Employees</a></li>
			                    </ul>
			                </li>
			            </ul>
			        </nav>
			    </main>
			</div>
		);
	}
}

export default Nav;