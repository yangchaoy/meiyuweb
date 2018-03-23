<template>
  <div class="">
    <!-- sec-nav-wrap-start -->
	<div class="sec-nav-wrap">
	  <div class="sec-nav">
        <router-link to="/zscrm">番茄招生</router-link>
        <router-link to="/fqwx" >番茄微校</router-link>
        <router-link to="/xxgj" class="active">番茄助教</router-link>
        <router-link to="/jylm">教育联盟</router-link>
	  </div>
	</div>
	<!-- sec-nav-wrap-end -->
	<!-- slider-wrap -->
	<div class="com-sec-banner-wrap">
		<div class="com-sec-banner">
			<h2><img src="../static/images/xiaoqu.png"><abbr>番茄助教</abbr><p>校区管理智慧化，高效、灵活、便捷</p></h2>
		</div>
	</div>
	<!-- slider-wrap -->
	<!-- part-one -->
	<div class="xxgj-part-one-wrap part-one" style="display: block;">
		<div class="xxgj-part-one clearfix">
			<div class="xxgj-part-one-left">
				<h2><span>1</span><abbr>课程管理</abbr></h2>
				<p>课程、课时包灵活组合，完美覆盖线下实际业务场景，包括：合练课、寒暑期班、团购课、活动课、体验课、赠课、通用课包、独立课包</p>
			</div>
			<div class="xxgj-part-one-right">
				<img src="../static/images/xxgj-1.jpg">
			</div>
		</div>
	</div>
	<!-- part-one-end -->
	<!-- part-two-start -->
	<div class="xxgj-part-one-wrap xxgj-part-two-wrap part-two">
		<div class="xxgj-part-one clearfix">
			<div class="xxgj-part-one-right">
				<img src="../static/images/xxgj-4.png">
			</div>
			<div class="xxgj-part-one-left">
				<h2><span>2</span><abbr>学员管理</abbr></h2>
				<p>学员在校情况一目了然，家长、老师、教务可方便查看：上课时间、地点、课程、剩余课时，及学员成长记录；<br/>签到管理，手、自一体化，总有一款适合您<br/>良好的容错机制——签到状态重置</p>
			</div>
		</div>
	</div>
	<!-- part-two-end -->
	<!-- part-three-start -->
	<div class="xxgj-part-one-wrap xxgj-part-three-wrap part-three">
		<div class="xxgj-part-one clearfix">
			<div class="xxgj-part-one-left">
				<h2><span>3</span><abbr>课时变动完整、清晰</abbr></h2>
				<p>报课、消课、转课、续课、退课，清晰明了</p>
			</div>
			<div class="xxgj-part-one-right">
				<img src="../static/images/xxgj-6.png">
			</div>
		</div>
	</div>
	<!-- part-three-end -->
	<!-- part-four-start -->
	<div class="xxgj-part-one-wrap xxgj-part-two-wrap xxgj-part-four-wrap part-four">
		<div class="xxgj-part-one clearfix">
			<div class="xxgj-part-one-right">
				<img src="../static/images/xxgj-7.png">
			</div>
			<div class="xxgj-part-one-left">
				<h2><span>4</span><abbr>重要业务的系统通告</abbr></h2>
				<p>提前一天发送学员上课提醒、老师发布课评提醒、消课提醒、续课提醒</p>
			</div>
		</div>
	</div>
	<!-- part-four-end -->
	<!-- part-five-start -->
	<div class="xxgj-part-one-wrap xxgj-part-five-wrap part-five">
		<div class="xxgj-part-one clearfix">
			<div class="xxgj-part-one-left">
				<h2><span>5</span><abbr>排课管理</abbr></h2>
				<p>打破班级框架，无需创建班级，课程+循环方式的组合，让排课、调课操作更便捷<br/>支持试听学员插班、正式学员临时插班补课、新学员插入每周排课等业务场景<br/>排课信息，家长、老师、教务三方随时查看</p>
			</div>
			<div class="xxgj-part-one-right">
				<img src="../static/images/xxgj-5.png">
			</div>
		</div>
	</div>
	<!-- part-five-end -->
	<!-- part-six-start -->
	<div class="xxgj-part-one-wrap xxgj-part-two-wrap xxgj-part-six-wrap part-six">
		<div class="xxgj-part-one clearfix">
			<div class="xxgj-part-one-right">
				<img src="../static/images/xxgj-10.png">
			</div>
			<div class="xxgj-part-one-left">
				<h2><span>6</span><abbr>教学管理</abbr></h2>
				<p>教师“上岗”方便快捷，还可设置班主任角色，统管多班教学<br/>教学老师可提交课评，还能与家长进行线上沟通<br/>老师可轻松获取上课安排和上课学员信息</p>
			</div>
		</div>
	</div>
	<!-- part-six-end -->
	<!-- part-seven-start -->
	<div class="xxgj-part-one-wrap xxgj-part-seven-wrap part-seven">
		<div class="xxgj-part-one clearfix">
			<div class="xxgj-part-one-left">
				<h2><span>7</span><abbr>角色权限</abbr></h2>
				<p>系统预设：教学、教务、招生、财务角色权限，多种权限灵活组合覆盖多种业务需求</p>
			</div>
			<div class="xxgj-part-one-right">
				<img src="../static/images/xxgj-11.png">
			</div>
		</div>
	</div>
	<!-- part-seven-end -->
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
