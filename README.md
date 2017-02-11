# angular-datepicker-light-zz (enhanced over angular-datepicker-light)

## AngularJS datepicker plugin

`bower install angular-datepicker-light-zz`

#### Also available as a ruby gem through rails assets:
 https://rails-assets.org/#/components/angular-datepicker-light-zz (Give this site some time to load version and dependency data)
 
### Intention

Just to add features i needed and solve all visible errors in the great light-weight parent library. Turns out the changes are huge and the parent library might not accept it. So, decided to keep this one as a separate library. So, it can be used by anyone who needs these functionalities and same errors are also annoying them.

## Usage:

Use above mentioned bower package, or ruby gem, add css and js dependencies of angular-datepicker-light-zz in your application.js and application.css with **require angular-datepicker-light-zz** , rest of the usage is same as parent library, :

    <input type="text" 
           ng-model="vm.date"
           angular-datepicker-light="vm.datepickerOptions" />
    <span id="calendarIcon"></span>

Below is the demo of angular-datepicker-light-zz with following configuration:<br>

    vm.datepickerOptions = {
      inline: false,
      datepickerClickMargin: 0,
      showOtherMonthDates: true,
      useAngularUiSelect: true,
      dateFormat: "MMMM D, YYYY",
      hideTodayDate: true,
      prevYers: 80,
      nextYears: 10,
      toggleTarget: '#calendarIcon'
    }

[![angular-datepicker-light-zz demo.gif](https://s28.postimg.org/w0k0z36il/angular_datepicker_light_zz_demo.gif)](https://postimg.org/image/ae50i27y1/)

Customizations (v 1.2.5+)
======

This plugin is heavily customized for our needs. But keeping in mind that this remains re-usable. If it's pull request gets accepted i might delete this repo, otherwise this repo/plugin will remain use-full.

Customizations summary:
------

* **Change positioning logic for non-inline usage**(to solve problme in our complex view where previous logic was failing)
* **Prevent calender pop-up from being closed** when a month or year is select from drop-down, to let users select full date in one go.
* Month names changed from all caps to initial caps.
* Add **support for <a href="https://github.com/angular-ui/ui-select">ui-select</a>** drop-down to facilitate projects using ui-select as standard drop-down.<br>
(Below is screenshot when useAngularUiSelect is enabled)<br>
[![2017-02-11_122330.png](https://s30.postimg.org/jutt4l0ip/2017_02_11_122330.png)](https://postimg.org/image/lmmrzhjvh/)
* **nextYeras, prevYears, hideTodayDate, useAngularUiSelect, toggleTarget, setCurrentDateWhenEmpty**(and other) options added(see below for details).
* **CSS enhancements/adjustments**.
* Other minor fixes.

Updates details:
======

* ####useAngularUiSelect: (New)

    **Default:** false<br>
    **Description:** Specifies if ui-select should be used for drop-downs. Note that we assume if this is true, than ui-select is already included in project.

* ####hideTodayDate:  (New)

    **Default:** false<br>
    **Description:** If true, hides bottom panel(containing today's date) from calender display.

* ####prevYers: (New)

    **Default:** 5<br>
    **Description:** Sets number of previous years(from current year) to display in year drop-down. NOTE if minDate is defined, this will be ignored in minDate's favor.

* ####nextYears: (New)

    **Default:** 5<br>
    **Description:** Sets number of next years(from current year) to display in year drop-down. NOTE if maxDate is defined, this will be ignored in maxDate's favor.

**(V 1.2.6)**

* ####toggleTarget: (New)

    **Default:** null,<br>
    **Description:** A JQuery selector, on click of which, calender will toggle display(show/hide).

**(V 1.2.7)**

* ####setCurrentDateWhenEmpty:(New)

    **Default:** false<br>
    **Description:** Specifies if current date should be set in input field, when calender opens and model is empty. **(Before addition of this option, it used to always set the current date in model, if model is not a valid date)**
    
* ####altTarget: (Updated)

    **Default:** null<br>
    **Description:** A CSS selector, on clicking on which calender opens. **(If this is passed as a string selector(e.g: '#id'), will be evaluated after page load.)**
        
* ####toggleTarget: (Updated)

     **Default:** null<br>
     **Description:** A CSS selector, on click of which, calender will toggle display(show/hide). **(If this is passed as a string selector(e.g: '#id'), will be evaluated after page load.)**. (Only for non-inline usage).


#### Requirements

* Angular v1.5.3+
* Moment v2.12.0+
* JQuery v1.6+ **(Dependency added in v1.2.7, will be great if someone can remove this dependency)**

