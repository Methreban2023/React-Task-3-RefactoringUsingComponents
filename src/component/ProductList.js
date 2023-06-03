import products from "../products";
import ProductItem from "./ProductItem";
function ProductList() {
  const productList1 = products.map((product) => (
    <ProductItem item={product}></ProductItem>
  ));
  return (
    <>
      <div className="list">{productList1}</div>
    </>
  );
}

export default ProductList;
