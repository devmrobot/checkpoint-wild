import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from 'react-router-dom';

interface Continent {
  code: string;
  name: string;
}

const GET_CONTINENTS = gql`
  query getContinents {
    continents {
      code
      name
    }
  }
`;

const Continents = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  const { code } = useParams();
  console.log("========", data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    data.continents.map(({ code, name }: Continent) => (
    <div key={code}>
      <h3>{name}</h3>
    </div>
    ))
  )
};

export default Continents;
