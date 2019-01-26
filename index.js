function getFirstSelector(selector){
  return document.querySelector(''+selector);
}
function nestedTarget(){
  return document.querySelector('div#nested div div div div.target');
}
function deepestChild(){
  var child = document.getElementById('grand-node').querySelectorAll('div');
  var deepest;
  for(let i = 0; i<child.length-1; i++){
    deepest = child[i].querySelector('div');
  }
  return deepest;
}
function increaseRankBy(n){
  let child = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for(let i = 0; i<child.length; i++){
    child[i].innerHTML = parseInt(child[i].innerHTML)+n;
  }
}
