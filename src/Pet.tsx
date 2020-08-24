import React, { FunctionComponent } from "react";
import { Photo } from "@frontendmasters/pet";
import { Link } from "@reach/router";

const Pet: FunctionComponent<{
  name: string;
  animal: string;
  breed: string;
  media: Photo[];
  location: string;
  id: number;
}> = props => {
  const { name, animal, breed, media, location, id } = props;

  let hero = "http://placeorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
