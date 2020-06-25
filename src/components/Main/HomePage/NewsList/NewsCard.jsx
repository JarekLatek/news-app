import "./NewsCard.css";
import React from "react";
import { Card, Image } from "semantic-ui-react";

const NewsCard = (props) => (
  <Card>
    <Image src={props.urlToImage} alt="" wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>
        <span className="date">{props.publishedAt}</span>
      </Card.Meta>
      <Card.Description>
        {props.description}
        <div className="NewsCard-content-footer">
          <a href={props.url} target="_blank">
            Zobacz więcej
          </a>
        </div>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <p>źródło: {props.name}</p>
    </Card.Content>
  </Card>
);

export default NewsCard;
