"use client";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { useEffect, useState } from "react";
import { getCarsList } from "@/Services";
import CarList from "@/components/Home/CarList";

export default function Home() {
  const [carLists, setCarsList] = useState<any>([]);
  useEffect(() => {
    getCarList_();
  }, []);
  const getCarList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOption />
      <CarList carsList={carLists} />
    </div>
  );
}
