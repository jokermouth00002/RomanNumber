function toRoman(num) {
    const romanNumData = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
    let digitOfNine = 0
    let digitOfFive = 1
    let digitOfOne = 2
    // const thousand = ['M']
    // const hundred = ['M', 'D', 'C']
    // const ten = ['C', 'L', 'X']
    // const numberData = ['X', 'V', 'I']
    let romannum = ''
    let firsttimes = 'true'

    //把數字當成字串處理 從頭開始處理邏輯 ex 千百十個
    if (num > 0 && num < 4000) {
        let numString = String(num)
        let numData = numString.split('')

        if (numData.length === 4) {

            numData.forEach((el, index, arr) => {
                arr[index] = Number(el)
                //首數
                if (firsttimes === 'true') {
                    for (let i = 0; i < el; i++) {
                        romannum += romanNumData[index]
                    }
                    firsttimes = 'flase'
                } else {
                    if (numData[index] === 9) {
                        romannum += romanNumData[digitOfNine + 2]
                        romannum += romanNumData[digitOfNine]
                        digitOfNine += 2
                        digitOfFive += 2
                        digitOfOne += 2
                    } else if (numData[index] === 5) {
                        romannum += romanNumData[digitOfFive]
                        digitOfNine += 2
                        digitOfFive += 2
                        digitOfOne += 2
                    } else if (numData[index] === 4) {
                        romannum += romanNumData[digitOfFive + 1]
                        romannum += romanNumData[digitOfFive]
                        digitOfNine += 2
                        digitOfFive += 2
                        digitOfOne += 2
                    } else {
                        console.log(numData[index])
                        if (Math.floor(numData[index] / 5) > 0) {
                            romannum += 'V'
                            let x = romannum[index] - 5
                            for (let i = 0; i < x; i++) {
                                romannum += romanNumData[digitOfOne]
                            }
                            digitOfNine += 2
                            digitOfFive += 2
                            digitOfOne += 2
                        } else {
                            for (let i = 0; i < numData[index]; i++) {
                                romannum += romanNumData[digitOfOne]
                            }
                            digitOfNine += 2
                            digitOfFive += 2
                            digitOfOne += 2
                        }

                    }
                }
            })


        } else if (numData.length === 3) {

        }


        console.log(romannum)
    }
    else {
        console.log('plz type number 0~4000')
    }







}
toRoman(1991)
// console.log(toRoman(2000))
