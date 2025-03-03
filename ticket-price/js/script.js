
const ticketFormSelect = document.getElementById("ticketForm");
console.log(ticketFormSelect);

const nameSelect = document.getElementById("name");
console.log(nameSelect);

const lastNameSelect = document.getElementById("lastName");
console.log(lastNameSelect);

const ageSelect = document.getElementById("age");
console.log(ageSelect);

const kmSelect = document.getElementById("km");
console.log(kmSelect);

const nameTicket = document.getElementById("nameTicket");

const lastnameTicket = document.getElementById("lastnameTicket");

const ageTicket = document.getElementById("ageTicket");

const kmTicket = document.getElementById("kmTicket");

const discountTicket = document.getElementById("discountTicket");

const ticketFinalPrice = document.getElementById("ticketFinalPrice");

const resetButton = document.getElementById("resetButton");

const priceForKm = 0.21;

//////////////////////////////////////////////////////////////////////

// resetButton.addEventListener("click", );

ticketFormSelect.addEventListener("submit", disconutPrice);


/////////////////////////// FUNCTION /////////////////////////////////

function disconutPrice(event) {

    event.preventDefault();

    const ticketPrice = parseInt(kmSelect.value) * priceForKm;

    const age = parseInt(ageSelect.value);

    const disconut18 = 20;

    const disconut65 = 40;

    let finalPrice;

    let disconut;

    if (age < 18) {
        finalPrice = ticketPrice - (ticketPrice * 20) / 100;
        disconut = `Il tuo sconto in quanto minorenne è del ${disconut18}%`;
    } else if (age >= 65) {
        finalPrice = ticketPrice - (ticketPrice * 40) / 100;
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

    kmTicket.innerText = kmSelect.value;

    discountTicket.innerText = disconut;

}

