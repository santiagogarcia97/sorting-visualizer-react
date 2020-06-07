import cloneDeep from 'clone-deep'

const bubleSort = (array, setArray) => {
  let iteration = 1
  const delay = (arrayState) => {
    setTimeout(() => {
      setArray(arrayState)
    }, 10 * iteration)
    iteration += 1
  }

  const auxArr = array
  const n = auxArr.length

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n - i - 1; j += 1) {
      auxArr[j].color = 'darkcyan'
      auxArr[j + 1].color = 'darkblue'
      delay(cloneDeep(auxArr))

      if (auxArr[j].value > auxArr[j + 1].value) {
        const aux = auxArr[j].value
        auxArr[j].value = auxArr[j + 1].value
        auxArr[j + 1].value = aux

        auxArr[j].color = 'darkblue'
        auxArr[j + 1].color = 'darkcyan'
        delay(cloneDeep(auxArr))
      }

      auxArr[j].color = 'darkred'
      auxArr[j + 1].color = 'darkred'
      delay(cloneDeep(auxArr))
    }
    auxArr[n - i - 1].color = 'darkgreen'
    delay(cloneDeep(auxArr))
  }
}

export default bubleSort
