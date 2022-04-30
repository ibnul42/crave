import React from "react";
import hot from "../../assets/hot.png";

function Index() {
  return (
    <section className="grid grid-cols-12 gap-3">
      <div class=" col-span-3 flex flex-col flex-grow pt-5 pb-4 bg-[#261D55] overflow-y-auto">
        <div className="ml-3">
          <h3 className="uppercase mb-3">Menu</h3>
          <div className="flex flex-col">
            <div className="flex my-4">
              <img src={hot} alt="" />
              <p className="ml-5">Hot</p>
            </div>
            <div className="flex my-4">
              <img src={hot} alt="" />
              <p className="ml-5">New</p>
            </div>
            <div className="flex my-4">
              <img src={hot} alt="" />
              <p className="ml-5">Rising</p>
            </div>
            <div className="flex my-4">
              <img src={hot} alt="" />
              <p className="ml-5">Top</p>
            </div>
            <div className="flex my-4">
              <img src={hot} alt="" />
              <p className="ml-5">Favs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-9">Main Content</div>
    </section>
  );
}

export default Index;
