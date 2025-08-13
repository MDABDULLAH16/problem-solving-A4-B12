function totalFine(fare) {
  if ((typeof fare === "number") === true && fare > 0) {
    const fine = fare + fare * (20 / 100) + 30;
    return fine;
  } else {
    return "Invalid";
  }
}

function onlyCharacter(str) {
  if (typeof str !== "string") return "Invalid";
  const newString = str.replace(/\s+/g, "").toUpperCase();
  return newString;
}

function bestTeam(player1, player2) {
  if (
    typeof player1 === "object" &&
    player1 !== null &&
    typeof player2 === "object" &&
    player2 !== null
  ) {
    const firstPlayerTotalScore =
      Number(player1.foul) + Number(player1.cardY) + Number(player1.cardR);

    const secondPlayerTotalScore =
      Number(player2.foul) + Number(player2.cardY) + Number(player2.cardR);

    if (firstPlayerTotalScore > secondPlayerTotalScore) {
      return player2.name;
    } else if (firstPlayerTotalScore < secondPlayerTotalScore) {
      return player1.name;
    } else if (firstPlayerTotalScore === secondPlayerTotalScore) {
      return "Tie";
    }
  } else {
    return "Invalid";
  }
}

function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length === 0) return { finalScore: 0, pass: 0, fail: 0 };

  let totalMarks = 0;
  let failSubject = 0;
  let passSubject = 0;
  for (const number of marks) {
    totalMarks = totalMarks + number;
    if (number < 40) {
      failSubject++;
    }
    if (number >= 40) {
      passSubject++;
    }
  }
  const averageMarks = totalMarks / marks.length;
  const finalScoreRounded = Math.round(averageMarks);
  const result = {
    finalScore: finalScoreRounded,
    pass: passSubject,
    fail: failSubject,
  };
  return result;
}
