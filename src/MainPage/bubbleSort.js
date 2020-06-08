import cloneDeep from 'clone-deep'

const bubleSort = (array, newArrayState) => {
  let count = 1
  const newState = (arrayState) => {
    newArrayState(arrayState, count)
    count += 1
  }

  const auxArr = array
  const n = auxArr.length

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n - i - 1; j += 1) {
      auxArr[j].color = 'darkcyan'
      auxArr[j + 1].color = 'darkblue'
      newState(cloneDeep(auxArr))

      if (auxArr[j].value > auxArr[j + 1].value) {
        const aux = auxArr[j].value
        auxArr[j].value = auxArr[j + 1].value
        auxArr[j + 1].value = aux

        auxArr[j].color = 'darkblue'
        auxArr[j + 1].color = 'darkcyan'
        newState(cloneDeep(auxArr))
      }

      auxArr[j].color = 'darkred'
      auxArr[j + 1].color = 'darkred'
      newState(cloneDeep(auxArr))
    }
    auxArr[n - i - 1].color = 'darkgreen'
    newState(cloneDeep(auxArr))
  }
}

export default bubleSort
