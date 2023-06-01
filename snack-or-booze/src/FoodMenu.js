import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu(props) {
  const {snacks} = props;
  const {drinks} = props;
  let items;
  let product;
  let cardText;

  if(props.snacks){
    items = snacks;
    product = 'snacks';
    cardText = 'Choose one of our delicious snacks to satisfy that growling stomach.';
  } else {
    items = drinks;
    product = 'drinks';
    cardText = 'Choose one of our refreshing drinks to quench your thirst.';
  }
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            {cardText}
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${product}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
