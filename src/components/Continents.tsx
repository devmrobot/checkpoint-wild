import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
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
  console.log("======== data :", data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="flex justify-center gap-8">
      {data.continents.map((continent: Continent, index: number) => (
        <Link
          key={index}
          to={`/continent/${continent.code}`}
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
            <Meta title={continent.name} />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Continents;
