
// ===============================
// IMAGE UPLOAD
// ===============================

const imageInput =
    document.getElementById("imageInput");

const preview =
    document.getElementById("preview");


imageInput.addEventListener(
    "change",
    function () {

        const file = this.files[0];

        if (!file) {
            return;
        }


        // Check image

        if (!file.type.startsWith("image/")) {

            alert("Please select an image file.");

            this.value = "";

            return;
        }


        // Preview

        const reader =
            new FileReader();


        reader.onload =
            function(event) {

                preview.src =
                    event.target.result;

                preview.style.display =
                    "block";

            };


        reader.readAsDataURL(file);

    }
);


// ===============================
// CROP DETECTION
// ===============================

function detectCrop() {

    const file =
        imageInput.files[0];


    if (!file) {

        alert(
            "Please upload a crop image first."
        );

        return;
    }


    // Demo result

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
            "Maize is a versatile cereal crop used for food, feed and industrial purposes."
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
            "Tomato is an important vegetable crop."
        }

    ];


    const result =
        crops[
            Math.floor(
                Math.random() * crops.length
            )
        ];


    document.getElementById(
        "cropName"
    ).textContent =
        "🌱 " + result.name;


    document.getElementById(
        "confidence"
    ).textContent =
        result.confidence;


    document.getElementById(
        "season"
    ).textContent =
        result.season;


    document.getElementById(
        "water"
    ).textContent =
        result.water;


    document.getElementById(
        "description"
    ).textContent =
        result.description;


    document.getElementById(
        "result"
    ).style.display =
        "block";


    document.getElementById(
        "result"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


// ===============================
// LOGIN
// ===============================

function openLogin() {

    document.getElementById(
        "loginModal"
    ).style.display =
        "flex";

}


function closeLogin() {

    document.getElementById(
        "loginModal"
    ).style.display =
        "none";

}


function loginUser() {

    const email =
        document.getElementById(
            "email"
        ).value.trim();


    const password =
        document.getElementById(
            "password"
        ).value.trim();


    if (email === "") {

        alert("Please enter your email.");

        return;
    }


    if (password === "") {

        alert("Please enter your password.");

        return;
    }


    alert(
        "Login successful! Backend authentication will be connected later."
    );


    closeLogin();

}


// ===============================
// REGISTER
// ===============================

function registerUser() {

    alert(
        "Registration page will be connected to the backend."
    );

}


// ===============================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ===============================

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "loginModal"
            );


        if (event.target === modal) {

            closeLogin();

        }

    }
);
