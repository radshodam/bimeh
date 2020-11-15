//variables

const year = document.querySelector("#year")






// Eventlisteners
Eventlisteners()

function Eventlisteners() {
    // aval migim aghti load shod in kar anjam bede va tarikh por shavad
    document.addEventListener("DOMContentLoaded", tarikh)
}





//Object
// for object
//ONe Creat empty fname function => HTMLUI(){khali bashad }
//Two dastresi be function khali ba prototype =>  HTMLUI.prototype.nameCHIZIkeMIkhaim =function(){}
//three dar in marhale ma ba chiz haii ke mikhaim minevisim dar function shomare TWO
//four dar marhale chaharom ma be marhaleii mirim ke dar an event listener ye function dadim manzur(tarikh dar event listener)
//FIVE in marhale ma choon obj hast baraie dastresi baiad az new estefade mikardim dge(CONSTRUCTOR bood)
//yani dar yek moteghaier masalan HTML dar paiin minevisim => const HTML= new HTMLUI()
// va barae dastresi be daroon prototype az Moteghaiere(HTML) estefade mikonim va noghte va dasteresi be fn prototyp
//yani inke HTML.nameONIkeBADEprotype miad hamin  => HTML>displayTarikham()
// edame commment ro dar 

function tarikh() {
    let HTML = new HTMLUI()
    HTML.displayTarikham()

}

function HTMLUI() {}

HTMLUI.prototype.displayTarikham = function() {
    let nowYear = new Date().toLocaleDateString('fa-IR');
    // ۱۳۹۹/۱/۲۳

    console.log(nowYear);




}