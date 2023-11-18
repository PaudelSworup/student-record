import React, { useState } from "react";
import { districts, provinces } from "../utils/district_province";
import { PermanentAddressProps } from "../interfaces/interface";

const PermanentAddress: React.FC<PermanentAddressProps> = ({
  onPermanentAddressChange,
}) => {
  const [addressValues, setAddressValues] = useState<any>({
    province: "",
    district: "",
    muncipality: "",
    ward: "",
    tole: "",
    addressType: "Temporary",
  });

  const handleChange = (name: string) => (e: any) => {
    console.log(name, e.target.value);
    setAddressValues({ ...addressValues, [name]: e?.target?.value });
  };

  const handleBlur = () => {
    const isAddressFilled = Object.values(addressValues).every(
      (value) => value !== ""
    );
    if (isAddressFilled) {
      onPermanentAddressChange(addressValues);
      setAddressValues({
        province: "",
        district: "",
        muncipality: "",
        ward: "",
        tole: "",
      });
    }
  };

  return (
    <div className="border mt-8 border-black">
      <h2 className="font-serif m-2 mx-5">Permanent Address</h2>
      <div className="mx-3 md:flex mb-6">
        <div className="md:w-[50%] px-3 mb-6 md:mb-0">
          <select
            className="appearance-none block w-full bg-white border border-black rounded py-3 px-4"
            placeholder="Province"
            name="province"
            onChange={handleChange("province")}
            onBlur={handleBlur}
          >
            <option>Province</option>
            {provinces?.map((provincess: any, i: number) => (
              <option key={i}>{provincess}</option>
            ))}
          </select>
        </div>
        <div className="md:w-[50%] px-3">
          <select
            className="appearance-none block w-full bg-white text-grey-darker border border-black rounded py-3 px-4"
            placeholder="District"
            name="district"
            onChange={handleChange("district")}
            onBlur={handleBlur}
          >
            <option>District</option>
            {districts?.map((jilla: any, i: number) => (
              <option key={i}>{jilla}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mx-3 md:flex mb-6">
        <div className="md:w-[50%] px-3 mb-6 md:mb-0">
          <input
            className="appearance-none block w-full bg-white border border-black rounded py-3 px-4"
            type="text"
            name="muncipality"
            placeholder="Muncipality"
            onChange={handleChange("muncipality")}
            onBlur={handleBlur}
          />
        </div>
        <div className="md:w-[50%] px-3">
          <input
            className="appearance-none block w-full bg-white text-grey-darker border border-black rounded py-3 px-4"
            type="text"
            name="ward"
            placeholder="ward"
            onChange={handleChange("ward")}
            onBlur={handleBlur}
          />
        </div>
      </div>

      <div className="mx-3 md:flex mb-6">
        <div className="md:w-[50%] px-3 mb-6 md:mb-0">
          <input
            className="appearance-none block w-full bg-white border border-black rounded py-3 px-4"
            type="text"
            name="tole"
            placeholder="Tole"
            onChange={handleChange("tole")}
            onBlur={handleBlur}
          />
        </div>
      </div>
    </div>
  );
};

export default PermanentAddress;
