$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 300) {
      $("ul").addClass("navscrolled");
      $("#logo").addClass("showlogo");
      $("#logoname").removeClass("showlogo");
      $('li').addClass("liscrolled")
      
    } else {
      $("#logo").removeClass("showlogo");
      $("#logoname").addClass("showlogo");
      $("ul").removeClass("navscrolled");
      $('li').removeClass("liscrolled")
    }
  });
});

	$('#modal').click(function(){
		$('.modal').show()
	});
	$('#close').click(function(){

		$('.modal').hide()
	})
