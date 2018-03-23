<template>
  <div class="">
    <!-- sec-nav-wrap-start -->
	<div class="sec-nav-wrap">
	  <div class="sec-nav">
        <router-link to="/zscrm">番茄招生</router-link>
        <router-link to="/fqwx" class="active">番茄微校</router-link>
        <router-link to="/xxgj">番茄助教</router-link>
        <router-link to="/jylm">教育联盟</router-link>
	  </div>
	</div>
	<!-- sec-nav-wrap-end -->
	<!-- header-end -->
	<!-- slider-wrap -->
	<div class="com-sec-banner-wrap">
	  <div class="com-sec-banner">
	    <h2><img src="../static/images/mendian.png" style="width: 22pxheight: 32pxtop: 0" /><abbr>番茄微校</abbr><p>手机上的招生利器</p></h2>
	  </div>
	</div>
	<!-- slider-wrap -->
	<!-- part-one -->
	<div class="xxgj-part-one-wrap xxgj-part-three-wrap xxgj-part-eight-wrap part-one">
		<div class="xxgj-part-one clearfix">
			<div class="xxgj-part-one-left">
				<h2><span>1</span><abbr>依托微信社交生态诞生的小程序</abbr></h2>
				<p>“二维码”场景化传播，机构与意向生源之间仅“一码”之隔<br/>颜值在线，内容丰富的机构门店官网，提升家长好感度和信任度</p>
			</div>
			<div class="xxgj-part-one-right">
				<img src="../static/images/xxgj-12.png">
			</div>
		</div>
	</div>
	<!-- part-one-end -->
	<!-- part-two-start -->
	<div class="xxgj-part-one-wrap xxgj-part-two-wrap xxgj-part-nine-wrap part-two">
		<div class="xxgj-part-one clearfix"> 
			<div class="xxgj-part-one-right">
				<img src="../static/images/xxgj-13.png">
			</div>
			<div class="xxgj-part-one-left">
				<h2><span>2</span><abbr>玩法多样，适配多场景招生</abbr></h2>
				<p>加入公众号采单，丰富公众号内容，从今公众号“增粉儿”<br/>
多页面自由拆分：官网首页、课程列表、课程详情、校区列表预约课程；针对不同特殊场景使用不同内容，如：公众号文章活动报名，文章中加入报名入口，点击即可<br/>交报名信息；市场采单，扫码提交生源信息</p>
			</div>
		</div>
	</div>
	<!-- part-two-end -->
	<!-- part-three-start -->
	<div class="xxgj-part-one-wrap xxgj-part-three-wrap xxgj-part-ten-wrap part-three">
		<div class="xxgj-part-one clearfix">
			<div class="xxgj-part-one-left">
				<h2><span>3</span><abbr>搭配CRM</abbr></h2>
				<p>打通任督二脉”，各种来源数据打通整合</p>
			</div>
			<div class="xxgj-part-one-right">
				<img src="../static/images/xxgj-14.png">
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
    var comWin = $(window).height()
    if (comWin < 950) {
      $(".xxgj-part-one")
        .slice(0, 2)
        .show()
    } else {
      $(".xxgj-part-one")
        .slice(0, 5)
        .show()
    }
    $(window).on("scroll", function() {
      var scrollTop = $(this).scrollTop()
      if (scrollTop > 100) {
        $(".xxgj-part-one")
          .slice(0, 1)
          .show()
      }
      if (scrollTop > 300 && scrollTop < 700) {
        $(".xxgj-part-one")
          .slice(0, 2)
          .show()
      }
      if (scrollTop > 700 && scrollTop < 1000) {
        $(".xxgj-part-one")
          .slice(0, 3)
          .show()
      }
      if (scrollTop > 1000 && scrollTop < 1700) {
        $(".xxgj-part-one")
          .slice(0, 4)
          .show()
      }
      if (scrollTop > 1700 && scrollTop < 2200) {
        $(".xxgj-part-one")
          .slice(0, 5)
          .show()
      }
      if (scrollTop > 2200 && scrollTop < 2500) {
        $(".xxgj-part-one")
          .slice(0, 6)
          .show()
      }
      if (scrollTop > 2500) {
        $(".xxgj-part-one")
          .slice(0, 10)
          .show()
      }
    });
  }
};
</script>

<style scoped>

</style>
