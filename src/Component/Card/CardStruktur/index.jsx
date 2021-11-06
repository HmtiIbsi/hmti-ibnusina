import React from 'react';

const CardStruktur = ({
  className,
  pictureStruktur,
  nameStrukturt,
  descStruktur,
}) => {
  return (
    <div className={`${className} px-2 pa-ca-st py-2`}>
      <div>
        <img src={pictureStruktur} alt="Logo" className='img-card-struktur' />
      </div>
      <div className="px-3 py-2 card-struktur">
        <div style={{ fontWeight: "700", fontSize: "0.9rem" }} className='nama-struktur'>{nameStrukturt}</div>
        <div className='desc-struktur'>{descStruktur}</div>
      </div>
    </div>
  );
};

export default CardStruktur;
