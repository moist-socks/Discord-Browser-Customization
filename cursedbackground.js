/* 
IMPORTANT HOW TO USE
DON'T COPY THIS PART

Send a message of the image you want for your background. Then click on that image. Right click once the image is enlarged. Click copy image link. Once you do that run this script
*/

(function() {
  var a = document.querySelector('.erd_scroll_detection_container');
  var b = prompt("The message link you copied before running this script","");
  a.style.backgroundImage = "url("+b+")";
  a.style.backgroundSize = "cover";
})();
