import React from "react";
import { useMemo } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Ride = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  return (
    <Container fluid className="min-vh-100 p-md-5 bg-light">
      <Row className="text-capitalize vh-100">
        <Col md={6}>
          {!isLoaded ? (
            <h1 className="text-center py-5">Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="w-100 h-100 border rounded-lg sm:h-400 md:h-500 lg:h-600"
              center={center}
              zoom={10}
              options={{
                zoomControl: false,
              }}
            >
              <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
            </GoogleMap>
          )}
        </Col>
        <Col md={6} className="d-flex-center ">
          {/* Add any additional UI components for ride location and destination selection here */}
          <Row className="text-uppercase">
            <Col md={12}>
              <Form>
                <h1 className="text-center mb-4">Book Your Ride</h1>
                <div className="d-md-flex justify-content-evenly">
                  <Form.Group
                    className="mb-3"
                    controlId="sourceLocation"
                    style={{ width: "40%" }}
                  >
                    <Form.Label>Your Location</Form.Label>
                    <Form.Control type="text" className="w-full" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="destinationLocation"
                    style={{ width: "40%" }}
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
        </Col>
      </Row>
    </Container>
  );
};

export default Ride;
