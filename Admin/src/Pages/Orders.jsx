import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/admin_assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const res = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } },
      );

      if (res.data.success) {
        setOrders(res.data.orders.reverse());
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    const newStatus = event.target.value;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: newStatus },
        { headers: { token } },
      );

      if (response.data.success) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order,
          ),
        );

        toast.success("Status updated");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>Courses Page</h3>

      {orders.map((order) => (
        <div
          key={order._id}
          className="flex items-center justify-between gap-4 border border-gray-200 rounded-xl p-4 my-3 bg-white shadow-sm hover:shadow-md transition text-xs"
        >
          <img
            src={assets.parcel_icon}
            alt="parcel"
            className="w-8 h-8 object-contain shrink-0"
          />

          <div className="w-40">
            <p className="truncate text-gray-800 font-medium">
              {order.items[0]?.name} x {order.items[0]?.quantity}
              {order.items.length > 1 && ` +${order.items.length - 1} more`}
            </p>
          </div>

          <p className="w-32 truncate font-medium text-gray-700">
            {order.address.firstName} {order.address.lastName}
          </p>

          <div className="w-52 text-gray-500 leading-tight">
            <p className="truncate">{order.address.street}</p>
            <p className="truncate">
              {order.address.city}, {order.address.country}
            </p>
          </div>

          <div className="w-40 text-gray-600 space-y-0.5">
            <p>Courses: {order.items.length}</p>
            <p className="truncate">Method: {order.paymentMethod}</p>
            <p className={order.payment ? "text-green-600" : "text-red-500"}>
              {order.payment ? "Done" : "Pending"}
            </p>
          </div>

          <p className="w-20 font-bold text-gray-900">{order.amount}</p>

          <select
            value={order.status}
            onChange={(event) => statusHandler(event, order._id)}
            className="w-36 px-2 py-1 border border-gray-200 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Order Placed">Courses</option>
            <option value="Packing">Confirm</option>
            <option value="Shipped">Information</option>
            <option value="Out for delivery">Out for Information</option>
            <option value="Delivered">Sent Gmail</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default Orders;
