"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalyzis_1 = __importDefault(require("./Analyzers/WinsAnalyzis"));
var HtmlReport_1 = __importDefault(require("./ReportTargets/HtmlReport"));
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        var _this = this;
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
        this.buildAndPrintReport = function (matches) {
            var output = _this.analyzer.run(matches);
            _this.outputTarget.print(output);
        };
    }
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinsAnalyzis_1.default(team), new HtmlReport_1.default());
    };
    return Summary;
}());
exports.default = Summary;
