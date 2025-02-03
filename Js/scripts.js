"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quizForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = {
      heterosexual: 0,
      homosexual: 0,
      bisexual: 0,
      asexual: 0,
      transexual: 0,
    };

    const formData = new FormData(form);

    // Pregunta 1
    const question1 = formData.get("question1");
    if (question1 === "heterosexual") score["heterosexual"]++;
    else if (question1 === "homosexual") score["homosexual"]++;
    else if (question1 === "bisexual") score["bisexual"]++;
    else if (question1 === "asexual") score["asexual"]++;
    else if (question1 === "transexual") score["transexual"]++;

    // Pregunta 2
    const question2 = formData.get("question2");
    if (question2 === "heterosexual") score["heterosexual"]++;
    else if (question2 === "homosexual") score["homosexual"]++;
    else if (question2 === "bisexual") score["bisexual"]++;
    else if (question2 === "asexual") score["asexual"]++;
    else if (question2 === "transexual") score["transexual"]++;

    // Pregunta 3
    const question3 = formData.get("question3");
    if (question3 === "a") {
      score["heterosexual"]++;
      score["homosexual"]++;
      score["bisexual"]++;
      score["asexual"]++;
    } else if (question3 === "b") {
      score["transexual"]++;
    }

    // Pregunta 4
    const question4 = formData.get("question4");
    if (question4 === "heterosexual") score["heterosexual"]++;
    else if (question4 === "homosexual") score["homosexual"]++;
    else if (question4 === "bisexual") score["bisexual"]++;
    else if (question4 === "asexual") score["asexual"]++;

    // Pregunta 5
    const question5 = formData.get("question5");
    if (question5 === "b") {
      score["transexual"]++;
    } else {
      score["heterosexual"]++;
      score["homosexual"]++;
      score["bisexual"]++;
      score["asexual"]++;
    }

    // Pregunta 6
    const question6 = formData.get("question6");
    if (question6 === "a") {
      score["heterosexual"]++;
      score["homosexual"]++;
    } else if (question6 === "b") {
      score["bisexual"]++;
      score["transexual"]++;
    } else {
      score["asexual"]++;
    }

    // Pregunta 7
    const question7 = formData.get("question7");
    if (question7 === "heterosexual") score["heterosexual"]++;
    else if (question7 === "homosexual") score["homosexual"]++;
    else if (question7 === "bisexual") score["bisexual"]++;
    else if (question7 === "asexual") score["asexual"]++;
    else if (question7 === "transexual") score["transexual"]++;

    // Pregunta 8
    const question8 = formData.get("question8");
    if (question8 === "heterosexual") score["heterosexual"]++;
    else if (question8 === "homosexual") score["homosexual"]++;
    else if (question8 === "bisexual") score["bisexual"]++;
    else if (question8 === "asexual") score["asexual"]++;
    else if (question8 === "transexual") score["transexual"]++;

    // Pregunta 9
    const question9 = formData.get("question9");
    if (question9 === "a") {
      score["heterosexual"]++;
      score["homosexual"]++;
      score["asexual"]++;
    } else if (question9 === "b") {
      score["homosexual"]++;
      score["bisexual"]++;
    }

    // Pregunta 10
    const question10 = formData.get("question10");
    if (question10 === "a") {
      score["transexual"]++;
    } else {
      score["heterosexual"]++;
      score["homosexual"]++;
      score["bisexual"]++;
      score["asexual"]++;
    }

    // Determinar el resultado
    let maxScore = Math.max(Object.values(score));
    let resultCategories = Object.keys(score).filter(
      (key) => score[key] === maxScore
    );

    const message = `Resultado del Quiz:\n\nTu puntuación es:\n${JSON.stringify(
      score,
      null,
      2
    )}\n\nTu orientación predominante es: ${resultCategories.join(" o ")}`;

    // Mostrar resultado en un alert y luego reiniciar el formulario
    alert(message);
    form.reset();
  });
});
