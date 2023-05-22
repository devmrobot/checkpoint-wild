// Fichier Continent.tsx
import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import Country from "./Country";

interface Country {
  name: string;
  code: string;
}

const GET_CONTINENT_BY_ID = gql`
  query getContinentById($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;

const Continent = () => {
  const { continent_code} = useParams();

  const { loading, error, data } = useQuery(GET_CONTINENT_BY_ID, {
    variables: { code : continent_code},
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { continent } = data;
  console.log("==================", data);

  return (
    <div>
      <h1 className="flex justify-center text-5xl font-bold p-10 text-[#576ce2]">{continent.name}</h1>
      <div className="flex justify-center flex-wrap gap-8">
        {continent.countries.map((country: Country, index: number) => (
          <Link
            key={index}
            to={`/continent/${continent_code}/country/${country.code}`}
            style={{ cursor: "pointer" }}
          >
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title={country.name} />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Continent;
