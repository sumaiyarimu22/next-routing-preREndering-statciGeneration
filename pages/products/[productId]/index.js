import { useRouter } from "next/router";
const ProductDetails = () => {
  const router = useRouter();

  const { productId } = router.query;

  const handleOrder = () => {
    console.log("Order placed successfully");
    router.push("/products");
  };

  return (
    <div>
      <h1>ProductDetails: {productId}</h1>
      <button onClick={handleOrder}>place order</button>
    </div>
  );
};

export default ProductDetails;
