function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
var resp = false;
function addReview() {
    if (resp) {
        alert("Your response is already submitted");
        return;
    }
    var name = prompt("Enter Your Name");
    var star = prompt("Rate us by stars");
    var review = prompt("Enter Your Review");
    if (name != null && review != null) {
        document.getElementById("review").innerHTML += `
            <div>
                <h3>${name}</h3>
                <h5>${star} / 5 stars</h5>
                <p>${review}</p>
            </div>
        `;
    }
    resp = true;
}
