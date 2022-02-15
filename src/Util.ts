const  dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((number: string): number => parseInt(number)) 
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}

export default dateStringToDate
