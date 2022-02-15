import { writeFileSync } from 'fs'
import { OutputTerget } from "../Summary";

class HtmlReport implements OutputTerget {
  print = (report: string): void => {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <p>${report}</p>
      </div>
    `
    writeFileSync('report.html', html)
  }
}

export default HtmlReport
