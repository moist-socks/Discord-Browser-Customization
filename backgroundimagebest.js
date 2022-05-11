(function() {
    'use strict';
function wrapper() {
    document.querySelector('.app-3xd6d0').setAttribute('id','app');
    var appMount = document.getElementById('app-mount');
    var r = document.querySelector(':root');
    document.getElementById('app').style.opacity=0.7;
    appMount.style.backgroundRepeat='no-repeat';
    appMount.style.backgroundSize='cover';
    appMount.style.backgroundImage = "url('https://media.discordapp.net/attachments/937866705714159636/973784421436104704/unknown.png?width=1499&height=843')";
    r.style.setProperty('--background-primary', '#292b2f');
    r.style.setProperty('--background-secondary', '#292b2f');
    r.style.setProperty('--background-secondary-alt', '#292b2f');
    r.style.setProperty('--background-tertiary', '#292b2f');
}
setInterval(wrapper,100);
})();
