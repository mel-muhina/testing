function getLonger(a, b){

    if (a === undefined || b === undefined) {
        throw new Error("This function requires two arguments!");
    }

    
    if (a.length === 0 || b.length === 0) {
        throw new Error("This function requires two arguments!");
    }

    if (typeof a !== 'string' || typeof b !== 'string' ) {
        throw new Error("Arguments must be strings!")
    }

    if (a === "" && b === "") {
        return ""
    } 

    if (a === "" ) {
        return b
    } 
    
    if (b === "") {
        return a
    }

    if (a.length > b.length) {
        return a
    } else {
        return b
    }

  
}

const greet = (name) => {
    if (name === "") {
        return "Hi!"
    }

    if (name.length === 0) {
        return "Hi!"
    }
    
      return `Hello, ${name}!`
}

const isSubstring = (a,b) => {
    if (a === undefined || b === undefined) {
        throw new Error("This function requires two arguments!");
    }

    
    if (a.length === 0 || b.length === 0) {
        throw new Error("This function requires two arguments!");
    }

    if (typeof a !== 'string' || typeof b !== 'string') {
        throw new Error("Arguments must be strings!")
    }

    if (a === "" || b === "") {
        throw new Error("Arguments must be strings!")
    }
}

module.exports = {
    getLonger,
    greet,
    isSubstring
}