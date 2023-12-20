import React, { useState } from "react";
import ImageSvg from "./ImageSVG";

import Menu from "./components/Menu";
import Modal from "./components/Modal";

import "./App.css";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isModalAddPost, setIsModalAddPost] = useState(false);

  const showMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const showModalAddPost = () => {
    setIsShowMenu(false);
    setIsModalAddPost(true);
  };

  return (
    <div>
    <div className="headerComponent">
      <img className="logo" src="https://s3-alpha-sig.figma.com/img/2784/4b1b/162b9fc4c9740e926162dadba48ba8ff?Expires=1703462400&Signature=ZYuiU0GoNKNm~md7B4iQo1FPgbxiUpiIXPNz7fnuQFxcXRyBjozDnvDK15q7fd~HCS9eX88u-0QIu3c00-4W9o1Zg3xm5y18pv2JNtvgdPRyIWfY9QX7NWlMjcosen7IhJhIu0KsQ8qrqgIeEXFwBtbq0--z93TGy4meVWDfV1BJMFnxtWDdso0LUw-2RQ1C9C7yg8WJgUjftzn0uSe6rMYjtqbQ641uLZM2Mj0zrEqwwJ3r68xfe~eNxYtOM4vq-NELhq-baJ9voRGVRH6sZEGJojlC0gRat97z70S~WZbGnGnuMMdv5y6zkGQQWXPkMjq7aptp2YgLurXCEoB7Tg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      
      <div className="icons_box">
          <ImageSvg
            config={{
              icon: "User",
              fill: "#e5e5e5",
              stroke: "black",
              size: 30,
            }}
          />
      </div>
      
    </div>
    <div className="line"></div>

     <div className="buttons">
         <div className="leftButtons">     
         <button onClick={showMenu}>
            <ImageSvg
              config={{
                icon: "Settings",
                fill: "white",
                stroke: "black",
                size: 24,
              }}
            />
          </button>

            <button>
                <ImageSvg
              config={{
              icon: "Search",
              fill: "white",
              stroke: "black",
              size: 24,
            }}
            />
            </button>
              <button><p><link href='http://fonts.googleapis.com/css?family=Russo+One&subset=cyrillic' rel='stylesheet' type='text/css'></link>Popular</p></button>
              <button><p><link href='http://fonts.googleapis.com/css?family=Russo+One&subset=cyrillic' rel='stylesheet' type='text/css'></link>Upvoted</p></button>
              <button><p><link href='http://fonts.googleapis.com/css?family=Russo+One&subset=cyrillic' rel='stylesheet' type='text/css'></link>Discussed</p></button>
              <button><p><link href='http://fonts.googleapis.com/css?family=Russo+One&subset=cyrillic' rel='stylesheet' type='text/css'></link>Recent</p></button>
          </div>

          <div className="rightButtons">       
              <button><p><link href='http://fonts.googleapis.com/css?family=Russo+One&subset=cyrillic' rel='stylesheet' type='text/css'></link>Show most visited sites</p></button>
          </div>
    </div>
    {isShowMenu ? (
        <Menu close={showMenu} showModalAddPost={showModalAddPost} />
      ) : null}

      {isModalAddPost ? (
        <Modal close={() => setIsModalAddPost(false)}></Modal>
      ) : null}
    </div>
  );
};

export default Header;
