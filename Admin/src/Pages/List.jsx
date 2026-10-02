import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(backendUrl + "/api/product/list");
      console.log(res.data);
      if (res.data.success) {
        setList(res.data.products);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      console.log(id)
      const res = await axios.delete(backendUrl + "/api/product/remove", {
        data: { id },
        headers: { token },
      });

      console.log(res);

      if (res.data.success) {
        toast.success(res.data.message);
        await fetchData();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <p className="mb-4 text-lg font-semibold text-gray-800 tracking-tight">
        All Courses List
      </p>

      <div className="flex flex-col gap-3">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-centerbg-gray-50 text-gray-600 text-sm font-semibold px-4 py-3 rounded-lg border border-gray-100">
          <b className="tracking-wide">Image</b>
          <b className="tracking-wide">Courses Name</b>
          <b className="tracking-wide">Course Category</b>
          <b className="tracking-wide">Price</b>
          <b className="text-center tracking-wide">Action</b>
        </div>

        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center px-4 py-3 rounded-lgbg-white hover:bg-gray-50 border border-gray-100 transition-all duration-200 shadow-sm"
          >
            <img
              src={item.image[0]}
              className="w-10 h-10 rounded-md object-cover"
              alt=""
            />

            <p className="text-gray-800 font-medium truncate">{item.name}</p>

            <p className="text-gray-500">{item.category}</p>

            <p className="text-gray-700 font-semibold">NRP {item.price}</p>

            <div className="flex justify-center gap-2">
      
              <button
                onClick={()=>removeProduct(item._id)}
                className="px-3 py-1 text-xs rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
