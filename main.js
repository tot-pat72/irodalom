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

function render(){ //A render függvény meghatározása.
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
}
render(); //A render függvényt meghívása.

const form = document.getElementById('form'); //Az űrlapban lévő formnak az id-jének az elkérése.
form.addEventListener('submit', function(e) { //A függvény meghívódik, a submit használatakor.
    e.preventDefault(); //A böngésző alapértelmezett lefutásának a megakadályozása.
    const szerzoHtmlElement = document.getElementById('kolto_nev'); //A HtmlElement elkérése, amelynek a kolto_nev az id-je.
    const korszakHtmlElement = document.getElementById('korszak'); //A HtmlElement elkérése, amelynek a korszak az id-je.
    const szerelmek_1HtmlElement = document.getElementById('szerelem1'); //A HtmlElement elkérése, amelynek a szerelem1 az id-je.
    const szerelmek_2HtmlElement = document.getElementById('szerelem2'); //A HtmlElement elkérése, amelynek a szerelem2 az id-je.
    const checkbox = document.getElementById('masodik'); //A checkbox elkérése, amelynek a masodik az id-je.

    const thisForm = e.currentTarget; //Az e.currentTarget tulajdonsága, amely a formot tartalmazza, ennek eltárolása egy változóba.
    const errorHtmlElements = thisForm.querySelectorAll('.error'); //A formon belüli összes error classal ellátott html element elkérése.
    for(const errorElement of errorHtmlElements){ //Végighaladás a visszakapott errorHtmlElementen.
        errorElement.innerHTML = ''; //Az aktuális elem tartalmának kitörlése.
    }
    let valid = true; //A valid valtozó kezdő értéke igaz.

    if(!validateFormHTMLField(szerzoHtmlElement, 'A szerző megadása kötelező')){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti szerzoHtmlElement esetén.
        valid = false; //A valid változó értéke false lesz.
    }

    if(!validateFormHTMLField(korszakHtmlElement, 'A korszak megadása kötelező')){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti korszakHtmlElement esetén.
        valid = false; //A valid változó értéke false lesz.
    }

    if(!validateFormHTMLField(szerelmek_1HtmlElement, 'A szerelme megadása kötelező')){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti szerelmek_1HtmlElement esetén.
        valid = false; //A valid változó értéke false lesz.
    }

    if(!getNonEmptyFormHTMLField(szerelmek_1HtmlElement, szerelmek_2HtmlElement, 'Mindkét szerelmének megadása kötelező')){ //Ha getNonEmptyFormHTMLField függvény hamissal tér vissza, mind a bemeneti szerelmek_1HtmlElement és a szerelmek_2HtmlElement esetén is.
        valid = false; //A valid változó értéke false lesz.
    }

    if(valid){ //Ha a valid változó értéke igaz(nem volt kihagyott mező).
        const szerzoValue = szerzoHtmlElement.value; //A szerzoHtmlElement értékének belerakása egy változóba.
        const korszakValue = korszakHtmlElement.value; //A korszakHtmlElement értékének belerakása egy változóba.
        const szerelmek_1Value = szerelmek_1HtmlElement.value; //A szerelmek_1HtmlElement értékének belerakása egy változóba.
        let szerelmek_2Value; //A szerelmek_2Value változó létrehozása.
        if(checkbox.checked === false){ //Ha a checkbox.checked hamis lesz(nincs bepipálva).
            szerelmek_2Value = undefined; //Akkor a szerelmek_2Value undefined lesz.
        }
        else{
            szerelmek_2Value = szerelmek_2HtmlElement.value === "" ? undefined : szerelmek_2HtmlElement.value; //Akkor a szerelmek_2Value egyenlő lesz a szerelmek_2HtmlElement értékével. Amennyiben az szerelmek_2HtmlElement-nek nincs értéke, akkor undefined lesz.
        }
        const newElement = { //A newElement létrehozása.
            szerzo: szerzoValue, //A szerzo értéke a szerzoValue lesz.
            korszak: korszakValue, //A korszak értéke a korszakValue lesz.
            szerelmek_1: szerelmek_1Value, //A szerelmek_1 értéke a szerelmek_1Value lesz.
            szerelmek_2: szerelmek_2Value, //A szerelmek_2 értéke a szerelmek_2Value lesz.
        }
        array.push(newElement); //A newElement hozzáadása az arrayhez.
        tbody.innerHTML = ''; //A táblázat tartalmának kitörlése.
        render(); //A render függvény újra renderelése.
        thisForm.reset(); //A form visszaállítása alaphelyzetbe.
    }
})

function validateFormHTMLField(inputHTMLElement, errormessage){ //A validateFormHTMLField függvény meghatározása.
    let valid = true; //A valid változó létrehozása, ami a true értéket kapja.
    if(inputHTMLElement.value === ''){ //Ha az inputHTMLElement.value beviteli mezője üres.
        const parentElement = inputHTMLElement.parentElement; //Az inputHTMLElement beviteli mező parentElement property-jének az eltárolása egy változóban.
        const errorplace = parentElement.querySelector('.error'); //Az inputHTMLElement beviteli mező parentElement div-jében az error classal ellátott elem megkeresése és annak eltárolása egy változóban.
        if (errorplace != undefined){ //Ha talál ilyen mezőt(nem undefined).
            errorplace.innerHTML = errormessage; //Akkor a hibaüzenet megadása kell.
        }
        valid = false; //A valid változó értéke false lesz.
    }
    return valid; //Visszatérés a valid változóval. Amely hamis, hogyha nem ment át a validáción. Ha meg ki van töltve, akkor igazzal tér vissza.
}

function getNonEmptyFormHTMLField(szerelmek_1, szerelmek_2, errormessage){ //A getNonEmptyFormHTMLField függvény meghatározása.
    let valid = true; //A valid változó létrehozása, ami a true értéket kapja.
    if(szerelmek_1.value === '' && szerelmek_2.value !== ''){ //Ha a szerelmek_1 beviteli mezője üres, viszont a szerelmek_2 meg nem.
        const parentElement = szerelmek_1.parentElement; //A szerelmek_1 beviteli mező parentElement property-jének az eltárolása egy változóban.
        const errorplace = parentElement.querySelector('.error'); //A szerelmek_1 beviteli mező parentElement div-jében az error classal ellátott elem megkeresése és annak eltárolása egy változóban.
        if (errorplace != undefined){ //Ha talál ilyen mezőt(nem undefined).
            errorplace.innerHTML = errormessage; //Akkor a mindkét szerelmének megadása kötelező hibaüzenetet dobja ki.
        }
        valid = false; //A valid változó értéke false lesz.
    };
    if(szerelmek_2.value === '' && szerelmek_1.value !== ''){ //Ha a szerelmek_2 beviteli mezője üres, viszont a szerelmek_1 meg nem.
        const parentElement = szerelmek_2.parentElement; //A szerelmek_2 beviteli mező parentElement property-jének az eltárolása egy változóban.
        const errorplace = parentElement.querySelector('.error'); //A szerelmek_2 beviteli mező parentElement div-jében az error classal ellátott elem megkeresése és annak eltárolása egy változóban.
        if (errorplace != undefined){ //Ha talál ilyen mezőt(nem undefined).
            errorplace.innerHTML = errormessage; //Akkor a mindkét szerelmének megadása kötelező hibaüzenetet dobja ki.
        }
        valid = false; //A valid változó értéke false lesz.
    };
    return valid; //Visszatérés a valid változóval. Amely hamis, hogyha nem ment át a validáción. Ha meg ki van töltve, akkor igazzal tér vissza.
}