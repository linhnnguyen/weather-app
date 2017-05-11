// $(document).ready(function() {
//     console.log('document loaded');

  //   var apiKey = "dec0bc1c65ab23bf"
  //   var weatherAPI = "http://api.wunderground.com/api/";
  //   var condition = "/conditions/q/CA/San_Francisco.json"
  //   var url = weatherAPI + apiKey + condition;

  //   console.log(url);


  //    $.getJSON(url, function (data) {
  //     console.log(data);

  //     var City = data['current_observation']['display_location']['city'];
  //     var State = data['current_observation']['display_location']['state'];
  //     var Temp = data['current_observation']['temp_f'];

  //     // console.log(UV);

  //     $('#city').html(City);
  //     $('#state').html(State);
  //     $('#temp').html(Temp + " " + "F");


  // });


// });
var apiKey = 'dec0bc1c65ab23bf';
var weatherAPIurl = 'http://api.wunderground.com/api/';

var icons = { "clear" : "wi wi-day-sunny", 
            "partlycloudy" : "wi wi-day-sunny-overcast",
            "mostlycloudy" : "wi wi-day-cloudy",
            "cloudy" : "wi wi-cloudy", 
            "rain" : "wi wi-rain", 
            "snow" : "wi wi-snow", 
            // "sleet" : "X", 
            // "wind" : "S", 
            "fog" :"wi wi-fog", 
          };

var cities = {  
        "new york"    :   {coords: {latitude: 40.672060, longitude:-73.983898}},
        "los angeles"   :   {coords: {latitude: 34.101422, longitude: -118.341224}},
        "chicago"     :   {coords: {latitude: 41.879003, longitude: -87.63675}},
        "san francisco" :   {coords: {latitude: 37.788531, longitude: -122.407237}},
        "miami"     : {coords: {latitude: 25.790176, longitude: -80.140133}},
        "current location" : ""
       };



$(document).ready(function() {
  console.log('ready');
      // onkeypress='return event.charCode >= 48 && event.charCode <= 57' //place inline in html
   // $("#info").keydown(function (e) {
   //      // Allow: backspace, delete, tab, escape, enter and .
   //      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
   //           // Allow: Ctrl+A
   //          (e.keyCode == 65 && e.ctrlKey === true) ||
   //           // Allow: Ctrl+C
   //          (e.keyCode == 67 && e.ctrlKey === true) ||
   //           // Allow: Ctrl+X
   //          (e.keyCode == 88 && e.ctrlKey === true) ||
   //           // Allow: home, end, left, right
   //          (e.keyCode >= 35 && e.keyCode <= 39)) {
   //               // let it happen, don't do anything
   //               return;
   //      }
   //      // Ensure that it is a number and stop the keypress
   //      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
   //          e.preventDefault();
   //      }
   //  });


  $('#myForm').submit(function(event) {
    event.preventDefault();



    var zipcode = $('#info').val();
      console.log(zipcode);

      $.getJSON(weatherAPIurl + apiKey + '/conditions/q/' + zipcode + '.json', function(data) {
          console.log(data);

          var City = data.current_observation.display_location.city;
          console.log(City);

          var State = data.current_observation.display_location.state;
          console.log(State);

          var Temp = data.current_observation.temperature_string;
          console.log(Temp);

          var Icon = data.current_observation.icon;
          console.log(Icon);

          var Cond = data.current_observation.weather;
          console.log(Cond);

          $('#city').html(City);
          $('#state').html(State);
          $('#temp').html(Temp);
          $('#icon').attr("src", Icon);
          $('#icon-name').html(Cond);
          $("i").attr("class", icons[data.current_observation.icon]);
      });

      this.reset();

  });  

});