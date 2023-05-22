import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
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

// const GET_CONTINENTS = gql`
//   query getContinents($filter: ContinentFilterInput) {
//     continents(filter: $filter) {
//       code
//       name
//     }
//   }
// `;

const Continents = () => {
  //const [searchTerm, setSearchTerm] = useState("");

  const [query, setQuery] = useState("");

  const { loading, error, data } = useQuery(GET_CONTINENTS);
  console.log("======== data :", data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // const { loading, error, data, refetch } = useQuery(GET_CONTINENTS, {
  //   variables: {
  //     filter: { code: { eq: searchTerm } },
  //   },
  // });
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value);
  // };

  return (
    <div className="flex justify-center gap-8">
      {/* <div>
        <label>Search</label>
        <input type="text" value={searchTerm} onChange={handleSearch} />
      </div> */}

      <div>
        <label>Search</label>
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>

      {data.continents
        .filter((continent:any) => continent.name.toLowerCase().includes(query))
        .map((continent: Continent, index: number) => (
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
