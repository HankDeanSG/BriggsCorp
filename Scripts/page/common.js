(function () {

    /* matchHeight example */

    $(function () {
        // apply your matchHeight on DOM ready (they will be automatically re-applied on load or resize)

        // get test settings
        var byRow = $('body').hasClass('test-rows');

        // apply matchHeight to each item container's items
        $('.items-container').each(function () {
            $(this).children('.item').matchHeight({
                byRow: byRow
            });
        });

    });

})();