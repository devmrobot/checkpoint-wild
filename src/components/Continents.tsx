import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

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
    <div className="flex justify-center gap-8">
      {data.continents.map(({ code, name }: Continent) => (
        <Card
          key={code}
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title={name} />
        </Card>
      ))}
    </div>
  );
};

export default Continents;
