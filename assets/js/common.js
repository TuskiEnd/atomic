/*
 **index customer-logo hover
 */

// $(".coustomer-logo").find(".am-u-md-2 a").each(function() {
//   $(this).hover(function() {
//     console.log(1)
//       $(this).find(".am-active").show();
//       $(this).find(".normal-logo").hide();
//   }, function() {
//     $(this).find(".am-active").hide();
//     $(this).find(".normal-logo").show();
//   });
// });
(function () {
  $('.customer-logo').find('.customer-box').each(function () {
    $(this).hover(function () {
      $(this).find('.am-active').show();
      $(this).find('.normal-logo').hide();
    }, function () {
      $(this).find('.am-active').hide();
      $(this).find('.normal-logo').show();
    })
  });

  // 邮件
  $('#dataForm').validator({
    submit: function (e) {
      var valid = this.isFormValid();
      if (valid) {
        var name = $('#name').val(),
          email = $('#email').val(),
          phone = $('#phone').val(),
          profession = $('#profession').val(),
          remark = $('#remark').val();
        var $modal = $('#my-alert');
        var data = {
          name: name,
          email: email,
          phone: phone,
          profession: profession,
          remark: remark
        };
        e.preventDefault();
        $.ajax({
          url: 'http://47.52.155.161:8080/mail/send',
          type: 'POST',
          data: JSON.stringify(data),
            contentType:'application/json',
          dataType: 'json',
          success: function (resultData) {
            if (resultData.type === 'success') {
              $('#language') && $('#language').val() === "1" ? $('#resultMsg').text('Success！') : $('#resultMsg').text('提交成功！');
            } else {
              $('#language') && $('#language').val() === "1" ? $('#resultMsg').text('Submit Failed！') : $('#resultMsg').text('提交失败！');
            }
            $modal.modal();
          }
        })
      } else {
        e.preventDefault();
        return false;
      }
    }
  });

})();
