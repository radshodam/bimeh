//variables

const Selectyear = document.querySelector("#year")

const formAsli = document.querySelector("#request-quote")
const modelCar = document.querySelector("#make")
console.log(formAsli);



// Eventlisteners
Eventlisteners()

function Eventlisteners() {
    // aval migim aghti load shod in kar anjam bede va tarikh por shavad
    document.addEventListener("DOMContentLoaded", tarikh)


    // 01-2 creat submit for form
    // bad az dastresi be form asli mikhaim an ra default konim submit nashavad fln
    // badd dastresi peida mikonim be model mashi  va bime va clg migirim
    formAsli.addEventListener("submit", function(e) {
        // default submit
        e.preventDefault()

        // dastresi be model car va sal 
        const modelCar = document.querySelector("#make").value
        const year = document.querySelector("#year").value

        // console.log(year);


        // hala baraie dastresi be radio buttin chun yeki estefade miseh
        // radio name hash yeki mibashad
        // va oun radio ii ke ma active karde bashim TEBGH html ma oun checked mishe pas be sorat zir

        const radioForm = document.querySelector("input[name ='level']:checked").value
            // console.log(radioForm);
    })

}





//Object
// for object
//ONe Creat empty fname function => HTMLUI(){khali bashad }
//Two dastresi be function khali ba prototype =>  HTMLUI.prototype.nameCHIZIkeMIkhaim(displayTarikham) =function(){}
//three dar in marhale ma ba chiz haii ke mikhaim minevisim dar function shomare TWO
//four dar marhale chaharom ma be marhaleii mirim ke dar an event listener ye function dadim manzur(tarikh dar event listener)
//FIVE in marhale ma choon obj hast baraie dastresi baiad az new estefade mikardim dge(CONSTRUCTOR bood)
//yani dar yek moteghaier masalan HTML dar paiin minevisim => const HTML= new HTMLUI()
// va barae dastresi be daroon prototype az Moteghaiere(HTML) estefade mikonim va noghte va dasteresi be fn prototyp
//yani inke HTML.nameONIkeBADEprotype miad hamin  => HTML>displayTarikham()
// edame commment ro dar function displayTarikham

function tarikh() {
    let HTML = new HTMLUI()
    HTML.displayTarikham()

}

function HTMLUI() {}

HTMLUI.prototype.displayTarikham = function() {
    //One OF TWo aval date ro migirim 
    //dovom bad az gereftan date ba google search oun be farsi tabdil kardim
    // in ziria baraie tabdil tarikh be englisi ast baraie for betonim bekonim 
    // start baraie tabdil adad farsi be eng
    let
        persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
        arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
        fixNumbers = function(str) {
            if (typeof str === 'string') {
                for (var i = 0; i < 10; i++) {
                    str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
                }
            }
            return str;
        };
    // end by USE FIx number dar painn
    let nowYear = new Date().toLocaleDateString('fa-IR');
    // ۱۳۹۹/8/۲6
    // chon kol tarikh ro nemikhaim ba Slice joda mikonim sal ro
    let Sliceyear = nowYear.slice(0, 4)
    Sliceyear = fixNumbers(Sliceyear) //dar inja ke mibini dota let goazshtam yani hamoon let ham taghhir kone be hamin dovmin ,vase hamin const nazshtim
        // console.log(Sliceyear);
        //va ۱۳۹۹ farsi has ma baiad tabdil konim 1399 ta betoonim az halghe o .. estefade konim
        // estefade az kodaii ke mizaram bala var var
        // persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g]arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g,
        //& ba consol log gerftanme in baiin tabdil mishe bebinem
        // ba neveshtan hamin yek khat fixNumbers englsi 1399 shod 
        // console.log(fixNumbers(Sliceyear));
        // console.log(Sliceyear);


    // Finish kar ba year va tabdil ha hala baiad az halghe for estefade konim  
    // chun dge baiad bersim be inkhe digar mikahim ta bista paiin tar biaim
    // start Number
    // End number
    let startNumber = Sliceyear
    let endNumber = Sliceyear - 20
        // console.log(endNumber);
        // hala estefade AZ for
        //ye halghe misazim, e id select ke mikhaim bezarim dakhelesh dastrsei peida mikonim
        // bad az dastresi chun tag ma select box hast baiad <option>besaim tagb hast <option></option></option>

    for (let i = startNumber; i >= endNumber; i--) {
        // console.log(i);
        let appendOption = document.createElement("option")
            //sakht ba document.createElement("tagemoon")
        appendOption.value = i
            //daroone option yek value vojoud darad 
        appendOption.innerText = i
            //chap kone i ro ba innerText 
            // hala be farzand khanegie select year dar biad

        Selectyear.appendChild(appendOption)
    }
    // tozih kol hakghey efor
    // dar asl ma aval miaim va for nisazim ebteda enteha va dar for tarif mikonim
    // ke biad va teye har marhale yek Option besaze chun slect darim
    // hala baiad edame ye ka ro berim marhale 01-2- dar event listeners ha

}