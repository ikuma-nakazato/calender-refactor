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
        /*クエリを保証する条件式を書く*/
        if (1) {
            var y_query = 2018;
            var m_query = 5;
            _this.state = {
                inst_date_fns: new Date(y_query, m_query - 1)
            };
        }
        else {
            console.log("異常発生");
            /*処理を止める処理を書く*/
        }
        return _this;
    }
    Calendar.prototype.getDaysOfMonth = function () {
        var start_date = this.state.inst_date_fns;
        var end_date = DATE_FNS.lastDayOfMonth(start_date);
        var start_week = DATE_FNS.format(start_date, 'd');
        var end_week = DATE_FNS.format(end_date, 'd');
        var month_data = new Array();
        if (start_week !== 0) {
            for (var i = 0; i < start_week; i++) {
                month_data.push(null);
            }
        }
        month_data.push(DATE_FNS.eachDay(start_date, end_date));
        if (end_week !== 6) {
            for (var j = end_week + 1; j < 7; j++) {
                month_data.push(null);
            }
        }
        return month_data;
    };
    Calendar.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("table", null,
                React.createElement(CalendarCaption, null),
                React.createElement(CalendarThead, null),
                React.createElement(CalendarTbody, null))));
    };
    return Calendar;
}(React.Component));
export default Calendar;
//# sourceMappingURL=Calendar.js.map