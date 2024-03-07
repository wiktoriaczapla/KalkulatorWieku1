function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const resultElement = document.getElementById("result");

    if (birthdate) {
      const today = new Date();
      const birthDate = new Date(birthdate);

      let ageYears = today.getFullYear() - birthDate.getFullYear();
      let ageMonths = today.getMonth() - birthDate.getMonth();
      let ageDays = today.getDate() - birthDate.getDate();

      if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(
          today.getFullYear(),
          today.getMonth(),
          0
        ).getDate();
      }

      if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
      }

      resultElement.innerText = `Twój wiek wynosi ${ageYears} lat, ${ageMonths} miesięcy, ${ageDays} dni.`;
      resultElement.style.color = "#D1648D"; // Set the text color to green
    } else {
      resultElement.innerText = "Proszę wybierz swoją datę urodzenia."; // Clear the result if birthdate is not entered
      resultElement.style.color = "red";
    }
  }