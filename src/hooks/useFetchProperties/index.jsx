
// This custom hook is used for fetching property data
// It outputs the data, any erros we received, and the current loading state 
// We don't import the loading and error in the component at the moment, but it's a good practice to have this information when handling API calls

import { useState, useEffect } from "react";

const useFetchProperties = () => {
  const [properties, setProperties] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/properties`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("User fetch failed");
        }

        const userList = await response.json();
        setProperties(userList);
      } catch (error) {
        setError(`${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return { properties, error, loading };
}

export default useFetchProperties;