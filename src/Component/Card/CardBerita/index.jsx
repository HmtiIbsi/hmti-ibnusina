import React from 'react';
import { Col, Row, } from 'reactstrap';

const CardBerita = () => {
  return (
    <div className="card-berita">
      <Row className="px-5 pt-2 pb-4 foto-card-berita">
        <Col xs={12} sm={12} md={8}>
          <img src={'https://i.postimg.cc/yNkm2b87/tentang3.jpg'} alt="Logo" className="brt-gambar1"></img>
        </Col>
        <Col xs={12} sm={12} md={4} className="foto-card-berita-kecil">
          <Row>
            <Col xs={12} sm={12} md={12} className='h-100'>
              <img src={'https://i.postimg.cc/N0Hy6q02/tentang2.jpg'} alt="Logo" className="w-100 pb-3"></img>
            </Col>
          </Row>
          <Row className="pt-3 margin-card">
             <Col xs={12} sm={12} md={12} className='h-100 '>
              <img src={'https://i.postimg.cc/FsC1wsdJ/tentang1.jpg'} alt="Logo" className="w-100"></img>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CardBerita;
