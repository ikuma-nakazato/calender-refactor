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
import './Sidemenu.css';
var Sidemenu = /** @class */ (function (_super) {
    __extends(Sidemenu, _super);
    function Sidemenu(props) {
        return _super.call(this, props) || this;
    }
    Sidemenu.prototype.render = function () {
        return (React.createElement("div", { className: "sidemenu" },
            React.createElement("div", { className: "sidemenu-date" },
                this.props.now_year,
                "\u5E74",
                this.props.now_month,
                "\u6708",
                this.props.now_day,
                "\u65E5"),
            React.createElement("div", null,
                React.createElement("div", null, "\u4E88\u5B9A\u306E\u4E00\u89A7"))));
    };
    return Sidemenu;
}(React.Component));
export default Sidemenu;
//# sourceMappingURL=Sidemenu.js.map