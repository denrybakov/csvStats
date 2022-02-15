import { OutputTerget } from "../Summary";

class ConsoleReport implements OutputTerget {
  print = (report: string): void => console.log(report)
}

export default ConsoleReport
