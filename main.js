"use strict";

window.onbeforeunload = function () {
	setTimeout(showPopup, 0);
	return 'Do you want?';
};

var showPopup = function() {
	console.log('popup');
};
