import React from "react";
import { Card, CardBody } from "reactstrap";

const CardDevisi = ({
  className,
  iconDevisi,
  nameDevisi,
  descDevisi,
  styleIcon,
}) => {
  return (
    <div style={{}} className={`${className} px-3 card-devisi`}>
      <Card className="card-devisi-body">
        <CardBody>
          <div
            className={`icon-card ${styleIcon}`}
            style={{ maxWidth: "fit-content" }}
          >
            <i className={iconDevisi} />
          </div>
          <div className="devisi-card text-center">{nameDevisi}</div>
          <div
            className="font-text text-justify  desc-card"
            // style={{ maxHeight: "220px" }}
          >
            {descDevisi}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardDevisi;
