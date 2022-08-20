let tiles = document.querySelectorAll(".tile")
const handleUserClick = (tile) => {
    if (tile.innerHTML === "") {
        tile.innerHTML = "X"
    }
}
tiles.forEach((e) => {
    e.addEventListener('click', handleUserClick.bind(this, e))
})
console.log(tiles)