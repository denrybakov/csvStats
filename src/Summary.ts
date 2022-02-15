import MatchData from "./MatchData";
import WinsAnalyzis from "./Analyzers/WinsAnalyzis";
import HtmlReport from "./ReportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTerget {
  print(report: string): void
}

class Summary {
  constructor( public analyzer: Analyzer, public outputTarget: OutputTerget ) {}

  static winsAnalysisWithHtmlReport = (team: string): Summary => {
    return new Summary(new WinsAnalyzis(team), new HtmlReport())
  }
  
  buildAndPrintReport = (matches: MatchData[]): void => {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
}

export default Summary
