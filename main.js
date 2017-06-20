"use strict";

window.onbeforeunload = function () {
	setTimeout(showPopup, 0);
	return 'Do you want?';
};

var chooseItem = function(elem) {
	unChooseItem();
	var item;
	var items = document.getElementsByClassName('item');
	if (!items.length) {
		return;
	}
		switch(elem) {
	case "box2":
		item = items[0];
		item.classList.add('selected');
	break;
	case "box6":
		item = items[1];
		item.classList.add('selected');
	break;
	case "box4":
		item = items[2];
		item.classList.add('selected');
	break;
	}

};

var unChooseItem = function() {
	var item;
	var items = document.getElementsByClassName('item');
	if (!items.length) {
		return;
	}
	for (var i = 0; i < items.length; i++) {
	item = items[i];
	item.classList.remove('selected');
	}
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
