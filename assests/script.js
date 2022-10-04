//display of current day 
var todayDate = moment().format('dddd, MMMM Do')); 
$('#currentDay').text(todayDate); 

//container weekly scheduler
$("#weekly-schedule").dayScheduleSelector({
  /*
3
  OPTIONS HERE

  */
});
