const array = [ //Az array tömb létrehozása.
    { //Az array 1.elemének a létrehozása.
        szerzo: "Balassi Bálint", //Értékadás az array 1.elem szerző tulajdonságának.
        korszak: "reformáció", //Értékadás az array 1.elem korszak tulajdonságának.
        szerelmek_1: "Losonczy Anna", //Értékadás az array 1.elem szerelmek_1 tulajdonságának.
        szerelmek_2: "Dobó Krisztina" //Értékadás az array 1.elem szerelmek_2 tulajdonságának.
    },
    { //Az array 2.elemének a létrehozása.
        szerzo: "Csokonai Vitéz Mihály", //Értékadás az array 2.elem szerző tulajdonságának.
        korszak: "felvilágosodás", //Értékadás az array 2.elem korszak tulajdonságának..
        szerelmek_1: "Vajda Juliána", //Értékadás az array 2.elem szerelmek_1 tulajdonságának..
    },
    { //Az array 3.elemének a létrehozása.
        szerzo: "Petőfi Sándor", //Értékadás az array 3.elem szerző tulajdonságának.
        korszak: "magyar romantika", //Értékadás az array 3.elem korszak tulajdonságának..
        szerelmek_1: "Mednyánszky Berta", //Értékadás az array 3.elem szerelmek_1 tulajdonságának.
        szerelmek_2: "Szendrey Júlia", //Értékadás az array 3.elem szerelmek_2 tulajdonságának.
    },
    { //Az array 4.elemének a létrehozása.
        szerzo: "Ady Endre", //Értékadás az array 4.elem szerző tulajdonságának.
        korszak: "20. század", //Értékadás az array 4.elem korszak tulajdonságának.
        szerelmek_1: "Léda", //Értékadás az array 4.elem szerelmek_1 tulajdonságának.
        szerelmek_2: "Csinszka" //Értékadás az array 4.elem szerelmek_2 tulajdonságának.
    }
]

const head = { //A fejléc objektum létrehozása.
    szerzo: "Szerző neve", //Értékadás az objektum szerző tulajdonságának.
    korszak: "Korszak", //Értékadás az objektum korszak tulajdonságának.
    szerelmek_1: "Szerelmek" //Értékadás az objektum szerelmek_1 tulajdonságának.
}

const table = document.createElement('table'); //Táblázat lértehozása.
document.body.appendChild(table); //Táblázat hozzáadása a dokumentumhoz.

const colgroup = document.createElement('colgroup'); //Colgroup létrehozása.
table.appendChild(colgroup); //Colgroup hozzáadása a táblázathoz.

const colSpan_1 = document.createElement('col'); //1.oszlop létrehozása.
colSpan_1.className = "columns"; //className megadása az 1.oszlopnak.
colgroup.appendChild(colSpan_1); //1.oszlop hozzáadása a Colgouphoz.

const colSpan_2 = document.createElement('col'); //2.oszlop létrehozása.
colgroup.appendChild(colSpan_2); //2.oszlop hozzáadása a Colgouphoz.

const colSpan_3 = document.createElement('col'); //3.oszlop létrehozása.
colSpan_3.className = "columns"; //className megadása a 3.oszlopnak.
colgroup.appendChild(colSpan_3); //3.oszlop hozzáadása a Colgouphoz.

const thead = document.createElement('thead'); //Fejléc létrehozása.
table.appendChild(thead); //Fejléc hozzáadása a táblázathoz.

const tr = document.createElement('tr'); //Fejlécben lévő sor létrehozása.
thead.appendChild(tr); //Fejlécben lévő sor hozzáadása a fejléchez.

const th_1 = document.createElement('th'); //A fejléc sorában lévő 1.cella létrehozása.
th_1.innerHTML = head.szerzo; //A cella tartalmának megadása az aktuális elem szerzőjének az értékével.
tr.appendChild(th_1); //A fejléc sorában lévő 1.cella hozzáadása a fejlécben lévő sorhoz.

const th_2 = document.createElement('th'); //A fejléc sorában lévő 2.cella létrehozása.
th_2.innerHTML = head.korszak; //A cella tartalmának megadása az aktuális elem korszakának az értékével.
th_2.className = "cell"; //className megadása az 2.oszlop 1.cellájának.
tr.appendChild(th_2); //A fejléc sorában lévő 2.cella hozzáadása a fejlécben lévő sorhoz.

const th_3 = document.createElement('th'); //A fejléc sorában lévő 3.cella létrehozása.
th_3.innerHTML = head.szerelmek_1; //A cella tartalmának megadása az aktuális elem szerelmek_1-nek az értékével.
tr.appendChild(th_3); //A fejléc sorában lévő 3.cella hozzáadása a fejlécben lévő sorhoz.
th_3.colSpan = 2; //A fejléc 3.cellának megadjuk, hogy 2 oszlopot csatoljon össze.

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

for(const currentElement of array) { //Végighaladás az arrayen, a currentElement az aktuális elem.
    const tr = document.createElement('tr'); //Egy új sor létrehozása a táblázatba.
    tbody.appendChild(tr); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

    const szerzo = document.createElement('td'); //Új cella létrehozása az adott sorban.
    szerzo.innerHTML = currentElement.szerzo; //A cella tartalmának megadása az aktuális elem szerzőjének az értékével.
    tr.appendChild(szerzo); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

    const korszak = document.createElement('td'); //Új cella létrehozása az adott sorban.
    korszak.innerHTML = currentElement.korszak; //A cella tartalmának megadása az aktuális elem korszakának az értékével.
    tr.appendChild(korszak); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

    const szerelmek_1 = document.createElement('td'); //Új cella létrehozása az adott sorban.
    szerelmek_1.innerHTML = currentElement.szerelmek_1; //A cella tartalmának megadása az aktuális elem szerelmek_1-nek az értékével.
    tr.appendChild(szerelmek_1); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.
    if(currentElement.szerelmek_2 === undefined){ //Ha a currentElement.szerelmek_2 egyenlő undefineddal, akkor végig megy az elágazáson.
        szerelmek_1.colSpan = 2; //Ha idáig lefut, akkor összevonjuk az szerelmek 2 oszlopát.
    }

    if(currentElement.szerelmek_2 !== undefined){ //Ha a currentElement.szerelmek_2 nem egyenlő undefineddal, akkor végig megy az elágazáson.
        const szerelmek_2 = document.createElement('td'); //Új cella létrehozása az adott sorban.
        szerelmek_2.innerHTML = currentElement.szerelmek_2; //A cella tartalmának megadása az aktuális elem szerelmek_2-nek az értékével.
        szerelmek_2.className = "columns"; //className megadása a szerelmek_2 cellának.
        tr.appendChild(szerelmek_2); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.
    }  
}