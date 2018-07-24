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
import './CalendarTd.css';
var CalendarTd = /** @class */ (function (_super) {
    __extends(CalendarTd, _super);
    function CalendarTd(props) {
        var _this = _super.call(this, props) || this;
        _this.setReferDayState_sendDay = _this.setReferDayState_sendDay.bind(_this);
        _this.setFormState_showForm = _this.setFormState_showForm.bind(_this);
        return _this;
    }
    CalendarTd.prototype.setReferDayState_sendDay = function (click_day) {
        if (click_day !== null) {
            this.props.func_setReferDayState(click_day);
        }
    };
    CalendarTd.prototype.setFormState_showForm = function (is_show, type) {
        this.props.func_setFormState(is_show, type);
    };
    CalendarTd.prototype.displayTask = function () {
        if (this.props.task_list !== null) {
            return this.props.task_list.map(function (data) {
                return React.createElement("div", { className: "calendar_td-task" }, data);
            });
        }
    };
    CalendarTd.prototype.render = function () {
        var _this = this;
        //console.log(this.props.task_list);
        return (React.createElement("td", { className: "calendar_td", onClick: function () { return _this.setReferDayState_sendDay(_this.props.data_day); } },
            React.createElement("div", { className: "calendar_td-date", onClick: function () { return _this.setFormState_showForm(true, 'create'); } }, this.props.data_day),
            React.createElement("div", { className: "calendar_td-task" }, "task")));
    };
    return CalendarTd;
}(React.Component));
export default CalendarTd;
//# sourceMappingURL=CalendarTd.js.map