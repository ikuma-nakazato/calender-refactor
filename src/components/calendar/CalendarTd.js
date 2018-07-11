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
        return _super.call(this, props) || this;
    }
    CalendarTd.prototype.render = function () {
        var _this = this;
        return (React.createElement("td", { onClick: function () { return _this.props.day_to_CTb(_this.props.day); } },
            React.createElement("div", { onClick: function () { return _this.props.form_judge(1); } }, this.props.day),
            React.createElement("div", null)));
    };
    return CalendarTd;
}(React.Component));
export default CalendarTd;
//# sourceMappingURL=CalendarTd.js.map