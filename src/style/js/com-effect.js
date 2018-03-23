$(function () {
  var comWin = $(window).height()
  if (comWin < 950) {
    $('.xxgj-part-one').slice(0, 1).show()
  } else {
    $('.xxgj-part-one').slice(0, 5).show()
  }
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop()
    if (scrollTop > 100) {
      $('.xxgj-part-one').slice(0, 1).show()
    }
    if (scrollTop > 300 && scrollTop < 700) {
      $('.xxgj-part-one').slice(0, 2).show()
    }
    if (scrollTop > 700 && scrollTop < 1000) {
      $('.xxgj-part-one').slice(0, 3).show()
    }
    if (scrollTop > 1000 && scrollTop < 1700) {
      $('.xxgj-part-one').slice(0, 4).show()
    }
    if (scrollTop > 1700 && scrollTop < 2200) {
      $('.xxgj-part-one').slice(0, 5).show()
    }
    if (scrollTop > 2200 && scrollTop < 2500) {
      $('.xxgj-part-one').slice(0, 6).show()
    }
    if (scrollTop > 2500) {
      $('.xxgj-part-one').slice(0, 10).show()
    }
  })
})
