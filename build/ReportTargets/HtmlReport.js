"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var HtmlReport = /** @class */ (function () {
    function HtmlReport() {
        this.print = function (report) {
            var html = "\n      <div>\n        <h1>Analysis Output</h1>\n        <p>" + report + "</p>\n      </div>\n    ";
            (0, fs_1.writeFileSync)('report.html', html);
        };
    }
    return HtmlReport;
}());
exports.default = HtmlReport;
