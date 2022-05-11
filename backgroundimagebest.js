document.querySelector('.app-3xd6d0').setAttribute('id','app');
var appMount = document.getElementById('app-mount');
var opacity = prompt('Opacity of discord (I.E. 0.7)');
var img = prompt('Background Image URL');
document.getElementById('app').style.opacity=opacity;
appMount.style.backgroundRepeat='no-repeat';
appMount.style.backgroundSize='cover';
appMount.style.backgroundImage = "url("+img+")";
