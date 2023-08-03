head=document.getElementById('head')
setInterval(
function () {
  var randomColor = Math.floor(Math.random()*(255-10)+10);
  document.body.style.backgroundColor = "#"+randomColor;
  var rand=["Rock the Party Baby","Lets Rock and Roll","On the floor Baby","Hit it hard Baby"];
  const data=Math.floor(Math.random()*4);
  head.innerHTML=rand[data]
},250);