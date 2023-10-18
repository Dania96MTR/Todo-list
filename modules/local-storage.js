const getProductsFromLocalStorage = () => {
    const storedProducts = localStorage.getItem("products")
    if (storedProducts) {
        return JSON.parse(storedProducts)
    }

    return []
}

const addProductToLocalStorage = (product) => {
    const currentProducts = getProductsFromLocalStorage()
    const uniqueId = Date.now()
    currentProducts.push({...product, id: uniqueId})
    setProductsToLocalStorage(currentProducts)
}

const updateProductToLocalStorage = (id, updatedDetails) => {
    const currentProducts = getProductsFromLocalStorage()   
    for (let i = 0; i < currentProducts.length; i++) {
        if (currentProducts[i].id === id) {
             currentProducts[i] = {...currentProducts[i], ...updatedDetails}
            break 
        }
    }
    setProductsToLocalStorage(currentProducts)
}

const deleteProductFromLocalStorage = (id) => {
    const currentProducts = getProductsFromLocalStorage()
    const productsAfterDeletion = currentProducts.filter(product => product.id !== id)
    setProductsToLocalStorage(productsAfterDeletion)
}

const setProductsToLocalStorage = (products) => {
    localStorage.setItem("products", JSON.stringify(products))
}

export {
    getProductsFromLocalStorage,
    addProductToLocalStorage,
    updateProductToLocalStorage,
    deleteProductFromLocalStorage,
    setProductsToLocalStorage
}