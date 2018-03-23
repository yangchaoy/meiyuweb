<template>
  <div class="">
    <!-- sec-nav-wrap-start -->
    <div class="sec-nav-wrap">
      <div class="sec-nav">
        <router-link to="/zscrm" class="active">番茄招生</router-link>
        <router-link to="/fqwx">番茄微校</router-link>
        <router-link to="/xxgj">番茄助教</router-link>
        <router-link to="/jylm">教育联盟</router-link>
      </div>
    </div>
    <!-- sec-nav-wrap-end -->
    <!-- slider-wrap -->
    <div class="com-sec-banner-wrap">
      <div class="com-sec-banner">
        <h2><img src="../static/images/store.png" style="width: 26px;height: 31px;top: 0;" /><abbr>番茄招生</abbr><p>市场业务体系化，提高成单率</p></h2>
      </div>
    </div>
    <!-- slider-wrap -->
    <!-- part-one -->
    <div class="xxgj-part-one-wrap xxgj-part-ten4-wrap part-one">
      <div class="xxgj-part-one clearfix">
        <div class="xxgj-part-one-left">
          <h2><span>1</span><abbr>课程团购</abbr></h2>
          <p>固定人数拼团、阶梯价格拼团、砍价团...<br/>团购活动免费发布，售后数据一目了然</p>
        </div>
        <div class="xxgj-part-one-right">
          <img src="../static/images/fqzs-1.png">
        </div>
      </div>
    </div>
    <!-- part-one-end -->
    <!-- part-two-start -->
    <div class="xxgj-part-one-wrap xxgj-part-two-wrap xxgj-part-ten5-wrap part-two">
      <div class="xxgj-part-one clearfix">
        <div class="xxgj-part-one-right">
          <img src="../static/images/fqzs-2.png">
        </div>
        <div class="xxgj-part-one-left">
          <h2><span>2</span><abbr>招生海报</abbr></h2>
          <p>招生季海报应有尽有<br/>海报模板海量丰富持续更新扩充</p>
        </div>
      </div>
    </div>
    <!-- part-two-end -->
    <!-- part-three-start -->
    <div class="xxgj-part-one-wrap xxgj-part-ten4-wrap xxgj-part-ten6-wrap part-one">
      <div class="xxgj-part-one clearfix">
        <div class="xxgj-part-one-left">
          <h2><span>3</span><abbr>大转盘</abbr></h2>
          <p>通过游戏形式发放代金券，试听券等奖励<br/>更能促进老生续费、新生意向转化</p>
        </div>
        <div class="xxgj-part-one-right">
          <img src="../static/images/fqzs-3.png">
        </div>
      </div>
    </div>
    <!-- part-three-end -->
    <!-- part-two-start -->
    <div class="xxgj-part-one-wrap xxgj-part-two-wrap xxgj-part-ten7-wrap part-two">
      <div class="xxgj-part-one clearfix">
        <div class="xxgj-part-one-right">
          <img src="../static/images/fqzs-4.png">
        </div>
        <div class="xxgj-part-one-left">
          <h2><span>4</span><abbr>自带广告流量</abbr></h2>
          <p>标签时内容推荐，校区之间相互引流<br/>大数据精准推荐高质量用户，意向转化率更高</p>
        </div>
      </div>
    </div>
    <!-- part-two-end -->
    <!-- part-one -->
    <div class="xxgj-part-one-wrap xxgj-part-ten8-wrap part-one">
      <div class="xxgj-part-one clearfix">
        <div class="xxgj-part-one-left">
          <h2><span>5</span><abbr>更多招生工具</abbr></h2>
          <p>市场研究员不断对教育市场进行调研，更多招生工具陆续研发推出</p>
        </div>
        <div class="xxgj-part-one-right">
          <img src="../static/images/fqzs-5.png">
        </div>
      </div>
    </div>
  <!-- part-one-end -->
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
}
</script>

<style scoped>

</style>
