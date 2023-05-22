import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

interface CountryDetail {
  name: string;
  code: string;
  phone: string;
}
const GET_COUNTRY_BY_ID = gql`
  query getCountryById($code: ID!) {
    country(code: $code) {
      code
      name
      phone
      capital 
      currency
      languages { name }
      emoji
    }
  }
`;

const Country = () => {

  const { code } = useParams();

  const { loading, error, data } = useQuery(GET_COUNTRY_BY_ID, {
    variables: { code },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { country } = data;
  return (
    <div className="flex justify-center mt-40 flex-wrap gap-8">
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
          <Meta title={country.phone} />
          <Meta title={country.capital} />
          <Meta title={country.currency ? country.currency : null }/>
          <Meta title={country.languages.name ? country.languages.name : null} />
          <Meta title={country.emoji} />
        </Card>
  </div>
  )
}

export default Country