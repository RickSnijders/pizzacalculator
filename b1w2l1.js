const amountSmall = prompt("Hoeveel small pizza's wil je? (€4,95)")    //Hier kan je invoeren hoeveel pizza's je wilt
const amountMedium = prompt("Hoeveel medium pizza's wil je? (€6,95)")
const amountLarge = prompt("Hoeveel large pizza's wil je? (€8,95)")

const priceSmall = 4.95;     //Dit zijn de prijzen van de pizza's
const priceMedium = 6.95;
const priceLarge = 8.95;

var totalPriceSmall = Number(amountSmall * priceSmall).toFixed(2)   //Dit zijn de totale prijzen per pizza
var totalPriceMedium = Number(amountMedium * priceMedium).toFixed(2)
var totalPriceLarge = Number(amountLarge * priceLarge).toFixed(2)


alert("prijs voor small pizza's is €" + totalPriceSmall)    //Dit geeft een alert voor de prijzen van de pizza's
alert("prijs voor medium pizza's is €" + totalPriceMedium)
alert("prijs voor large pizza's is €" + totalPriceLarge)

var totalBill = Number(totalPriceSmall) + Number(totalPriceMedium) + Number(totalPriceLarge)  //Dit is voor het totaal aantal € en aantal pizza's
var totalPizza = Number(amountSmall) + Number(amountMedium) + Number(amountLarge)

alert("Uw totaalprijs is €" + Number(totalBill).toFixed(2))

var element = document.getElementById("smallPizzaAantal");     //Dit is de verwijzing van de html file
element.innerHTML = "Small pizza x" + amountSmall;

var element = document.getElementById("mediumPizzaAantal");
element.innerHTML = "Medium pizza x" + amountMedium;

var element = document.getElementById("largePizzaAantal");
element.innerHTML = "Large pizza x" + amountLarge;

var element = document.getElementById("priceSmallTotal");
element.innerHTML = "€" + totalPriceSmall;

var element = document.getElementById("priceMediumTotal");
element.innerHTML = "€" + totalPriceMedium;

var element = document.getElementById("priceLargeTotal");
element.innerHTML = "€" + totalPriceLarge;

var element = document.getElementById("totalPizzaAantal");
element.innerHTML = "Totaal: " + totalPizza;

var element = document.getElementById("totalPrice");
element.innerHTML = "€ " + Number(totalBill).toFixed(2);