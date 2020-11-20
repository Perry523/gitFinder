export function addToList(state,payload) {
    const favorites = state.favorites
    favorites.push(payload)
}
export function removeFromList(state,payload) {
    const favorites = state.favorites
    favorites.splice(payload.index, 1)
}