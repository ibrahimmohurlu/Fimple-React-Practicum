let tiles = document.querySelectorAll(".tile")
let grid = []
let winner=false
// this is a data structure to hold array indexes
let winPatterns = {
    horizontal: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ],
    vertical: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ],
    diagonal: [
        [2, 4, 6],
        [0, 4, 8]
    ]
}


const checkForWinner = () => {
    for (pattern in winPatterns) {
        winPatterns[pattern].forEach((arr) => {
            if (
                grid[arr[0]] === '' || grid[arr[1]] === '' || grid[arr[2]] === ''
            ) {
                // do nothing there is no winner
            } else if (
                grid[arr[0]] !== "" && grid[arr[0]] === grid[arr[1]] && grid[arr[1]] === grid[arr[2]]
            ) {
                document.getElementById("winner").innerText = grid[arr[0]] + " is the winner!"
                winner=true
            }
        })
    }
}
const computerMove = () => {
    if (checkEmptyTile() && !winner) {
        let index = Math.floor(Math.random() * 9)
        while (grid[index] != "") {
            index = Math.floor(Math.random() * 9)
        }
        tiles[index].innerHTML = "O"
        updateGrid()
    } else {
        return
    }
}

// check grid array which is binded with tiles and return true if there is any empty cell
const checkEmptyTile = () => {
    return grid.includes("")
}

const updateGrid = () => {
    tiles.forEach((e) => {
        grid[Number(e.id)] = e.innerHTML
    })
}
const handleUserClick = (tile) => {
    if (tile.innerHTML === "" && !winner) {
        tile.innerHTML = "X"
        updateGrid()
        computerMove()
        return
    }
}
//binding tiles and grid variable
document.addEventListener('load', () => {
    updateGrid()
})

document.getElementById("reset-btn").addEventListener('click', () => {
    window.open('/', '_self')
})

//adding event listener to each div(tile)
tiles.forEach((e) => {
    e.addEventListener('click', handleUserClick.bind(this, e))
    e.addEventListener('click', checkForWinner.bind(this))
})





