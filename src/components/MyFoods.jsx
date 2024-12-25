import { useContext, useEffect, useState } from "react";
import { API } from "../api";
import AuthContext from "../context/AuthContext";

const MyFoods = () => {
  const [foods, setFoods] = useState([]);
  console.log(foods);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    API.get(`/foods/${user?.uid}`)
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => console.error("Error Fetching Items:", err.message));
  }, [user?.uid]);

  return (
    <>{foods.length >= 0 ? <p>Nothing To show</p> : <dib> all products</dib>}</>
  );
};

export default MyFoods;
