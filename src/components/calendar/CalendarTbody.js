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
import CalendarTd from './CalendarTd';
var DATE_FNS = {
    format: require('date-fns/format'),
};
var CalendarTbody = /** @class */ (function (_super) {
    __extends(CalendarTbody, _super);
    function CalendarTbody(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            test_list: [
                { day: 5, task: 'test' },
                { day: 5, task: 'test' },
                { day: 13, task: 'test' },
                { day: 17, task: 'test' },
                { day: 21, task: 'test' },
            ]
        };
        _this.extractTask = _this.extractTask.bind(_this);
        return _this;
    }
    CalendarTbody.prototype.setReferDayState_sendDay = function (click_day) {
        this.props.func_setReferDayState(click_day);
    };
    CalendarTbody.prototype.setFormState_showForm = function (is_show, type) {
        this.props.func_setFormState(is_show, type);
    };
    CalendarTbody.prototype.displayAllDays = function () {
        var _this = this;
        var refs = 0;
        var one_week = [];
        var rendered_days = this.props.data_one_month.map(function (data) {
            if (data === null) {
                return React.createElement(CalendarTd, { data_day: null, task_list: null, func_setReferDayState: _this.setReferDayState_sendDay.bind(_this), func_setFormState: _this.setFormState_showForm.bind(_this) });
            }
            else {
                return React.createElement(CalendarTd, { data_day: DATE_FNS.format(data, 'D'), task_list: _this.extractTask(Number(DATE_FNS.format(data, 'D'))), func_setReferDayState: _this.setReferDayState_sendDay.bind(_this), func_setFormState: _this.setFormState_showForm.bind(_this) });
            }
        });
        for (var i = 0; i < 5; i++) {
            one_week.push(rendered_days.slice(refs, refs + 7));
            refs += 7;
        }
        return one_week.map(function (data) {
            return React.createElement("tr", null, data);
        });
    };
    CalendarTbody.prototype.extractTask = function (specific_day) {
        var task_list = [];
        for (var i = 0; i < this.state.test_list.length; i++) {
            if (this.state.test_list[i].day === specific_day) {
                task_list.push(this.state.test_list[i].task);
            }
        }
        return task_list;
    };
    CalendarTbody.prototype.render = function () {
        return (React.createElement("tbody", null, this.displayAllDays()));
    };
    return CalendarTbody;
}(React.Component));
export default CalendarTbody;
//# sourceMappingURL=CalendarTbody.js.map