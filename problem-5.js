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

const marks = [99, 87, 67, 40, 39, 12, 87];
const result = resultReport(marks);
console.log(result);
