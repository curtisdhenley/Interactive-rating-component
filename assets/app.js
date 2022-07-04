class RatingController {
  //   constructor(rating) {
  //     this.rating = rating;
  //   }

  selectRating() {
    // let starAmount = 0;
    // let userInput = document.querySelectorAll(".input");
    // let oneStar = document.getElementById("s1");
    // let twoStar = document.getElementById("s2");
    // let threeStar = document.getElementById("s3");
    // let fourStar = document.getElementById("s4");
    // let fiveStar = document.getElementById("s5");
    // for (let numOfStars of userInput) {
    //   numOfStars.addEventListener("click", (event) => {
    //     event.preventDefault();
    //     switch (numOfStars) {
    //       case "1":
    //         starAmount = 1;
    //         break;
    //       case "2":
    //         starAmount = 2;
    //         twoStar.classList.remove(".star-visibility");
    //         break;
    //       case "3":
    //         starAmount = 3;
    //         twoStar.classList.remove(".star-visibility");
    //         threeStar.classList.remove(".star-visibility");
    //         break;
    //       case "4":
    //         starAmount = 4;
    //         twoStar.classList.remove(".star-visibility");
    //         threeStar.classList.remove(".star-visibility");
    //         fourStar.classList.remove(".star-visibility");
    //         break;
    //       case "5":
    //         starAmount = 5;
    //         twoStar.classList.remove(".star-visibility");
    //         threeStar.classList.remove(".star-visibility");
    //         fourStar.classList.remove(".star-visibility");
    //         fiveStar.classList.remove(".star-visibility");
    //         break;
    //       default:
    //         break;
    //     }
    //   });
    // }
  }

  static displayStars() {
    // event.preventDefault();
    let starAmount = 0;
    let userInput = document.querySelectorAll(".input");
    let oneStar = document.getElementById("s1");
    let twoStar = document.getElementById("s2");
    let threeStar = document.getElementById("s3");
    let fourStar = document.getElementById("s4");
    let fiveStar = document.getElementById("s5");
    if (userInput.attribute === "i5") {
      console.log("SUCCESS");
    }
  }
}

RatingController.displayStars();

let starAmount = 0;
let btn1 = document.getElementById("btn1").value;
let btn2 = document.getElementById("btn2").value;
let btn3 = document.getElementById("btn3").value;
let btn4 = document.getElementById("btn4").value;
let btn5 = document.getElementById("btn5").value;
let userInput = document.querySelectorAll(".selected").value;
let oneStar = document.getElementById("s1");
let twoStar = document.getElementById("s2");
let threeStar = document.getElementById("s3");
let fourStar = document.getElementById("s4");
let fiveStar = document.getElementById("s5");

const displayStars = () => {
  let inputCard = document.getElementById("input-container");
  let thanksCard = document.getElementById("thanks-container");
  let rating = document.getElementById("rating");
  let userInput = document.querySelectorAll(".selected");
  document.addEventListener("click", (event) => {
    event.preventDefault();
    for (let i = 0; i < userInput.length; i++) {
        if (i === "1") {
            inputCard.classList.toggle("input-visibility");
            thanksCard.classList.toggle("thanks-visibility");
            rating.innerHTML = 1;
            console.log("SUCCESS");
          } else if (i === "2") {
            inputCard.classList.toggle("input-visibility");
            thanksCard.classList.toggle("thanks-visibility");
            rating.innerHTML = btn2;
            twoStar.classList.remove("star-visibility");
            console.log("SUCCESS2");
          } else if (i === "3") {
            inputCard.classList.toggle("input-visibility");
            thanksCard.classList.toggle("thanks-visibility");
            rating.innerHTML = btn3;
            console.log("SUCCESS3");
          } else if (i === "4") {
            inputCard.classList.toggle("input-visibility");
            thanksCard.classList.toggle("thanks-visibility");
            rating.innerHTML = btn4;
            console.log("SUCCESS4");
          } else if (i === "5") {
            inputCard.classList.toggle("input-visibility");
            thanksCard.classList.toggle("thanks-visibility");
            rating.innerHTML = btn5;
            console.log("SUCCESS5");
          }
    }
    
  })
  
  //   userInput.addEventListener("click", () => {
  //     if (userInput === 5) {
  //       console.log("SUCCESS");
  //     }
  //   });
};
