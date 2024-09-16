import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Dispatch,SetStateAction } from "react";
import { SidebarItem } from "../../Data/Create";

interface Maintype {
  item: SidebarItem[];
  setitem:Dispatch<SetStateAction<number>>
}

const Sidebar: React.FC<Maintype> = ({ item, setitem }) => {

    const handle=(index:number)=>{

      setitem(index+1);
      
    }
  return (
    <ListGroup as="ul" className="-z-0 relative">
      {item.map((SidebarItem, index) => {
        return (
          <ListGroup.Item
            as="li"
            key={index}
            className="d-flex justify-content-between align-items-start"
            onClick={()=>{handle(index)}}
          >
            <div className="ms-2 me-auto  font-myfamily text-blue-500 cursor-pointer">
              <div className="fw-bold  text-black">{SidebarItem.heading}</div>
              <span className="text-sm underline">
                {SidebarItem.description}
              </span>
            </div>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Sidebar;
