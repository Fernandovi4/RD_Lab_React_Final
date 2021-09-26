export const showsRandomizer = (arr) => {

  const min = 1
  const max = arr.length
  let result = []

  for(let i = 0; i < 6; i++){
    result.push(arr[Math.floor(Math.random() * (max - min + 1)) + min])
  }
  // console.log(Math.floor(Math.random() * (max - min + 1)) + min)
  // console.log('result',result)
  return result
}

