// Search Bar

document.getElementById('search-mob').style.display = 'none';
function show() {
    let searchMob = document.getElementById("search-mob");
    searchMob.style.display = 'block';
    let searchIcon = document.getElementById("search-icon")
    if (searchMob.style.display === 'block'){
        searchIcon.style.display = 'none';
    }
}
