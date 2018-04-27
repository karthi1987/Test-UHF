jQuery(document).ready(function(){
	//cache DOM elements
	var mainContent = $('.um-main-content'),
		header = $('.uhf-main-header'),
		sidebar = $('.um-side-nav'),
		sidebarTrigger = $('.nav-trigger'),
		topNavigation = $('.uhf-top-nav'),
		searchForm = $('.uhf-search'),
		accountInfo = $('.account');

	//on resize, move search and top nav position according to window width
	var resizing = false;
	moveNavigation();
	$(window).on('resize', function(){
		if( !resizing ) {
			(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
			resizing = true;
		}
	});

	//on window scrolling - fix sidebar nav
	var scrolling = false;
	checkScrollbarPosition();
	$(window).on('scroll', function(){
		if( !scrolling ) {
			(!window.requestAnimationFrame) ? setTimeout(checkScrollbarPosition, 300) : window.requestAnimationFrame(checkScrollbarPosition);
			scrolling = true;
		}
	});

	//mobile only - open sidebar when user clicks the hamburger menu
	sidebarTrigger.on('click', function(event){
		event.preventDefault();
		$([sidebar, sidebarTrigger]).toggleClass('nav-is-visible');
	});

	//click on item and show submenu
	$('.um-root-menu > a').on('click', function(event){
		var mq = checkMQ(),
			selectedItem = $(this);
	    /*Selected class added for mobile, tablet and desktop*/
		if( mq == 'mobile' || mq == 'tablet' ) {
			
			/* Do not prevent default click action for anchor tag if it doesn't have sub menu*/
			if($(event.target).siblings('.um-sub-menu').length) {
				event.preventDefault();
			}
			
			if( selectedItem.parent('li').hasClass('selected')) {
				selectedItem.parent('li').removeClass('selected');
			} else {
				sidebar.find('.um-root-menu.selected').removeClass('selected');
				accountInfo.removeClass('selected');
				selectedItem.parent('li').addClass('selected');
			}
		}
	});

	//click on account and show submenu - desktop version only
	accountInfo.children('a').on('click', function(event){
		var mq = checkMQ(),
			selectedItem = $(this);
		if( mq == 'desktop') {
			event.preventDefault();
			accountInfo.toggleClass('selected');
			sidebar.find('.um-root-menu.selected').removeClass('selected');
		}
	});

	$(document).on('click', function(event){
		if( !$(event.target).is('.um-root-menu a') ) {
			sidebar.find('.um-root-menu.selected').removeClass('selected');
			accountInfo.removeClass('selected');
		}
	});

	function checkMQ() {
		//check if mobile or desktop device
		return window.getComputedStyle(document.querySelector('.um-main-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
	}
	
	function delayedMoveNavigation() {
		var mq = checkMQ();
        
        if ( mq == 'mobile' && topNavigation.parents('.um-side-nav').length == 0 ) {
        	detachElements();
			topNavigation.appendTo(searchForm);
			searchForm.removeClass('is-hidden').prependTo(sidebar);
		} else if ( ( mq == 'tablet' || mq == 'desktop') &&  topNavigation.parents('.um-side-nav').length > 0 ) {
			detachElements();
			searchForm.insertAfter(header.find('.uhf-logo'));
			topNavigation.appendTo(header.find('.uhf-nav'));
		}
		checkSelected(mq);
		resizing = false;
	}

	function moveNavigation(){
		
		/* TODO need to fix this hack placed for Edge browser */
  		setTimeout(delayedMoveNavigation, 5);
		
	}

	function detachElements() {
		topNavigation.detach();
		searchForm.detach();
	}

	function checkSelected(mq) {
		//on desktop, remove selected class from items selected on mobile/tablet version
		if( mq == 'desktop' ) $('.um-root-menu.selected').removeClass('selected');
	}

	function checkScrollbarPosition() {
		var mq = checkMQ();
		
		if( mq != 'mobile' ) {
			var sidebarHeight = sidebar.outerHeight(),
				windowHeight = $(window).height(),
				mainContentHeight = mainContent.outerHeight(),
				scrollTop = $(window).scrollTop();

			( ( scrollTop + windowHeight > sidebarHeight ) && ( mainContentHeight - sidebarHeight != 0 ) ) ? sidebar.addClass('is-fixed').css('bottom', 0) : sidebar.removeClass('is-fixed').attr('style', '');
		}
		scrolling = false;
	}
 
	$(".um-root-menu").mouseenter(
	  function () {
		  var mq = checkMQ();
		if( mq != 'mobile' ) {
			$(this).siblings().removeClass("selected");
		}
	  }
	);

});