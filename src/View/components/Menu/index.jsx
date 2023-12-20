import ImageSVG from "../../ImageSVG";

import "./Menu.css";
const btnsMenu = [
  { icon: "Hash", title: "Manage tags" }, 
  { icon: "Filter", title: "Advanced" },
  { icon: "Blocked", title: "Blocked" },
  { icon: "Plus", title: "New" },
];

const Menu = ({ close, showModalAddPost }) => {
  const callModalAddPost = (title) => {
    if (title === "New") {
      showModalAddPost();
    }
  };

  return (
    <div className="menu" onClick={close}>
      <div className="menu_wrapper" onClick={(e) => e.stopPropagation()}>
        {btnsMenu.map((elem) => (
          <div className="button_menu">
            <button key={elem} onClick={() => callModalAddPost(elem.title)}>
            <ImageSVG
            config={{
              icon: `${elem.icon}`,
              fill: "#black",
              stroke: "black",
              size: 30,
            }}
          />
            <p>{elem.title}</p>
            </button>
            <div className="menu_line"></div>
          </div>
          
        ))}
        
      
      </div>
      
    </div>
  );
};
export default Menu;
