import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";
import jsonData from '../data.json';

const ProductsPage = () => {
    
    const [products, setProducts] = useState(jsonData);
    const [copyProducts, setCopyProducts] = useState([...products])
    const searchProducts = (myInput) => {
        const foundProduct = copyProducts.filter((product) => {
            return product.name.toLowerCase().includes(myInput.toLowerCase())
        })
        setProducts(foundProduct)
    }

    const itemsStock = (checked) => {
        if(checked){
            const stockItem = copyProducts.filter((product) => {
                return product.inStock === true;
            })
            setProducts(stockItem)
        }else {
            setProducts(copyProducts)
        }
    }



    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar searchProducts = {searchProducts} itemsStock={itemsStock}/>
            <ProductTable products= {products}/>
        </div>
    );
};

export default ProductsPage;