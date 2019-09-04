// declare your functions here...
// $('selector-goes-here')
// $('img') element selector
// $('.pics') class selector
// $('#baby-ninja') id selector

// $('ul li') select all lis in the ul

// $('parent-tag child-tag:first-child')
// $('div img:first-child');

// $("img[alt='the beatles making faces']");
// $('div:last');

// returns all p elements
function paragraphSelector() {
  return $('p');
}

// returns the last img in index.html
function lastImageSelector() {
  return $('img:last');
}

// returns all divs with class pics
function divSelector() {
  return $('.pics');
}