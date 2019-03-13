(function ($) {
  'use strict';

  /**
   * Expand search top bar.
   */
  Drupal.behaviors.searchExpand = {
    attach: function (context) {
      $(function () {
        var searchExpandBtn = $('a.search-extended-button', context);
        if (searchExpandBtn.length > 0 && !searchExpandBtn.is('.active')) {
          searchExpandBtn.click();
          var body = $('body');

          if (body.hasClass('not-logged-in')) {
            body.find('.mobile-search-is-open .site-header .navigation-wrapper', context).attr('style', 'top: 0');
          }

          body.toggleClass('mobile-search-is-open');
          body.toggleClass('extended-search-is-not-open');
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
