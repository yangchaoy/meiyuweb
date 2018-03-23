<template>
  <div class="">
  <!-- slider-wrap -->
    <div class="slider-wrap slider-quhz-wrap">
      <div class="slider-con rl">
        <span class="slider-img"></span>
        <img class="title" src="../static/images/qdhz-3.png?1"/>
        <img class="title title2" src="../static/images/qdhz-4.png?1"/>
        <img class="apply-btn" src="../static/images/qdhz-5.png?1"/>
        <img class="apply-img" src="../static/images/qdhz-8.png?1"/>
        <img class="apply-img2" src="../static/images/qdhz-9.png"/>
        <img class="apply-img3" src="../static/images/qdhz-7.png"/>
        <img class="apply-img4" src="../static/images/qdhz-6.png"/>
        <img class="apply-img5" src="../static/images/qdhz-10.png"/>
      </div>
    </div>
    
    <!-- guide-wrap start -->
    <img src="../static/images/qdhz-13.png" class="qdhz-3">
    <!-- guide-wrap end -->
    <div class="qdhz-4-wrap"><img src="../static/images/qdhz-12.png" class="qdhz-4"/></div>
    <div class="shade-wrap"></div>
    <div class="form-wrap">
      <h2 class="rl">代理商申请信息提交<a href="javascript:void(0)" title="关闭"><img src="images/delete-btn.png"/></a></h2>
      <div class="form-input-wrap rl">
        <div class="form-input">
          姓名<input class="user-name" type="text"/>
        </div>
        <div class="form-input">
          电话<input class="user-phone" type="text"/>
        </div>
        <div class="form-input">
          代理城市
          <div class="clearfix">
            <!-- <select name="P2"></select><select name="C2" class="last-select"></select> -->
            <v-distpicker @selected="onSelected" :province="select.province" :city="select.city" :placeholders="placeholders" id="city" hide-area></v-distpicker>
          </div>
        </div>
        <div class="form-input">
          客户资源描述(选填)<textarea class="textarea"></textarea>
        </div>
        <span class="tip"></span>
        <a href="javascript:void(0)" class="form-submit">提交申请</a>
      </div>
    </div>
    <div class="modal fade" tabindex="-1" role="dialog" id="myModal">
      <div class="modal-dialog" role="document" style="margin-top: 15%;">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close"  aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">温馨提示</h4>
          </div>
          <div class="modal-body">
            <p style="line-height: 180px;text-align: center;">您的资料提交成功,稍后我们将与您联系~</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default reload-btn" style="display: block;width: 80px;margin: 0 auto;">确定</button>
          </div>
        </div>
      </div>
    </div>
	</div>

</template>
<script>
import $ from "jquery";
import VDistpicker from "v-distpicker";
import "../style/js/PCASClass";
export default {
  name: "citySelect",
  props: ["cites"],
  data() {
    return {
      placeholders: {
        province: "请选择所在省份",
        city: "请选择所在城市"
      },
      select: {
        province: "",
        city: ""
      },
      citys: "",
      cityDetails: "",
      upNum: 0
    };
  },
  components: {
    "v-distpicker": VDistpicker
  },

  updated: function() {
    if (this.upNum === 0) {
      if (this.cites != "") {
        let china = this.cites.split(/(省|自治区|市|特别行政区)/);
        let province = china[0] + china[1];
        let ttt = china
          .splice(2)
          .join()
          .split(/(市辖区|市|区|盟|自治州)/);
        let citybefore = ttt[0] + ttt[1];
        let actionCity = citybefore.split(",").join("");
        let details = ttt.splice(2).join();
        if (
          province === "北京市" ||
          province === "上海市" ||
          province === "天津市" ||
          province === "重庆市"
        ) {
          actionCity = "市辖区";
          details = details.substr(5);
        }
        this.select.province = province;
        this.select.city = actionCity;
        this.cityDetails = details.split(",").join("");
        console.log(this.select.province);
      }
    }
    this.upNum++;
  },
  methods: {
    onSelected: function(data) {
      this.citys = data.province.value + data.city.value;
      this.$emit("city", this.citys + this.cityDetails);
      console.log(this.citys);
    },
    thisBlur: function() {
      this.$emit("city", this.citys + this.cityDetails);
    }
  },
  mounted() {
    $(".apply-btn").on("click", function() {
      $(".shade-wrap,.form-wrap").show();
    });
    $(".form-wrap h2 a").on("click", function() {
      $(".shade-wrap,.form-wrap").hide();
    });

    $(".reload-btn,.close").on("click", function() {
      $(".shade-wrap,.form-wrap").hide();
      $("#myModal").modal("hide");
      $(".form-input-wrap input,.form-input-wrap textarea").val("");
    });
  }
};
// export default {
//   components: { VDistpicker },
//   mounted() {
//     // new PCAS("P2", "C2", "");
//     $(".apply-btn").on("click", function() {
//       $(".shade-wrap,.form-wrap").show();
//     });
//     $(".form-wrap h2 a").on("click", function() {
//       $(".shade-wrap,.form-wrap").hide();
//     });

//     $(".reload-btn,.close").on("click", function() {
//       $(".shade-wrap,.form-wrap").hide();
//       $("#myModal").modal("hide");
//       $(".form-input-wrap input,.form-input-wrap textarea").val("");
//     });
//     $(".form-submit").on("click", function() {
//       var ajaxUrl = "";
//       var mobile = /^1[3|5|6|7|8]\d{9}$/,
//         phone = /\d{2,6}-?\d{2,8}(-\d{1,6})?$/;

//       var submitonce = true;
//       if ($.trim($(".form-input-wrap .user-name").val()) == "") {
//         $("body")
//           .find(".form-input-wrap .tip")
//           .html("请输入姓名");
//         return false;
//       }
//       if ($.trim($(".form-input-wrap .user-phone").val()) == "") {
//         $("body")
//           .find(".form-input-wrap .tip")
//           .html("请输入电话");
//         return false;
//       }

//       if (
//         mobile.test($.trim($(".form-input-wrap .user-phone").val())) ||
//         phone.test($.trim($(".form-input-wrap .user-phone").val()))
//       ) {
//       } else {
//         $("body")
//           .find(".form-input-wrap .tip")
//           .html("请输入正确的电话或者手机号");
//         return false;
//       }

//       if ($(".form-input-wrap select[name='P2']").val() == "") {
//         $("body")
//           .find(".form-input-wrap .tip")
//           .html("请选择您所在的省市");
//         return false;
//       }
//       $("body")
//         .find(".form-input-wrap .tip")
//         .html("");

//       if (!submitonce) {
//         return false;
//       }
//       $.ajax({
//         type: "post",
//         url: "../pc/agent_request.php",
//         data: {
//           name: $.trim($(".form-input-wrap .user-name").val()),
//           phone: $.trim($(".form-input-wrap .user-phone").val()),
//           province: $(".form-input-wrap select[name='P2']").val(),
//           city: $(".form-input-wrap select[name='C2']").val(),
//           desc: $(".form-input-wrap .textarea").val()
//         },
//         dataType: "json",
//         beforeSend: function() {
//           submitonce = false;
//           $(".form-submit").html("提交中,请稍后...");
//         },
//         success: function(result) {
//           submitonce = true;
//           $(".form-submit").html("提交申请");
//           if (result.errcode == 0) {
//             $("#myModal").modal({
//               backdrop: "static",
//               keyboard: false,
//               show: true
//             });
//           } else {
//             alert(result.errmsg);
//           }
//         },
//         error: function() {
//           $(".form-submit").html("提交申请");
//           submitonce = true;
//           alert("重新刷新页面");
//         }
//       });
//     });
//   }
// };
</script>

<style scoped>

</style>
