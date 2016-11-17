// Generated by CoffeeScript 1.10.0
(function() {
  var gen_check_update_func, img_update;

  img_update = function(elem) {
    return elem.src = elem.src + ";d=" + new Date().getTime();
  };

  gen_check_update_func = function(elem) {
    return function() {
      var $elem;
      $elem = $(elem);
      return $.ajax({
        url: $(elem).data('status-uri'),
        method: 'GET',
        dataType: 'json',
        success: function(data, xhr, status) {
          if (data['status'] === "stable") {
            return img_update(elem);
          } else {
            return setTimeout(gen_check_update_func(elem), 5000);
          }
        }
      });
    };
  };

  $(function() {
    return $('.ss-image').each(function(index) {
      return setTimeout(gen_check_update_func(this), 3000);
    });
  });

}).call(this);
