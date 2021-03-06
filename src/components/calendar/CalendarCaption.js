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
import './CalendarCaption.css';
var CalendarCaption = /** @class */ (function (_super) {
    __extends(CalendarCaption, _super);
    function CalendarCaption(props) {
        return _super.call(this, props) || this;
    }
    CalendarCaption.prototype.render = function () {
        return (React.createElement("caption", { className: "calendar_caption" },
            this.props.now_year,
            "\u5E74",
            this.props.now_month,
            "\u6708"));
    };
    return CalendarCaption;
}(React.Component));
export default CalendarCaption;
//# sourceMappingURL=CalendarCaption.js.map