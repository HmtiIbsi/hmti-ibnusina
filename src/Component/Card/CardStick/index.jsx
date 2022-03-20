import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const CardStick = () => {
  return (
    <Card className="radius-hard shadow-stick">
      <CardBody>
        <Row className="px-3 p-0">
          <Col className="d-flex justify-content-center">
            <div className="">
              <div className="d-flex justify-content-center justify-content-sm-between">
                <i className="ri-file-list-3-line" />
              </div>
              <div className="d-flex text-stick">
                <div className="info pr-2">2</div>
                <div className="info" style={{ color: "#B0B0B0" }}>
                  Kegiatan Aktiv
                </div>
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <div className="">
              <div className="d-flex justify-content-center justify-content-sm-between">
                <i className="ri-user-2-line" />
              </div>
              <div className="d-flex text-stick">
                <div className="pr-2 info">21</div>
                <div className="info" style={{ color: "#B0B0B0" }}>
                  Anggota
                </div>
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <div className="">
              <div className="d-flex justify-content-center justify-content-sm-between">
                <i className="ri-folder-chart-line" />
              </div>
              <div className="d-flex text-stick">
                <div className="pr-2 info">6</div>
                <div className="info" style={{ color: "#B0B0B0" }}>
                  Repository
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default CardStick;
