$(function () {
  var comWin = $(window).height()
  if (comWin < 950) {
    $('.part-one').slice(0, 1).show()
  } else {
    $('.part-one').slice(0, 5).show()
  }
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop()
    if ($(window).width() > 1024) {
      if (scrollTop < 75) {
        $('.part-one').hide()
      }
      if (scrollTop > 450 && scrollTop < 850) {
        $('.part-one').slice(0, 1).show()
      }
      if (scrollTop > 850 && scrollTop < 1300) {
        $('.part-one').slice(0, 2).show()
      }
      if (scrollTop > 1300) {
        $('.part-one').slice(0, 3).show()
      }
    } else {
      $('.part-one').slice(0, 3).show()
    }
  })
})
