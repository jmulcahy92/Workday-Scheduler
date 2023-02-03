// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var saveButtons = $('.saveBtn'); // save-button elements

  // click event listener
  saveButtons.on('click', function() {
    var parentId = $(this).parent().attr('id'); // get id of timeblock parent of 'this' button (the one the user clicked)
    var textContent = $('#'+parentId).children('textarea').val(); // get text of user's input to timeblock textarea (form)
    localStorage.setItem(parentId, textContent); // save to local storage under associated 'hour-x' for easy retrieval to relevant timeblock on refresh
  });


  var currentHour = dayjs().format('H'); // current hour (24 hour clock)

  // loop over 9 to 17 aka 9am to 5pm
  for (i = 9; i < 18; i++) {
    var blockEl = $("div[id*='"+i+"']"); // select block element with given hour value 'i' in id
    
    if (i < currentHour) { // if timeblock's hour is earlier than current hour...
      blockEl.attr('class', 'row time-block past') // give it the 'past' class
    } else if (i == currentHour) { // else if timeblock's hour IS the current hour...
      blockEl.attr('class', 'row time-block present') // give it the 'present' class
    } else { // else (timeblock's hour is later than current hour)...
      blockEl.attr('class', 'row time-block future') // give it the 'future' class
    }
  }


  // could technically combine with above loop
  for (i = 9; i < 18; i++) {
    var savedText = localStorage.getItem('hour-'+i) || ""; // if there is something in local storage under 'hour-i', save to varible; otherwise save an empty string
    $('#hour-'+i).children('textarea').text(savedText); // traverse DOM to textarea child of 'hour-i' timeblock element and change text to stored value / empty string
  }


  var todayDate = dayjs().format('dddd, MMMM D'); // today's date, formatted "Weekday, Month Day"
  $('#currentDay').text(todayDate); // sets text value of element with 'currentDay' id to today's date
});