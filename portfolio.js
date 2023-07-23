
window.addEventListener('load', (event) => {

    const topBar = document.getElementById('topbar');

    window.addEventListener("scroll", () => {
        let y = window.scrollY;
        if (y >= 75){
            topBar.classList.add('fade');
        }
        else{
            topBar.classList.remove('fade');
        }
    });
    
});

function clicking(sound) {
    new Audio(sound).play();
}











