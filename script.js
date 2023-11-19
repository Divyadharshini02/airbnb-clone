document.addEventListener("DOMContentLoaded", function () {
    var locationInput = document.getElementById("locationInput");
    var maxPriceInput = document.getElementById("maxPriceInput");
    var resultMessage = document.getElementById("resultMessage");

    var hotels = document.querySelectorAll(".hotel");

    var searchIcon = document.getElementById("searchIcon");
    searchIcon.addEventListener("click", function () {
        var location = locationInput.value.toLowerCase();
        var maxPrice = parseInt(maxPriceInput.value);

        var foundHotels = 0;

        hotels.forEach(function (hotel) {
            var hotelLocation = hotel.dataset.location.toLowerCase();
            var hotelPrice = parseInt(hotel.dataset.price);

            if (hotelLocation.includes(location) && hotelPrice <= maxPrice) {
                hotel.style.display = "flex";
                foundHotels++;
            } else {
                hotel.style.display = "none";
            }
        });

        // Show or hide the result message based on the number of found hotels
        resultMessage.style.display = foundHotels > 0 ? "none" : "block";
    });
});

