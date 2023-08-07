import React, { useState } from "react";
import { useGlobalState } from "../GlobalContext";
import { useNavigate } from "react-router-dom";
import D from "./form";
const Details = () => {
  const [open, setOpen] = useState(false);
  const handleclose = ()=>{
    setOpen(false);
  }
  const Navigate = useNavigate();
  const { globalState, setGlobalState } = useGlobalState();
  return (
    <div className="summary-box">
      {globalState.body && globalState.key && (
        <>
          <div className="img-box">
            <img
              src={globalState.body[globalState.key-1].show.image.medium}
              alt=""
              className="imgs"
            />
            <div className="hs">
              {globalState.body[globalState.key-1].show.name}
            </div>
          </div>
          <div className="summ">
            <div
              dangerouslySetInnerHTML={{
                __html: globalState.body[globalState.key-1].show.summary,
              }}
            />
          </div>
          <div className="btn-cont">
            <button className="btn x" onClick={() => Navigate(-1)}>
              Go Back
            </button>
            <button className="btn x" onClick={()=>setOpen(true)}>
              Book show
            </button>
          </div>
          <D
            open={open}
            handleClose={handleclose}
            name={globalState.body[globalState.key-1].show.name}
            id={globalState.body[globalState.key-1].show.id}
          />
        </>
      )}
    </div>
  );
};

export default Details;
