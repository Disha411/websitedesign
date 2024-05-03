import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"

export default function Cardcom() {
  return (
    <div>
      <Card
        style={{
          width: '19rem', border: '1px solid gray',borderRadius:"5%", padding:"5px"
        }}
      >
        <img
          alt="Sample"
          src="https://picsum.photos/300/200"
        />
        <CardBody>
          <CardTitle tag="h5" style={{textAlign:"center"}}>
            Card title
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"  style={{textAlign:"center"}}
          >
            Card subtitle
          </CardSubtitle>
          <CardText  style={{textAlign:"center"}}>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <div style={{display:"flex",justifyContent:"center"}}>
            <Button >
              Button
            </Button>
          </div>
        </CardBody>
      </Card></div>
  )
}
