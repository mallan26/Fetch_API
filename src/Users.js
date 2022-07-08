import { useEffect, useState } from "react";

export default function FetchUserDetails() {
  const [userDetails, setUserDetails] = useState([]);

  const fetchDetails = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const receivedData = await response.json();
    setUserDetails(receivedData.results);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <h4> Users Details </h4>
      {userDetails.map((e) => {
        return (
          <>
            <h3> Name : {e.name.first} </h3>
            <h3> Gender : {e.gender} </h3>
            <h3> Address : {e.location.city} </h3>
          </>
        );
      })}
    </>
  );
}
