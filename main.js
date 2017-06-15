"use strict";

window.onbeforeunload = function () {
	setTimeout(showPopup, 0);
	return 'Do you want?';
};

var showPopup = function() {
	document.body.innerHTML = '<div class="wrap"><div class="popup"></div></div>';
	//console.log('popup');
};
var closePopup = function() {
	onclick();
}