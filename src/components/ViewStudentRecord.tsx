import React from "react";
import StudentRecordNavigation from "./StudentRecordNavigation";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useAppSelector } from "../store/store";

const ViewStudentRecord = () => {
  const { data } = useQuery(
    ["datas"],
    async () => JSON.parse(localStorage.getItem("studentsdetail") ?? "[]"),
    {
      onSuccess: (data) => console.log(data),
    }
  );

  const { students } = useAppSelector((state) => state.registerstudent);
  console.log(students);

  return (
    // <div classNameName="border m-2 sm:mx-32 mt-10 border-black p-10 ">

    <div className="sm:mx-32 mt-10 m-3">
      <StudentRecordNavigation />

      <div className="relative border border-black border-t-0 overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-2 py-3 border-b border-r border-black uppercase"
              >
                S.N
              </th>
              <th
                scope="col"
                className="px-2 border-b border-r border-black py-3"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-2 border-b border-r border-black py-3"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-2 border-b border-r border-black py-3"
              >
                Phone
              </th>
              <th scope="col" className="px-2 border-b border-black py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-2 border-r border-black py-4">{index + 1}</td>
                <td className="px-2 border-r border-black py-4">
                  {student.name}
                </td>
                <td className="px-2 border-r border-black py-4">
                  {student.email}
                </td>
                <td className="px-2 border-r border-black py-4">
                  {student.phone}
                </td>
                <td className="px-2 text-center ">
                  <Link
                    className="border border-black p-2"
                    to={`/details/${student?.id}`}
                  >
                    View Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewStudentRecord;
