const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function CalculateAge() {
  let today = new Date();
  let inputData = new Date(document.getElementById("date-input").value);
  let birthMonth, birthDate, birthYear;
  let birthDetails = {
    Date: inputData.getDate(),
    Month: inputData.getMonth(),
    Year: inputData.getFullYear(),
  };

  let currentYear = today.getUTCFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

  leapChecker(currentYear);

  if (
    birthDetails.Year > currentYear ||
    (birthDetails.Month > currentMonth && birthDetails.Year === currentYear) ||
    (birthDetails.Date > currentDate &&
      birthDetails.Month === currentMonth &&
      birthDetails.Year === currentYear)
  ) {
    alert("Not Born Yet!");
    displayResult = ("-", "-", "-");
    return;
  }
  birthYear = currentYear - birthDetails.Year;
  if (currentMonth >= birthDetails.Month) {
    birthMonth = currentMonth - birthDetails.Month;
  } else {
    birthYear--;
    birthMonth = 12 + current - birthDetails.Month;
  }

  if (currentDate >= birthDetails.Date) {
    birthDate = currentDate - birthDetails.Date;
  } else {
    birthMonth--;
    let days = months[currentMonth - 2];
    birthDate = days + currentDate - birthDetails.Date;

    if (birthDate < 0) {
      birthMonth = 11;
      birthYear--;
    }
  }
  displayResult(birthDate, birthMonth, birthYear);
}

function displayResult(BDate, BMonth, BYear) {
  document.getElementById("years").textContent = BYear;
  document.getElementById("months").textContent = BMonth;
  document.getElementById("days").textContent = BDate;
}

function leapChecker(year) {
  if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
}
