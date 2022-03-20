/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Col, Row } from "reactstrap";
import CardStick from "../../Component/Card/CardStick";
import CardStruktur from "../../Component/Card/CardStruktur";
import CardVisi from "../../Component/Card/CardVisi";
import CardDevisi from "../../Component/Card/CardDevisi";
import CardEvent from "../../Component/Card/CardEvent";
import { dataDevisi, dataEvent, dataStuktur } from "./service";
import Video from "../../assets/video/OpeningHMTI.mp4";
import "./index.scss";

const Dashboard = () => {
  return (
    <div className="animated fadeIn mt-3">
      <video className="video-player" autoPlay loop muted>
        <source src={Video} />
      </video>
      <Row
        className="card-stick "
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <Col xs={12} sm={12} md={12} lg={12} xl={10}>
          {" "}
          <CardStick />{" "}
        </Col>
        <Col xs={12} sm={12} md={1} lg={1} xl={10} />
      </Row>
      <Row
        className="pb-5"
        data-aos="zoom-in"
        data-aos-anchor-placement="bottom-bottom"
      >
        <Col
          xs="12"
          sm="12"
          md="12"
          className="font-bold font-big header-card-event"
        >
          KEGIATAN TERBARU
        </Col>
      </Row>
      <div className="d-flex overflow-auto">
        {dataEvent.map((data, i) => {
          return (
            <CardEvent
              pictureEvent={data.picture}
              nameEvent={data.header}
              descEvent={data.desc}
              dateEvent={data.date}
            />
          );
        })}
      </div>

      <Row
        className="pb-5 card-visi-misi"
        data-aos="zoom-in"
        data-aos-anchor-placement="bottom-bottom"
      >
        <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">
          <div style={{ color: "#FFEF00" }}>DEVISI HMTI</div>
          UNIVERSITAS IBNU SINA
        </Col>
      </Row>
      <CardVisi />

      <Row
        className="pb-5 margin-card-devisi"
        data-aos="zoom-in"
        data-aos-anchor-placement="bottom-bottom"
      >
        <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">
          <div style={{ color: "#FFEF00" }}>DEVISI HMTI</div>
          UNIVERSITAS IBNU SINA
        </Col>
      </Row>
      <div className="d-flex overflow-auto flow-devisi">
        {dataDevisi.map((data, i) => {
          return (
            <CardDevisi
              iconDevisi={data.icon}
              nameDevisi={data.header}
              descDevisi={data.desc}
              styleIcon={data.style}
            />
          );
        })}
      </div>

      <Row
        className="pb-5"
        data-aos="zoom-in"
        data-aos-anchor-placement="bottom-bottom"
      >
        <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">
          <div style={{ color: "#FFEF00" }}>STRUKTUR</div>
          UNIVERSITAS IBNU SINA
        </Col>
      </Row>
      <div className="cardStruktur justify-content-md-between justify-content-sm-center d-flex flex-md-wrap pb-5">
        {dataStuktur.map((data, i) => {
          return (
            <CardStruktur
              pictureStruktur={data.picture}
              nameStrukturt={data.Name}
              descStruktur={data.Jabatan}
            />
          );
        })}
      </div>

      <Row
        className="pb-5"
        data-aos="zoom-in"
        data-aos-anchor-placement="bottom-bottom"
      >
        <Col
          xs="12"
          sm="12"
          md="12"
          className="font-bold font-big header-card-event "
        >
          EVENT AKAN DATANG
        </Col>
      </Row>
      <div className="d-flex overflow-auto">
        {dataEvent.map((data, i) => {
          return (
            <CardEvent
              pictureEvent={data.picture}
              nameEvent={data.header}
              descEvent={data.desc}
              dateEvent={data.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
