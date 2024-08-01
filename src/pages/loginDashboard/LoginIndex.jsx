import React from "react";
import { Link } from "react-router-dom";

const LoginIndex = () => {
  return (
    <div className="px-32 grid  grid-cols-3  py-12">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title ">Upload Projects</h2>
          <hr />
          <p className="text-lg font-semibold">Projects Details</p>
          <div className="flex gap-4 flex-col text-start">
            <p>Image Upload</p>
            <p>Heading</p>
            <p>Title</p>
            <p>Languages (Coma Suppreated)</p>
            <p>Blog URL</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={"/uploadPage"} className="btn">
              Go To
            </Link>
          </div>
        </div>
      </div>
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title ">Upload Projects</h2>
          <hr />
          <p className="text-lg font-semibold">Projects Details</p>
          <div className="flex gap-4 flex-col text-start">
            <p>Image Upload</p>
            <p>Heading</p>
            <p>Cpation</p>
            <p>Description</p>
            <p>Languages (Coma Suppreated)</p>
            <p>Project URL</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={"/test"} className="btn">
              Go To
            </Link>
          </div>
        </div>
      </div>
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginIndex;
