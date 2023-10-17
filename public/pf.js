$(document).ready(function(){

    $("#Main").click(function(){
      $("#artwork").hide()
      $("#designs").hide()
    $("#content").empty()
  });

    $("#Bio").click(function(){
    $("#content").empty().append("<h1>about</h1><p>i'm a multidisciplinary designer from toronto, ontario, working in graphic design, ui/ux design, mobile and web design, and video. </p>")
  });

    $("#Contact").click(function(){
    $("#content").empty().append("<h1>contact</h1> <p><a href = 'spdeey@gmail.com'>e-mail</a></p> <p><a href = 'https://www.instagram.com/mf.celine/'>instagram</a></p>")
  });

    $("#1").click(function(){
    $("#content").empty()
    $("<img class = 'content1' alt='fadedcover' src='assets/art/cover.png'></img>").appendTo("#content")
  });

    $("#2").click(function(){
    $("#content").empty()
    $("<img class = 'content1'  alt='fadedcover' src='assets/art/kowloon.jpg'></img>").appendTo("#content")
  });

    $("#3").click(function(){
    $("#content").empty()
    $("<img class = 'content1' alt='fadedcover' src='assets/art/whatelse.jpg'></img>").appendTo("#content")
  });

    $("#4").click(function(){
    $("#content").empty()
    $("<img class = 'content1' alt='fadedcover' src='assets/art/HIDDEN-02.png'></img>").appendTo("#content")
  });

    $("#5").click(function(){
    $("#content").empty()
    $("<video class = 'content1' autoplay><source src = 'assets/art/1.mp4'</video>").appendTo("#content")

  });


    $("#6").click(function(){
    $("#content").empty()
    $("<video class = 'content1'  autoplay><source src = 'assets/art/2.mp4'</video>").appendTo("#content")

  });

    $("#7").click(function(){
    $("#content").empty()
    $("<video class = 'content1'  autoplay><source src = 'assets/art/3.mp4'</video>").appendTo("#content")

  });

    $("#8").click(function(){
    $("#content").empty()
    $("<video class = 'content1'  autoplay><source src = 'assets/art/4.mp4'</video>").appendTo("#content")

  });

    $("#9").click(function(){
    $("#content").empty()
    $("<video class = 'content1'  autoplay><source src = 'assets/art/5.mp4'</video>").appendTo("#content")


  });


$("#art-tab").click(function(){
  $("#artwork").toggle()
  $("#designs").hide()
  $("#content").empty()
})

$("#design-tab").click(function(){
  $("#designs").toggle()
  $("#artwork").hide()
  $("#content").empty()
})

});
