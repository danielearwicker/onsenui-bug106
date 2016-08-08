"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var react_onsenui_1 = require("react-onsenui");
function getTitle(route, props) {
    var title = route.title;
    return typeof title === "function" ? title(props) : title;
}
var ToolbarNavigator = (function (_super) {
    __extends(ToolbarNavigator, _super);
    function ToolbarNavigator() {
        _super.apply(this, arguments);
    }
    ToolbarNavigator.prototype.renderPage = function (route, navigator) {
        return (React.createElement(react_onsenui_1.Page, {key: route.id}, 
            React.createElement("div", null, 
                React.createElement(react_onsenui_1.Toolbar, null, 
                    React.createElement("div", {className: "left"}, 
                        React.createElement(react_onsenui_1.BackButton, null, "Back")
                    ), 
                    React.createElement("div", {className: "center"}, getTitle(route, { navigator: navigator })), 
                    React.createElement("div", {className: "right"}, 
                        React.createElement("span", {style: { padding: 8 }}, 
                            React.createElement(react_onsenui_1.Icon, {icon: "ion-gear-a"}), 
                            "\u00a0" /*force text-like vertical alignment*/)
                    )), 
                route.content({ navigator: navigator }))
        ));
    };
    ToolbarNavigator.prototype.render = function () {
        var _this = this;
        return (React.createElement(react_onsenui_1.Navigator, {initialRoute: this.props.initialRoute, renderPage: function (r, n) { return _this.renderPage(r, n); }}));
    };
    return ToolbarNavigator;
}(React.Component));
exports.ToolbarNavigator = ToolbarNavigator;
exports.ProviderList = {
    id: "providersList",
    title: "Providers",
    content: function (_a) {
        var navigator = _a.navigator;
        return (React.createElement(react_onsenui_1.List, {dataSource: ["a", "b", "c"], renderRow: function (name) { return (React.createElement(react_onsenui_1.ListItem, {key: name, tappable: true}, name)); }}));
    }
};
exports.App = function (props) { return (React.createElement(ToolbarNavigator, {initialRoute: exports.ProviderList})); };
ReactDOM.render(React.createElement(exports.App, null), document.getElementById("root"));
