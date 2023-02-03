// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var saveButtons = $('.saveBtn');

  saveButtons.on('click', function() {
    
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
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


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  


  // TODO: Add code to display the current date in the header of the page.
  var todayDate = dayjs().format('dddd, MMMM D'); // today's date, formatted "Weekday, Month Day"
  $('#currentDay').text(todayDate); // sets text value of element with 'currentDay' id to today's date
});
