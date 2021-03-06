import cloneDeep from 'clone-deep'

const mergeSort = (array, newArrayState) => {
  let count = 1
  const newState = (arrayState, sorted) => {
    newArrayState(arrayState, count, sorted)
    count += 1
  }
  let auxArray = [...array]

  const merge = (leftArray, rightArray, globalIndex) => {
    const sortedArray = []
    const finalMerge = auxArray.length === leftArray.length + rightArray.length
    const init = auxArray.slice(0, globalIndex)
    const end = auxArray.slice(
      globalIndex + rightArray.length + leftArray.length,
    )

    const addState = (sorted = false) => {
      auxArray = init
        .concat(sortedArray)
        .concat(leftArray)
        .concat(rightArray)
        .concat(end)
      newState(cloneDeep(auxArray), sorted)
    }

    while (leftArray.length && rightArray.length) {
      leftArray[0].color = 'darkcyan'
      rightArray[0].color = 'darkblue'
      addState()

      if (leftArray[0].value <= rightArray[0].value) {
        sortedArray.push(leftArray[0])
        leftArray.shift()
        addState()

        sortedArray[sortedArray.length - 1].color = finalMerge
          ? 'darkgreen'
          : 'darkred'
        rightArray[0].color = 'darkred'
        addState()
      } else {
        sortedArray.push(rightArray[0])
        rightArray.shift()
        addState()

        sortedArray[sortedArray.length - 1].color = finalMerge
          ? 'darkgreen'
          : 'darkred'
        leftArray[0].color = 'darkred'
        addState()
      }
    }

    if (finalMerge) {
      while (leftArray.length) {
        sortedArray.push(leftArray.shift())
        sortedArray[sortedArray.length - 1].color = 'darkgreen'
        addState()
      }
      while (rightArray.length) {
        sortedArray[sortedArray.length - 1].color = 'darkgreen'
        sortedArray.push(rightArray.shift())
        addState()
      }
      sortedArray[sortedArray.length - 1].color = 'darkgreen'
      addState(true)
    } else {
      while (leftArray.length) sortedArray.push(leftArray.shift())
      while (rightArray.length) sortedArray.push(rightArray.shift())
    }

    return sortedArray
  }

  const sort = (unsortedArray, globalIndex) => {
    if (unsortedArray.length < 2) {
      return unsortedArray
    }

    const midpoint = Math.floor(unsortedArray.length / 2)
    const leftArray = unsortedArray.slice(0, midpoint)
    const rightArray = unsortedArray.slice(midpoint, unsortedArray.length)
    return merge(
      sort(leftArray, globalIndex),
      sort(rightArray, globalIndex + leftArray.length),
      globalIndex,
    )
  }

  sort(array, 0)
}

export default mergeSort
