
function superbowlWin(array) {
    let result = array.find( function(s) { return s.result === "W" })
    return result ? result.year : undefined
}