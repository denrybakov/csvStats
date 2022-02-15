import { readFileSync } from 'fs'

 abstract class CsvFileReader<T> {

  data: T[] = []
  constructor( public fileName: string ) {}
  abstract mapRow( row: string[] ): T 

  read = (): void => {
     this.data = readFileSync(this.fileName, 'utf-8')
      .split('\n')
      .map((item: string): string[] => item.split(','))
      .map(this.mapRow)
  }

}

export default CsvFileReader
