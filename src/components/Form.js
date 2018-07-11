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
import './Form.css';
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        return _super.call(this, props) || this;
    }
    Form.prototype.displayForm = function () {
        //form_judgeで表示と非表示を変更
        if (this.props.form_judge) {
            console.log('true');
        }
    };
    Form.prototype.render = function () {
        this.displayForm();
        return (React.createElement("div", null,
            React.createElement("div", null),
            React.createElement("div", null,
                React.createElement("p", null, "Y\u5E74M\u6708J\u65E5"),
                React.createElement("br", null),
                React.createElement("p", null, "\u4E88\u5B9A\u3092\u66F4\u65B0"),
                React.createElement("br", null),
                React.createElement("input", { type: "text" }),
                React.createElement("input", { type: "button", value: "submit" }))));
    };
    return Form;
}(React.Component));
export default Form;
//# sourceMappingURL=Form.js.map