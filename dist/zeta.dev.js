"use strict";

$(document).ready(function () {
  $('input:checkbox').on('change', function () {
    if (document.getElementById('toogle').checked) {
      $('.mobildropdown-content').fadeOut(1000);
      $('.mobildropdown-content').fadeIn(1000);
    }
  });
});