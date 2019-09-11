
var getYears = () => {
    let years = []
    const start = 2000
    let end = new Date().getFullYear()
    for (let i = start; i <= end; i++) {
        years[i] = i
    }
    return years
}