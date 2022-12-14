import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import Card from 'components/molecules/Card/Card.js';
import ChangeLog from 'components/organisms/Wrappers/ChangeLog.js';
import img0 from 'assets/homebrew-banner.png';
import img1 from 'assets/ra_banner.jpg';
import img2 from 'assets/DeckyControls.jpg';
import img3 from 'assets/srm.jpg';
import img4 from 'assets/1x1.png';

const ChangeLogPage = () => {
  const { state, setState } = useContext(GlobalContext);
  const [statePage, setStatePage] = useState({
    disabledNext: false,
    disabledBack: false,
    current: 0,
    img: img0,
  });
  const { disabledNext, disabledBack, current, img } = statePage;
  const changeLogData = require('data/changelog.json');
  const imgC0 = img0;
  const activeItem = (id) => {
    let imgID;
    switch (id) {
      case 0:
        imgID = img0;
        break;
      case 1:
        imgID = img1;
        break;
      case 2:
        imgID = img2;
        break;
      case 3:
        imgID = img3;
        break;
      case 4:
        imgID = img4;
        break;
    }

    setStatePage({ ...statePage, current: id, img: imgID });
  };

  return (
    <ChangeLog disabledNext={disabledNext} disabledBack={disabledBack}>
      <div className="container--grid">
        <div data-col-sm="4">
          <ul>
            {changeLogData.map((item, i) => {
              return (
                <li tabindex="0" key={i}>
                  <Card
                    css={current == i && 'is-selected'}
                    onClick={() => activeItem(i)}
                  >
                    <span className="h5">{item.title}</span>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
        <div data-col-sm="8">
          {changeLogData.map((item, i) => {
            return (
              <div tabindex="0" key={i}>
                {current == i && (
                  <Card
                    onClick={() => activeItem(i)}
                    css={current == i && 'is-selected'}
                  >
                    {item.image == 'true' && (
                      <div
                        style={{
                          height: 332,
                          overflow: 'hidden',
                          marginBottom: 20,
                          borderRadius: 10,
                        }}
                      >
                        <img src={img} alt="Image" />
                      </div>
                    )}
                    <p
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </ChangeLog>
  );
};

export default ChangeLogPage;
