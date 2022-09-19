const myRemove = (arr, item) => {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }

  console.log(myRemove([1, 2, 3, 4], 5));
  
  // implemente seus testes aqui


module.exports = myRemove;