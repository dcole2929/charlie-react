import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { useHistory, useLocation } from "react-router-dom";

const KioskSetup = () => {
  const [code, setCode] = useState();

  useEffect(async () => {
    const result = await axios('https://kiosk.leafly.com/code');
    setCode(result.code);
  });

  // TODO setup websocket and when setup complete in form auto navigate page to video

  return (
    <div>
      <h2>
        Kiosk Code:
        <span id="kiosk-code">
          {code}
        </span>
      </h2>
    </div>
  );
};

export default KioskSetup;
