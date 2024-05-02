/* Copyright (c) 2024 John Bradley
	this code manages activities in the right-hand display area for Browse and Keyword Search pages.
	It manages the somewhat complex tabular layout, and also provide functions for pagination.
*/


const maxLines = 50;
const buttonSurrounding = 4;
let firstLine = 0;
let currentBlock = 0;
let currentList = [];
let fullList = []
let itemTypeName = "";
let numbCols = 0;

function setCurrentList(list){ currentList = list; }

let itemRelativeURL="";

function setItemRelativeURL(url){itemRelativeURL = url;}

	
function displayItemTitle(id, title){
	let fullURL = itemRelativeURL+id+"/index.html";
	return '<a target="_blank" title="Show Details" href="'+fullURL+'">'+title+"</a>"
}

const personRelativeURL="../record/person/";
const venueRelativeURL="../record/venue/";
const troupeRelativeURL="../record/troupe/";

const personNames = getPersonNames();
const troupeNames = getTroupeNames();
const venueNames = getVenueNames();

function displayList(theList, nameSource, urlPrefix){
	if(theList.length == 0)return "...";
	let rslt = "";
	sep = "";
	theList.forEach(itm => {
	   rslt += sep + '<a target="_blank" title="Show Details" href="'+urlPrefix+itm+'/index.html">'+nameSource[itm]+"</a>";
	   sep = "; ";
	});
	return rslt;
}

function displayPersonList(personIDs){
	return displayList(personIDs, personNames, personRelativeURL);
}

function displayTroupeList(troupeIDs){
	return displayList(troupeIDs, troupeNames, troupeRelativeURL);
}

function displayVenueList(venueIDs){
	return displayList(venueIDs, venueNames, venueRelativeURL);
}

let buildRow = function (item) { };

function defineRowFunction(funct){
	buildRow = funct;
}

	
function buildRows(items, showBlock){
	if(items.length == 0)
		return "<tr><td colspan="+numbCols+"><center>Nothing was selected</center></td></tr>"
	let rslt = "";
	let startline = showBlock * maxLines;
	let endline = startline + maxLines-1;
	if(endline > items.length)endline = items.length-1;
	//items.forEach(event => {
	for(let i = startline; i <= endline; i++){
		rslt += buildRow(items[i]);
	}
	return rslt;
}

	
function moveTo(numb){
	window.scroll(0,0);
	showData(currentList, numb, "");
}
	
function makeButton(numb, label = numb + 1){
	return '<li><a href="javascript:moveTo('+numb+')">'+label+"</a></li>\n"
}
	
function buildNavigationDisplay(items, showBlock){ // 0 based showBlock
	// boy, this is ugly...
	let rslt = "";
	if(items.length == 0)return ""; // no items in the list: no need for this stuff
	let blockTotal = Math.floor(items.length/maxLines); // how many blocks are there?
	if(items.length % maxLines != 0)blockTotal++;
	if(blockTotal <= 1)return ""; // zero or one block: no need for this stuff
	let lastItem = (showBlock+1)*maxLines;
	if(lastItem > items.length) lastItem = items.length;
	if(showBlock != 0)rslt += makeButton(showBlock -1, "&#8249; Previous");
	let firstBlockButton = showBlock - buttonSurrounding;
	if(firstBlockButton > 0){
	   rslt += makeButton(0);
	   if(firstBlockButton >= 2) rslt += '<li class="s5">...</li>\n';
	}
	if(firstBlockButton < 0)firstBlockButton = 0;
	for(let i = firstBlockButton; i < showBlock; i++)
		rslt += makeButton(i);
	rslt += '<li class="s1">'+(showBlock+1)+"</li>\n"; // current block: no active button needed.
	let lastBlockButton = showBlock+buttonSurrounding+1;
	if(lastBlockButton > blockTotal-1)lastBlockButton = blockTotal;
	for(let i = showBlock+1; i < lastBlockButton; i++)
		rslt += makeButton(i);
	if(lastBlockButton < blockTotal){
	   if(lastBlockButton + 2 <= blockTotal)rslt += '<li class="s5">...</li>\n';
	   rslt += makeButton(blockTotal - 1);
	}
	if(showBlock != blockTotal - 1)rslt += makeButton(showBlock+ 1, "Next &#8250;");
	return rslt;
}

function buildPositionText(items, showBlock){
	if(items.length == 0)return ""; // no items in the list: no need for this stuff
	let blockTotal = Math.floor(items.length/maxLines); // how many blocks are there?
	if(items.length % maxLines != 0)blockTotal++;
	let lastItem = (showBlock+1)*maxLines;
	if(lastItem > items.length) lastItem = items.length;

	return "Listing items <strong>"+(showBlock*maxLines+1)+"</strong> to <strong>"+lastItem+"</strong>, page <strong>"+(showBlock+1)+"</strong> of <strong>"+blockTotal+"</strong>"
}
	
function showData(items, block, headingText){
	if(headingText != ""){
		let headingContents = headingText+" ("+items.length+")";
		let headingContainer = document.getElementById("headingText");
		headingContainer.innerHTML = headingContents;
	}
	let tabContents = buildRows(items, block);
	let tableContainer = document.getElementById("rslts");
	tableContainer.innerHTML = tabContents;
	
	let buttonContents = buildNavigationDisplay(items, block);
	let buttonContainer = document.getElementById("topbuttons");
	buttonContainer.innerHTML = buttonContents;
	buttonContainer = document.getElementById("bottombuttons");
	buttonContainer.innerHTML = buttonContents;

	let positionText = buildPositionText(items, block);
	let positionContainer = document.getElementById("topPositionLabel");
	positionContainer.innerHTML = positionText;
	positionContainer = document.getElementById("bottomPositionLabel");
	positionContainer.innerHTML = positionText;

}

function switchTo(htmlFile){
   window.location = "./"+htmlFile;
}

function init(){
	currentList = fullList;
	showData(currentList, 0, "Showing All "+itemTypeName+" Records");
}

