const iteration = (auxArr, i, setArray) => {
  setTimeout(() => {
    setArray(auxArr)
  }, 25 * i)
}

const bubleSort = (array, setArray) => {
  // eslint-disable-next-line react/prop-types
  const n = array.length
  const auxArr = [...array]
  let count = 1

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (auxArr[j] > auxArr[j + 1]) {
        const aux = auxArr[j]
        auxArr[j] = auxArr[j + 1]
        auxArr[j + 1] = aux
        iteration([...auxArr], count, setArray)
        count += 1
      }
    }
  }
}
export default bubleSort
