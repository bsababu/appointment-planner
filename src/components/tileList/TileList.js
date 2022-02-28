import React from "react";
import {Tile} from "../tile/Tile"
export const TileList = (props) => {
  return (
    <div>
      {
        props.list.map((obj, ind) => {
          return <Tile obj={obj} key={ind}/>
        })
      }
    </div>
  );
};
