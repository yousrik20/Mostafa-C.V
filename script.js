console.log("testing!");
let users = ["yousri", "ali", "aya", "mostafa", "mohamed"];
users.forEach((user) => console.log(user.toUpperCase()));
const checklarge = users.filter((user) => {
  return user.length > 3;
});
console.log(checklarge);
// window.addEventListener("scroll", () => {
//   if (scrollY > 100) {
//     const Elements = document.querySelectorAll("h3");

//     Elements.forEach((element) => {
//       console.log(element);
//       element.style.color = "#f00";
//     });
//   }
//   if (scrollY < 100) {
//     const Elements = document.querySelectorAll("h3");

//     Elements.forEach((element) => {
//       console.log(element);
//       element.style.color = "#000";
//     });
//   }
// });
