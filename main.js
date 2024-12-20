

const header = { //A fejléc objektum létrehozása.
    szerzo: "Szerző neve", //Értékadás a fejléc szerzőjének.
    korszak: "Korszak", //Értékadás a fejléc korszakának.
    szerelmek_1: "Szerelmek" //Értékadás a fejléc szerelmek_1-nek.
}
const row_1 = { //Az 1.sor objektum létrehozása.
    szerzo: "Balassi Bálint", //Értékadás a 1.sor szerzőjének.
    korszak: "reformáció", //Értékadás a 1.sor korszakának.
    szerelmek_1: "Losonczy Anna", //Értékadás a 1.sor szerelmek_1-nek.
    szerelmek_2: "Dobó Krisztina" //Értékadás a 1.sor szerelmek_2-nek.
}
const row_2 = { //Az 2.sor objektum létrehozása.
    szerzo: "Csokonai Vitéz Mihály", //Értékadás a 2.sor szerzőjének.
    korszak: "felvilágosodás", //Értékadás a 2.sor korszakának.
    szerelmek_1: "Vajda Juliána", //Értékadás a 2.sor szerelmek_1-nek.
}
const row_3 = { //Az 3.sor objektum létrehozása.
    szerzo: "Petőfi Sándor", //Értékadás a 3.sor szerzőjének.
    korszak: "magyar romantika", //Értékadás a 3.sor korszakának.
    szerelmek_1: "Mednyánszky Berta", //Értékadás a 3.sor szerelmek_1-nek.
    szerelmek_2: "Szendrey Júlia", //Értékadás a 3.sor szerelmek_2-nek.
}
const row_4 = { //Az 4.sor objektum létrehozása.
    szerzo: "Ady Endre", //Értékadás a 4.sor szerzőjének.
    korszak: "20. század", //Értékadás a 4.sor korszakának.
    szerelmek_1: "Léda", //Értékadás a 4.sor szerelmek_1-nek.
    szerelmek_2: "Csinszka" //Értékadás a 4.sor szerelmek_2-nek.
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
th_1.innerHTML = header.szerzo; //A cella tartalmának megadása a fejléc szerzőjének az értékével.
tr.appendChild(th_1); //A fejléc sorában lévő 1.cella hozzáadása a fejlécben lévő sorhoz.

const th_2 = document.createElement('th'); //A fejléc sorában lévő 2.cella létrehozása.
th_2.innerHTML = header.korszak; //A cella tartalmának megadása a fejléc korszakának az értékével.
th_2.className = "cell"; //className megadása az 2.oszlop 1.cellájának.
tr.appendChild(th_2); //A fejléc sorában lévő 2.cella hozzáadása a fejlécben lévő sorhoz.

const th_3 = document.createElement('th'); //A fejléc sorában lévő 3.cella létrehozása.
th_3.innerHTML = header.szerelmek_1; //A cella tartalmának megadása a fejléc szerelmek_1-nek az értékével.
tr.appendChild(th_3); //A fejléc sorában lévő 3.cella hozzáadása a fejlécben lévő sorhoz.
th_3.colSpan = 2; //A fejléc 3.cellának megadjuk, hogy 2 oszlopot csatoljon össze.

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

const tr_1 = document.createElement('tr'); //Törzsben lévő 1.sor létrehozása.
tbody.appendChild(tr_1); //Törzsben lévő 1.sor hozzáadása a törzshöz.

const td_1_1 = document.createElement('td'); //A törzs 1.sorában lévő 1.cella létrehozása.
td_1_1.innerHTML = row_1.szerzo; //A cella tartalmának megadása az 1.sor szerzőjének az értékével.
tr_1.appendChild(td_1_1); //A törzs 1.sorában lévő 1.cella hozzáadása a törzsben lévő 1.sorhoz.

const td_1_2 = document.createElement('td'); //A törzs 1.sorában lévő 2.cella létrehozása.
td_1_2.innerHTML = row_1.korszak; //A cella tartalmának megadása az 1.sor korszakának az értékével.
tr_1.appendChild(td_1_2); //A törzs 1.sorában lévő 2.cella hozzáadása a törzsben lévő 1.sorhoz.

const td_1_3 = document.createElement('td'); //A törzs 1.sorában lévő 3.cella létrehozása.
td_1_3.innerHTML = row_1.szerelmek_1; //A cella tartalmának megadása az 1.sor szerelmek_1-nek az értékével.
tr_1.appendChild(td_1_3); //A törzs 1.sorában lévő 3.cella hozzáadása a törzsben lévő 1.sorhoz.

const td_1_4 = document.createElement('td'); //A törzs 1.sorában lévő 4.cella létrehozása.
td_1_4.innerHTML = row_1.szerelmek_2; //A cella tartalmának megadása az 1.sor szerelmek_2-nek az értékével.
td_1_4.className = "columns"; //className megadása a 1.sor 4.cellájának.
tr_1.appendChild(td_1_4); //A törzs 1.sorában lévő 4.cella hozzáadása a törzsben lévő 1.sorhoz.

const tr_2 = document.createElement('tr'); //Törzsben lévő 2.sor létrehozása.
tbody.appendChild(tr_2); //Törzsben lévő 2.sor hozzáadása a törzshöz.

const td_2_1 = document.createElement('td'); //A törzs 2.sorában lévő 1.cella létrehozása.
td_2_1.innerHTML = row_2.szerzo; //A cella tartalmának megadása a 2.sor szerzőjének az értékével.
tr_2.appendChild(td_2_1); //A törzs 2.sorában lévő 1.cella hozzáadása a törzsben lévő 2.sorhoz.

const td_2_2 = document.createElement('td'); //A törzs 2.sorában lévő 2.cella létrehozása.
td_2_2.innerHTML = row_2.korszak; //A cella tartalmának megadása a 2.sor korszakának az értékével.
tr_2.appendChild(td_2_2); //A törzs 2.sorában lévő 2.cella hozzáadása a törzsben lévő 2.sorhoz.

const td_2_3 = document.createElement('td'); //A törzs 2.sorában lévő 3.cella létrehozása.
td_2_3.innerHTML = row_2.szerelmek_1; //A cella tartalmának megadása a 2.sor szerelmek_1-nek az értékével.
tr_2.appendChild(td_2_3); //A törzs 2.sorában lévő 3.cella hozzáadása a törzsben lévő 2.sorhoz.
td_2_3.colSpan = 2; //A törzs 2.sorában lévő 3.cellának megadjuk, hogy 2 oszlopot csatoljon össze.

const tr_3 = document.createElement('tr'); //Törzsben lévő 3.sor létrehozása.
tbody.appendChild(tr_3); //Törzsben lévő 3.sor hozzáadása a törzshöz.

const td_3_1 = document.createElement('td'); //A törzs 3.sorában lévő 1.cella létrehozása.
td_3_1.innerHTML = row_3.szerzo; //A cella tartalmának megadása a 3.sor szerzőjének az értékével.
tr_3.appendChild(td_3_1); //A törzs 3.sorában lévő 1.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_2 = document.createElement('td'); //A törzs 3.sorában lévő 2.cella létrehozása.
td_3_2.innerHTML = row_3.korszak; //A cella tartalmának megadása a 3.sor korszakának az értékével.
tr_3.appendChild(td_3_2); //A törzs 3.sorában lévő 2.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_3 = document.createElement('td'); //A törzs 3.sorában lévő 3.cella létrehozása.
td_3_3.innerHTML = row_3.szerelmek_1; //A cella tartalmának megadása a 3.sor szerelmek_1-nek az értékével.
tr_3.appendChild(td_3_3); //A törzs 3.sorában lévő 3.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_4 = document.createElement('td'); //A törzs 3.sorában lévő 4.cella létrehozása.
td_3_4.innerHTML = row_3.szerelmek_2; //A cella tartalmának megadása a 3.sor szerelmek_2-nek az értékével.
td_3_4.className = "columns"; //className megadása a 3.sor 4.cellájának.
tr_3.appendChild(td_3_4); //A törzs 3.sorában lévő 4.cella hozzáadása a törzsben lévő 3.sorhoz.

const tr_4 = document.createElement('tr'); //Törzsben lévő 4.sor létrehozása.
tbody.appendChild(tr_4); //Törzsben lévő 4.sor hozzáadása a törzshöz.

const td_4_1 = document.createElement('td'); //A törzs 4.sorában lévő 1.cella létrehozása.
td_4_1.innerHTML = row_4.szerzo; //A cella tartalmának megadása a 4.sor szerzőjének az értékével.
tr_4.appendChild(td_4_1); //A törzs 4.sorában lévő 1.cella hozzáadása a törzsben lévő 4.sorhoz.

const td_4_2 = document.createElement('td'); //A törzs 4.sorában lévő 2.cella létrehozása.
td_4_2.innerHTML = row_4.korszak; //A cella tartalmának megadása a 4.sor korszakának az értékével.
tr_4.appendChild(td_4_2); //A törzs 4.sorában lévő 2.cella hozzáadása a törzsben lévő 4.sorhoz.

const td_4_3 = document.createElement('td'); //A törzs 4.sorában lévő 3.cella létrehozása.
td_4_3.innerHTML = row_4.szerelmek_1; //A cella tartalmának megadása a 4.sor szerelmek_1-nek az értékével.
tr_4.appendChild(td_4_3); //A törzs 4.sorában lévő 3.cella hozzáadása a törzsben lévő 4.sorhoz.

const td_4_4 = document.createElement('td'); //A törzs 4.sorában lévő 4.cella létrehozása.
td_4_4.innerHTML = row_4.szerelmek_2; //A cella tartalmának megadása a 4.sor szerelmek_2-nek az értékével.
td_4_4.className = "columns"; //className megadása a 4.sor 4.cellájának.
tr_4.appendChild(td_4_4); //A törzs 4.sorában lévő 4.cella hozzáadása a törzsben lévő 4.sorhoz.