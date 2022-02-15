"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = __importDefault(require("./MatchReader"));
// import CsvFileReader from './CsvFileReader'
// import WinsAnalyzis from './Analyzers/WinsAnalyzis'
// import ConsoleReport from './ReportTargets/ConsoleReport'
var Summary_1 = __importDefault(require("./Summary"));
// import HtmlReport from './ReportTargets/HtmlReport'
// const csvFileReader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(csvFileReader)
var matchReader = MatchReader_1.default.fromCsv('football.csv');
matchReader.load();
// const summary = new Summary(new WinsAnalyzis('Man United'), new ConsoleReport())
// const summary = new Summary(new WinsAnalyzis('Man United'), new HtmlReport())
var summary1 = Summary_1.default.winsAnalysisWithHtmlReport('Man United');
summary1.buildAndPrintReport(matchReader.matches);
// const matches = matchReader.matches
// const getMatchResult = (match: string[]): MatchResult | null => {
//   return match[5] === 'H' ? HomeWin : match[5] === 'A' ? AwayWin : match[5] === 'D' ? Draw : null
// }
// console.log(matches[0])
