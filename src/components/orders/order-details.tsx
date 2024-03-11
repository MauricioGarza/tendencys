// OrderDetails.tsx
import React, { useState } from 'react';

interface OrderDetailsProps {
  order: any;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  const onClickEvent = () => {
    alert("Successful payment")
  }
  return (
    <div className="w-full">
      <hr/>
      <h2 className="text-lg font-semibold mb-4 text-white">Order Details</h2>
      {order && (
        <>
          <p className={'text-white'}>Order Number: {order.number}</p>
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className={'text-white'}>SKU</th>
                <th className={'text-white'}>Name</th>
                <th className={'text-white'}>Quantity</th>
                <th className={'text-white'}>Price</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item: any, index: number) => (
                <tr key={index} className={'text-white'}>
                  <td className='text-center text-white'>{item.sku || 'N/A'}</td>
                  <td className='text-center text-white'>{item.name || 'N/A'}</td>
                  <td className='text-center text-white'>{item.quantity || 'N/A'}</td>
                  <td className='text-center text-white'>{item.price || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='text-right'>
            <button onClick={onClickEvent} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pay</button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderDetails;
