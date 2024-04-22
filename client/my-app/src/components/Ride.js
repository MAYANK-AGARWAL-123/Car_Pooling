import { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import React from "react";

//Availabel Rides component
const AvailableRides = () => {
  return (
    <div>
      AvailableRides
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Driver</th>
            <th>Ride Price</th>
            <th>Book Ride</th>
            <th>Ride Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

//Ride component
const Ride = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const getUserPosition = () => {
      return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position.coords),
          (err) => reject(err)
        )
      );
    };

    const fetchGeolocation = async () => {
      const position = await getUserPosition();
      setLatitude(position.latitude);
      setLongitude(position.longitude);
      console.log(position);
    };

    fetchGeolocation();
  }, [latitude]); // Only listen for latitutde changes

  const center = useMemo(
    () => ({ lat: latitude, lng: longitude }),
    [latitude, longitude]
  );

  return (
    <Container fluid className="min-vh-100 p-md-5 bg-light">
      <Row className="text-capitalize vh-100">
        {/* googlemap */}
        <Col md={6}>
          {!isLoaded ? (
            <h1 className="text-center py-5">Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerStyle={{width:'100%' ,height:'100%'}}
              center={center} // Use the center object for initial position
              zoom={15}
              options={{
                zoomControl: false,
                mapTypeControl: true,
              }}
            >
            <Marker position={center} />
            </GoogleMap>
          )}
        </Col>
        <Col md={6} className="d-flex-center ">
          {/* Add any additional UI components for ride location and destination selection here */}
          <Row className="text-uppercase">
            <Col md={12}>
              <Form>
                <h1 className="text-center mb-4">Book Your Ride { process.env.REACT_APP_NAME}</h1>
                <div className="d-md-flex justify-content-evenly">
                  <Form.Group
                    className="mb-3"
                    controlId="sourceLocation"
                    style={{ width: window.innerWidth >= 768 ? "40%" : "80%" }}
                  >
                    <Form.Label>Your Location</Form.Label>
                    <Form.Control type="text" className="w-full" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="destinationLocation"
                    style={{ width: window.innerWidth > 768 ? "40%" : "100%" }}
                  >
                    <Form.Label>Your Destination</Form.Label>
                    <Form.Control type="text" className="w-full" />
                  </Form.Group>
                </div>
                <Button variant="success" type="submit">
                  Search Rides
                </Button>
              </Form>
            </Col>
          </Row>
          <br />
          <Row>
            <AvailableRides></AvailableRides>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Ride;
