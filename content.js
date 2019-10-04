(function () {
    'use strict';
    const contest_name = document.querySelector('a.contest-title').innerHTML;
    const contest_url = document.querySelector('a.contest-title');

    // 開始時間と修了時間の取得
    const times = document.querySelectorAll('small.contest-duration a');
    const start_time_formed = String(times[0]).split('=')[1].replace('&p1', '') + '00';
    const end_time_formed = String(times[1]).split('=')[1].replace('&p1', '') + '00';


    const google_calendar_url = 'http://www.google.com/calendar/event?' +
        'action=' + 'TEMPLATE' +
        '&text=' + contest_name +
        '&dates=' + start_time_formed + '/' + end_time_formed +
        '&details=' + contest_url;

    const insert_txt = `  <a href='${google_calendar_url}', target="_blank">Google Calendar</a>`;
    const place = document.querySelector('small.contest-duration');
    // window.alert(place)
    place.insertAdjacentHTML('beforeend', insert_txt);

})();
