import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import CardCarousel from "../../components/CardCarousel";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import Slug from "../../components/Slug";
import CardVip from "../../components/CardVip";
import CardRelated from "../../components/CardRelated/index.jsx";
import { propertiesMock } from "../../src/constants.js";



import {
  MDBInput,

} from "mdbreact";
import { useRouter } from "next/router";





const Property = ({ property, propertiesVip, propertiesRelated }) => {
  const styles = {
    fontSize: 15,
  };

  const router = useRouter();
  const onSubmit = (event) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <>
    <div>
      <Head>
        <title>Tuluminati X</title>
      </Head>
      {property && (
        <Layout>
          <MDBContainer>
            <MDBCard>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="9" lg="9">
                    <img
                      className="d-block w-100 carousel-img"
                      src={property.images[0]}
                      alt="property picture"
                    />
                    {/* <Slug property={property} /> */}
                  </MDBCol>
                  <MDBCol md="2" lg="3">
                    <h4 className="mt-5"></h4>
                    <div style={styles} className="d-inline m-2">
                     $ {property.price}
                    </div  >
                    <div style={styles} className="d-inline m-2">
                      {/* <MDBIcon icon="calculator" className="mr-2" /> */}
                      bd {" " + property.factsandfeatures.beds}|
                    </div >
                    <div style={styles} className="d-inline m-2">
                      {/* <MDBIcon icon="calculator" className="mr-2" /> */}
                      ba {" " + property.factsandfeatures.bath}|
                    </div>

                    <div style={styles} className="d-inline m-2">
                      {/* <MDBIcon icon="mobile-alt" className="mr-2" /> */}
                      {property.address.street}
                    </div>
                    <div style={styles}>
                      {/* <MDBIcon icon="envelope" className="mr-2" />
                     {property.card.agency} */}
                    </div>
                    <h3 className="mt4 mb-3"></h3>
                    <CardVip properties={propertiesVip} />
                  </MDBCol>
                  
                </MDBRow>
                <hr className="my-4" />
                <MDBRow>
                  {propertiesRelated && propertiesRelated.length !== 0 && (
                    <MDBCol>
                      <h2 className="mb-4">Our similar properties</h2>
                      <CardRelated properties={propertiesRelated} />
                    </MDBCol>
                  )}
                </MDBRow>
                Overview
                <div>
                  {property.about}
                </div>
               <hr/>
                Facts and features
                <div>
                  {}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        
     <section className="contact-section my-5">
     <MDBCard className="contact-card">
       
       <MDBRow>
         <MDBCol lg="8">
           <MDBCardBody className="form">
             <h3 className="mt-4">
               <MDBIcon icon="envelope" className="pr-2" />
             Contact agent:
             </h3>
             <MDBRow>
               {/* <MDBCol md="12">
                 <div className="md-form mb-1">
                   <MDBInput
                     type="text"
                     id="form-contact-name"
                     label="Name"
                     placeholder="name here"
                   />
                 </div>
               </MDBCol> */}
               {/* <MDBCol md="6">
                 <div className="md-form mb-0">
                   <MDBInput
                     type="text"
                     id="form-contact-firstname"
                     label=""
                   />
                 </div>
               </MDBCol> */}
             </MDBRow>
             <MDBRow>
               <MDBCol md="6">
                 <div className="md-form mb-0">
                   <MDBInput
                     type="text"
                     id="form-contact-phone"
                     label="Phone"
                     
                     />
                 </div>
               </MDBCol>
               <MDBCol md="6">
                 <div className="md-form mb-0">
                   <MDBInput
                     type="text"
                     id="form-contact-email"
                     label="Email"
                    
                   />
                 </div>
               </MDBCol>
             </MDBRow>
             <MDBRow>
               <MDBCol md="12">
                 <div className="md-form mb-0">
                   <MDBInput
                     type="textarea"
                     id="form-contact-message"
                     label="Message"
                     valueDefault={"I am interested in "+ property.address.street} 
                   />{}
                   <button
                     className="btn-block smBtn"
                     onClick={onSubmit}
                   >
                     Contact Agent
                   </button>
                 </div>
               </MDBCol>
             </MDBRow>
           </MDBCardBody>
         </MDBCol>
         <MDBCol lg="4">
           <MDBCardBody className="contact text-center h-100 white-text">
             <h3 className="my-4 pb-2">Contact Information</h3>
             <ul className="text-lg-left list-unstyled ml-4">
               <li>
                 <p>
                   <MDBIcon icon="map-marker-alt" className="pr-2" />
                   Tulum, Quintana Roo, Mexico
                 </p>
               </li>
               <li>
                 <p>
                   <MDBIcon icon="phone" className="pr-2" />
                   +54 9 3514 59-9369
                 </p>
               </li>
               <li>
                 <p>
                   <MDBIcon icon="envelope" className="pr-2" />
                   cami@gmail.com
                 </p>
               </li>
             </ul>
             <hr className="hr-light my-4" />
             <ul className="list-inline text-center list-unstyled">
               {/* <li className="list-inline-item">
                 <a
                   href="https://github.com/"
                   className="p-2 fa-lg w-ic text-night"
                   target="_blank"
                 >
                   <MDBIcon fab icon="github" />
                 </a>
               </li> */}
               {/* <li className="list-inline-item">
                 <a
                   href="https://www.linkedin.com/in/"
                   className="p-2 fa-lg w-ic text-night"
                   target="_blank"
                 >
                   <MDBIcon fab icon="linkedin-in" />
                 </a>
               </li> */}
               {/* <li className="list-inline-item">
                 <a
                   href=""
                   className="p-2 fa-lg w-ic text-night"
                   target="_blank"
                 >
                   <MDBIcon fa icon="globe" />
                 </a>
               </li> */}
             </ul>
           </MDBCardBody>
         </MDBCol>
       </MDBRow>
     </MDBCard>
   </section>
   </Layout>
      )}
    </div>
   </>
    
  );
};

export const getServerSideProps = (context) => {
  const { slug } = context.query;
  const property = propertiesMock.BuyHomes.find((home) => home.id === slug);

  console.log("PROPERTY", property);
  //const { data: property } = await api.get(`/api/property/${slug}`);
  //const { data: propertiesVip } = await api.get("/api/properties/vip");
  //const { data: propertiesRelated } = await api.get(
  //  `/api/properties/related/${property._id}`
  //);

  return {
    props: {
      property: property,
      propertiesVip: [],
      propertiesRelated: [],
    },
  };
};

export default Property;
