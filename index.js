advice_id_el = document.getElementById("advice-id");
advice_text_el = document.getElementById("advice-text");
dice_btn_el = document.querySelector(".dice-btn");
advice_card_el = document.querySelector(".advice-card");

const onDiceClick = () => {
    if (onCooldown) return;
    advice_card_el.classList.remove("animate");
    onCooldown = true;
    fetchRandomAdvice();
};

dice_btn_el.addEventListener("click", onDiceClick);

let onCooldown = false;

const fetchRandomAdvice = async () => {
    setTimeout(() => {
        onCooldown = false;
    }, 2000);
    const res = await fetch("https://api.adviceslip.com/advice", {
        method: "GET",
    });

    const response = await res.json();
    advice_card_el.classList.add("animate");

    advice_id_el.innerText = response.slip.id;
    advice_text_el.innerText = `“${response.slip.advice}”`;
};

fetchRandomAdvice();
onCooldown = true;
