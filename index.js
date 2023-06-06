function getDateDifference(startDate, endDate) {
  console.log("Entered dates are: " + startDate, endDate);
  var start = new Date(startDate);
  var end = new Date(endDate);

  // Calculate the difference in milliseconds
  var millisecondsDiff = end - start;

  // Calculate the number of milliseconds in a day
  var millisecondsPerDay = 24 * 60 * 60 * 1000;

  // Calculate the number of days
  var days = Math.floor(millisecondsDiff / millisecondsPerDay);

  // Calculate the number of years
  var years = Math.floor(days / 365);
  console.log("years remaining are: " + years);

  // Calculate the remaining days
  var remainingDays = days % 365;

  // Calculate the number of months
  var months = Math.floor(remainingDays / 30);

  // Calculate the remaining days
  var remainingDays = remainingDays % 30;
  console.log("remaining days: " + remainingDays);
  return {
    years: years,
    months: months,
    days: remainingDays,
  };
}

//current dates
var d = new Date();
var thisDay, thisMonth, thisYear;
thisDay = d.getDate();
thisMonth = d.getMonth();
thisMonth++;
thisYear = d.getFullYear();
var todayDate = thisYear + "-" + thisMonth + "-" + thisDay;

function invalidDateShow() {
  console.log("\n\nAdding faulty classes");
  $(".enter-valid-date").removeClass("hide");
  $(".input-field label").addClass("invalid-red-text");
  $(".input-field input").addClass("invalid-red-text");
}
function vaildDates() {
  console.log("\n\nAdding faulty classes");
  $(".enter-valid-date").addClass("hide");
  $(".input-field label").removeClass("invalid-red-text");
  $(".input-field input").removeClass("invalid-red-text");
}

function afterValuesEntered() {
  vaildDates();
  day = $("#day").val();
  month = $("#month").val();
  year = $("#year").val();
  var day, month, year;
  var userEnteredDate = year + "-" + month + "-" + day;
  if (day <= 0 || day > 31) {
    invalidDateShow();
  } else if (month <= 0 || month > 12) {
    invalidDateShow();
  } else if (year <= 1900 || year > 2023) {
    invalidDateShow();
  }

  var printdates = getDateDifference(userEnteredDate, todayDate);
  $("#number-of-days").text(printdates.days);
  $("#number-of-months").text(printdates.months);
  $("#number-of-years").text(printdates.years);
}

$(".icon-container").click(function () {
  afterValuesEntered();
});

$(document).on("keypress", function (e) {
  if (e.which == 13) {
    afterValuesEntered();
  }
});
