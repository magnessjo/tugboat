const UNIT_PRICE = 14.99;
const SHIPPING = 5.99;
const TAX_RATE = 0;

const qtyDisplay = document.getElementById('item-qty');
const lineTotalEl = document.getElementById('line-total');
const subtotalEl = document.getElementById('subtotal');
const shippingEl = document.getElementById('shipping');
const taxEl = document.getElementById('tax');
const totalDueEl = document.getElementById('total-due');
const totalDisplayEl = document.getElementById('total-display');
const payAmountEl = document.getElementById('pay-amount');
const payBtn = document.getElementById('pay-btn');
const form = document.getElementById('checkout-form');

let quantity = 1;

function formatPrice(amount) {
  return '$' + amount.toFixed(2);
}

function updateTotals() {
  const subtotal = quantity * UNIT_PRICE;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + SHIPPING + tax;

  qtyDisplay.textContent = quantity;
  lineTotalEl.textContent = formatPrice(subtotal);
  subtotalEl.textContent = formatPrice(subtotal);
  shippingEl.textContent = formatPrice(SHIPPING);
  taxEl.textContent = formatPrice(tax);
  totalDueEl.textContent = formatPrice(total);
  totalDisplayEl.textContent = formatPrice(total);
  payAmountEl.textContent = formatPrice(total);
}

// Quantity buttons
document.querySelectorAll('.qty-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.action === 'increase') {
      quantity++;
    } else if (btn.dataset.action === 'decrease' && quantity > 1) {
      quantity--;
    }
    updateTotals();
  });
});

// Payment method radio toggle
const paymentOptions = document.querySelectorAll('.payment-option');
const cardFields = document.getElementById('card-fields');

paymentOptions.forEach((option) => {
  const radio = option.querySelector('input[type="radio"]');

  option.addEventListener('click', () => {
    paymentOptions.forEach((o) => o.classList.remove('active'));
    option.classList.add('active');
    radio.checked = true;

    if (radio.value === 'card') {
      cardFields.classList.remove('hidden');
    } else {
      cardFields.classList.add('hidden');
    }
  });
});

// Pay button — demo alert
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('This is a demo. No payment processed.');
});

// Initialize totals
updateTotals();
