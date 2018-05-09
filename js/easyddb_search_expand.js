(function ($) {
  'use strict';

  /**
   * Expand search top bar.
   */
  Drupal.behaviors.searchExpand = {
    attach: function (context) {
      $(function () {
        let searchExpandBtn = $('a.topbar-link-search', context);
        if (searchExpandBtn.length > 0 && !searchExpandBtn.is('.active')) {
          searchExpandBtn.click();
          let body = $('body');

          body.toggleClass('mobile-search-is-open');
          body.removeClass('mobile-menu-is-open pane-login-is-open mobile-usermenu-is-open');
          if(!body.hasClass('mobile-search-is-open')) {
            body.addClass('overlay-is-active');
          } else {
            body.removeClass('overlay-is-active');
          }
        }
      });
    }
  };
})(jQuery);
