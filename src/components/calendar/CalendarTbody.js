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
        return _super.call(this, props) || this;
    }
    CalendarTbody.prototype.getDayFromCTd = function (i) {
        this.props.day_to_Calendar(i);
    };
    CalendarTbody.prototype.getFormJudge = function (handle) {
        this.props.form_judge(handle);
    };
    CalendarTbody.prototype.displayAllDays = function () {
        var _this = this;
        var refs = 0;
        var one_week = [];
        var rendered_days = this.props.data_days.map(function (data) {
            if (data === null) {
                return React.createElement(CalendarTd, { day: null, day_to_CTb: _this.getDayFromCTd.bind(_this), form_judge: _this.getFormJudge.bind(_this) });
            }
            else {
                return React.createElement(CalendarTd, { day: DATE_FNS.format(data, 'D'), day_to_CTb: _this.getDayFromCTd.bind(_this), form_judge: _this.getFormJudge.bind(_this) });
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
    CalendarTbody.prototype.render = function () {
        return (React.createElement("tbody", null, this.displayAllDays()));
    };
    return CalendarTbody;
}(React.Component));
export default CalendarTbody;
//# sourceMappingURL=CalendarTbody.js.map