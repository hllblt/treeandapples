const tree = document.querySelector(".tree");
const container = document.querySelector(".container");

const appleObject = [
  { id: "apple1", bottom: 400, condition: true },
  { id: "apple2", bottom: 400, condition: true },
  { id: "apple3", bottom: 540, condition: true },
  { id: "apple4", bottom: 460, condition: true },
  { id: "apple5", bottom: 600, condition: true },
  { id: "apple6", bottom: 520, condition: true },
  { id: "apple7", bottom: 360, condition: true },
];
let amount = 0;
let index = 0;
let droppedApples = [];
let checker = 0;
// Math.ceil(Math.random() * 7);

//Dropping Function
function dropping(appleID, appleBottom, condition) {
  let j = 0;
  const intervalDropping = setInterval(() => {
    if (document.getElementById(appleID).style.bottom != "20px" && condition) {
      document.getElementById(appleID).style.bottom = `${
        appleBottom - j * 20
      }px`;
    } else if (
      document.getElementById(appleID).style.bottom == "20px" &&
      condition
    ) {
      //   document.getElementById(appleID).classList.add("inBasket");
      droppedApples.push(appleID);
      document.getElementById(appleID).style.left =
        81 +
        droppedApples.indexOf(appleID) * 2 -
        (droppedApples.length > 4 ? 7 : 0) +
        "%";
      document.getElementById(appleID).style.bottom =
        9 + (droppedApples.length > 4 ? 3 : 0) + "%";
      condition = false;
    }
    if (droppedApples.length == checker) {
      clearInterval(intervalDropping);
    }
    j++;
  }, 100);
}

//Tree Click Event
tree.addEventListener("click", () => {
  let i = 0;
  amount = checker = Math.ceil(Math.random() * appleObject.length); //5
  const interval = setInterval(() => {
    if (i % 5 == 0 && i != 0 && amount > 0) {
      index = Math.floor(Math.random() * amount); //amount = 5  ----->   index = 2
      dropping(
        appleObject[index].id,
        appleObject[index].bottom,
        appleObject[index].condition
      );
      appleObject.splice(index, 1);
      amount -= 1; // 3
    }

    if (i < 40) {
      tree.style.transform = "rotateZ(" + (i % 2 == 0 ? 0.2 : -0.2) + "deg)";
    }

    if (i === 100) {
      clearInterval(interval);
    }
    i++;
  }, 100);
});
