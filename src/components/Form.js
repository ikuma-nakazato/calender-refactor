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
        var _this = _super.call(this, props) || this;
        _this.setFormState_showForm = _this.setFormState_showForm.bind(_this);
        return _this;
    }
    Form.prototype.setFormState_showForm = function (is_show) {
        this.props.func_setFormState(is_show);
    };
    Form.prototype.switchFormShow = function () {
        if (this.props.self_formShow) {
            return {
                display: "block"
            };
        }
        else {
            return {
                display: "none"
            };
        }
    };
    Form.prototype.switchFormURL = function () {
        if (this.props.self_formType === 'create') {
            return ('./create.php?date=' + this.props.now_year + '-' + this.props.now_month + '-' + this.props.now_day);
        }
        if (this.props.self_formType === 'update') {
            return ('./update.php?date=' + this.props.now_year + '-' + this.props.now_month + '-' + this.props.now_day);
        }
    };
    Form.prototype.switchFormStatement = function () {
        if (this.props.self_formType === 'create') {
            return '予定の作成';
        }
        if (this.props.self_formType === 'update') {
            return '予定の更新';
        }
    };
    Form.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "form", style: this.switchFormShow() },
            React.createElement("div", { className: "form-layer", onClick: function () { return _this.setFormState_showForm(false); } }),
            React.createElement("div", { className: "form-popup" },
                React.createElement("p", null,
                    this.props.now_year,
                    "\u5E74",
                    this.props.now_month,
                    "\u6708",
                    this.props.now_day,
                    "\u65E5"),
                React.createElement("br", null),
                React.createElement("p", null, this.switchFormStatement()),
                React.createElement("form", { action: this.switchFormURL(), method: "post", target: "_self" },
                    React.createElement("input", { type: "text", name: "create_task" }),
                    React.createElement("input", { type: "submit", value: "\u4F5C\u6210" })))));
    };
    return Form;
}(React.Component));
export default Form;
//# sourceMappingURL=Form.js.map