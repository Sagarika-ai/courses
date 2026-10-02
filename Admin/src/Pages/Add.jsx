import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subcategory", subCategory);
      formData.append("bestseller", bestseller);

      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const res = await axios.post(backendUrl + "/api/product/add", formData, {
        headers: { token },
      });
      console.log(res.data);

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setDescription("");
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
        setPrice("");
        setBestseller(false);
        setSizes([]);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full items-start gap-3"
      >
        <div>
          <p className="mb-2">Upload Image</p>

          <div className="flex gap-2">
            <label htmlFor="image1">
              <img
                className="w-20 cursor-pointer"
                src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
                alt="image1"
              />
              <input
                onChange={(e) => setImage1(e.target.files[0])}
                type="file"
                id="image1"
                hidden
              />
            </label>

            <label htmlFor="image2">
              <img
                className="w-20 cursor-pointer"
                src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
                alt="image2"
              />
              <input
                onChange={(e) => setImage2(e.target.files[0])}
                type="file"
                id="image2"
                hidden
              />
            </label>

            <label htmlFor="image3">
              <img
                className="w-20 cursor-pointer"
                src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
                alt="image3"
              />
              <input
                onChange={(e) => setImage3(e.target.files[0])}
                type="file"
                id="image3"
                hidden
              />
            </label>

            <label htmlFor="image4">
              <img
                className="w-20 cursor-pointer"
                src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
                alt="image4"
              />
              <input
                onChange={(e) => setImage4(e.target.files[0])}
                type="file"
                id="image4"
                hidden
              />
            </label>
          </div>
        </div>

        <div className="w-full">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Courses Name
          </label>

          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
            type="text"
            placeholder="Enter courses name..."
            className="w-full max-w-125 px-4 py-3 rounded-xl border border-gray-300
          bg-white shadow-sm outline-none transition-all duration-200
          focus:border-blue-500 focus:ring-4 focus:ring-blue-100
          hover:border-gray-400"
            required
          />
        </div>

        <div className="w-full">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Course Description
          </label>

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
            rows="5"
            placeholder="Write an engaging courses description..."
            className="w-full max-w-125 px-4 py-3 rounded-xl border border-gray-300
          bg-white shadow-sm outline-none resize-none transition-all duration-200
          focus:border-blue-500 focus:ring-4 focus:ring-blue-100
          hover:border-gray-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Courses Category
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
            >
              <option>Select</option>
              <option value="Development">Development</option>
              <option value="Programming">Programming</option>
              <option value="Designing">Designing</option>

            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Courses Sub Category
            </label>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              name="subcategory"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
            >
              <option>Select</option>
              <option value="Web Development">Web Development</option>
              <option value="Frontend Developmnt">Frontend Developmnt</option>
              <option value="Java Programming">Java Programming</option>
              <option value="Python Programming">Python Programming</option>
              <option value="Backend Development">Backend Development</option>
              <option value="UI/UX Designing">UI/UX Designing</option>
              <option value="MERN Development">MERN Development </option>
              <option value="JavaScript Development">JavaScript Development</option>
              <option value="React.js Development">React.js Development</option>
              <option value="Next.js Development">Next.js Development</option>
              <option value="Node.js Development">Node.js Development</option>
            </select>
          </div>

          <div>
            <p className="block text-sm font-medium text-gray-700 mb-2">
              Courses Fee
            </p>
            <input onChange={(e) => setPrice(e.target.value)}
              value={price}
              name="price"
              type="number"
              placeholder="25"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 font-medium text-gray-700">
            Courses Duration / Lesson
          </p>

          <div className="flex gap-3 flex-wrap">
            {(category === "Develpoment" || category === "Programming" || category === "Designing"
              ? ["45 days", "60 days", "100 days", "120 days"]
              : category === "Development"
                ? subCategory === "Frontend Deve"
                  ? ["60 days", "90 days", "120 days"]
                  : subCategory === "JavaScript developemnt"
                    ? ["45 days", "90 days", "120 days"]
                    : subCategory === "Puthon Programming"
                      ? ["45 days", "60 days", "90 days"]
                      : subCategory === "MERN Development"
                        ? ["60 days", "100 days", "120 days"]
                        : subCategory === "Java Programming"
                          ? ["60 days", "90 days"]
                          : ["60", "90", "120"]
                : category === "Programming"
                  ? subCategory === "Java Programming"
                    ? ["60 days", "90 days", "120 days"]
                    : ["Day", "Month", "Year"]
                  : category === "Designing"
                    ? subCategory === "UI/UX Designing"
                      ? ["45 days", "60 days", "90s"]
                      : ["Day", "Month", "Year"]
                    : ["Standard"]
            ).map((size) => (
              <p
                key={size}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes(size)
                      ? prev.filter((item) => item !== size)
                      : [...prev, size]
                  )
                }
                className={`px-4 py-2 rounded-md cursor-pointer transition ${sizes.includes(size)
                  ? "bg-pink-400 text-white"
                  : "bg-slate-200 hover:bg-slate-300"
                  }`}
              >
                {size}
              </p>
            ))}
          </div>
        </div>



        <div className="flex items-center gap-2 mt-2">
          <input
            onChange={() => setBestseller((prev) => !prev)}
            checked={bestseller}
            type="checkbox"
            name="bestseller"
            id="bestseller"
            className="w-4 h-4 accent-black cursor-pointer"
          />
          <label
            htmlFor="bestseller"
            className="text-sm text-gray-700 cursor-pointer"
          >
            Add
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 w-1/9 bg-black text-white py-2 ml-1 rounded-lg font-medium hover:opacity-80 transition cursor-pointer"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Add;
