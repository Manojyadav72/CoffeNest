const coffeeList = [
  { name: "Espresso", image: "cofee_web_img/espresso.png" },
  { name: "Latte", image: "cofee_web_img/latte.png" },
  { name: "Mocha", image: "cofee_web_img/mocha.png" },
  { name: "Cappuccino", image: "cofee_web_img/capuccino.png" },
  { name: "Americano", image: "cofee_web_img/americano.png" },
  { name: "Frappe", image: "cofee_web_img/frappe.png" },
  { name: "Flat White", image: "cofee_web_img/flat.png" },
  { name: "Cartedo", image: "cofee_web_img/cartedo.png" },
  { name: "Affogato", image: "cofee_web_img/affogato.png" }
];




document.addEventListener("DOMContentLoaded", () => {
  // Select all the cards
  const coffeeCards = document.querySelectorAll(".card");

  coffeeCards.forEach(card => {
    const minusBtn = card.querySelector(".qty-btn.minus");
    const plusBtn = card.querySelector(".qty-btn.plus");
    const qtyDisplay = card.querySelector(".qty");

    let count = 0;

    // Increment count
    plusBtn.addEventListener("click", () => {
      count++;
      qtyDisplay.textContent = count;
    });

    // Decrement count but prevent negative values
    minusBtn.addEventListener("click", () => {
      if (count > 0) {
        count--;
        qtyDisplay.textContent = count;
      }
    });
  });
});






const container = document.getElementById("quantity-controls");

coffeeList.forEach(coffee => {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("p");
  title.className = "coffee-title";
  title.innerHTML = `<b>${coffee.name}</b>`;

  const img = document.createElement("img");
  img.src = coffee.image;
  img.alt = coffee.name;

  // Create count controls
  const controls = document.createElement("div");
  controls.className = "controls";

  const minusBtn = document.createElement("button");
  minusBtn.textContent = "−";
  minusBtn.className = "minus";

  const countDisplay = document.createElement("span");
  countDisplay.textContent = "0";
  countDisplay.className = "count";

  const plusBtn = document.createElement("button");
  plusBtn.textContent = "+";
  plusBtn.className = "plus";

  let count = 0;

  plusBtn.onclick = () => {
    count++;
    countDisplay.textContent = count;
  };

  minusBtn.onclick = () => {
    if (count > 0) {
      count--;
      countDisplay.textContent = count;
    }
  };

  controls.appendChild(minusBtn);
  controls.appendChild(countDisplay);
  controls.appendChild(plusBtn);

  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(controls);

  container.appendChild(card);
});
