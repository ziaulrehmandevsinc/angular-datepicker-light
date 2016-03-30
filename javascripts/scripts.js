(function () {
    'use strict';

    angular
        .module('mainApp', ['datePickerModule'])
        .controller('OnFocusController', OnFocusController)
        .controller('InlineController', InlineController)
        .controller('InlineOtherMonthDatesController', InlineOtherMonthDatesController)
        .controller('InlineDisabledDatesController', InlineDisabledDatesController)
        .controller('InlineWeekStartDayController', InlineWeekStartDayController)
    ;

    // on focus
    function OnFocusController() {
        var vm = this;
        vm.date = "03/25/2016";
    }

    // inline
    function InlineController() {
        var vm = this;

        vm.date = "03/04/2016";
        vm.datePickerOptions = {
            inline: true,
            containerCssClass: "date-picker-container-inline",
            firstDayOfWeek: 3
        };
    }

    // inline, other month dates
    function InlineOtherMonthDatesController() {
        var vm = this;

        vm.date = "07/20/2016";

        vm.datePickerOptions = {
            inline: true,
            showOtherMonthDates: true,
            containerCssClass: "date-picker-container-inline"
        };
    }

    // inline, week starts on Monday
    function InlineWeekStartDayController() {
        var vm = this;

        vm.date = "07/01/2016";

        vm.datePickerOptions = {
            inline: true,
            firstDayOfWeek: 1,
            containerCssClass: "date-picker-container-inline"
        };
    }
    
    // inline, disabled dates, tooltip
    function InlineDisabledDatesController() {
        var vm = this;

        vm.date = "07/01/2016";

        vm.datePickerOptions = {
            inline: true,
            containerCssClass: "date-picker-container-inline",
            //datePickerParent: $("#datePickerParent3"),
            renderDate: function (args) {
                var date = args.date.getDate();

                // enable custom dates
                var enabled = (date < 20 || date > 29);

                args.enabled = enabled;
                args.tooltip = enabled ? "Working Day" : "Holiday";
            },
            beforeDateSelect: function(args)
            {
                var date = args.date.getDate();
                
                args.cancel = date === 30;
            }
        };
    }


})();
