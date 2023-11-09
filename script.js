var settingmenu=document.querySelector(".settings_menu");
var darkbtn=document.getElementById("#dark-btn");

function setting_menu_toggle()
{
    settingmenu.classList.toggle("settings_menu-height");
}
darkbtn.onclick=function(){
        darkbtn.classList.toggle(".dark-btn-on");
}