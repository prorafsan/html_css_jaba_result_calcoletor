const rafsan = () => {
    let eng = document.getElementById('eng').value;
    let bng = document.getElementById('bng').value;
    let math = document.getElementById('math').value;
    let Islam = document.getElementById('Islam').value;
    let Greads = "";
    

    let tottleGried = parseFloat(eng) + parseFloat(bng) + parseFloat(math) + parseFloat(Islam);
    let persn = (tottleGried / 400) * 100;

    if (persn >= 80 && persn <= 100) {
        Greads = 'A+';
    } else if (persn >= 70 && persn <= 80) {
        Greads = 'A';
    } else if (persn >= 60 && persn <= 70) {
        Greads = 'B';
    } else if (persn >= 50 && persn <= 60) {
        Greads = 'C';
    } else if (persn >= 40 && persn <= 50) {
        Greads = 'D'
    }else if (eng == '' && bng == '' && math == '' && Islam == ''){
        Greads = 'Plass Enter Your Poin Nambar';
        tottleGried = 'Plss Enter Your Poin Nambar';
        persn = 'Plss Enter Your Poin Nambar';
    } else {
        Greads = 'F';
    }




document.getElementById('lasrcontent').innerHTML = `Out of 100 your tottle nambar ${tottleGried} and persent ${persn}% <br/> Gread ${Greads}`
}