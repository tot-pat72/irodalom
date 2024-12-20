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
th_1.innerHTML = "Szerző neve"; //A cella tartalmának megadása.
tr.appendChild(th_1); //A fejléc sorában lévő 1.cella hozzáadása a fejlécben lévő sorhoz.

const th_2 = document.createElement('th'); //A fejléc sorában lévő 2.cella létrehozása.
th_2.innerHTML = "Korszak"; //A cella tartalmának megadása.
th_2.className = "cell"; //className megadása az 2.oszlop 1.cellájának.
tr.appendChild(th_2); //A fejléc sorában lévő 2.cella hozzáadása a fejlécben lévő sorhoz.

const th_3 = document.createElement('th'); //A fejléc sorában lévő 3.cella létrehozása.
th_3.innerHTML = "Szerelmek"; //A cella tartalmának megadása.
tr.appendChild(th_3); //A fejléc sorában lévő 3.cella hozzáadása a fejlécben lévő sorhoz.
th_3.colSpan = 2; //A fejléc 3.cellának megadjuk, hogy 2 oszlopot csatoljon össze.

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

const tr_1 = document.createElement('tr'); //Törzsben lévő 1.sor létrehozása.
tbody.appendChild(tr_1); //Törzsben lévő 1.sor hozzáadása a törzshöz.

const td_1_1 = document.createElement('td'); //A törzs 1.sorában lévő 1.cella létrehozása.
td_1_1.innerHTML = "Balassi Bálint"; //A cella tartalmának megadása.
tr_1.appendChild(td_1_1); //A törzs 1.sorában lévő 1.cella hozzáadása a törzsben lévő 1.sorhoz.

const td_1_2 = document.createElement('td'); //A törzs 1.sorában lévő 2.cella létrehozása.
td_1_2.innerHTML = "reformáció"; //A cella tartalmának megadása.
tr_1.appendChild(td_1_2); //A törzs 1.sorában lévő 2.cella hozzáadása a törzsben lévő 1.sorhoz.

const td_1_3 = document.createElement('td'); //A törzs 1.sorában lévő 3.cella létrehozása.
td_1_3.innerHTML = "Losonczy Anna"; //A cella tartalmának megadása.
tr_1.appendChild(td_1_3); //A törzs 1.sorában lévő 3.cella hozzáadása a törzsben lévő 1.sorhoz.

const td_1_4 = document.createElement('td'); //A törzs 1.sorában lévő 4.cella létrehozása.
td_1_4.innerHTML = "Dobó Krisztina"; //A cella tartalmának megadása.
td_1_4.className = "columns"; //className megadása a 1.sor 4.cellájának.
tr_1.appendChild(td_1_4); //A törzs 1.sorában lévő 4.cella hozzáadása a törzsben lévő 1.sorhoz.

const tr_2 = document.createElement('tr'); //Törzsben lévő 2.sor létrehozása.
tbody.appendChild(tr_2); //Törzsben lévő 2.sor hozzáadása a törzshöz.

const td_2_1 = document.createElement('td'); //A törzs 2.sorában lévő 1.cella létrehozása.
td_2_1.innerHTML = "Csokonai Vitéz Mihály"; //A cella tartalmának megadása.
tr_2.appendChild(td_2_1); //A törzs 2.sorában lévő 1.cella hozzáadása a törzsben lévő 2.sorhoz.

const td_2_2 = document.createElement('td'); //A törzs 2.sorában lévő 2.cella létrehozása.
td_2_2.innerHTML = "felvilágosodás"; //A cella tartalmának megadása.
tr_2.appendChild(td_2_2); //A törzs 2.sorában lévő 2.cella hozzáadása a törzsben lévő 2.sorhoz.

const td_2_3 = document.createElement('td'); //A törzs 2.sorában lévő 3.cella létrehozása.
td_2_3.innerHTML = "Vajda Juliána"; //A cella tartalmának megadása.
tr_2.appendChild(td_2_3); //A törzs 2.sorában lévő 3.cella hozzáadása a törzsben lévő 2.sorhoz.
td_2_3.colSpan = 2; //A törzs 2.sorában lévő 3.cellának megadjuk, hogy 2 oszlopot csatoljon össze.

const tr_3 = document.createElement('tr'); //Törzsben lévő 3.sor létrehozása.
tbody.appendChild(tr_3); //Törzsben lévő 3.sor hozzáadása a törzshöz.

const td_3_1 = document.createElement('td'); //A törzs 3.sorában lévő 1.cella létrehozása.
td_3_1.innerHTML = "Petőfi Sándor"; //A cella tartalmának megadása.
tr_3.appendChild(td_3_1); //A törzs 3.sorában lévő 1.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_2 = document.createElement('td'); //A törzs 3.sorában lévő 2.cella létrehozása.
td_3_2.innerHTML = "magyar romantika"; //A cella tartalmának megadása.
tr_3.appendChild(td_3_2); //A törzs 3.sorában lévő 2.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_3 = document.createElement('td'); //A törzs 3.sorában lévő 3.cella létrehozása.
td_3_3.innerHTML = "Mednyánszky Berta"; //A cella tartalmának megadása.
tr_3.appendChild(td_3_3); //A törzs 3.sorában lévő 3.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_4 = document.createElement('td'); //A törzs 3.sorában lévő 4.cella létrehozása.
td_3_4.innerHTML = "Szendrey Júlia"; //A cella tartalmának megadása.
td_3_4.className = "columns"; //className megadása a 3.sor 4.cellájának.
tr_3.appendChild(td_3_4); //A törzs 3.sorában lévő 4.cella hozzáadása a törzsben lévő 3.sorhoz.

const tr_4 = document.createElement('tr'); //Törzsben lévő 4.sor létrehozása.
tbody.appendChild(tr_4); //Törzsben lévő 4.sor hozzáadása a törzshöz.

const td_4_1 = document.createElement('td'); //A törzs 4.sorában lévő 1.cella létrehozása.
td_4_1.innerHTML = "Ady Endre"; //A cella tartalmának megadása.
tr_4.appendChild(td_4_1); //A törzs 4.sorában lévő 1.cella hozzáadása a törzsben lévő 4.sorhoz.

const td_4_2 = document.createElement('td'); //A törzs 4.sorában lévő 2.cella létrehozása.
td_4_2.innerHTML = "20. század"; //A cella tartalmának megadása.
tr_4.appendChild(td_4_2); //A törzs 4.sorában lévő 2.cella hozzáadása a törzsben lévő 4.sorhoz.

const td_4_3 = document.createElement('td'); //A törzs 4.sorában lévő 3.cella létrehozása.
td_4_3.innerHTML = "Léda"; //A cella tartalmának megadása.
tr_4.appendChild(td_4_3); //A törzs 4.sorában lévő 3.cella hozzáadása a törzsben lévő 4.sorhoz.

const td_4_4 = document.createElement('td'); //A törzs 4.sorában lévő 4.cella létrehozása.
td_4_4.innerHTML = "Csinszka"; //A cella tartalmának megadása.
td_4_4.className = "columns"; //className megadása a 4.sor 4.cellájának.
tr_4.appendChild(td_4_4); //A törzs 4.sorában lévő 4.cella hozzáadása a törzsben lévő 4.sorhoz.