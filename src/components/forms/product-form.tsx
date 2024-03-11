import React from 'react';
import { useFormik } from 'formik';

interface ProductFormProps {
  onSubmit: (values: any) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      sku: '',
      name: '',
      quantity: 0,
      price: 0,
    },
    validate: values => {
      const errors: any = {};
      if (!values.sku) {
        errors.sku = 'SKU is required';
      }
      if (!values.name) {
        errors.name = 'Name is required';
      }
      if (!values.quantity) {
        errors.quantity = 'Quantity is required';
      }
      if (!values.price) {
        errors.price = 'Price is required';
      }
      return errors;
    },
    onSubmit: values => {
      onSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <div className="mt-8">
      <hr/>
      <h2 className="text-lg font-semibold mb-2 text-white">Add Product to order</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 flex-wrap">
          <input
            type="text"
            id="sku"
            name="sku"
            placeholder="SKU"
            value={formik.values.sku}
            onChange={formik.handleChange}
            className={`input ${formik.touched.sku && formik.errors.sku ? 'border-red-500' : 'border-2'}`}
          />
          {formik.touched.sku && formik.errors.sku ? (
            <p className="text-red-500 mt-1">{formik.errors.sku}</p>
          ) : null}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
            className={`input ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-2'}`}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-red-500 mt-1">{formik.errors.name}</p>
          ) : null}
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Cantidad"
            value={formik.values.quantity}
            onChange={formik.handleChange}
            className={`input ${formik.touched.quantity && formik.errors.quantity ? 'border-red-500' : 'border-2'}`}
          />
          {formik.touched.quantity && formik.errors.quantity ? (
            <p className="text-red-500 mt-1">{formik.errors.quantity}</p>
          ) : null}
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Precio"
            value={formik.values.price}
            onChange={formik.handleChange}
            className={`input ${formik.touched.price && formik.errors.price ? 'border-red-500' : 'border-2'}`}
          />
          {formik.touched.price && formik.errors.price ? (
            <p className="text-red-500 mt-1">{formik.errors.price}</p>
          ) : null}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;