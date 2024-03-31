import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";

function CarsList(props: any) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [selectedCar, setSelectedCar] = useState<any>([]);
  useEffect(() => {
    if (props.carsList) {
      setIsLoaded(false);
    }
  }, [props.carsList]);
  return (
    <div
      className="grid grid-cols-2 
    md:grid-cols-3
    lg:grid-cols-4"
    >
      {/* <CarCardSkelton/> */}
      {/* You can open the modal using ID.showModal() method */}
    </div>
  );
}

export default CarsList;
