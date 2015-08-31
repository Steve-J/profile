$(function() {
  
  var clndr = {};
  
  var url1 = "https://www.google.com/calendar/feeds/v0c0jcu09c2smvqpqlnftkl9noc1u18c%40import.calendar.google.com/public/basic?alt=json&orderby=starttime&futureevents=true&sortorder=ascending";
  
  var url2 = "https://www.google.com/calendar/feeds/ksh5fkmruj4va6b5851v4l5rv8%40group.calendar.google.com/public/basic?alt=json&orderby=starttime&futureevents=true&sortorder=ascending";

  $.getJSON(url2, function (data) {
    var calData = data.feed.entry;
    var events = [];
    $.each(calData, function(index, d) {
      var eventData = {};
      var summaryArray = d.summary.$t.split('<br>');
      var dateArray = summaryArray[0].split(': ')[1].split(' ');
      var where = summaryArray[2].split(': ');
      var month;
      switch (dateArray[2]) {
        case 'Jan': month = '01'; break;
        case 'Feb': month = '02'; break;
        case 'March':month = '03'; break;
        case 'April':month = '04'; break;
        case 'May': month = '05'; break;
        case 'Jun': month = '06'; break;
        case 'Jul': month = '07'; break;
        case 'Aug': month = '08'; break;
        case 'Sep': month = '09'; break;
        case 'Oct': month = '10'; break;
        case 'Nov': month = '11'; break;
        case 'Dec': month = '12'; break;
        default: break;
      }
      eventData.title = d.title.$t;
      if (where[0] == 'Where') {
        eventData.location = where[1].slice(0, -1);
      } else {
        eventData.location = '';
      }
      eventData.date = dateArray[3] + '-' + month + '-' + dateArray[1];
      if (dateArray.length > 4) {
        eventData.time = dateArray[4];
      } else {
        eventData.time = '';
      }
      events.push(eventData);
      console.log(summaryArray);
    })
    initCal(events);
  });


  function initCal (events) {
    clndr = $('#full-clndr').clndr({
      template: $('#full-clndr-template').html(),
      weekOffset: 1,
      daysOfTheWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      events: events,
      adjacentDaysChangeMonth: true,
      forceSixRows: false,
      clickEvents: {
        click: function(target){
          if (target.events.length > 0) {
            var eventsHtml = "";
            var dateHtml = "";
            for (var item in target.events) {
              var calEvent = target.events[item];
              dateHtml = moment(calEvent.date).format('Do');
              eventsHtml += '<h4>' + calEvent.title + ' <span>' + calEvent.time + '</span></h4>' + '<p>' + calEvent.location + '</p>'
            }
            $('.popup-date').html(dateHtml);
            $('.popup-events').html(eventsHtml);
            $('.days').animate({opacity: 0}, 300);
            $('.cal-popup').fadeIn(300);
          }
        }
      },
      doneRendering: function () {
        showEvents();
        $(window).on('scroll', function () {
          showEvents();
        })
        $('.cross').on('click touchup', function () {
          $('.cal-popup').fadeOut(300);
          $('.days').animate({opacity: 1}, 300);
        })
      }
    });
  }
  

  function showEvents () {
    var scrollTop = $(this).scrollTop();
    var eventTop = $('.event-listing').offset().top;
    if (scrollTop > eventTop - $(this).height() / 1.5) {
      $('.event-item').each(function (i) {
        setTimeout(function () {
          $('.event-item').eq(i).addClass('show-event');
        }, 150 * (i + 1));
      })
    }
  }
  
  $(document).keydown( function(e) {
    if(e.keyCode == 37) {
      // left arrow
      clndr.back();
    }
    if(e.keyCode == 39) {
      // right arrow
      clndr.forward();
    }
  });
  
});