/* Copyright (c) 2024 John Bradley
	this code manages the rather complex operation of the left side of the Browse pages.
	Primarily, it provides facilities to enable facetted browsing.
*/

let myItems = [];
let myItemsIndex = {};

function facetSetup(itemType, theList, noCols){
	myItems = theList;
	myItemsIndex = buildItemIndex(myItems);

	itemTypeName = itemType;
	numbCols = noCols;
	fullList = theList;
}

function buildItemIndex(items){
	rslt = {};
	items.forEach(itm => {rslt[itm[0]] = itm});
	return rslt;
}

function makeIntersection(ary1, ary2){
	let rslt = ary1.filter(
    	(element) => ary2.includes(element));
	return rslt;
}

const facetData = getFacetData();
const facetDetails = facetData[1];

function setupHelp(){
	let tc = 0;
	facetDetails.forEach(topitm=> {
		let cc = 0;
		contItems = topitm[2];
		contItems.forEach(contitm=> {
			let htext = contitm[1]["h"];
			if(htext != ""){
				let ce = document.getElementById("h"+tc+"."+cc);
				ce.innerHTML=` <b class="g5" title="${htext}"></b>`;
			}
			cc++;
		});
		tc++;
	});
}

let facetSelectionStack = [
["","","",facetDetails,[],0]
];

function getCurrentFacetDetails(){
   return facetSelectionStack[facetSelectionStack.length-1][3];
}

function handleFacGrp(facGrp, fac){
	if(!facGrp[1]["i"]){
		dta = {t:facGrp[1]["t"], i:[]}
		return [facGrp[0], dta];
	};
	dta = {
		t: facGrp[1]["t"],
		i: facGrp[1]["i"].map(itm=>{
			intr = [];
			let lst = itm[1];
			let len = lst.length;
			if(lst[len-1] == -1){ // is this itm the one to ignore because it is currently selected?
				lst.pop();
			} else {
				intr = makeIntersection(fac[1], lst);
			}
			return [itm[0], intr];
		}).filter(itm=>{return itm[1].length > 0})
	};
	let rslt = [facGrp[0], dta];
	return rslt;
}

function buildFilteredDetails(fac){
	let rslt = []
	let current = getCurrentFacetDetails();
	current.forEach(itm => {
		let topitem = [itm[0], itm[1], itm[2].map(facGrp => {return handleFacGrp(facGrp, fac)})];
		rslt.push(topitem);
	});
	return rslt;
}

function createNewStackEntry(lvl, fct, cnt, fac){
	let curList = getCurrentFacetDetails()[lvl][2][fct][1]["i"][cnt][1];
	curList.push(-1); // to mark that this one should be ignored.
	facetSelectionStack.push([facetDetails[lvl][0], facetDetails[lvl][2][fct][0], getCurrentFacetDetails()[lvl][2][fct][1]["i"][cnt][0],
	    buildFilteredDetails(fac), fac,lvl]);
}

function buildListForDisplay(fac){
	newList = [];
	fac[1].forEach(itm => {newList.push(myItemsIndex[itm])});
	currentList = newList;
	return newList;
}

function displayFacet(lvl, fct, cnt){
	fac = getCurrentFacetDetails()[lvl][2][fct][1]["i"][cnt];
	newList = buildListForDisplay(fac);
	
	let contentElement = document.getElementById("searchtype");
	contentElement.style.display="none";
	contentElement = document.getElementById("midSearchHead");
	contentElement.style.display="block";
	
	contentElement = document.getElementById("i"+lvl+"."+fct);
	contentElement.style.display="none";
	
	createNewStackEntry(lvl, fct, cnt, fac);
	buildFacetLabels();
	restartFacetDisplay();
	
	showData(newList, 0, "Selected "+itemTypeName+" Items");
}

function doFacetPop(){
	facetSelectionStack.pop();
	if(facetSelectionStack.length == 1){
		restartFacets();
	} else {
		newList = buildListForDisplay(facetSelectionStack[facetSelectionStack.length-1][4]);
		buildFacetLabels();
		showData(newList, 0, "Selected "+itemTypeName+" Items");
	}
}

function restartFacets(){
	contentElement = document.getElementById("searchtype");
	contentElement.style.display="block";
	contentElement = document.getElementById("midSearchHead");
	contentElement.style.display="none";
	restartFacetDisplay();
	facetSelectionStack.length = 1;
	init();
	
}

function createFacetHTML(lvl, fct){
	let html = '<div class="valueslist">';
	let items = getCurrentFacetDetails()[lvl][2][fct][1]["i"];
	let midpoint = Math.floor(items.length / 2 );
	//let items1 = items.slice(0,midpoint+1);
	//let items2 = items.slice(midpoint+1, -1);
	html += '<ul class="u u1">\n';
	let cnt = 0;
	items.forEach(itm => {
		html +='<li><a onclick="displayFacet('+lvl+","+fct+","+cnt+')" title="click to apply this filter.">'+itm[0]+" ("+itm[1].length+")</a></li>\n";
		if(cnt == midpoint)html += '</ul>\n<ul class="u u2">\n';
		cnt ++;
	});
	html += "</ul></div>\n";
	return html;
}

function buildFacetLabels(){
	let first= true;
	let rslt = "";
	let cnt = 0;
	facetSelectionStack.forEach(itm => {
		cnt++;
		if(first)first = false;
		else {
			remve = "";
			if(cnt == facetSelectionStack.length)remve = '\n<a id="remove_button" class="t9 m2" title="Remove this as a filter" href="javascript:doFacetPop()">Remove</a>';
			label = {
				top: itm[0],
				mid: itm[1],
				bot: itm[2],
				sty: "m"+itm[5]
			}
			rslt += `<li class="peoplegroup ${label.sty}" style="font-size: 90%;">
		<h5>${label.top}</h5> &#8250;<br />${label.mid} &#8250; 
		<strong>${label.bot}</strong>${remve}
	</li>
`;
		}
	});
	
	let ele = document.getElementById("filterCount");
	ele.innerHTML = ""+(facetSelectionStack.length-1);
	
	ele = document.getElementById("active_filters");
	ele.innerHTML = rslt;
}

function restartFacetDisplay(){
	for(let i = 0; i < 4; i++){
		let ele = document.getElementById("i"+i);
		let ele2 = document.getElementById("oc"+i);
		ele.style.display="none";
		ele2.innerHTML="&nbsp;click to open";
		let facetList = facetDetails[i][2];
		for(let j = 0; j < facetList.length; j++){
			let contentElement = document.getElementById("i"+i+"."+j);
   			contentElement.style.display="none";
			let ele3 = document.getElementById("oc"+i+"."+j);
			ele3.title="Click to open facet panel";
		}
	}
}

function openCloseTopLevel(lvl){
   let contentElement = document.getElementById("i"+lvl);
   let displayMessageElement = document.getElementById("oc"+lvl);
   if(contentElement.style.display == "none"){
   		contentElement.style.display="block";
		displayMessageElement.innerHTML="&nbsp;click to close";
   } else {
   		contentElement.style.display="none";
		displayMessageElement.innerHTML="&nbsp;click to open";
   }
}


function openCloseFacet(lnk, lvl, facet){
   let contentElement = document.getElementById("i"+lvl+"."+facet);
   if(contentElement.style.display == "none"){
   		contentElement.style.display="block";
		lnk.title="Click to close facet panel";
		contentElement.innerHTML = createFacetHTML(lvl, facet);
   } else {
   		contentElement.style.display="none";
		lnk.title="Click to open facet panel";
   }
}

// to support data startup and Cufon fonts:

addEventListener("load", (event) => {
	init();

	setupHelp();

	Cufon.replace('.nvg a', {fontSize: '16px'});
	Cufon.replace('.nvl a', {fontSize: '14px'});
});

