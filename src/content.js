(function () {
  "use strict";
  const contestName = document.querySelector("a.contest-title").innerHTML;
  const contestUrl = document.querySelector("a.contest-title");

  // 開始時間と修了時間の取得
  const times = document.querySelectorAll("small.contest-duration a");
  const startTimeFormed =
    String(times[0]).split("=")[1].replace("&p1", "") + "00";
  const endTimeFormed =
    String(times[1]).split("=")[1].replace("&p1", "") + "00";

  const googleCalendarUrl =
    "http://www.google.com/calendar/event?" +
    "action=" +
    "TEMPLATE" +
    "&text=" +
    contestName +
    "&dates=" +
    startTimeFormed +
    "/" +
    endTimeFormed +
    "&location=" +
    contestUrl;

  const insertTxt = `  <a href='${googleCalendarUrl}', target="_blank">Google Calendar</a>`;
  const place = document.querySelector("small.contest-duration");
  place.insertAdjacentHTML("beforeend", insertTxt);
})();
