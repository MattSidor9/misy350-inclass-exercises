

function main() {
  //document.getElementById('google').innerHTML = "Google";
  $ ('google').html('Gooooooogle');
  //let links = document.getElementsByClassName('my-link');
  let links = $('.my-link');
  links[0].innerHTML = "Twitter";
  links[0].href = "https://twitter.com";
  links[1].innerHTML = "LinkedIn";
  links[1].href = "https://www.linkedin.com";
  links[1].style.color = "red"

  //=button click event
  $('heading-button').click(function(){
    $('h1').css('color', 'red');
    $('.my-link').hide()

  });

  //toggle click
  $('#toggle-button').click(function (){
  $('.my-link').toggle;
})


$('#main-text').hide();
$('#main-text').fadeIn(1000);

$('.project').hide();

$('.project-button').click(function(){
  $(this).next().slideToggle(500);
});
}


$(document).ready(main);
