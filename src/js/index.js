let porcetange = 0;
let dollars = 0;
let number_people = 0;
document.addEventListener("DOMContentLoaded", () => {
    App();
});

const App = () => {
    tip();
    bill();
    people();
};

const tip = () => {
    document.querySelectorAll(".btn__tip").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            porcetange = Number(e.target.value);
            // if(e.target.classList.contains('active')){
            //     e.target.classList.remove('active');
            // } else {
            //     e.target.classList.add('active');
            // }
        });
    });
    document.getElementById("custom__tip").addEventListener("input", (e) => {
        porcetange = Number(e.target.value);
        if (e.target.value === "") {
            document.getElementById("custom__tip").classList.add("error");
            document.getElementById("custom__tip").classList.remove("correct");
            document.getElementById("alert__custom").classList.add("d-block");
            document.getElementById("alert__custom").classList.remove("d-none");
        } else {
            document.getElementById("custom__tip").classList.remove("error");
            document.getElementById("custom__tip").classList.add("correct");
            document
                .getElementById("alert__custom")
                .classList.remove("d-block");
            document.getElementById("alert__custom").classList.add("d-none");
            dollars = Number(e.target.value.trim());
        }
    });
};

const bill = () => {
    document.getElementById("bill").addEventListener("input", (e) => {
        if (e.target.value === "") {
            document.getElementById("bill").classList.add("error");
            document.getElementById("bill").classList.remove("correct");
            document.getElementById("alert__bill").classList.add("d-block");
            document.getElementById("alert__bill").classList.remove("d-none");
        } else {
            document.getElementById("bill").classList.remove("error");
            document.getElementById("bill").classList.add("correct");
            document.getElementById("alert__bill").classList.remove("d-block");
            document.getElementById("alert__bill").classList.add("d-none");
            dollars = Number(e.target.value.trim());
        }
    });
    document.getElementById("bill").addEventListener("blur", (e) => {
        result();
    });
};
const people = () => {
    document.getElementById("people").addEventListener("input", (e) => {
        if (e.target.value === "") {
            document.getElementById("people").classList.add("error");
            document.getElementById("people").classList.remove("correct");
            document.getElementById("alert__people").classList.add("d-block");
            document.getElementById("alert__people").classList.remove("d-none");
        } else {
            document.getElementById("people").classList.remove("error");
            document.getElementById("people").classList.add("correct");
            document
                .getElementById("alert__people")
                .classList.remove("d-block");
            document.getElementById("alert__people").classList.add("d-none");
            number_people = Number(e.target.value.trim());
        }
    });
    document.getElementById("people").addEventListener("blur", (e) => {
        result();
    });
};
const result = () => {
    if (number_people === 0) {
        console.log("tas mal pa");
    } else if (porcetange === 0) {
        console.log("Tas mal pa");
    } else if (dollars === 0) {
        console.log("Tas mal pa");
    } else {
        const amount = document.getElementById("amount");
        const total = document.getElementById("total");

        let amountPorcentage = (dollars / porcetange) * 100;
        let final = amountPorcentage.toFixed(2) / number_people;

        amount.innerText = amountPorcentage.toFixed(2);
        total.innerText = final.toFixed(2);
    }
};
