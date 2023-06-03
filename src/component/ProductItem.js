function ProductItem(props) {
  return (
    <>
      <div className="product">
        <img
          className="productImage"
          alt={props.item.name}
          src={props.item.image}
        />
        <p className="text">{props.item.id}</p>
        <p className="text">{props.item.name}</p>
        <p className="text">{props.item.price} KD</p>
      </div>
    </>
  );
}

export default ProductItem;
