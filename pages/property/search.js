import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { MDBContainer } from "mdb-react-ui-kit";
import Card from "../../components/Card";
import SearchFilter from "../../components/SearchFilter";

const Search = () => {
  const router = useRouter();
  const [properties, setProperties] = useState("");

  useEffect(() => {
    async function getProperty() {
      console.log(router.query.title, router.query.category);
      setProperties([]);
    }
    getProperty();
  }, [router.query.title, router.query.category]);

  return (
    <Layout>
      <MDBContainer>
        <SearchFilter />
        {router.query.category || router.query.title ? (
          <div>
            <div className="mb-4 text-center text-night font-weight-bolder">
              {properties.size} Bien(s) trouvé(s)
            </div>
            <Card properties={properties.data} />
          </div>
        ) : null}
      </MDBContainer>
    </Layout>
  );
};

export default Search;
