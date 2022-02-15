import MatchData from "../MatchData"
import { Analyzer } from "../Summary"
import MatchResult from "../MatchResult"


class WinsAnalyzis implements Analyzer {
  constructor(public team: string) {}

  run = (matches: MatchData[]): string => {
    const { Draw, HomeWin, AwayWin } = MatchResult
    let wins: number = 0

    for (let key of matches) {
      if (key[1] === this.team && key[5] === HomeWin) {
        wins++
      } else if (key[2] === this.team && key[5] === AwayWin) {
        wins++
      }
    }

    return `Team ${this.team} won ${wins} time`
  }
}

export default WinsAnalyzis
