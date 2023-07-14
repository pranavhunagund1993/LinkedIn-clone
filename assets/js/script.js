let profileMenu = document.getElementById('profileMenu');
let sideActivity = document.getElementById('sidebarActivity');
let moreLink = document.getElementById('showMoreLink');

// toggle menu
function toggleMenu() {
    profileMenu.classList.toggle('open-menu');
}

// toggle activity
function toggleActivity() {
    sideActivity.classList.toggle('open-activity');

    if(sideActivity.classList.contains("open-activity")) {
        moreLink.innerHTML = "Show less <b>-</b>";
    } else {
        moreLink.innerHTML = "Show more <b>+</b>";
    }
}