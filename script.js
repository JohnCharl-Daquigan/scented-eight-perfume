
/* ================= SHOP INFORMATION ================= */

const shopName = "Scented Eight";
const currentYear = new Date().getFullYear();

let runningTotal = 0;


/* ================= SHOP NAME ================= */

const shopNameElement = document.getElementById("shop-name");

if (shopNameElement) {
    shopNameElement.textContent = "Welcome to " + shopName;
}


/* ================= COPYRIGHT ================= */

const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} ${shopName}. All Rights Reserved.`;
}


/* ================= PRODUCT CALCULATION ================= */

// Prices of the three products
const productPrices = [179, 179, 170];

// Count the products
const productCount = productPrices.length;
const productCountElement = document.getElementById("product-count");

if (productCountElement) {
    productCountElement.textContent = productCount;
}

// Calculate the total value of all products
for (const price of productPrices) {
    runningTotal += price;
}

// Display the calculated total
const totalValueElement = document.getElementById("total-value");

if (totalValueElement) {
    totalValueElement.textContent = "₱" + runningTotal.toFixed(2);
}


/* ================= CONSOLE LOGS ================= */

console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Running Total:", runningTotal);
console.log("Product Count:", productCount);


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
    const comment = document.getElementById("reviewComment").value.trim();
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

function customerInfo(event) {
    event.preventDefault();
    alert("Thank you! Your information has been submitted.");

    event.target.reset();
}
