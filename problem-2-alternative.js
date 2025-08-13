function onlyCharacter(str) {
  if (typeof str !== "string") return "Invalid";
  const newString = str.replace(/\s+/g, "").toUpperCase();
  return newString;
}

const result = onlyCharacter("sdf\nhelllo");
console.log(result);
