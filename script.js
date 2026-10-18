
/* ================= SHOP INFORMATION ================= */

const shopName = "Scented Eight";
const currentYear = new Date().getFullYear();

let runningTotal = 0;

document.getElementById("shop-name").textContent =
    "Welcome to " + shopName;

document.getElementById("copyright").textContent =
    `© ${currentYear} ${shopName}. All Rights Reserved.`;


/* ================= PRODUCT CALCULATION ================= */

const productPrices = [179, 179, 170];

const productCount = productPrices.length;

for (const price of productPrices) {
    runningTotal += price;
}

document.getElementById("product-count").textContent = productCount;

document.getElementById("total-value").textContent =
    "₱" + runningTotal.toFixed(2);


/* ================= STOCK STATUS ================= */

const stockCount = 8;
const stockStatus = document.getElementById("stock-status");

if (stockCount > 10) {
    stockStatus.textContent = "In stock";
} else if (stockCount > 0 && stockCount <= 10) {
    stockStatus.textContent = "Only a few left";
} else if (stockCount === 0) {
    stockStatus.textContent = "Sold out";
} else {
    stockStatus.textContent = "Invalid stock count";
}


/* ================= FREE DELIVERY ================= */

// Example order information
const orderTotal = 500;
const isMember = true;

// Both conditions must be true for free delivery
const qualifiesForFreeDelivery =
    orderTotal >= 500 && isMember === true;

// Ternary operator chooses the delivery fee
const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;

const finalTotal = orderTotal + deliveryFee;

document.getElementById("order-total").textContent =
    orderTotal.toFixed(2);

document.getElementById("membership-status").textContent =
    isMember === true ? "Member" : "Non-member";

document.getElementById("delivery-fee").textContent =
    deliveryFee.toFixed(2);

document.getElementById("final-total").textContent =
    finalTotal.toFixed(2);


/* ================= SHOP OPEN OR CLOSED ================= */

const isShopOpen = true;

const shopStatus = isShopOpen ? "Open today" : "Closed today";

document.getElementById("shop-status").textContent = shopStatus;


/* ================= CONSOLE LOGS ================= */

console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Running Total:", runningTotal);
console.log("Product Count:", productCount);
console.log("Stock Status:", stockStatus.textContent);
console.log("Free Delivery:", qualifiesForFreeDelivery);
console.log("Final Total:", finalTotal);
console.log("Shop Status:", shopStatus);


/* ================= NAVIGATION MENU ================= */

const navLinks = document.getElementById("navLinks");

function openMenu() {
    if (navLinks) {
        navLinks.style.right = "0";
    }
}

function closeMenu() {
    if (navLinks) {
        navLinks.style.right = "-100%";
    }
}


/* ================= STAR RATING ================= */

const stars = document.querySelectorAll("#stars i");
let selectedRating = 0;

stars.forEach(function(star) {
    star.addEventListener("click", function() {
        selectedRating = Number(this.getAttribute("data-rating"));

        stars.forEach(function(s) {
            const rating = Number(s.getAttribute("data-rating"));

            if (rating <= selectedRating) {
                s.classList.remove("fa-regular");
                s.classList.add("fa-solid");
            } else {
                s.classList.remove("fa-solid");
                s.classList.add("fa-regular");
            }
        });

        document.getElementById("ratingText").textContent =
            selectedRating + " out of 5 stars";
    });
});


/* ================= SUBMIT REVIEW ================= */

function submitReview() {
    const comment =
        document.getElementById("reviewComment").value.trim();

    const message = document.getElementById("reviewMessage");

    if (selectedRating === 0) {
        message.textContent = "Please select a star rating.";
        return;
    }

    if (comment === "") {
        message.textContent = "Please write a comment.";
        return;
    }

    message.textContent = "Thank you for your review!";

    document.getElementById("reviewComment").value = "";

    selectedRating = 0;

    stars.forEach(function(star) {
        star.classList.remove("fa-solid");
        star.classList.add("fa-regular");
    });

    document.getElementById("ratingText").textContent =
        "Choose a rating";
}


/* ================= CUSTOMER INFORMATION ================= */

const customerForm = document.getElementById("customerForm");

customerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("customerMessage").textContent =
        "Thank you! Your information has been submitted.";

    customerForm.reset();
});