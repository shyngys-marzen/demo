import React from "react";

// SVG components


import User from "./assets/User";
import Search from "./assets/search";
import Settings from "./assets/settings";


import Hash from "./assets/hash";
import Filter from "./assets/filter";
import Blocked from "./assets/blocked";
import Plus from "./assets/plus";


const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ImageSvg = ({ config }) => {
  const svg_collections = {
    User,
    Search,
    Settings,
    Hash,
    Filter,
    Blocked,
    Plus,
  };

  const ImageCofig = {
    fill: config.fill ? config.fill : "none",
    stroke: config.stroke ? config.stroke : "black",
    size: config.size ? config.size : 30,
  };

  const Icon = svg_collections[config.icon];

  return (
    <span style={config.style ? style : null}>
      <Icon
        fill={ImageCofig.fill}
        stroke={ImageCofig.stroke}
        size={ImageCofig.size}
      />
    </span>
  );
};

export default ImageSvg;
