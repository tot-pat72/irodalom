const headercell_1 = "Szerző neve"; //A szerző neve megadása változóként.
const headercell_2 = "Korszak"; //A korszak megadása változóként.
const headercell_3 = "Szerelmek"; //A szerelmek megadása változóként.

const szerzo_1 = "Balassi Bálint"; //Balassi Bálint megadása változóként.
const korszak_1 = "reformáció"; //A reformáció megadása változóként.
const szerelmek_1_1 = "Losonczy Anna"; //Losonczy Anna megadása változóként.
const szerelmek_1_2 = "Dobó Krisztina"; //Dobó Krisztina megadása változóként.

const szerzo_2 = "Csokonai Vitéz Mihály"; //Csokonai Vitéz Mihály megadása változóként.
const korszak_2 = "felvilágosodás"; //A felvilágosodás megadása változóként.
const szerelmek_2_1 = "Vajda Juliána"; //Vajda Juliána megadása változóként.

const szerzo_3 = "Petőfi Sándor"; //Petőfi Sándor megadása változóként.
const korszak_3 = "magyar romantika"; //A magyar romantika megadása változóként.
const szerelmek_3_1 = "Mednyánszky Berta"; //Mednyánszky Berta megadása változóként.
const szerelmek_3_2 = "Szendrey Júlia"; //Szendrey Júlia megadása változóként.

const szerzo_4 = "Ady Endre"; //Ady Endre megadása változóként.
const korszak_4 = "20. század"; //20. század megadása változóként.
const szerelmek_4_1 = "Léda"; //Léda megadása változóként.
const szerelmek_4_2 = "Csinszka"; //Csinszka megadása változóként.

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
th_1.innerHTML = headercell_1; //A cella tartalmának megadása 1 megadott változóból.
tr.appendChild(th_1); //A fejléc sorában lévő 1.cella hozzáadása a fejlécben lévő sorhoz.

const th_2 = document.createElement('th'); //A fejléc sorában lévő 2.cella létrehozása.
th_2.innerHTML = headercell_2; //A cella tartalmának megadása 1 megadott változóból.
th_2.className = "cell"; //className megadása az 2.oszlop 1.cellájának.
tr.appendChild(th_2); //A fejléc sorában lévő 2.cella hozzáadása a fejlécben lévő sorhoz.

const th_3 = document.createElement('th'); //A fejléc sorában lévő 3.cella létrehozása.
th_3.innerHTML = headercell_3; //A cella tartalmának megadása 1 megadott változóból.
tr.appendChild(th_3); //A fejléc sorában lévő 3.cella hozzáadása a fejlécben lévő sorhoz.
th_3.colSpan = 2; //A fejléc 3.cellának megadjuk, hogy 2 oszlopot csatoljon össze.

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

const tr_1 = document.createElement('tr'); //Törzsben lévő 1.sor létrehozása.
tbody.appendChild(tr_1); //Törzsben lévő 1.sor hozzáadása a törzshöz.

const td_1_1 = document.createElement('td'); //A törzs 1.sorában lévő 1.cella létrehozása.
td_1_1.innerHTML = szerzo_1; //A cella tartalmának megadása 1 megadott változóból.
tr_1.appendChild(td_1_1); //A törzs 1.sorában lévő 1.cella hozzáadása a törzsben lévő 1.sorhoz.

const td_1_2 = document.createElement('td'); //A törzs 1.sorában lévő 2.cella létrehozása.
td_1_2.innerHTML = korszak_1; //A cella tartalmának megadása 1 megadott változóból.
tr_1.appendChild(td_1_2); //A törzs 1.sorában lévő 2.cella hozzáadása a törzsben lévő 1.sorhoz.

const td_1_3 = document.createElement('td'); //A törzs 1.sorában lévő 3.cella létrehozása.
td_1_3.innerHTML = szerelmek_1_1; //A cella tartalmának megadása 1 megadott változóból.
tr_1.appendChild(td_1_3); //A törzs 1.sorában lévő 3.cella hozzáadása a törzsben lévő 1.sorhoz.

const td_1_4 = document.createElement('td'); //A törzs 1.sorában lévő 4.cella létrehozása.
td_1_4.innerHTML = szerelmek_1_2; //A cella tartalmának megadása 1 megadott változóból.
td_1_4.className = "columns"; //className megadása a 1.sor 4.cellájának.
tr_1.appendChild(td_1_4); //A törzs 1.sorában lévő 4.cella hozzáadása a törzsben lévő 1.sorhoz.

const tr_2 = document.createElement('tr'); //Törzsben lévő 2.sor létrehozása.
tbody.appendChild(tr_2); //Törzsben lévő 2.sor hozzáadása a törzshöz.

const td_2_1 = document.createElement('td'); //A törzs 2.sorában lévő 1.cella létrehozása.
td_2_1.innerHTML = szerzo_2; //A cella tartalmának megadása 1 megadott változóból.
tr_2.appendChild(td_2_1); //A törzs 2.sorában lévő 1.cella hozzáadása a törzsben lévő 2.sorhoz.

const td_2_2 = document.createElement('td'); //A törzs 2.sorában lévő 2.cella létrehozása.
td_2_2.innerHTML = korszak_2; //A cella tartalmának megadása 1 megadott változóból.
tr_2.appendChild(td_2_2); //A törzs 2.sorában lévő 2.cella hozzáadása a törzsben lévő 2.sorhoz.

const td_2_3 = document.createElement('td'); //A törzs 2.sorában lévő 3.cella létrehozása.
td_2_3.innerHTML = szerelmek_2_1; //A cella tartalmának megadása 1 megadott változóból.
tr_2.appendChild(td_2_3); //A törzs 2.sorában lévő 3.cella hozzáadása a törzsben lévő 2.sorhoz.
td_2_3.colSpan = 2; //A törzs 2.sorában lévő 3.cellának megadjuk, hogy 2 oszlopot csatoljon össze.

const tr_3 = document.createElement('tr'); //Törzsben lévő 3.sor létrehozása.
tbody.appendChild(tr_3); //Törzsben lévő 3.sor hozzáadása a törzshöz.

const td_3_1 = document.createElement('td'); //A törzs 3.sorában lévő 1.cella létrehozása.
td_3_1.innerHTML = szerzo_3; //A cella tartalmának megadása 1 megadott változóból.
tr_3.appendChild(td_3_1); //A törzs 3.sorában lévő 1.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_2 = document.createElement('td'); //A törzs 3.sorában lévő 2.cella létrehozása.
td_3_2.innerHTML = korszak_3; //A cella tartalmának megadása 1 megadott változóból.
tr_3.appendChild(td_3_2); //A törzs 3.sorában lévő 2.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_3 = document.createElement('td'); //A törzs 3.sorában lévő 3.cella létrehozása.
td_3_3.innerHTML = szerelmek_3_1; //A cella tartalmának megadása 1 megadott változóból.
tr_3.appendChild(td_3_3); //A törzs 3.sorában lévő 3.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_4 = document.createElement('td'); //A törzs 3.sorában lévő 4.cella létrehozása.
td_3_4.innerHTML = szerelmek_3_2; //A cella tartalmának megadása 1 megadott változóból.
td_3_4.className = "columns"; //className megadása a 3.sor 4.cellájának.
tr_3.appendChild(td_3_4); //A törzs 3.sorában lévő 4.cella hozzáadása a törzsben lévő 3.sorhoz.

const tr_4 = document.createElement('tr'); //Törzsben lévő 4.sor létrehozása.
tbody.appendChild(tr_4); //Törzsben lévő 4.sor hozzáadása a törzshöz.

const td_4_1 = document.createElement('td'); //A törzs 4.sorában lévő 1.cella létrehozása.
td_4_1.innerHTML = szerzo_4; //A cella tartalmának megadása 1 megadott változóból.
tr_4.appendChild(td_4_1); //A törzs 4.sorában lévő 1.cella hozzáadása a törzsben lévő 4.sorhoz.

const td_4_2 = document.createElement('td'); //A törzs 4.sorában lévő 2.cella létrehozása.
td_4_2.innerHTML = korszak_4; //A cella tartalmának megadása 1 megadott változóból.
tr_4.appendChild(td_4_2); //A törzs 4.sorában lévő 2.cella hozzáadása a törzsben lévő 4.sorhoz.

const td_4_3 = document.createElement('td'); //A törzs 4.sorában lévő 3.cella létrehozása.
td_4_3.innerHTML = szerelmek_4_1; //A cella tartalmának megadása 1 megadott változóból.
tr_4.appendChild(td_4_3); //A törzs 4.sorában lévő 3.cella hozzáadása a törzsben lévő 4.sorhoz.

const td_4_4 = document.createElement('td'); //A törzs 4.sorában lévő 4.cella létrehozása.
td_4_4.innerHTML = szerelmek_4_2; //A cella tartalmának megadása 1 megadott változóból.
td_4_4.className = "columns"; //className megadása a 4.sor 4.cellájának.
tr_4.appendChild(td_4_4); //A törzs 4.sorában lévő 4.cella hozzáadása a törzsben lévő 4.sorhoz.