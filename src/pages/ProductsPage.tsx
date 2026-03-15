import { useEffect } from 'react';

import Table, { type Column } from '../component/Table';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { addProducts, getProducts } from '../services/product.service';
import type { ProductType } from '../types/product.types';
import { setProducts, addProduct } from '../redux/products/products.slice';
import { selectProducts } from '../redux/products/products.selectors';
import { useAppDispatch, useAppSelector } from '../redux/store';

const columns: Column<ProductType>[] = [
  { key: 'name', label: 'Name' },
  { key: 'description', label: 'Description' },
];

const ProductsPage = () => {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useDocumentTitle('Products');

  useEffect(() => {
    const init = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    init();
  }, []);

  const add = async () => {
    const newProduct = await addProducts({
      name: 'New product',
      description: 'new product description',
      price: 50,
    });
    dispatch(addProduct(newProduct));
  };

  return (
    <>
      <button onClick={add}>Add</button>
      <Table idKey='id' rows={products || []} columns={columns} />
    </>
  );
};

export default ProductsPage;
