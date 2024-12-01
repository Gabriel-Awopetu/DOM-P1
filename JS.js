document.addEventListener("DOMContentLoaded", () => {
  // Select all necessary elements
  const totalPriceElement = document.querySelector(".total");
  const quantityElements = document.querySelectorAll(".quantity");
  const increaseButtons = document.querySelectorAll(".increase-btn");
  const decreaseButtons = document.querySelectorAll(".decrease-btn");
  const deleteButtons = document.querySelectorAll(".delete-btn");
  const heartButtons = document.querySelectorAll(".heart-btn");
  const unitPriceElements = document.querySelectorAll(".unit-price");

  // Calculate the total price
  function updateTotalPrice() {
    let total = 0;
    unitPriceElements.forEach((priceElement, index) => {
      const price = parseFloat(priceElement.innerText.replace(" $", ""));
      const quantity = parseInt(quantityElements[index].innerText);
      total += price * quantity;
    });
    totalPriceElement.innerText = `${total} $`;
  }

  // Event listener for the "increase" button
  increaseButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const quantity = quantityElements[index];
      quantity.innerText = parseInt(quantity.innerText) + 1;
      updateTotalPrice();
    });
  });

  // Event listener for the "decrease" button
  decreaseButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const quantity = quantityElements[index];
      if (parseInt(quantity.innerText) > 0) {
        quantity.innerText = parseInt(quantity.innerText) - 1;
        updateTotalPrice();
      }
    });
  });

  // Event listener for the "delete" button
  deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove the product's parent card from the DOM
      button.closest(".card").remove();
      updateTotalPrice();
    });
  });

  // Event listener for the heart "like" button
  heartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("liked"); // Toggle the 'liked' class for heart color change
    });
  });
});
