import React, { useState } from "react";
import PermanentAddress from "./PermanentAddress";
import { registerStudents } from "../store/features/studentSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useAppSelector } from "../store/store";

const StudentForm = () => {
  const dispatch = useDispatch();
  const { students } = useAppSelector((state) => state.registerstudent);
  const [details, setDetails] = useState<any>({
    name: "",
    email: "",
    phone: "",
    citizenship: "",
    addresses: [],
  });
  const { name, email, phone, citizenship, addresses } = details;

  //onchange trigger function
  const handleChange =
    (name: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setDetails({ ...details, [name]: e.target.value });
    };

  //passing as a props
  const handleAddress = (address: any) => {
    setDetails((prevDetails: any) => ({
      ...prevDetails,
      addresses: [...prevDetails.addresses, address],
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      name === "" ||
      name === null ||
      email === "" ||
      email === null ||
      phone === null ||
      phone === "" ||
      citizenship === "" ||
      citizenship === null
    ) {
      return toast.error("enter all fields");
    }

    const registered = students.find(
      (p) => p.email === email || p.citizenship === citizenship
    );
    if (registered) {
      toast.error("user is already registered", { position: "top-right" });
      return;
    }
    dispatch(
      registerStudents({
        id: Date.now(),
        name,
        email,
        phone,
        citizenship,
        address: addresses,
      })
    );
    setDetails({
      ...details,
      name: "",
      email: "",
      phone: "",
      citizenship: "",
      addresses: [],
    });
    toast.success("student registered");
  };

  return (
    <div className="border border-black p-10 border-t-0">
      <form>
        <div className="mx-3 md:flex mb-6">
          <div className="md:w-[50%] px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-white  border border-black rounded py-3 px-4"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange("name")}
              value={name}
            />
          </div>
          <div className=" md:w-[50%] px-3">
            <input
              className="appearance-none block w-full bg-white text-grey-darker border border-black rounded py-3 px-4"
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange("email")}
              value={email}
            />
          </div>
        </div>

        <div className="mx-3 md:flex mb-6">
          <div className="md:w-[50%] px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-white  border border-black rounded py-3 px-4"
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleChange("phone")}
              value={phone}
            />
          </div>
          <div className="md:w-[50%] px-3">
            <input
              className="appearance-none block w-full bg-white text-grey-darker border border-black rounded py-3 px-4"
              type="number"
              name="citizenship"
              placeholder="Citizenship"
              onChange={handleChange("citizenship")}
              value={citizenship}
            />
          </div>
        </div>
        <PermanentAddress onPermanentAddressChange={handleAddress} />

        <PermanentAddress onPermanentAddressChange={handleAddress} />

        <div className="flex justify-end items-end mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
