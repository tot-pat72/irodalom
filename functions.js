/**
 * A form létrehozása:
 * -Költő neve
 * -Korszak
 * -Első szerelme
 * -Volt e másik szerelme
 * -Második szerelme
 * Button a kitöltött form hozzáadásához.
 * Minden inputnak van egy error classa.
 */
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

/**
 * Táblázat fejlécének a létrehozása.
 * A head végighalad a header tömbön.
 * Az adatokat a header tömbből szedi ki. 
 */
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

/**
 * A render függvény létrehoz egy táblázatot az arrayben lévők alapján.
 * A szerző, korszak és szerelme után új sor létrehozása, kivéve ha egy szerzőnek több szerelme van.Ez esetben ugyanahoz az szerzőhöz egy új szerelme oszlop létrehozása.
 * @param {array} array tartalmazza az adatokat.
 */
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

/**
 * Ha nincs minden mező kitöltve, akkor hibaüzenetet dob.
 * @param {HTMLElement} inputHTMLElement Ennek megvizsgálása, hogy üres e.
 * @param {string} errormessage Hibaüzenet kiírása, hogyha üres a mező.
 * @returns Visszatér, vagy hamissal hogyha nem ment át a validáción, igennel meg ha ki volt töltve mindkettő mező. 
 */
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

/**
 * A getNonEmptyFormHTMLField függvény csak akkor fut le, hogyha csak az egyik mező van kitöltve.
 * @param {HTMLElement} szerelmek_1 Ennek megvizsgálása, hogy van e benne valami.
 * @param {HTMLElement} szerelmek_2 Ennek megvizsgálása, hogy van e benne valami.
 * @param {string} errormessage Hibaüzenet kiírása, hogyha üres a mező.
 * @returns Visszatér, vagy hamissal hogyha csak az egyik volt kitöltve, igennel meg ha ki volt töltve mindkettő mező.
 */
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