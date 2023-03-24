import { useRouter } from "next/router";
const ProductDetails = () => {
  const {
    query: { productId },
  } = useRouter();

  return (
    <div>
      <h1>ProductDetails: {productId}</h1>
    </div>
  );
};

export default ProductDetails;
