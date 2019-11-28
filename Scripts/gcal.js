
/*
Replace the calendarId and app_key for new calendars.
*/
var calendarId = "hthab24qarhbc3hmdhm924gmgc@group.calendar.google.com";
var app_key = "AIzaSyDqnRk62777m4Am0EwkWA6y7NytQxB6al4";
var url =
    "https://www.googleapis.com/calendar/v3/calendars/" +
    calendarId +
    "/events?key=" +
    app_key;
/*
Edit the index HTML id="eventTemplate" to add more information.
Try to match the {name of replacement} pattern for ease of use.
*/
$(document).ready(function () {
    // $('.modal').modal('hide');
    $.ajax({ method: "GET", url: url }).done(function (resp) {
        for (var i = 0; i < resp.items.length; i++) {
            var appendMe = $("#eventTemplate").html();
            var item = resp.items[i];
            var ms = new moment(item.start.dateTime);
            var me = new moment(item.end.dateTime);
            //The event is not in progress or has ended
            //skip
            if(moment().diff(ms, 'minutes') > 0 && moment().diff(me, 'minutes') > 0)
                continue;
            if (item.location) {
                var locationSplit = item.location.split(",");
                var location = locationSplit[0];
                appendMe = appendMe
                    .replace("{LocationName}", location)
                    .replace("{LocationNameI}", location);
                locationSplit.splice(0, 1);
                appendMe = appendMe
                .replace(
                    "{Address}",
                    locationSplit.join(",")
                ).replace(
                    "{AddressI}",
                    locationSplit.join(",")
                ).replace("{City}",locationSplit[1] + ", " + locationSplit[2].split(" ")[1]);

            }
            appendMe = appendMe
            .replace(
                "{Date}",
                ms.format("MMM DD YYYY")
            ).replace(
                "{DateI}",
                ms.format("MMM DD YYYY")
            )
            .replace(
                "{TimeStart}",
                ms.format("h:mm A")
            ).replace(
                "{TimeStartI}",
                ms.format("h:mm A")
            )
            .replace(
                "{TimeEnd}",
                me.format("h:mm A")
            ).replace(
                "{TimeEndI}",
                me.format("h:mm A")
            )
            .replace("{Summary}", item.summary)
            .replace("{SummaryI}", item.summary);
            appendMe.replace("d-none","");
            $("#eventsContainer").append(appendMe);

        }
    });
});
window.openTicketRequest = function(eve) {
    var form = $('#ticketRequestTemplate').html();
    // $('#ticketRequest').html(form);
    var $eve = $(eve);
    var subject = $eve.data("subject");
    alert(subject);
    // $('.ticketSubjectPreview').html(subject);
    // $('.ticketSubject').val(subject);
    // $('.modal').modal('show');
}
