import ProductRow from "./ProductRow";


const ProductTable = (props) => {

  
    return (
        <div>
            <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
            </thead>
            <tbody>
                { props.products.map((singleProduct) => {
                    return <ProductRow 
                        price = {singleProduct.price}
                        name = {singleProduct.name}
                        inStock = {singleProduct.inStock}
                    />
                }) }
            </tbody>
            </table>
        </div>
    );
};

export default ProductTable;