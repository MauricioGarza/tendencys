// OrderList.tsx
import React from 'react';

interface OrderListProps {
  orders: any[];
  onSelectOrder: (orderNumber: number) => void;
}

const OrderList: React.FC<OrderListProps> = ({ orders, onSelectOrder }) => {
  return (
    <div className="w-full mx-8">
      <h2 className="text-lg font-semibold mb-4 text-center">Order List</h2>
      <h4 className='font-semibold text-center'>Click to see order details</h4>
      <ul className='text-center'>
        {orders.map((order: any) => (
          <li key={order.number} onClick={() => onSelectOrder(order)} className="text-white cursor-pointer mb-2 text-center">
            Orden # {order.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
