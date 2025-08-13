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

const result = bestTeam(
  { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
  { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
);
console.log(result);
