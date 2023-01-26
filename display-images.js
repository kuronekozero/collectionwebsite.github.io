window.onload = function() {
    // Get the image container element
    let imageContainer = document.getElementById("image-container");
    if(window.location.pathname === '/noodles.html') {
        // Fetch the images.json file
        fetch("/jsons/noodlesjs.json")
            .then(response => response.json())
            .then(data => {
                // Iterate through the image data
                for (let image of data) {
                    // Create an img element
                    let img = document.createElement("img");
                    // Set the src and alt attributes
                    img.src = image.path;
                    img.alt = image.name;
                    // Add class to the img element
                    img.classList.add("noodles-image");
                    // Append the img element to the image container
                    imageContainer.appendChild(img);
                }
            })
            .catch(error => console.log(error));
    } else if(window.location.pathname === '/energydrinks.html') {
        // Fetch the images.json file
        fetch("/jsons/drinksjs.json")
            .then(response => response.json())
            .then(data => {
                // Iterate through the image data
                for (let image of data) {
                    // Create an img element
                    let img = document.createElement("img");
                    // Set the src and alt attributes
                    img.src = image.path;
                    img.alt = image.name;

                    img.classList.add("drinks-image");
                    // Append the img element to the image container
                    imageContainer.appendChild(img);
                }
            })
            .catch(error => console.log(error));
    } else if(window.location.pathname === '/toilets.html') {
        // Fetch the images.json file
        fetch("/jsons/toiletsjs.json")
            .then(response => response.json())
            .then(data => {
                // Iterate through the image data
                for (let image of data) {
                    // Create an img element
                    let img = document.createElement("img");
                    // Set the src and alt attributes
                    img.src = image.path;
                    img.alt = image.name;

                    img.classList.add("toilets-image");
                    // Append the img element to the image container
                    imageContainer.appendChild(img);
                }
            })
            .catch(error => console.log(error));
    }
}

