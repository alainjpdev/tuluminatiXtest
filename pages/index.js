import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PropertyVip from "../components/PropertyVip";
import { MDBContainer } from "mdb-react-ui-kit";
import Carousel from "../components/Carousel";
import PropertySection from "../components/PropertySection";
import Features from "../components/Features";
import { propertiesMock } from "../src/constants";
import Map from "../components/Map";
import { Flex } from "@chakra-ui/react";

export default function Home({ propertiesVip, properties }) {
  const [estate, setEstate] = useState(true);
  const [coordinates, setCoordinates] = useState({lat:0, lng:0})

  const handleDisplay = (event) => {
    event.preventDefault();
    setEstate(!estate);
  };

  if (estate) {
    return (
      <div>
        <Head>
          <title>TuluminatiX</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Carousel />
          <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >
          <Map setCoordinates={ setCoordinates } coordinates={ coordinates}/>
          </Flex>
          <MDBContainer>
            <PropertyVip properties={propertiesVip} />
            <PropertySection
              properties={properties}
              handleDisplay={handleDisplay}
            />
          </MDBContainer>
        </Layout>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>WebImmo</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
        </Head>
        <Layout>
          <Carousel />
          {/* <Map/> */}
          <MDBContainer>
            <Features handleDisplay={handleDisplay} />
          </MDBContainer>
        </Layout>
      </div>
    );
  }
}

export const getStaticProps = async () => {
  const properties = propertiesMock.BuyHomes;

  return {
    props: {
      propertiesVip: [],
      properties: properties,
    },
  };
};
