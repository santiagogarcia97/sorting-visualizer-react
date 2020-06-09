import cloneDeep from 'clone-deep'

const quickSort = (array, newArrayState) => {
  let count = 1
  const newState = (arrayState, sorted) => {
    if (sorted) arrayState.forEach((e) => (e.color = 'darkgreen'))
    newArrayState(arrayState, count, sorted)
    count += 1
  }
  let auxArray = [...array]

  const partition = (auxArray, low, high) => {
    const pivot = auxArray[high]
    let i = low
    auxArray[high].color = 'darkorange'

    for (let j = low; j < high; j += 1) {
      auxArray[j].color = 'darkblue'
      newState(cloneDeep(auxArray))
      if (auxArray[j].value < pivot.value) {
        if (i !== j) {
          auxArray[i].color = 'darkcyan'
          newState(cloneDeep(auxArray))

          const temp = auxArray[i]
          auxArray[i] = auxArray[j]
          auxArray[j] = temp
          newState(cloneDeep(auxArray))
        }
        auxArray[i].color = 'darkred'
        auxArray[j].color = 'darkred'
        newState(cloneDeep(auxArray))
        i += 1
      } else {
        auxArray[j].color = 'darkred'
        newState(cloneDeep(auxArray))
      }
    }

    auxArray[i].color = 'darkcyan'
    auxArray[high].color = 'darkblue'
    newState(cloneDeep(auxArray))

    const temp = auxArray[i]
    auxArray[i] = auxArray[high]
    auxArray[high] = temp
    newState(cloneDeep(auxArray))

    auxArray[i].color = 'darkred'
    auxArray[high].color = 'darkred'
    newState(cloneDeep(auxArray))

    return i
  }

  const sort = (auxArray, low, high) => {
    if (low < high) {
      const pivotIndex = partition(auxArray, low, high)
      sort(auxArray, low, pivotIndex - 1)
      sort(auxArray, pivotIndex + 1, high)
    }
  }

  sort(auxArray, 0, auxArray.length - 1)
  newState(cloneDeep(auxArray), true)
}

export default quickSort
