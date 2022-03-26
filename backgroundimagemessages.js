(function() {
  var a = document.querySelector('.chatContent-3KubbW');
  var c = alert("Send a message of the image you want for your background. Then click on that image. Right click once the image is enlarged. Click copy image link. Once you do that rerun this script");
  var b = prompt("The message link you copied before running this script","");
  a.style.backgroundImage = "url("+b+")";
})();
