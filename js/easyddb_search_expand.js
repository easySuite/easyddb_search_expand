(function ($) {
  'use strict';

  /**
   * Expand search top bar.
   */
  Drupal.behaviors.searchExpand = {
    attach: function (context) {
      $(function () {
        var searchExpandBtn = $('a.search-extended-button', context);
        if (searchExpandBtn.length > 0) {
          var body = $('body');

          // Activate the button.
          searchExpandBtn.click();

          // Hide the button and remove it's class.
          searchExpandBtn.hide();
          body.removeClass('has-search-dropdown');

          // Remove the class from body.
          body.removeClass('extended-search-is-not-open');
        }
      });
    }
  };
})(jQuery);
