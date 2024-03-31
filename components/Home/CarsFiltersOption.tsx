import React from "react";

function CarsFiltersOption() {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h3>Explore Your Rental Car</h3>
      </div>
      <div className="flex gap-5">
        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>
            Select Price
          </option>
          <option>Min To Max</option>
          <option>Max To Min</option>
        </select>
        <select className="select select-primary w-full md:block max-w-xs hidden">
          <option disabled selected>
            Car Type
          </option>
          <option>Honda</option>
          <option>Avanza</option>
        </select>
      </div>
    </div>
  );
}

export default CarsFiltersOption;
