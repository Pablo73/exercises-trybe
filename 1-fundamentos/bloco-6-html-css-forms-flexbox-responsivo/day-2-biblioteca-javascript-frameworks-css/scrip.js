

// You can get and set dates with moment objects
var picker = new Pikaday(
{
    field: document.getElementById('datepicker'),
    firstDay: 1,
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000,2020],
    onSelect: function() {
        var date = document.createTextNode(this.getMoment().format('Do MMMM YYYY') + ' ');
        document.getElementById('selected').appendChild(date);
    }
});

picker.setMoment(moment().dayOfYear(366));

