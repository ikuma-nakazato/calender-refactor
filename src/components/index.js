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
import * as ReactDOM from 'react-dom';
import Calendar from './calendar/Calendar';
import Sidemenu from './sidemenu/Sidemenu';
import Form from './Form';
var QUERY = {
    year: 2018,
    month: 5
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            clicked_day: 1,
            form_judge: false
        };
        return _this;
    }
    App.prototype.getDayFromCalendar = function (i) {
        if (i !== null) {
            this.setState({ clicked_day: i });
        }
    };
    App.prototype.getFormJudge = function (handle) {
        if (handle === 1) {
            this.setState({ form_judge: true });
        }
    };
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Calendar, { now_year: QUERY.year, now_month: QUERY.month, day_to_Index: this.getDayFromCalendar.bind(this), form_judge: this.getFormJudge.bind(this) }),
            React.createElement(Sidemenu, { now_year: QUERY.year, now_month: QUERY.month, now_day: this.state.clicked_day }),
            React.createElement(Form, { form_judge: this.state.form_judge })));
    };
    return App;
}(React.Component));
ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));
//# sourceMappingURL=index.js.map