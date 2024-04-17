var test = 0;
const ocenka = () => {
    test = prompt("Оцени кота!!!!!!");
    if ((test < 0 || test > 10)) {
        alert("Ты вышел за пределы оценивания!!!!")
    }
    else {
        document.getElementById("num-text").style.display = "block";
        document.getElementById('num').textContent = test;
    }
};



const button1 = document.querySelector('#ocenka');

button1.addEventListener('click', ocenka);