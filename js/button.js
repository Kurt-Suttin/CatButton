document.addEventListener("DOMContentLoaded", () => {
    // Step 1: Add the event listener to the button
    let element = document.querySelector("#cat-btn");
    element.addEventListener("click", fetchCats);

    // Step 2: Define the fetchCats function
    function fetchCats() {
        let url = "https://api.thecatapi.com/v1/images/search";
        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };

        // Step 3: Use fetch to make the API call and handle the response using .then
        fetch(url, options)
            .then(response => {
                return response.json(); // Assuming the response contains JSON data, otherwise use response.text() or response.blob()
            })
            .then(data => {
                console.log(data); // Check if the data is correctly fetched in the console

                // Handle the data here (e.g., update the DOM with the cat image)
                let catImage = document.querySelector(".display-cat img");

                // Assuming bd.json contains an array of cat image URLs
                // Loop through the data array and display the cat images one by one
                for (let i = 0; i < data.length; i++) {
                    let imgURL = data[i].url;
                    catImage.src = imgURL;
                    // You may need to add a delay here if you want to show each image one by one
                }
            })
            .catch(error => {
                // Handle errors here
                console.error("Error fetching cat data:", error);
            });
    }
});
