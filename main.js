"use strict";

window.onbeforeunload = function () {
	setTimeout(showPopup, 0);
	return 'Do you want?';
};

var showPopup = function() {
	var popupDiv;
	var popupDivs = document.getElementsByClassName('wrap');
	if (!popupDivs.length) {
    return;
	}
	popupDiv = popupDivs[0];
	popupDiv.classList.remove('hidden');
};

var hidePopup = function() {
	var popupDiv;
	var popupDivs = document.getElementsByClassName('wrap');
	if (!popupDivs.length) {
    return;
	}
	popupDiv = popupDivs[0];
	popupDiv.classList.add('hidden');
};
