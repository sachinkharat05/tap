function calculateResult() {
  const form = document.getElementById('quizForm');
  const answers = ['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];
  const scores = { science: 0, commerce: 0, arts: 0 };

  for (let q of answers) {
    const selected = form.querySelector(`input[name="${q}"]:checked`);
    if (selected) {
      scores[selected.value]++;
    }
  }

  let iq = (scores.science * 30) + (scores.commerce * 25) + (scores.arts * 20);

  const maxScore = 300;
  iq = Math.min(100, Math.round((iq / maxScore) * 100));

  let bestStream = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  document.getElementById('result').innerText =
    `🧠 Estimated IQ: ${iq}\n🎓 Suggested Stream: ${
      bestStream.charAt(0).toUpperCase() + bestStream.slice(1)
    }`;
}
