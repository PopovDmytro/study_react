import React, {useState} from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {}
});

export default props => {

  const [productsList, setProductsList] = useState([]);

  const toggleFavorite = (productId) => {
    setProductsList(currentProductList => {

      const prodIndex = currentProductList.findIndex(
        p => p.id === productId
      );
      const newFavStatus = !currentProductList[prodIndex].isFavorite;
      const updatedProducts = [...currentProductList];
      updatedProducts[prodIndex] = {
        ...currentProductList[prodIndex],
        isFavorite: newFavStatus
      };

      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider value={{products: productsList, toggleFav: toggleFavorite}}>
      {props.children}
    </ProductsContext.Provider>
  );
};