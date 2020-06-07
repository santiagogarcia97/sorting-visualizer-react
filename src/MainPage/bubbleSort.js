const bubleSort = (array) => {
  // Wrapper function for animation
  let animationCount = 1
  const delay = (callback) => {
    setTimeout(() => {
      callback()
    }, 10 * animationCount)
    animationCount += 1
  }

  // eslint-disable-next-line react/prop-types
  const n = array.length
  const auxArr = [...array]
  // Array of html div elements
  const bars = document.getElementsByClassName('bar')

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n - i - 1; j += 1) {
      // Set colors of elements being compared
      delay(() => {
        bars[j].style.backgroundColor = 'darkcyan'
        bars[j + 1].style.backgroundColor = 'darkblue'
      })

      if (auxArr[j] > auxArr[j + 1]) {
        const aux = auxArr[j]
        auxArr[j] = auxArr[j + 1]
        auxArr[j + 1] = aux

        // Swap divs properties
        delay(() => {
          const auxHeight = bars[j].style.height
          bars[j].style.height = bars[j + 1].style.height
          bars[j].style.backgroundColor = 'darkblue'
          bars[j + 1].style.height = auxHeight
          bars[j + 1].style.backgroundColor = 'darkcyan'
        })
      }

      // Set colors back to original
      delay(() => {
        bars[j].style.backgroundColor = 'darkred'
        bars[j + 1].style.backgroundColor = 'darkred'
      })
    }
    delay(() => {
      bars[n - i - 1].style.backgroundColor = 'darkgreen'
    })
  }
}

export default bubleSort
