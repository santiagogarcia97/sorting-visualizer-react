import cloneDeep from 'clone-deep'

const mergeSort = (array, newArrayState) => {
  let count = 1
  const newState = (arrayState, sorted) => {
    newArrayState(arrayState, count, sorted)
    count += 1
  }

  const merge = (leftArray, rightArray) => {
    const sortedArray = []
    while (leftArray.length && rightArray.length) {
      if (leftArray[0].value <= rightArray[0].value) {
        sortedArray.push(leftArray[0])
        leftArray = leftArray.slice(1)
      } else {
        sortedArray.push(rightArray[0])
        rightArray = rightArray.slice(1)
      }
    }
    while (leftArray.length) sortedArray.push(leftArray.shift())
    while (rightArray.length) sortedArray.push(rightArray.shift())
    newState(cloneDeep(sortedArray))
    return sortedArray
  }

  const sort = (unsortedArray) => {
    if (unsortedArray.length < 2) {
      return unsortedArray
    }

    const midpoint = parseInt(unsortedArray.length / 2)
    const leftArray = unsortedArray.slice(0, midpoint)
    const rightArray = unsortedArray.slice(midpoint, unsortedArray.length)
    return merge(sort(leftArray), sort(rightArray))
  }

  return sort(array)
}

export default mergeSort
