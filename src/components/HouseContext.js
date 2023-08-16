import React, { createContext, useEffect, useState } from 'react';
import { housesData } from '../data';


export const HouseContext = createContext();

const HouseProvider = ({ children }) => {
  const [houseData, setHouseData] = useState(housesData);


  const [country, setCountry] = useState('Location (any)')
  const [countries, setCountries] = useState([]);

  const [property, setProperty] = useState('Property type (any)')
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)')

  const [loading, setLoading] = useState(false)



  useEffect(() => {
    const allCountry = houseData.map((house) => house.country);
    const uniqueCountries = ['Location (any)', ...new Set(allCountry)]
    setCountries(uniqueCountries);


    const allProperties = houseData.map((house) => house.type);
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)]
    setProperties(uniqueProperties);

  }, [])

  const isDefault = (str) => {
    return str.split(" ").includes('(any)');
  }

  const handleSearch = () => {

    setLoading(true);
    console.log(price, price.split(' '));

    const minPrice = price.split(' ')[0];
    const maxPrice = price.split(' ')[2];
    console.log(minPrice, maxPrice);


    const filteredHouseData = housesData.filter((house) => {
      const housePrice = house.price;

      //if no propert is Default
      if (house.country === country && house.type === property && (housePrice >= minPrice && housePrice < maxPrice)) {
        return house;
      }

      //all propert is default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // property is not Default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      // price is not Default
      if (!isDefault(price) && isDefault(property) && isDefault(country)) {
        return (housePrice >= minPrice && housePrice < maxPrice)
      }

      // country is not Default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      //country and property not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return (house.country === country && house.type === property)
      }

      //country and price not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        return (house.country === country && (housePrice >= minPrice && housePrice < maxPrice));
      }

      // property and price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        return (house.type === property && (housePrice >= minPrice && housePrice < maxPrice))
      }

    });
    setTimeout(() => {
      return (
        filteredHouseData.length < 1
          ? setHouseData([])
          : setHouseData(filteredHouseData), setLoading(false)
      )
    }, 1000)
  }




  return (
    <HouseContext.Provider
      value={{
        houseData,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        loading,
        handleSearch
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseProvider;
