import { readFileSync } from 'fs'

 class CsvFileReader {
  data: string[][] = []
  constructor(public fileName: string) {}

  read = (): void => {
     this.data = readFileSync(this.fileName, 'utf-8')
      .split('\n')
      .map((item: string): string[] => item.split(',')) 
  }
  
}

export default CsvFileReader
