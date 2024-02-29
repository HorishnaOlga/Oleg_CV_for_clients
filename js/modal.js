 $(document).ready(function() {
      // Get the element by class name
      var modalboxElement = $('.edina_tm_modalbox');

      // Attach a click event handler
      modalboxElement.on('click', function(event) {
        // Check if the clicked element or its parent is the one with class 'description_wrap'
        if (!$(event.target).hasClass('description_wrap') && !$(event.target).parents('.description_wrap').length) {
          // Remove the 'open' class from the element
          modalboxElement.removeClass('opened');
        }
      });
    });