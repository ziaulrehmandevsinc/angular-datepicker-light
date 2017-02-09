# angular-datepicker-light-zz (enhanced over angular-datepicker-light)

## AngularJS datepicker plugin

`bower install angular-datepicker-light-zz`

#### Also available as a ruby gem through in rails assets:
 https://rails-assets.org/#/components/angular-datepicker-light-zz
 
### Intention

Just to add features i needed and solve all visible errors in the great light-weight parent library. Turns out the changes are huge and the parent library might not accept it. So, decided to keep this one as a separate library. So, it can be used by anyone who needs these functionalities and same errors are also annoying them.

Customizations (v1.2.5+)
======

This plugin is heavily customized as per my need. But keeping in mind that this remains re-usable. If it's pull request gets accepted i might delete this repo, otherwise this repo/plugin will remain use-full(at-least for us).

Customizations summary:
------

* **Change positioning logic for non-inline usage**(to solve problme in our complex view where previous logic was failing)
* **Prevent calender pop-up from being closed** when a month or year is select from drop-down, to let users select full date in one go.
* Add **support for <a href="https://github.com/angular-ui/ui-select">ui-select</a>** drop-down to facilitate projects using ui-select as standard drop-down.
* **nextYeras, prevYears, hideTodayDate, useAngularUiSelect, toggleTarget, setCurrentDateWhenEmpty**(and other) options added(see below for details).
* **CSS enhancements/adjustments**.
* Other minor adjustments

Additional options details:
======

* ####useAngularUiSelect:

    **Default:** false
    **Description:** "Specifies if ui-select should be used for drop-downs. Note that we assume if this is true, than ui-select is already included in project."

* ####hideTodayDate:

    **Default:** false<br>
    **Description:** "If true, hides bottom panel(containing today's date) from calender display."

* ####prevYers:

    **Default:** 5<br>
    **Description:** "Sets number of previous years(from current year) to display in year drop-down. NOTE if minDate is defined, this will be ignored in minDate's favor."

* ####nextYears:

    **Default:** 5<br>
    **Description:** "Sets number of next years(from current year) to display in year drop-down. NOTE if maxDate is defined, this will be ignored in maxDate's favor"

* ####toggleTarget: **(added in 1.2.6)**

    **Default:** null,<br>
    **Description:** "A JQuery selector, on click of which, calender will toggle display(show/hide)."

* ####setCurrentDateWhenEmpty: **(added in 1.2.7)**

    **Default:** false<br>
    **Description:** "Specifies if current date should be set in input field, when calender opens and model is empty."


#### Requirements

* Angular v1.5.3+
* Moment v2.12.0+
* JQuery v1.6+ **(Dependency added in v1.2.7, will be great if someone can remove this dependency)**

