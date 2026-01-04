import { useDocumentTitle } from '../hooks/useDocumentTitle';

const ProductsPage = () => {
  useDocumentTitle('Products');

  return <h1>Products page</h1>;
};

export default ProductsPage;
