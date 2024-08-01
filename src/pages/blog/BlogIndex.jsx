import React from "react";
import { Link } from "react-router-dom";

const BlogIndex = () => {
  return (
    <div>
      <div className="lg:px-20 px-3 flex-row gap-12 py-12 text-left justify-between ">
        <div className="border-2 border-white rounded-box">
        <div className="carousel carousel-end rounded-box border-[#1d232a]  border-2">
          <div className="carousel-item">
            <div className="carousel-item border-e-2 border-blue-800">
              <div className="flex flex-col gap-1 p-2">
                <div className="flex gap-5 justify-end w-full">
                  <p>10-12-2024</p>
                </div>
                <h3>lajsdfljd</h3>
                <p>Caption</p>
                <img src="/image/items/firstbg.png" alt="" />
                <p className="text-xs">Description</p>
                <Link href="" className="text-end">Link</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Drink"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
