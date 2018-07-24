var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import './Calendar.css';
import CalendarCaption from './CalendarCaption';
import CalendarThead from './CalendarThead';
import CalendarTbody from './CalendarTbody';
var DATE_FNS = {
    format: require('date-fns/format'),
    eachDay: require('date-fns/each_day'),
    startDayOfMonth: require('date-fns/start_of_month'),
    lastDayOfMonth: require('date-fns/last_day_of_month'),
};
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            inst_date_fns: new Date(_this.props.now_year, _this.props.now_month - 1),
        };
        return _this;
    }
    Calendar.prototype.setReferDayState_sendDay = function (click_day) {
        this.props.func_setReferDayState(click_day);
    };
    Calendar.prototype.setFormState_showForm = function (is_show, type) {
        this.props.func_setFormState(is_show, type);
    };
    Calendar.prototype.getDaysOfMonth = function () {
        var start_date = this.state.inst_date_fns;
        var end_date = DATE_FNS.lastDayOfMonth(start_date);
        var start_week = DATE_FNS.format(start_date, 'd');
        var end_week = DATE_FNS.format(end_date, 'd');
        var is_days = DATE_FNS.eachDay(start_date, end_date);
        var one_month = [];
        if (start_week !== 0) {
            for (var i = 0; i < start_week; i++) {
                one_month.push(null);
            }
        }
        for (var j = 0; j < is_days.length; j++) {
            one_month.push(is_days[j]);
        }
        if (end_week !== 6) {
            for (var k = end_week; k < 6; k++) {
                one_month.push(null);
            }
        }
        return one_month;
    };
    Calendar.prototype.render = function () {
        return (React.createElement("table", { className: "calendar" },
            React.createElement(CalendarCaption, { now_year: this.props.now_year, now_month: this.props.now_month }),
            React.createElement(CalendarThead, null),
            React.createElement(CalendarTbody, { data_one_month: this.getDaysOfMonth(), func_setReferDayState: this.setReferDayState_sendDay.bind(this), func_setFormState: this.setFormState_showForm.bind(this) })));
    };
    return Calendar;
}(React.Component));
export default Calendar;
//# sourceMappingURL=Calendar.js.map