// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quizForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Objeto para llevar la cuenta de cada categoría
    let score = {
      heterosexual: 0,
      homosexual: 0,
      bisexual: 0,
      asexual: 0,
      transexual: 0,
    };

    // Recoger las respuestas del formulario
    const formData = new FormData(form);

    // ---------------------------
    // Pregunta 1: "valor directo"
    // El valor seleccionado (por ejemplo "heterosexual") se usa para incrementar directamente la puntuación de esa categoría.
    const q1 = formData.get("q1");
    if (q1) {
      score[q1]++;
    }

    // ---------------------------
    // Pregunta 2: "valor directo"
    const q2 = formData.get("q2");
    if (q2) {
      score[q2]++;
    }

    // ---------------------------
    // Pregunta 3:
    // Si la respuesta es "a" (Sí, completamente) se asigna un punto a las categorías: heterosexual, homosexual, bisexual y asexual.
    // Si la respuesta es "b" (No, me identifico con un género diferente al asignado) se asigna un punto a transexual.
    const q3 = formData.get("q3");
    if (q3 === "a") {
      score["heterosexual"]++;
      score["homosexual"]++;
      score["bisexual"]++;
      score["asexual"]++;
    } else if (q3 === "b") {
      score["transexual"]++;
    }

    // ---------------------------
    // Pregunta 4: "valor directo"
    const q4 = formData.get("q4");
    if (q4) {
      score[q4]++;
    }

    // ---------------------------
    // Pregunta 5:
    // Si elige "a" (Sí) no se suma ningún punto (aunque se puede interpretar que descarta la opción transexual).
    // Si elige "b" (No, preferiría ser reconocido como otro género) se suma un punto a transexual.
    const q5 = formData.get("q5");
    if (q5 === "transexual") {
      score["transexual"]++;
    }

    // ---------------------------
    // Pregunta 6:
    // a) Nunca → suma 1 a heterosexual y homosexual.
    // b) Sí, algunas veces → suma 1 a bisexual y 1 a transexual.
    // c) No siento atracción sexual en general → suma 1 a asexual.
    const q6 = formData.get("q6");
    if (q6 === "a") {
      score["heterosexual"]++;
      score["homosexual"]++;
    } else if (q6 === "b") {
      score["bisexual"]++;
      score["transexual"]++;
    } else if (q6 === "asexual") {
      score["asexual"]++;
    }

    // ---------------------------
    // Pregunta 7: "valor directo"
    const q7 = formData.get("q7");
    if (q7) {
      score[q7]++;
    }

    // ---------------------------
    // Pregunta 8: "valor directo"
    const q8 = formData.get("q8");
    if (q8) {
      score[q8]++;
    }

    // ---------------------------
    // Pregunta 9:
    // a) No, siempre ha sido la misma → suma 1 a heterosexual, homosexual, bisexual y asexual.
    // b) Sí, ha cambiado con el tiempo → suma 1 a transexual y 1 a bisexual.
    const q9 = formData.get("q9");
    if (q9 === "a") {
      score["heterosexual"]++;
      score["homosexual"]++;
      score["bisexual"]++;
      score["asexual"]++;
    } else if (q9 === "b") {
      score["transexual"]++;
      score["bisexual"]++;
    }

    // ---------------------------
    // Pregunta 10:
    // a) Con mi género → suma 1 a transexual.
    // b) Con mi orientación → en este ejemplo no suma punto adicional (pero se podría usar para desempate u otra lógica).
    const q10 = formData.get("q10");
    if (q10 === "a") {
      score["transexual"]++;
    }
    // ---------------------------
    // Determinar cuál o cuáles categorías tienen la puntuación máxima
    let maxScore = 0;
    let resultCategories = [];
    for (let category in score) {
      if (score[category] > maxScore) {
        maxScore = score[category];
        resultCategories = [category];
      } else if (score[category] === maxScore) {
        resultCategories.push(category);
      }
    }

    // Preparar el mensaje del resultado
    const message = `Resultado del Quiz:\n\nTu puntuación es:\n${JSON.stringify(
      score,
      null,
      2
    )}\n\nLa inclinación sexual predominante es: ${resultCategories.join(
      " o "
    )}`;

    // Mostrar el resultado en una alerta
    alert(message);
    // Reiniciar el formulario para poder hacerlo nuevamente
    form.reset();
    // Recargar la página para limpiar completamente el formulario
    location.reload();
  });
});
