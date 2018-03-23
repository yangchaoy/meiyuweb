<template>
  <div class="">
    <!-- sec-nav-wrap-start -->
	<div class="sec-nav-wrap">
	  <div class="sec-nav">
        <router-link to="/zscrm">番茄招生</router-link>
        <router-link to="/fqwx" >番茄微校</router-link>
        <router-link to="/xxgj">番茄助教</router-link>
        <router-link to="/jylm" class="active">教育联盟</router-link>
	  </div>
	</div>
	<!-- sec-nav-wrap-end -->
<!-- slider-wrap -->
	<div class="com-sec-banner-wrap">
		<div class="com-sec-banner">
			<h2><img src="../static/images/lianmeng.png" style="width: 27px;height: 29px;top: 0px;"><abbr>教育联盟</abbr><p>免费入驻，教育机构抱团取暖</p></h2>
		</div>
	</div>
	<!-- slider-wrap -->

	<!-- part-one -->
	<div class="xxgj-part-one-wrap xxgj-part-ten1-wrap part-one">
		<div class="xxgj-part-one clearfix">
			<div class="xxgj-part-one-left">
				<h2><span>1</span><abbr>共享优质生源</abbr></h2>
				<p>通过二维码实现门店间生源互导</p>
			</div>
			<div class="xxgj-part-one-right">
				<img src="../static/images/xxgj-15.png">
			</div>
		</div>
	</div>
	<!-- part-one-end -->
	<!-- part-two-start -->
	<div class="xxgj-part-one-wrap xxgj-part-two-wrap xxgj-part-ten2-wrap part-two">
		<div class="xxgj-part-one clearfix"> 
			<div class="xxgj-part-one-right">
				<img src="../static/images/xxgj-16.png">
			</div>
			<div class="xxgj-part-one-left">
				<h2><span>2</span><abbr>异业合作</abbr></h2>
				<p>开辟更多获取生源的渠道</p>
			</div>
		</div>
	</div>
	<!-- part-two-end -->
	<!-- part-three-start -->
	<div class="xxgj-part-one-wrap xxgj-part-ten1-wrap xxgj-part-ten3-wrap part-one">
		<div class="xxgj-part-one clearfix">
			<div class="xxgj-part-one-left">
				<h2><span>3</span><abbr>区域联合</abbr></h2>
				<p>基区域内于门店间的联合，可靠、可信</p>
			</div>
			<div class="xxgj-part-one-right">
				<img src="../static/images/xxgj-17.png">
			</div>
		</div>
	</div>
	<!-- part-three-end -->
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    var comWin = $(window).height();
    if (comWin < 950) {
      $(".xxgj-part-one")
        .slice(0, 2)
        .show();
    } else {
      $(".xxgj-part-one")
        .slice(0, 5)
        .show();
    }
    $(window).on("scroll", function() {
      var scrollTop = $(this).scrollTop();
      if (scrollTop > 100) {
        $(".xxgj-part-one")
          .slice(0, 1)
          .show();
      }
      if (scrollTop > 300 && scrollTop < 700) {
        $(".xxgj-part-one")
          .slice(0, 2)
          .show();
      }
      if (scrollTop > 700 && scrollTop < 1000) {
        $(".xxgj-part-one")
          .slice(0, 3)
          .show();
      }
      if (scrollTop > 1000 && scrollTop < 1700) {
        $(".xxgj-part-one")
          .slice(0, 4)
          .show();
      }
      if (scrollTop > 1700 && scrollTop < 2200) {
        $(".xxgj-part-one")
          .slice(0, 5)
          .show();
      }
      if (scrollTop > 2200 && scrollTop < 2500) {
        $(".xxgj-part-one")
          .slice(0, 6)
          .show();
      }
      if (scrollTop > 2500) {
        $(".xxgj-part-one")
          .slice(0, 10)
          .show();
      }
    });
  }
};
</script>

<style scoped>

</style>
