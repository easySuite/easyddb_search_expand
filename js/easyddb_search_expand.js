(function ($) {
  'use strict';

  /**
   * Expand search top bar.
   */
  Drupal.behaviors.searchExpand = {
    attach: function (context) {
      $(function () {
        var searchExpandBtn = $(context).find('.search-extended-button');
        if (searchExpandBtn.length > 0 && !$('body').is('.extended-search-is-open')) {
          searchExpandBtn.click();
        }
      });
    }
  };

})(jQuery);
