/* Copyright (c) 2024 John Bradley
	this code manages the interaction necessary for left side of the "keyword searching" pages.
	Keyword searching is implemented using the "fuse" engine: https://www.fusejs.io/
*/
let fuseDataItem = 0;
let fuse = null;

	
function doquerying(){
	let queryText = document.getElementById("bs_input").value.trim();
	if(queryText.length == 0)return;
	let frslt = fuse.search(queryText);
	let rslt = []
	frslt.forEach(dta => {
		rslt.push(dta["item"]);
	});
	currentList = rslt;
	showData(rslt, 0, itemTypeName+" items, filtered by <em>"+queryText+"</em>");
	return;
}

function setup(itemType, theList, itemNo, noCols){
	itemTypeName = itemType;
	numbCols = noCols;
	fullList = theList;
	fuseDataItem = itemNo;
	let fuseOptions = {
		ignoreLocation: true,
		useExtendedSearch: true,
		threshold: 0.0,
		keys: [
    		{ name: 'text', getFn: (item) => item[fuseDataItem] }]
	};
	fuse = new Fuse(theList, fuseOptions);
}


