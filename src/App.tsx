// App.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderList from './components/orders/order-list';
import OrderDetails from './components/orders/order-details';
import ProductForm from './components/forms/product-form';

const App: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch orders data
    axios.get('https://eshop-deve.herokuapp.com/api/v2/orders', {
      headers: {
        Authorization: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAF fnPldd8QzWvgVQ',
      },
    })
      .then(response => {
        setOrders(response.data.orders);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching orders. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleSelectOrder = (clickedOrder: any) => {
   setSelectedOrder(clickedOrder);
  }; 

  const handleAddProduct = (values: any) => {
    if (selectedOrder !== null) {
      const updatedOrders = [...orders];
      selectedOrder.items.push(values);
      setOrders(updatedOrders);
    }
  };
  return (
    <div className="inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div>
        <h1 className="text-2xl font-bold mb-2 text-white">Order of Sale</h1>
        <div className="flex text-white">
          <OrderList orders={orders} onSelectOrder={handleSelectOrder} />
          {loading && <p className='h-full'>Loading...</p>}
          {error && <p className="h-full text-red-500">{error}</p>}
        </div>
          <div>
            {selectedOrder !== null && (
              <>
                <OrderDetails order={selectedOrder} />
                <ProductForm onSubmit={handleAddProduct} />
              </>
            )}
            </div>
        </div>
      </div>
  );
};

export default App;