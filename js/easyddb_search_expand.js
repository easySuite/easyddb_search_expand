(function ($) {
  'use strict';

  /**
   * Expand search top bar.
   */
  Drupal.behaviors.searchExpand = {
    attach: function (context) {
      $(function () {
        var searchExpandBtn = $(context).find('.topbar-link-search');
        if (searchExpandBtn.length > 0 && !searchExpandBtn.is('.active')) {
          searchExpandBtn.click();
        }
      });
    }
  };

})(jQuery);
