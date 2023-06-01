import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <CardText>
            Select from any of our {snacks.length} snacks or our {drinks.length} drinks!
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
