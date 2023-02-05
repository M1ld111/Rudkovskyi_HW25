const buttonStart = document.getElementById("start");
const divSearch = document.getElementById("divSearch");
const inputSearch = document.getElementById("inputSearch");
const buttonSearch = document.getElementById("buttonSearch");

buttonStart.addEventListener("click", () => {
    divSearch.classList.toggle('hidden');
    buttonStart.classList.toggle('hidden');
})

function isHttp() {
    const link = inputSearch.value;
    const linkArray = link.split(":");
    console.log(linkArray); 
    if (linkArray.includes('http') === false) {
        return window.open(`https://${link}`, '_blank');
        // return console.log(`http://${link}`);
    } else {
        return window.open(link, '_blank');
        // return console.log(link);

    }
}
buttonSearch.addEventListener("click", () => {
    isHttp()
})