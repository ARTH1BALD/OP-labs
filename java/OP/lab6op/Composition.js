const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

function pipe(...fns){
    for (const fn of fns) {
        if (typeof fn !== 'function'){
            throw new Error('Not a function')
        }
    }

    return function results(x) {
        let result = x
        for (let i = 0; i < fns.length; i++) {
            result = fns[i](result)
        }
        return result
    }
}

function compose(...fns) {
    const errors = []

    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new Error('Not a function')
        }
    }

    function results(x) {
        let result = x
        try {
            for (let i = fns.length - 1; i >= 0; i--) {
                result = fns[i](result)
            }
            return result
        } catch (error) {
            for (const callback of errors) {
                callback(error)
            }
            return undefined
        }
    }

    results.on = function (event, callback) {
        if (event === 'error') {
            errors.push(callback)
        }
        return results
    }

    return results
}
console.log(
pipe(inc, twice, cube)(5))
console.log(
    compose(inc, twice, cube)(5))