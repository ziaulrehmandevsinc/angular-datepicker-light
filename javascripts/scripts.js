(function () {
    'use strict';

    angular
        .module('mainApp', ['datePickerModule'])
        .controller('OnFocusController', OnFocusController)
        .controller('InlineController', InlineController)
        .controller('InlineOtherMonthDatesController', InlineOtherMonthDatesController)
        .controller('InlineDisabledDatesController', InlineDisabledDatesController)
        .controller('InlineCustomWeekStartController', InlineCustomWeekStartController)
        .controller('InlineDivTargetController', InlineDivTargetController);

    var today = new Date();
    var mom = moment(today);
    var dateText = mom.format("MM/DD/YYYY");

    // on focus
    function OnFocusController() {
        var vm = this;
        vm.date = dateText;
    }

    // inline
    function InlineController() {
        var vm = this;

        vm.date = dateText;
        vm.datePickerOptions = {
            inline: true,
            containerCssClass: "date-picker-container-inline"
        };
    }

    // inline, other month dates
    function InlineOtherMonthDatesController() {
        var vm = this;

        vm.date = dateText;

        vm.datePickerOptions = {
            inline: true,
            showOtherMonthDates: true,
            containerCssClass: "date-picker-container-inline"
        };
    }

    // inline, week starts on Monday
    function InlineCustomWeekStartController() {
        var vm = this;

        vm.date = dateText;

        vm.datePickerOptions = {
            inline: true,
            firstDayOfWeek: 1,
            containerCssClass: "date-picker-container-inline"
        };
    }

    // inline, disabled dates, tooltip
    function InlineDisabledDatesController() {
        var vm = this;

        vm.date = dateText;

        vm.datePickerOptions = {
            inline: true,
            containerCssClass: "date-picker-container-inline",
            renderDate: function (e) {
                var date = e.date.getDate();

                var enable = (date < 20 || date > 29);
                return {
                    enabled: enable,
                    tooltip: enable ? null : "We are closed!"
                }
            },
            beforeDateSelect: function (e) {
                var date = e.date.getDate();
                return { cancel: date === 30 };
            }
        };
    }

    function InlineDivTargetController() {
        var vm = this;

        vm.date = today;

        vm.datePickerOptions = {
            inline: true,
            containerCssClass: "date-picker-container-inline",
            dateSelected: function (e) {
                vm.date = e.date;
            }
        };
    }
})();
