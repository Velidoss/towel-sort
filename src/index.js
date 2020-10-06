
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix) return []
    return matrix.reduce((acc, el, i, arr)=>{
        if(i%2 === 0 || i === 0){
            acc = acc.concat(el)
            return acc
        }
        acc = acc.concat(el.reverse())
        return acc
    }, [])
}
