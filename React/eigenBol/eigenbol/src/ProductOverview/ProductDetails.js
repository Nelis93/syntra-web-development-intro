import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductDetails(props) {
  let { productId } = useParams();
  const product = props.products.find((prod) => {
    return prod.id === productId;
  });
  return (
    <>
      <ProductCard
        product={product}
        products={props.products}
        setProducts={props.setProducts}
        nav={"/"}
        func={"Home"}
      ></ProductCard>
    </>
  );
}

export default ProductDetails;
