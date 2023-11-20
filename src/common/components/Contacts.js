import React from 'react';
import "./Contacts.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Contacts = () => {
  return (
    <div className="banner-container">
      <div className="container text-center">
        <h1 className="display-4 my-4 display-md-lg">
        <span className="smaller-text">Yhteystiedot</span>
        </h1>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Daavidin Divari</Card.Title>
        <Card.Text>
        Aukioloaika:
        ma – pe: 10-19
	    la: 10-17
	    su: suljettu
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Osoite: Mahtikuja 1 90660 Oulu</ListGroup.Item>
        <ListGroup.Item>Puhelin: 040 6666 666</ListGroup.Item>
        <ListGroup.Item>Email: Koti@daaviddiv.com</ListGroup.Item>
        <ListGroup.Item>Maksutavat: Visa Master Paypal Klarna Pankki Mobilepay</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      Asiakaspalvelu/palautukset: Ole yhteydessä asiakaspalveluun sähköpostilla asiakaspalvelu@daaviddiv.com
      </Card.Body>
    </Card>
      </div>    
    </div>

  )
}

export default Contacts