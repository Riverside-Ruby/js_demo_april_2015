// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jQueryRotate
//= require_tree .


$(function(){ 
  $("#img").rotate(-7);

  $("#img2").rotate({ 
     bind: 
       { 
          mouseover : function() { 
              $(this).rotate({animateTo:-90})
          },
          mouseout : function() { 
              $(this).rotate({animateTo:0})
          }
       } 
     
  });



  function randomIntFromInterval(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  

  $("#img3").rotate({ 
     bind: 
       { 
          click: function(){
              var angle = randomIntFromInterval(1000, 72000)

                setInterval(function(){
                      angle-=angle/20;
                     $("#img3").rotate(angle);
                },50);

          }
       } 
  });


});


