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
import * as React from "react";
var CalendarThead = /** @class */ (function (_super) {
    __extends(CalendarThead, _super);
    function CalendarThead(props) {
        return _super.call(this, props) || this;
    }
    CalendarThead.prototype.render = function () {
        return (React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", { className: "sunday" }, "\u65E5"),
                React.createElement("th", null, "\u6708"),
                React.createElement("th", null, "\u706B"),
                React.createElement("th", null, "\u6C34"),
                React.createElement("th", null, "\u6728"),
                React.createElement("th", null, "\u91D1"),
                React.createElement("th", { className: "saturday" }, "\u571F"))));
    };
    return CalendarThead;
}(React.Component));
export default CalendarThead;
//# sourceMappingURL=CalendarThead.js.map