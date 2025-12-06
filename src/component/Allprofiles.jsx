import axios from "axios";
import React, { useEffect, useState } from "react";

const Allprofiles = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.BACKEND_URI}/profile`)
      .then((response) => {
        setData([...data, ...response.data]);
      })
      .catch((error) => {
        console.error("There was an error fetching the profiles!", error);
      });
  }, []);
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4">All Profiles</h2>
      <table className="w-2/3 border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample Data */}
          {data &&
            data.map((profile) => (
              <tr key={profile.id} className="text-center">
                <td className="border border-gray-400 px-4 py-2">
                  {profile.name}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {profile.email}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allprofiles;

