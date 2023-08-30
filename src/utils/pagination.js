const paginateData = (items, currentPage) =>  {
    //cantidad de items por pagina
    const ITEMS_PER_PAGE = 20

    //Los items de la pagina actual
    const sliceEnd = currentPage * ITEMS_PER_PAGE
    const sliceStart = sliceEnd - ITEMS_PER_PAGE
    const itemsCurrentPage = items.slice(sliceStart, sliceEnd)

    //última pagina
    const LastPage = Math.ceil(items.lenght / ITEMS_PER_PAGE)
}

export {
    paginateData
}