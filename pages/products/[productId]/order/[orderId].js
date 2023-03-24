import { useRouter } from "next/router";
const OrderDetails = () => {
  const {
    query: { productId, orderId },
  } = useRouter();

  return (
    <div>
      <h1>
        Product:{productId}-OrderId:{orderId}
      </h1>
    </div>
  );
};

export default OrderDetails;
