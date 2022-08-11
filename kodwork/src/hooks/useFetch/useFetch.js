import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

//Burayı nesne fonksiyonu gibi düşünebiliriz. ^tane parametre geçtik. 
//error data ve loading adlı. 
//bunları bu sayfa içinde güncelledirk. 
//En kritik olan şey ise en sonra bu 3 ünü return etmemizdi .
// içerisinde ne yaparsak yapalım bunlar güncellendikçe returnle sadece bunların o anki sonuçları elimizde tutulacak
//diğer sayfalarda sadece parametre geçip çağırırken bu 3 ünü kullanacağım.
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = () => {
    
    
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        
        setData(response.data)
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  };
  useEffect(() => {
    fetchData();
    setLoading(false);
 
  }, [url]);

  return {loading,error,data};
};

export default useFetch;
