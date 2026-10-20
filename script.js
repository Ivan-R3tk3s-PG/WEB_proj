// A katalógusban szereplő autók adatai
const autok = [
    {
        id: "rs6", marka: "audi", nev: "RS 6 Avant",
        valtozat: "performance", sorozat: "RS",
        motor: "4,0 literes V8 biturbó", loero: 630, nyomatek: 850,
        gyorsulas: 3.4, generacio: "C8 · performance kivitel, 2023",
        hajtas: "quattro összkerékhajtás", valto: "8 fokozatú tiptronic",
        leiras: "Széles vállak, V8-as karakter és egy kombi sokoldalúsága. Az RS 6 performance a hétköznapi használhatóságot a szupersportautók világával kapcsolja össze.",
        forras: "https://www.audi.com/en/the-audi-rs-6-avant-and-the-new-audi-rs-6-avant-performance-12345/engine-12348"
    },
    {
        id: "rs3", marka: "audi", nev: "RS 3 Sportback",
        valtozat: "2.5 TFSI quattro", sorozat: "RS",
        motor: "2,5 literes soros öthengeres turbó", loero: 400, nyomatek: 500,
        gyorsulas: 3.8, generacio: "8Y · 2024-es modellfrissítés",
        hajtas: "quattro · RS Torque Splitter", valto: "7 fokozatú S tronic",
        leiras: "Öt henger, összetéveszthetetlen karakter. A kompakt RS 3 igazi különlegessége a motor mellett a hátsó kerekek közötti aktív nyomatékelosztás.",
        forras: "https://www.audi.com/en/press-releases/a-feast-for-the-senses-upgrade-for-the-audi-rs-3-16140"
    },
    {
        id: "rs5", marka: "audi", nev: "RS 5 Sportback",
        valtozat: "2.9 TFSI quattro", sorozat: "RS",
        motor: "2,9 literes V6 biturbó", loero: 450, nyomatek: 600,
        gyorsulas: 3.9, generacio: "B9 · 2020-as modellfrissítés",
        hajtas: "quattro összkerékhajtás", valto: "8 fokozatú tiptronic",
        leiras: "Kupés tetővonal, öt ajtó és egy erős V6-os. A B9-es RS 5 Sportback az elegáns megjelenés mellé hosszú utakra is használható sportos karaktert ad.",
        forras: "https://www.audi-mediacenter.com/en/the-sporty-spearhead-of-the-product-line-with-a-new-look-the-rs-5-coupe-and-rs-5-sportback-2020-12728/download"
    },
    {
        id: "rs7", marka: "audi", nev: "RS 7 Sportback",
        valtozat: "performance", sorozat: "RS",
        motor: "4,0 literes V8 biturbó", loero: 630, nyomatek: 850,
        gyorsulas: 3.4, generacio: "C8 · performance kivitel, 2023",
        hajtas: "quattro összkerékhajtás", valto: "8 fokozatú tiptronic",
        leiras: "Az RS 6 technikája egy látványos, lejtős tetővonalú karosszériában. Erős V8-as hajtás és hosszú távú utazásra hangolt kényelem találkozik benne.",
        forras: "https://www.audi.com/en/high-performance-at-its-most-beautiful-the-audi-rs-7-sportback-and-the-rs-7-sportback-performance-12082/engine-12090"
    },
    {
        id: "s8", marka: "audi", nev: "S8",
        valtozat: "4.0 TFSI quattro", sorozat: "S",
        motor: "4,0 literes V8 biturbó · mild hibrid", loero: 571, nyomatek: 800,
        gyorsulas: 3.8, generacio: "D5 · 2022-es modellfrissítés",
        hajtas: "quattro összkerékhajtás", valto: "8 fokozatú tiptronic",
        leiras: "Visszafogott megjelenés mögé rejtett teljesítmény. Az S8 a nagy luxuslimuzinok kényelmét egészíti ki egy V8-as sportmodell erejével.",
        forras: "https://www.audi-mediacenter.com/en/audi-s8-12138"
    },
    {
        id: "r8", marka: "audi", nev: "R8 Coupé",
        valtozat: "V10 performance quattro", sorozat: "R8",
        motor: "5,2 literes V10 szívómotor", loero: 620, nyomatek: 580,
        gyorsulas: 3.1, generacio: "4S · 2019-es performance kivitel",
        hajtas: "quattro összkerékhajtás", valto: "7 fokozatú S tronic",
        leiras: "Középmotoros felépítés, tíz henger és turbó nélküli gázreakció. Az R8 az Audi szupersportautója: külön fejezet az S és RS modellek mellett.",
        forras: "https://www.audi-mediacenter.com/en/the-audi-r8-until-2024-updated-dynamics-for-the-high-performance-sports-car-11734/download"
    },
    {
        id: "cle53", marka: "mercedes", nev: "CLE 53",
        valtozat: "AMG 4MATIC+ Coupé", sorozat: "53",
        motor: "3,0 literes soros hathengeres turbó · mild hibrid", loero: 449, nyomatek: 560,
        gyorsulas: 4.2, generacio: "C236 · 2024-es bemutatási kivitel",
        hajtas: "AMG Performance 4MATIC+", valto: "AMG SPEEDSHIFT TCT 9G",
        leiras: "Hosszú motorháztető, szélesített sárvédők és sorhatos karakter. A CLE 53 a kényelmes túrakupé és a sportos AMG világát köti össze.",
        forras: "https://www.mercedes-amg.com/en/cle-coupe"
    },
    {
        id: "c63", marka: "mercedes", nev: "C 63 S",
        valtozat: "AMG E PERFORMANCE", sorozat: "63",
        motor: "2,0 literes soros négyhengeres turbó + villanymotor", loero: 680, nyomatek: 1020,
        gyorsulas: 3.4, generacio: "W206 · 2023-as hibrid kivitel",
        hajtas: "AMG Performance 4MATIC+", valto: "AMG SPEEDSHIFT MCT 9G",
        leiras: "Új megközelítés a C 63 történetében: a nagy teljesítményű négyhengeres turbómotor elektromos hajtással dolgozik együtt. Ez a generáció már plug-in hibrid.",
        forras: "https://www.mercedes-amg.com/en/c-class-sedan"
    },
    {
        id: "e53", marka: "mercedes", nev: "E 53 HYBRID",
        valtozat: "AMG 4MATIC+", sorozat: "53",
        motor: "3,0 literes soros hathengeres turbó + villanymotor", loero: 585, nyomatek: 750,
        gyorsulas: 4.0, generacio: "W214 · 2024-es bemutatási kivitel",
        hajtas: "AMG Performance 4MATIC+", valto: "AMG SPEEDSHIFT TCT 9G",
        leiras: "Egy sorhatos AMG hosszú utakra, elektromos rásegítéssel. A hibrid E 53 a kényelmes limuzint egyesíti a kétféle hajtás karakterével.",
        forras: "https://www.mercedes-amg.com/en/e-class-sedan"
    },
    {
        id: "s63", marka: "mercedes", nev: "S 63",
        valtozat: "AMG E PERFORMANCE", sorozat: "63",
        motor: "4,0 literes V8 biturbó + villanymotor", loero: 802, nyomatek: 1430,
        gyorsulas: 3.3, generacio: "W223 · 2023-as bemutatási kivitel",
        hajtas: "AMG Performance 4MATIC+", valto: "AMG SPEEDSHIFT MCT 9G",
        leiras: "Az S-osztály nyugalma és egy teljesítményre hangolt hibrid rendszer ereje. A V8-as benzinmotorhoz a hátsó tengelyen elektromotor társul.",
        forras: "https://media.mercedes-benz.it/classe-s-di-mercedes-amg-sintesi-perfetta-di-comfort-e-dinamica-di-marcia-con-e-performance/"
    },
    {
        id: "gt63", marka: "mercedes", nev: "GT 63",
        valtozat: "AMG 4MATIC+ Coupé", sorozat: "63",
        motor: "4,0 literes V8 biturbó", loero: 585, nyomatek: 800,
        gyorsulas: 3.2, generacio: "C192 · 2024-es bemutatási kivitel",
        hajtas: "AMG Performance 4MATIC+", valto: "AMG SPEEDSHIFT MCT 9G",
        leiras: "Alacsony építés, hosszú orr és V8-as erő. A második generációs AMG GT összkerékhajtással hozza közelebb a sportautós élményt a mindennapokhoz.",
        forras: "https://www.mercedes-amg.com/en/gt-coupe"
    },
    {
        id: "g63", marka: "mercedes", nev: "G 63",
        valtozat: "Mercedes-AMG", sorozat: "63",
        motor: "4,0 literes V8 biturbó · mild hibrid", loero: 585, nyomatek: 850,
        gyorsulas: 4.4, generacio: "W465 · 2024-es modellfrissítés",
        hajtas: "Állandó összkerékhajtás · 3 differenciálzár", valto: "AMG SPEEDSHIFT TCT 9G",
        leiras: "A jellegzetes szögletes forma mögött valódi terepjáró-technika dolgozik. Az AMG-változat a G-osztály képességeit egy V8-as motor karakterével egészíti ki.",
        forras: "https://www.mercedes-amg.com/en/g-class-suv"
    },
];

// Ezt a két változót használjuk a kiválasztott márkához és szűrőhöz.
let marka = "";
let kategoria = "Összes";

function fejlec() {
    return `
        <header>
            <div class="fejlec-belso">
                <button class="logo" onclick="kezdolap()">RED<span>LINE</span></button>
                <button class="vissza" onclick="kezdolap()">← Márkaválasztás</button>
            </div>
        </header>
    `;
}

// Kezdőoldal: itt lehet kiválasztani a két márkát.
function kezdolap() {
    marka = "";
    document.body.innerHTML = fejlec() + `
        <main class="doboz">
            <section class="bevezeto">
                <p class="alcim">AUTÓKATALÓGUS / AUDI & MERCEDES</p>
                <h1>Két márka.<br><span>Egy szenvedély.</span></h1>
                <p>Válaszd ki a kedvenc márkádat, és nézd meg a legerősebb modelleket!</p>
            </section>
            <div class="markak">
                <button class="marka-kartya" onclick="markaValasztas('audi')">
                    <img src="kepek/rs6.webp" alt="Audi RS 6">
                    <div class="marka-szoveg">
                        <span>AUDI SPORT</span>
                        <h2>Audi</h2>
                        <p>S, RS és R8 modellek →</p>
                    </div>
                </button>
                <button class="marka-kartya" onclick="markaValasztas('mercedes')">
                    <img src="kepek/cle53.webp" alt="Mercedes-AMG CLE 53">
                    <div class="marka-szoveg">
                        <span>MERCEDES-AMG</span>
                        <h2>Mercedes</h2>
                        <p>AMG 53 és AMG 63 modellek →</p>
                    </div>
                </button>
            </div>
            <p class="also-szoveg">12 különleges autó • 2 legendás márka</p>
        </main>
        ${lablec()}
    `;
}

function lablec() {
    return `<footer>REDLINE • Iskolai bemutatóprojekt • Nem hivatalos márkaoldal</footer>`;
}

// A márka kiválasztása után megjelenik a katalógus.
function markaValasztas(kivalasztott) {
    marka = kivalasztott;
    kategoria = "Összes";
    let cim = marka === "audi" ? "Audi Sport" : "Mercedes-AMG";
    let kiemeltKep = marka === "audi" ? "rs7" : "gt63";
    let kategoriak = marka === "audi" ? ["Összes", "S", "RS", "R8"] : ["Összes", "53", "63"];

    let gombok = "";
    for (let tipus of kategoriak) {
        gombok += `<button class="szuro-gomb ${tipus === 'Összes' ? 'aktiv' : ''}"
                     onclick="szuroValasztas('${tipus}', this)">${tipus}</button>`;
    }

    document.body.innerHTML = fejlec() + `
        <main class="doboz">
            <div class="katalogus-fejlec">
                <img src="kepek/${kiemeltKep}.webp" alt="${cim}">
                <div class="katalogus-cim">
                    <p class="alcim">REDLINE / KATALÓGUS</p>
                    <h1>${cim}</h1>
                    <p>Válogatás a márka sportos modelljeiből.</p>
                </div>
            </div>
            <div class="eszközök">
                <div class="szurok">${gombok}</div>
                <input id="kereses" type="search" placeholder="Keress egy modellt..." oninput="autokKirajzolasa()">
            </div>
            <p id="darabszam" class="darabszam"></p>
            <div id="autolista" class="autolista"></div>
            <p class="megjegyzes">Az adatok különböző évjáratokhoz tartoznak, és nem az aktuális kínálatot jelentik.</p>
        </main>
        ${lablec()}
    `;
    autokKirajzolasa();
}

function szuroValasztas(tipus, gomb) {
    kategoria = tipus;
    document.querySelectorAll(".szuro-gomb").forEach(function(elem) {
        elem.classList.remove("aktiv");
    });
    gomb.classList.add("aktiv");
    autokKirajzolasa();
}

// A keresés és a kategória alapján építjük fel az autókártyákat.
function autokKirajzolasa() {
    let keresett = document.getElementById("kereses").value.toLowerCase();
    let lista = document.getElementById("autolista");
    let html = "";
    let darab = 0;

    for (let auto of autok) {
        if (auto.marka !== marka) continue;
        if (kategoria !== "Összes" && auto.sorozat !== kategoria) continue;
        if (!(auto.nev + " " + auto.motor).toLowerCase().includes(keresett)) continue;

        darab++;
        html += `
            <article class="auto-kartya">
                <img src="kepek/${auto.id}.webp" alt="${auto.nev}" loading="lazy">
                <div class="auto-szoveg">
                    <p class="alcim">${auto.sorozat} / ${auto.generacio}</p>
                    <h2>${auto.nev}</h2>
                    <p class="valtozat">${auto.valtozat}</p>
                    <div class="adatok">
                        <div><strong>${auto.loero}</strong><span>LE</span></div>
                        <div><strong>${auto.nyomatek}</strong><span>Nm</span></div>
                        <div><strong>${auto.gyorsulas}</strong><span>0–100 mp</span></div>
                    </div>
                    <button class="reszletek-gomb" onclick="reszletek('${auto.id}')">Részletek →</button>
                </div>
            </article>
        `;
    }

    lista.innerHTML = html || `<p class="ures">Nincs ilyen modell a listában.</p>`;
    document.getElementById("darabszam").textContent = darab + " autó található";
}

// Rákattintva külön ablakban jelennek meg a műszaki adatok.
function reszletek(id) {
    let auto = autok.find(function(elem) { return elem.id === id; });
    if (!auto) return;

    let ablak = document.createElement("dialog");
    ablak.className = "adatlap";
    ablak.innerHTML = `
        <img src="kepek/${auto.id}.webp" alt="${auto.nev}">
        <div class="adatlap-belso">
            <button class="bezar" onclick="this.closest('dialog').close()">✕</button>
            <h2>${auto.nev}</h2>
            <p class="valtozat">${auto.valtozat}</p>
            <p>${auto.leiras}</p>
            <table>
                <tr><td>Generáció</td><td>${auto.generacio}</td></tr>
                <tr><td>Motor</td><td>${auto.motor}</td></tr>
                <tr><td>Teljesítmény</td><td>${auto.loero} LE</td></tr>
                <tr><td>Nyomaték</td><td>${auto.nyomatek} Nm</td></tr>
                <tr><td>0–100 km/h</td><td>${auto.gyorsulas} mp</td></tr>
                <tr><td>Hajtás</td><td>${auto.hajtas}</td></tr>
                <tr><td>Váltó</td><td>${auto.valto}</td></tr>
            </table>
            <a href="${auto.forras}" target="_blank" rel="noopener noreferrer">Gyártói forrás ↗</a>
        </div>
    `;
    document.body.appendChild(ablak);
    ablak.addEventListener("close", function() { ablak.remove(); });
    ablak.showModal();
}

// Az oldal tartalmát teljes egészében a JavaScript hozza létre.
kezdolap();
