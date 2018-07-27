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
import * as React from 'React';
import * as ReactDOM from 'react-dom';
import Index from './index';
import reducer from '../modules/test';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
var inst_store = createStore(reducer);
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(Provider, { store: inst_store },
            React.createElement(Index, null)));
    };
    return App;
}(React.Component));
ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));
//# sourceMappingURL=App.js.map