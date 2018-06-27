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
var SubComponent = /** @class */ (function (_super) {
    __extends(SubComponent, _super);
    function SubComponent(parameters) {
        var _this = this;
        var props = parameters.props;
        _this = _super.call(this, props) || this;
        _this.state = {
            count: 0,
        };
        return _this;
    }
    SubComponent.prototype.handleClick = function () {
        console.log('クリックされました');
        this.setState({
            count: this.state.count + 1,
        });
    };
    SubComponent.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, this.props.name),
            React.createElement("div", null, this.state.count),
            React.createElement("button", { onClick: this.handleClick.bind(this) }, "Add +1")));
    };
    return SubComponent;
}(React.Component));
export { SubComponent };
//# sourceMappingURL=sub-component.js.map