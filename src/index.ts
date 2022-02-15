import MatchReader from './MatchReader'
// import CsvFileReader from './CsvFileReader'

// import WinsAnalyzis from './Analyzers/WinsAnalyzis'
// import ConsoleReport from './ReportTargets/ConsoleReport'
import Summary from './Summary'
// import HtmlReport from './ReportTargets/HtmlReport'


// const csvFileReader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(csvFileReader)

const matchReader = MatchReader.fromCsv('football.csv')

matchReader.load()


// const summary = new Summary(new WinsAnalyzis('Man United'), new ConsoleReport())
// const summary = new Summary(new WinsAnalyzis('Man United'), new HtmlReport())
const summary1 = Summary.winsAnalysisWithHtmlReport('Man United')
summary1.buildAndPrintReport(matchReader.matches)





// const matches = matchReader.matches

// const getMatchResult = (match: string[]): MatchResult | null => {
//   return match[5] === 'H' ? HomeWin : match[5] === 'A' ? AwayWin : match[5] === 'D' ? Draw : null
// }

// console.log(matches[0])


