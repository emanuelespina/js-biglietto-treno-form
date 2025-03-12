
const ticketFormSelect = document.getElementById("ticketForm");
console.log(ticketFormSelect);

const nameSelect = document.getElementById("name");
console.log(nameSelect);

const lastNameSelect = document.getElementById("lastName");
console.log(lastNameSelect);

const ageSelect = document.getElementById("age");
console.log(ageSelect);

// const kmSelect = document.getElementById("km");
// console.log(kmSelect);

const nameTicket = document.getElementById("nameTicket");

const lastnameTicket = document.getElementById("lastnameTicket");

const ageTicket = document.getElementById("ageTicket");

// const kmTicket = document.getElementById("kmTicket");

const discountTicket = document.getElementById("discountTicket");

const ticketFinalPrice = document.getElementById("ticketFinalPrice");

const resetButton = document.getElementById("resetButton");

const generatorTicket = document.getElementById("generatorTicket");

const startStation = document.getElementById("floatingSelectStart");

const endStation = document.getElementById("floatingSelectEnd");

const summaryKm = document.getElementById("summary");
console.log(summaryKm);

const alertBadge = document.querySelector(".badge");
console.log(alertBadge);

const priceForKm = 0.21;

// stationArray contiene tutte le stazioni in ordine con il nome e i km che ci sono tra quella corrente e quella precendente 

const stationArray = [
    {
        stazione: "LECCO",
        previousKm: 0,
    },
    {
        stazione: "LECCO MAGGIANICO",
        previousKm: 7,
    },
    {
        stazione: "CALOLZIOCORTE OLGINATE",
        previousKm: 2,
    },
    {
        stazione: "AIRUNO",
        previousKm: 5,
    },
    {
        stazione: "OLGIATE-CALCO-BRIVIO",
        previousKm: 12,
    },
    {
        stazione: "CERNUSCO-MERATE",
        previousKm: 8,
    },
    {
        stazione: "OSNAGO",
        previousKm: 6,
    },
    {
        stazione: "CARNATE USMATE",
        previousKm: 5,
    },
    {
        stazione: "ARCORE",
        previousKm: 7,
    },
    {
        stazione: "MONZA",
        previousKm: 9,
    },
    {
        stazione: "SESTO S.GIOVANNI",
        previousKm: 4,
    },
    {
        stazione: "MILANO GRECO PIRELLI",
        previousKm: 5,
    },
    {
        stazione: "MILANO PORTA GARIBALDI",
        previousKm: 2,
    },
];

//////////////////////////////////////////////////////////////////////

ticketFormSelect.addEventListener("submit", disconutPrice);

//bottone di reset che fa scomparire tutto

resetButton.addEventListener("click", function () {
    generatorTicket.classList.add("d-none");
    alertBadge.classList.add("d-none");
})

// per fare questo reset doivrei andare ad annullare tutti i parametri assegnando con la stringa vuota 


/////////////////////////// FUNCTION /////////////////////////////////

function disconutPrice(event) {

    event.preventDefault();


    //reset dell'alert

    alertBadge.classList.add("d-none");

    let kilometres = 0;

    console.log(parseInt(startStation.value));
    console.log(parseInt(endStation.value));    
    

    if (parseInt(startStation.value) < parseInt(endStation.value)) {
        for (let i = parseInt(startStation.value)+1; i <= parseInt(endStation.value); i++){
            kilometres += stationArray[i].previousKm;
        }

        generatorTicket.classList.remove("d-none");

    }else if (parseInt(startStation.value) > parseInt(endStation.value)) {
        for (let i = parseInt(endStation.value)+1; i <= parseInt(startStation.value); i++){

            kilometres += stationArray[i].previousKm;
        
        }

        generatorTicket.classList.remove("d-none");
        
    }else {
        alertBadge.classList.remove("d-none");
    }

    const path = `Biglietto valido dalla stazione di <strong>${stationArray[parseInt(startStation.value)].stazione}</strong> alla stazione di <strong>${stationArray[parseInt(endStation.value)].stazione}</strong>`

    console.log(kilometres);
    

    // const ticketPrice = parseInt(kmSelect.value) * priceForKm;

    const ticketPrice = kilometres * priceForKm;

    const disconut18 = 20;

    const disconut65 = 40;

    let finalPrice;

    let disconut;

    if (parseInt(ageSelect.value) < 18) {
        finalPrice = ticketPrice - (ticketPrice * disconut18) / 100;
        disconut = `Il tuo sconto in quanto minorenne è del ${disconut18}%`;
    } else if (parseInt(ageSelect.value) >= 65) {
        finalPrice = ticketPrice - (ticketPrice * disconut65) / 100;
        disconut = `Il tuo sconto in quanto over 65 è del ${disconut65}%`;
    } else {
        finalPrice = ticketPrice;
        disconut = null;
    }

    console.log(finalPrice.toFixed(2));

    ticketFinalPrice.innerText = `${finalPrice.toFixed(2)}€`;

    nameTicket.innerText = nameSelect.value;

    lastnameTicket.innerText = lastNameSelect.value;

    ageTicket.innerText = ageSelect.value;

    // kmTicket.innerText = kmSelect.value;

    discountTicket.innerText = disconut;

    summaryKm.innerHTML = path;
    
    ticketFormSelect.reset();

}

