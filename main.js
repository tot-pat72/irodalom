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

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

function generateForm(){ //A generateForm függvény meghatározása.
    const form = document.createElement('form'); //Form létrehozása.
    form.id = 'form'; //A form id-jének megadása.
    document.body.appendChild(form); //A form hozzáadása a dokumentum törzséhez.

    const div_1 = document.createElement('div'); //A form 1.sorának a létrehozása.
    div_1.classList.add('field'); //A field class hozzáadása a div_1-hez.

    const label_1 = document.createElement('label'); //A label_1 elem létrehozása.
    label_1.htmlFor = 'kolto_nev'; //A label_1 for-ának megadása.
    label_1.innerText = 'Költő neve:'; //A label_1 tartalma a Költő neve: lesz.
    div_1.appendChild(label_1); //A label_1 hozzáadása a div_1-hez.

    const input_1 = document.createElement('input'); //Az input_1 mező létrehozása.
    input_1.type = 'text'; //Az input_1 típusának megadása.
    input_1.id = 'kolto_nev'; //Az input_1 id-jének megadása.
    input_1.name = 'kolto_nev'; //Az input_1 nevének megadása.
    div_1.appendChild(input_1); //Az input_1 hozzáadása a div_1-hez.

    const div_1_error = document.createElement('div'); //A div_1_error div létrehozása.
    div_1_error.classList = 'error'; //A div_1_error-hoz az error class hozzárendelése.
    div_1.appendChild(div_1_error); //A div_1_error hozzáadása a div_1-hez.
    form.appendChild(div_1); //A div_1 hozzáadása a formhoz.

    
    const div_2 = document.createElement('div'); //A form 2.sorának a létrehozása.
    div_2.classList.add('field'); //A field class hozzáadása a div_2-höz.

    const label_2 = document.createElement('label'); //A label_2 elem létrehozása.
    label_2.htmlFor = 'korszak'; //A label_2 for-ának megadása.
    label_2.innerText = 'Korszak:'; //A label_2 tartalma a Korszak: lesz.
    div_2.appendChild(label_2); //A label_2 hozzáadása a div_2-höz.

    const input_2 = document.createElement('input'); //Az input_2 mező létrehozása.
    input_2.type = 'text'; //Az input_2 típusának megadása.
    input_2.id = 'korszak'; //Az input_2 id-jének megadása.
    input_2.name = 'korszak'; //Az input_2 nevének megadása.
    div_2.appendChild(input_2); //Az input_2 hozzáadása a div_2-höz.

    const div_2_error = document.createElement('div'); //A div_2_error div létrehozása.
    div_2_error.classList = 'error'; //A div_2_error-hoz az error class hozzárendelése.
    div_2.appendChild(div_2_error); //A div_2_error hozzáadása a div_2-höz.
    form.appendChild(div_2); //A div_2 hozzáadása a formhoz.


    const div_3 = document.createElement('div'); //A form 3.sorának a létrehozása.
    div_3.classList.add('field'); //A field class hozzáadása a div_3-hoz.

    const label_3 = document.createElement('label'); //A label_3 elem létrehozása.
    label_3.htmlFor = 'szerelem1'; //A label_3 for-ának megadása.
    label_3.innerText = 'Szerelme:'; //A label_3 tartalma a Szerelme: lesz.
    div_3.appendChild(label_3); //A label_3 hozzáadása a div_3-hoz.

    const input_3 = document.createElement('input'); //Az input_3 mező létrehozása.
    input_3.type = 'text'; //Az input_3 típusának megadása.
    input_3.id = 'szerelem1'; //Az input_3 id-jének megadása.
    input_3.name = 'szerelem1'; //Az input_3 nevének megadása.
    div_3.appendChild(input_3); //Az input_3 hozzáadása a div_3-hoz.

    const div_3_error = document.createElement('div'); //A div_3_error div létrehozása.
    div_3_error.classList = 'error'; //A div_3_error-hoz az error class hozzárendelése.
    div_3.appendChild(div_3_error); //A div_3_error hozzáadása a div_3-hoz.
    form.appendChild(div_3); //A div_3 hozzáadása a formhoz.


    const div_4 = document.createElement('div'); //A form 4.sorának a létrehozása.
    div_4.classList.add('field'); //A field class hozzáadása a div_4-hez.

    const label_4 = document.createElement('label'); //A label_4 elem létrehozása.
    label_4.htmlFor = 'masodik'; //A label_4 for-ának megadása.
    label_4.innerText = 'Volt másik szerelme?'; //A label_4 tartalma a Volt másik szerelme? lesz.
    div_4.appendChild(label_4); //A label_4 hozzáadása a div_4-hez.

    const input_4 = document.createElement('input'); //Az input_4 mező létrehozása.
    input_4.type = 'checkbox'; //Az input_4 típusának megadása.
    input_4.id = 'masodik'; //Az input_4 id-jének megadása.
    input_4.name = 'masodik'; //Az input_4 nevének megadása.
    div_4.appendChild(input_4); //Az input_4 hozzáadása a div_4-hez.

    const div_4_error = document.createElement('div'); //A div_4_error div létrehozása.
    div_4_error.classList = 'error'; //A div_4_error-hoz az error class hozzárendelése.
    div_4.appendChild(div_4_error); //A div_4_error hozzáadása a div_4-hez.
    form.appendChild(div_4); //A div_4 hozzáadása a formhoz.


    const div_5 = document.createElement('div'); //A form 5.sorának a létrehozása.
    div_5.classList.add('field'); //A field class hozzáadása a div_5-höz.

    const label_5 = document.createElement('label'); //A label_5 elem létrehozása.
    label_5.htmlFor = 'szerelem2'; //A label_5 for-ának megadása.
    label_5.innerText = 'Szerelme:'; //A label_5 tartalma a Szerelme: lesz.
    div_5.appendChild(label_5); //A label_5 hozzáadása a div_5-höz.

    const input_5 = document.createElement('input'); //Az input_5 mező létrehozása.
    input_5.type = 'text'; //Az input_5 típusának megadása.
    input_5.id = 'szerelem2'; //Az input_5 id-jének megadása.
    input_5.name = 'szerelem2'; //Az input_5 nevének megadása.
    div_5.appendChild(input_5); //Az input_5 hozzáadása a div_5-höz.

    const div_5_error = document.createElement('div'); //A div_5_error div létrehozása.
    div_5_error.classList = 'error'; //A div_5_error-hoz az error class hozzárendelése.
    div_5.appendChild(div_5_error); //A div_5_error hozzáadása a div_5-höz.
    form.appendChild(div_5); //A div_5 hozzáadása a formhoz.


    const button = document.createElement('button'); //A gomb elem létrehozása.
    button.type = 'submit'; //A gomb típusa submit lesz.
    button.innerText = 'Hozzáadás'; //A gomb tartalma a Hozzáadás lesz.
    form.appendChild(button); //A gomb hozzáadása a formhoz.
}
generateForm(); //A generateForm függvény meghívása.

function generateHeader(){ //A generateHeader függvény meghatározása.
    const header = ["Szerző neve", "Korszak", "Szerelmek"]; //A header változóba, a tömb tartalmának az eltárolása.
    const tr = document.createElement('tr'); //Fejlécben lévő sor létrehozása.
    thead.appendChild(tr); //Fejlécben lévő sor hozzáadása a fejléchez.
    for(const head of header){ //Végighaladás a headeren, a head az aktuális elem.
        const th = document.createElement('th') //Új cella létrehozása.
        th.innerHTML = head; //A cella tartalmának megadása a headnek az értékével.
        if(head === "Szerelmek"){ //Ha a head egyenlő a szerelmekkel.
            th.colSpan = 2; //A fejléc szerelmek cellának megadjuk, hogy 2 oszlopot csatoljon össze.
        }
        if(head === "Korszak"){ //Ha a head egyenlő a korszakkal.
            th.className = "cell"; //className megadása a fejléc korszak cellájának.
        }
        tr.appendChild(th); //Cellák hozzáadása a fejlécben lévő sorhoz.
    }
}
generateHeader(); //A generateHeader függvény meghívása.

function render(array){ //A render függvény meghatározása, amelynek a bemeneti paramétere az array lesz.
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
render(array); //A render függvényt meghívása.

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
        render(array); //A render függvény újra renderelése.
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