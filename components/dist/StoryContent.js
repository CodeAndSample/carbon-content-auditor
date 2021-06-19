"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UIShell_1 = require("carbon-components-react/lib/components/UIShell");
var Grid_1 = require("carbon-components-react/lib/components/Grid/Grid");
var Row_1 = require("carbon-components-react/lib/components/Grid/Row");
var Column_1 = require("carbon-components-react/lib/components/Grid/Column");
var carbon_components_1 = require("carbon-components");
var Link_1 = require("carbon-components-react/lib/components/Link/Link");
function StoryContent(props) {
    return (react_1["default"].createElement(UIShell_1.Content, { id: "main-content" },
        react_1["default"].createElement(Grid_1["default"], null,
            react_1["default"].createElement(Row_1["default"], null,
                react_1["default"].createElement(Column_1["default"], { sm: 2, md: 4, lg: 6 },
                    react_1["default"].createElement(carbon_components_1["default"], null,
                        "Default tile",
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement(Link_1["default"], { href: "https://www.carbondesignsystem.com" }, "Link"))),
                react_1["default"].createElement(Column_1["default"], { sm: 2, md: 2, lg: 3 },
                    react_1["default"].createElement(carbon_components_1["default"], null,
                        "Default tile",
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement(Link_1["default"], { href: "https://www.carbondesignsystem.com" }, "Link"))),
                react_1["default"].createElement(Column_1["default"], { sm: 0, md: 2, lg: 3 },
                    react_1["default"].createElement(carbon_components_1["default"], null,
                        "Default tile",
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement(Link_1["default"], { href: "https://www.carbondesignsystem.com" }, "Link"))))),
        react_1["default"].createElement("div", { className: "bx--grid" },
            react_1["default"].createElement("div", { className: "bx--row" },
                react_1["default"].createElement("section", { className: "bx--offset-lg-3 bx--col-lg-13" },
                    react_1["default"].createElement("h2", { style: {
                            margin: "30px 0 30px 0",
                            fontSize: "20px"
                        } }, "Purpose and function"),
                    react_1["default"].createElement("p", { style: { lineHeight: "20px" } },
                        "The shell is perhaps the most crucial piece of any UI built with Carbon. It contains the shared navigation framework for the entire design system and ties the products in IBM\u2019s portfolio together in a cohesive and elegant way. The shell is the home of the topmost navigation, where users can quickly and dependably gain their bearings and move between pages.",
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("br", null),
                        "The shell was designed with maximum flexibility built in, to serve the needs of a broad range of products and users. Adopting the shell ensures compliance with IBM design standards, simplifies development efforts, and provides great user experiences. All IBM products built with Carbon are required to use the shell\u2019s header.",
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("br", null),
                        "To better understand the purpose and function of the UI shell, consider the \u201Cshell\u201D of MacOS, which contains the Apple menu, top-level navigation, and universal, OS-level controls at the top of the screen, as well as a universal dock along the bottom or side of the screen. The Carbon UI shell is roughly analogous in function to these parts of the Mac UI. For example, the app switcher portion of the shell can be compared to the dock in MacOS."),
                    react_1["default"].createElement("h2", { style: {
                            margin: "30px 0",
                            fontSize: "20px"
                        } }, "Header responsive behavior"),
                    react_1["default"].createElement("p", { style: { lineHeight: "20px" } }, "As a header scales down to fit smaller screen sizes, headers with persistent side nav menus should have the side nav collapse into \u201Chamburger\u201D menu. See the example to better understand responsive behavior of the header."),
                    react_1["default"].createElement("h2", { style: {
                            margin: "30px 0",
                            fontSize: "20px"
                        } }, "Secondary navigation"),
                    react_1["default"].createElement("p", { style: { lineHeight: "20px" } }, "The side-nav contains secondary navigation and fits below the header. It can be configured to be either fixed-width or flexible, with only one level of nested items allowed. Both links and category lists can be used in the side-nav and may be mixed together. There are several configurations of the side-nav, but only one configuration should be used per product section. If tabs are needed on a page when using a side-nav, then the tabs are secondary in hierarchy to the side-nav."))))));
}
exports["default"] = StoryContent;
