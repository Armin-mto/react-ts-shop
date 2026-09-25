import ProductList from "../components/product/ProductList";

function ProductListPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">محصولات</h1>
      <ProductList />
    </div>
  );
}

export default ProductListPage;
