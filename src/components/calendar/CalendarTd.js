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
var CalendarTd = /** @class */ (function (_super) {
    __extends(CalendarTd, _super);
    function CalendarTd(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            date: 'hogehoge',
            task_list: ['fugafuga']
        };
        return _this;
    }
    CalendarTd.prototype.render = function () {
        return (React.createElement("div", null));
    };
    return CalendarTd;
}(React.Component));
export default CalendarTd;
//# sourceMappingURL=CalendarTd.js.map