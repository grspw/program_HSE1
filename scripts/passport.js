const change = document.getElementById("change");
change.addEventListener("click", change_all);

function change_all() {
    const divs = document.querySelectorAll(".passport-container div");
    
    if (divs[2].textContent.trim() === "Полтаруха") {
        divs[0].textContent = "MVD po gorodu Moskve";
        divs[1].innerHTML = "01.01.2014&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;770-070";
        divs[2].textContent = "Poltarukha";
        divs[3].textContent = "Anna";
        divs[4].textContent = "Olegovna";
        divs[5].innerHTML = "fem. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 17.10.2007";
        divs[6].textContent = "g.Moskva";
    } else {
        divs[0].textContent = "МВД по городу Москве";
        divs[1].innerHTML = "01.01.2014&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;770-070";
        divs[2].textContent = "Полтаруха";
        divs[3].textContent = "Анна";
        divs[4].textContent = "Олеговна";
        divs[5].innerHTML = "жен &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 17.10.2007";
        divs[6].textContent = "гор. Москва";
    }
}