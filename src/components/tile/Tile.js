import React from "react";

export const Tile = (props) => {
  const values = Object.values(props.object);
  return (
    <div className="tile-container">
      {
        values.map( (val, ind)=> {
         if(typeof val === 'object'){
            return <p key={ind} className="tile-title">{JSON.stringify(val)}</p>
          }else{
            return <p key={ind} className="tile">{val}</p>
          }
        })
      }
    </div>
  );
};
