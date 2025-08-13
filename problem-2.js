function onlyCharacter(str) {
  if (typeof str === "string") {
    const stringConvertAnArray = str.split(" ");
    const newString = [];
    for (const char of stringConvertAnArray) {
      //   console.log(char);
      if (char !== "") {
        newString.push(char);
      }
    }
    const characterInUpperCase = newString.join("").toUpperCase();
    return characterInUpperCase;
  } else {
    return "Invalid";
  }
}

const text = "  h e llo wor   ld ";
const text2 = 234;
const text3 = ["hack", "me"];
const text4 = false;
const text5 = "Cy   bar- At  tac k  ";
const text6 = "Serv er : : Do wn";
const result = onlyCharacter("hello\nworld");
console.log(result);
