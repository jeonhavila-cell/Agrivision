```javascript
const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");


// IMAGE PREVIEW

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        const reader = new FileReader();

        reader.onload = function (event) {

            preview.src = event.target.result;
            preview.style.display = "block";

        };

        reader.readAsDataURL(file);
    }

});


// DEMO CROP DETECTION

function detectCrop() {

    const file = imageInput.files[0];

    if (!file) {

        alert("Please upload a crop image first.");

        return;
    }


    // Demo result for frontend testing

    const crops = [

        {
            name: "Rice",
            confidence: "94%",
            season: "Kharif",
            water: "High",
            description:
                "Rice is an important cereal crop generally grown in warm and water-rich conditions."
        },

        {
            name: "Wheat",
            confidence: "91%",
            season: "Rabi",
            water: "Medium",
            description:
                "Wheat is an important cereal crop mainly grown during the cool season."
        },

        {
            name: "Maize",
            confidence: "96%",
            season: "Kharif / Rabi",
            water: "Medium",
            description:
                "Maize is a versatile cereal crop used for food, animal feed and industrial products."
        },

        {
            name: "Cotton",
            confidence: "93%",
            season: "Kharif",
            water: "Medium",
            description:
                "Cotton is an important commercial fibre crop."
        },

        {
            name: "Groundnut",
            confidence: "90%",
            season: "Kharif / Rabi",
            water: "Medium",
            description:
                "Groundnut is an important oilseed and food crop."
        },

        {
            name: "Tomato",
            confidence: "95%",
            season: "Multiple Seasons",
            water: "Medium",
            description:
                "Tomato is an important vegetable crop cultivated in many regions."
        }

    ];


    const result =
        crops[Math.floor(Math.random() * crops.length)];


    document.getElementById("cropName").textContent =
        "🌱 " + result.name;

    document.getElementById("confidence").textContent =
        result.confidence;

    document.getElementById("season").textContent =
        result.season;

    document.getElementById("water").textContent =
        result.water;

    document.getElementById("description").textContent =
        result.description;


    document.getElementById("result").style.display =
        "block";


    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });

}
```
