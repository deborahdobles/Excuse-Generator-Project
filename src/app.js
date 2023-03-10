import "./style.css";
window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    let randomNumber = Math.random() * 10;
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["sprinter", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "rob my"];
  let possession = ["homework", "handbag", "car", "shoe", "workbook"];
  let where = [
    "on the street",
    "in my house",
    "in my driveway",
    "in the parking lot"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex] +
    " "
  );
};
