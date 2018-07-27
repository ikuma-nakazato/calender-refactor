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
import Calendar from './calendar/Calendar';
import Sidemenu from './sidemenu/Sidemenu';
import Form from './Form/Form';
/*本来はurlパラとして取得*/
var QUERY = {
    year: 2018,
    month: 5
};
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            refer_day: 1,
            form_show: false,
            form_type: 'none',
            task_list: []
        };
        return _this;
    }
    Index.prototype.setReferDayState = function (click_day) {
        if (click_day !== null) {
            this.setState({ refer_day: click_day });
        }
    };
    Index.prototype.setFormState = function (is_show, type) {
        if (is_show) {
            this.setState({ form_show: true, form_type: type });
        }
        else {
            this.setState({ form_show: false });
        }
    };
    Index.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", { onClick: function () { return alert(403); } }, "\u30C6\u30B9\u30C8\u7528"),
            React.createElement(Calendar, { now_year: QUERY.year, now_month: QUERY.month, func_setReferDayState: this.setReferDayState.bind(this), func_setFormState: this.setFormState.bind(this) }),
            React.createElement(Sidemenu, { now_year: QUERY.year, now_month: QUERY.month, now_day: this.state.refer_day }),
            React.createElement(Form, { now_year: QUERY.year, now_month: QUERY.month, now_day: this.state.refer_day, self_formShow: this.state.form_show, self_formType: this.state.form_type, func_setFormState: this.setFormState.bind(this) })));
    };
    return Index;
}(React.Component));
export default Index;
//# sourceMappingURL=index.js.map