const button = document.querySelector("button");
button.addEventListener("click", createResult);

const type = {
    "adult" : 350,
    "student" : 175,
    "retired" : 100,
    "rat" : 50
}


function createResult(){
    const quantity = document.querySelector(".myContainer div input");
    const ticketType = document.querySelector(".myContainer div:nth-child(2) select");
    const result = document.querySelector(".myContainer div:nth-child(3) input");
    let discount;
    /*
    if (ticketType.value === "adult"){
        result.value = quantity.value*350 + " Ft";
    }
    else{
        result.value = `${quantity.value*175} Ft`;//template literal
    }
    */
    /*Ternary operator: kifejezés ? Ha igaz : Ha hamis */
    discount = quantity.value >= 10 ? 0.9 : 1;
    /*
    result.value = ticketType.value === "adult" ? `${quantity.value*350 * discount} Ft` : `${quantity.value * 175 * discount} Ft`;
    */
   if (ticketType.value === "rat" && quantity.value > 1){
        quantity.value = "";
        quantity.focus();
        discount = 1;
        alert("Egy patkányt vihetsz be.")
   }
   //Amikor több állatot írnak be, akkor a quantití.value érétke üres str lesz.
   //Mégis működik a szorzás itt lenn!!! Meert "" --> 0 lesz! Implicit konverzió!s
   result.value = quantity.value * discount * type[ticketType.value];
}