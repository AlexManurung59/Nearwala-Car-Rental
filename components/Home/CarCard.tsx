import React, { useState } from "react";
import Image from "next/image";

function CarCard(props: any) {
  const [car, setCar] = useState(props.car);
  return (
    <div>
      <h2 className="text-[20px] font-medium mb-2">{car.name}</h2>
      <h2 className="text-[28px] font-bold mb-2">
        <span className="text-[12px] font-light">Rp</span>
        {car.price}
        <span className="text-[12px] font-light">/Day</span>
      </h2>
      <Image
        src={car.image?.url}
        alt={car.name}
        width={220}
        height={200}
        className="w-[250px] h-[150px] mb-3 object-contain"
      />
    </div>
  );
}

export default CarCard;
