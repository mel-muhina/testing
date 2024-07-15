const getBigger = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
    
}

const getSmallest = (arr) => {

    if (arr.length === 0) {
        return null
    }

    // if (arr == []) {
    //     return null    }

    let smallest = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        if (smallest > arr[i]) {
            smallest = arr[i]
           
        }
    }

    return smallest
   
}

const countValue = (arr, num) => {

    if (arr && !num ) {
        return null
    }

    if (arr.length === 0 && num == true) {
        return 0
    }

    let count = 0
    arr.forEach((e)=>{
        
        if (e === num) {
            count += 1
        }
        
    })

    return count
}

module.exports = {
    getBigger,
    getSmallest,
    countValue
}