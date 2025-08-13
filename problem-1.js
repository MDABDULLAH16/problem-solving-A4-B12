function totalFine(fare) {
  if ((typeof fare === "number") === true && fare > 0) {
    const fine = fare + fare * (20 / 100) + 30;
    return fine;
  } else {
    return "Invalid";
  }
}

const result = totalFine(1);
console.log(result);
