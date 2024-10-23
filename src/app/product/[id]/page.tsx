import { mockProducts } from "@/core";

function ProductPage(props: any) {
  const id = +props.params.id;
  const product = mockProducts.find((prod) => prod.id === id);
  return (
    <div>
      <h1>Produto:{product?.name}</h1>
    </div>
  );
}

export default ProductPage;
