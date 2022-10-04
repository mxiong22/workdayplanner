//display of current day 
var todayDate = moment().format('dddd,MMMM Do');
$('#currentDay').text(todayDate);

//container weekly scheduler
console.log($(".container").children("row"))
var computerTime = today.format("HH");
console.log("The Time is:", computerTime);


$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var inputText = $(this).siblings("description").val();
    var blockTime = $(this).parent().attr("id");
    localStorage.setItem(blockTime, inputText);
    $("#saveAck").removeClass("hidden")
    setTimeout(showAck, 5000);

  })

  function showAck() {
    $("#saveAck").addClass("hidden");

  }


  function setBlockColor() {
    $(".row").each(function () {
      var currentHour = parseInt($(this).attr("id").split("current-time")[0]);
      console.log("computer time", computerTime)
      console.log("block time", currentHour)

      if (computerTime < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("futire");
        $(this).removeClass("present");

      }

      else if (computerTime === currentHour) {
        $(this).addClass("past");
        $(this).removeClass("futire");
        $(this).removeClass("present");
      }

      else {
        $(this).addClass("past");
        $(this).removeClass("futire");
        $(this).removeClass("present");
      }
    })

  }

setBlockColor(); 

})

$("#9 .description").val(localStorage.getItem("#9"));
$("#10 .description").val(localStorage.getItem("#10"));
$("#11 .description").val(localStorage.getItem("#11"));
$("#12 .description").val(localStorage.getItem("#12"));
$("#1 .description").val(localStorage.getItem("#1"));
$("#2 .description").val(localStorage.getItem("#2"));
$("#3 .description").val(localStorage.getItem("#3"));
$("#4 .description").val(localStorage.getItem("#4"));
$("#5 .description").val(localStorage.getItem("#5"));