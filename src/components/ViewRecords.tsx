import React from "react";
import StudentRecordNavigation from "./StudentRecordNavigation";
import { useAppSelector } from "../store/store";

const ViewRecords = () => {
  const { students } = useAppSelector((state) => state.registerstudent);
  return (
    <>
      <div className="sm:m-3">
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

                <th
                  colSpan={2}
                  scope="col"
                  className="px-2  border-b border-r border-black py-3"
                >
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {students?.map((student, index) => (
                <tr key={index} className="bg-white border-b text-black">
                  <td className="px-2 border-r border-black py-4">
                    {index + 1}
                  </td>
                  <td className="px-2 border-r border-black py-4">
                    {student.name}
                  </td>
                  <td className="px-2 border-r border-black py-4">
                    {student.email}
                  </td>
                  <td className="px-2 border-r border-black py-4">
                    {student.phone}
                  </td>
                  <td className="px-2 border-r border-black py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg">District</span>
                      <span className="text-lg">Province</span>
                      <span className="text-lg">Tole</span>
                      <span className="text-lg">Ward</span>
                    </div>
                    {student?.address?.map((add, i) => (
                      <div
                        key={i}
                        className="flex gap-4 items-center justify-between"
                      >
                        <span>{add?.district}</span>
                        <span>{add?.province}</span>
                        <span>{add?.tole}</span>
                        <span>{add?.ward}</span>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewRecords;
