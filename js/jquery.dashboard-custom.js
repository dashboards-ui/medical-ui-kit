/*------------------------------------------------------------------
jQuery document ready
-------------------------------------------------------------------*/
var $ = jQuery.noConflict();
$(document).ready(function () {
	"use strict";
	
	// Sidebar resize
	$(".sidebar-resize").on('click', function(e) { 
	    $(this).toggleClass('enlarge');
	    $("#sidebar").toggleClass('sidebar--dinamic');
		$(".sidebar-header__logo").toggleClass('logo--dinamic');
		$(".sidebar-menu").toggleClass('menu--dinamic');
		if ($( ".sidebar-menu__submenu" ).hasClass( "active" ) && $( "#sidebar" ).hasClass( "sidebar--dinamic" )) {
			$(".sidebar-menu__submenu.active").slideUp();
		}
		else {
			$(".sidebar-menu__submenu.active").slideDown();
		}
		
	});
	
	// Panel resize
	$(".settings").on('click', function(e) { 
	    $("#panel").addClass('section-panel--dinamic');
	});
	$(".panel-resize").on('click', function(e) { 
	    $("#panel").removeClass('section-panel--dinamic');
	});
	
	// Dropzone
	if (jQuery.isFunction(jQuery.fn.dropzone)) {
        $("#dropzone").dropzone({ 
		url: "/file/post",
		maxFiles:1		
		});
	}
	
	// Custom select
	if (jQuery.isFunction(jQuery.fn.select2)) {
		$('.custom-select').select2();
	}
	
	// Custom countdown
	if (jQuery.isFunction(jQuery.fn.countdown)) {
		$('#time-user1').countdown("2019/03/14", function(event) {
		  var totalHoursu1 = event.offset.totalDays * 24 + event.offset.hours;
		  $(this).html(event.strftime(totalHoursu1 + 'h %M m %S s'));
		});
		$('#time-user2').countdown("2019/03/15", function(event) {
		  var totalHoursu2 = event.offset.totalDays * 24 + event.offset.hours;
		  $(this).html(event.strftime(totalHoursu2 + 'h %M m %S s'));
		});
	}	

	
	// Custom range slider
	if (jQuery.isFunction(jQuery.fn.ionRangeSlider)) {	
		$(".js-slider").ionRangeSlider({
			skin: "round",
			min: 100,
			max: 1000,
			from: 550
		});
		$(".js-range-slider").ionRangeSlider({
			skin: "round",
		    type: "double",
			grid: true,
			min: 0,
			max: 1000,
			from: 200,
			to: 800,
			prefix: "$"
		});
	}
	

	
	// Date picker
	if (jQuery.isFunction(jQuery.fn.daterangepicker)) {	

		$('input[name="dates"]').daterangepicker();
	
		$('input[name="birthday"]').daterangepicker({
			autoUpdateInput: false,
			singleDatePicker: true,
			showDropdowns: true,
			minYear: 1901,
			maxYear: parseInt(moment().format('YYYY'),10)
		});

		$('input[name="timepicker"]').daterangepicker({
			singleDatePicker: true,
			timePicker: true,
			timePicker24Hour: true,
			timePickerIncrement: 15,
			locale: {
				format: 'MM/DD/YYYY H:mm'
			}
		});
		
		
		var start = moment().subtract(6, 'days');
		var end = moment();

		function cb(start, end) {
			$('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
		}

		$('#reportrange').daterangepicker({
			startDate: start,
			endDate: end,
			ranges: {
			   'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			   'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			   'This Month': [moment().startOf('month'), moment().endOf('month')],
			   'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			}
		}, cb);

		cb(start, end);


	  
	  
	  
	}
	
	// Swiper
	if (typeof Swiper == 'function') { 
		var swiper = new Swiper('.appointments', {
		  speed: 600,
		  slidesPerView: "auto",
		  spaceBetween: 0,
		  pagination: false,
		  navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		});
		
		var swipert = new Swiper('.timeline', {
		  speed: 600,
		  slidesPerView: "auto",
		  spaceBetween: 0,
		  pagination: false,
		  navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		});
	}
	
	// Custom scrollbar
	if (jQuery.isFunction(jQuery.fn.scrollbar)) {
		$('.timeline__grid').scrollbar();
		$('.messages__all').scrollbar();	
		$('.messages__detailed').scrollbar();
		$('.section-panel__content').scrollbar();
	}
	
	
	if (typeof Calendar == 'function') { 
	  var data = [
		{ eventName: 'Gastrointestinal radiology', calendar: 'Important', color: 'red', date: '08/02/2019' },
		{ eventName: 'Meeting with Dr. Bryan', calendar: 'Lessimportant', color: 'blue', date: '18/02/2019' },
		{ eventName: 'Interventional radiology', calendar: 'Important', color: 'red', date: '27/02/2019' },
		{ eventName: 'Meeting with Dr. Bryan', calendar: 'Lessimportant', color: 'blue', date: '27/02/2019' },
		{ eventName: 'Radiation oncology', calendar: 'Important', color: 'red', date: '02/03/2019' },
		{ eventName: 'Procedural dermatology', calendar: 'Important', color: 'red', date: '03/03/2019' },
		{ eventName: 'Interventional radiology', calendar: 'Important', color: 'red', date: '07/03/2019' },
		{ eventName: 'Breast imaging', calendar: 'Important', color: 'red', date: '15/03/2019' },
		{ eventName: 'Meeting with Dr. Sarah P.', calendar: 'Lessimportant', color: 'blue', date: '17/03/2019' },
		{ eventName: 'Procedural dermatology', calendar: 'Important', color: 'red', date: '21/03/2019' },
		{ eventName: 'Meeting with Dr. Allysia D.', calendar: 'Lessimportant', color: 'blue', date: '28/03/2019' },
		{ eventName: 'Meeting with Dr. Sarah P.', calendar: 'Lessimportant', color: 'blue', date: '28/03/2019' },
	  ];
	  var calendar = new Calendar('#taskscalendar', data);
	}
	
	// Mobile menu
	$(".mobile-menu").on('click', function(e) { 
		$(".st-burger-icon").toggleClass('st-burger-icon--transformed');
		$("#sidebar").toggleClass('sidebar--open');
	});
	$(".mobile-submenu").on('click', function(e) { 
		$(this).toggleClass('selected');
		$(".content-header__menu").toggleClass('active');
	});
	
	// Sidebar menu drop down accordion
	var Accordion = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;

			var links = this.el.find('.has-submenu');
			links.on('click', {
					el: this.el,
					multiple: this.multiple
			}, this.dropdown)

			
	}

	Accordion.prototype.dropdown = function(e) {
			var $el = e.data.el;
			var $this = $(this),
			$next = $(this).children(".sidebar-menu__submenu");
	
			$next.slideToggle();
			$this.toggleClass('open');
			$next.toggleClass('active');

			if (!e.data.multiple) {
					$el.find('.sidebar-menu__submenu').not($next).slideUp();
					$el.find('.sidebar-menu__submenu').not($next).removeClass('active');
					$('.sidebar-menu ul li').not($this).removeClass('open');
			};
	}
	var accordion = new Accordion($('.sidebar-menu'), false);

	
	// Dinamic sidebar on mouse enter
	$(".dashboard-wrap").on("mouseenter", ".sidebar--dinamic", function () {
		$("#sidebar").addClass('sidebar--dinamic-large');
		$(".sidebar-header__logo").addClass('logo--dinamic-show');
		$(".sidebar-menu").addClass('menu--dinamic-show');		
		$(".sidebar-menu ul li a b").each(function(i) {
			$(this).css('transition-delay', i/10+'s');
		});
		$(".sidebar-menu__submenu.active").slideDown();
	});	
	$(".dashboard-wrap").on("mouseleave", ".sidebar--dinamic", function () {
		$("#sidebar").removeClass('sidebar--dinamic-large');
		$(".sidebar-header__logo").removeClass('logo--dinamic-show');
		$(".sidebar-menu").removeClass('menu--dinamic-show');
		$(".sidebar-menu ul li a b").css('transition-delay', '0s');
		$(".sidebar-menu__submenu.active").slideUp();
	});
	
	
	
	// Drop down menu used in sections content
	$( ".content-header" ).on( "click", ".content-header__dropdown-activate", function(e) {
		$(".content-header__dropdown-activate").removeClass('selected');
		$(".content-header__menu").removeClass('active');
		$(".mobile-submenu").removeClass('selected');			
		
	    var dropdownid  = $(this).data("dropdown");
			if ($("#"+dropdownid).hasClass("active")){
				$("#"+dropdownid).removeClass('active');	
				$(this).removeClass("selected");				
			}
			else {
				$(".dropdown-menu").removeClass('active');
				$("#"+dropdownid).addClass('active');
				$(this).addClass("selected");
			}		
	});

	$(".content-header__dropdown").hover(function(){
		$(this).addClass("hovered");
	},function(){
		$(this).removeClass("hovered");
	});
	
	$( ".section--content" ).on( "click", ".has-dropdown", function(e) {
	    var dropdownid  = $(this).data("dropdown");
			if ($("#"+dropdownid).hasClass("active")){
				$("#"+dropdownid).removeClass('active');			
			}
			else {
				$(".dropdown-menu").removeClass('active');
				$("#"+dropdownid).addClass('active');
			}		
	});
	
	$(".dropdown-menu--content").hover(function(){
		$(this).addClass("hovered");
	},function(){
		$(this).removeClass("hovered");
	});

	
	$("body").click(function(e){   
		if(!$(e.target).is(".content-header__dropdown") &&!$(".content-header__dropdown").hasClass("hovered")){
			$(".dropdown-menu--header").removeClass('active');
			$(".content-header__dropdown-activate").removeClass('selected');				
		}
		if(!$(e.target).is(".has-dropdown") &&!$(".dropdown-menu--content").hasClass("hovered")){
			$(".dropdown-menu--content").removeClass('active');		
		}
	});
	
	
	// Notifications icon animation
	setInterval(function(){
        $('.content-header__notifications-icon').toggleClass('alert');
	}, 2000);
	$(".content-header__notifications-icon").hover(function(){
		$(this).addClass("alert");
	});
	
	// Switcher button
	$(".switcher__button").on('click', function(e) { 
	    $(this).toggleClass('switcher__button--enabled');	
	});
	
	
	// Modal login and signup
	$('.modal-toggle').on('click', function(e) {
	  e.preventDefault();
	  var modalopen = $(this).data("openpopup");
	  $('.modal--'+modalopen).toggleClass('modal--visible');

	});

	$('.modal__overlay--toggle').on('click', function(e) {
	  e.preventDefault();
	  $('.modal').removeClass('modal--visible');
	});
	
	// Messages
	$(".message__short").on('click', function(e) { 
		$('.message__short').removeClass('selected');
		$(this).toggleClass('selected');
	});
	
});