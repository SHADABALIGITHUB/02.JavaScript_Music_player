// import React from "react";
// import ListGroup from "react-bootstrap/ListGroup";
// import { Dispatch,SetStateAction } from "react";
// import { SidebarData } from "../../Data/Create";

// interface Maintype {
//   setitem:Dispatch<SetStateAction<number>>,
//   page:number,
//   subpage?:number
// }

// const Sidebar: React.FC<Maintype> = ({setitem ,page}) => {

//     const handle=(index:number)=>{

//       setitem(index);
      
//     }
//   return (
//     <ListGroup as="ul" className="-z-0 relative">

      
      
      
      
//         {
//             Object.keys(SidebarData).map((heading)=>{
//                 const headingNum=Number(heading);
//                 if(headingNum===page)
//                  return <div key={heading}>
//                     {
//                         Object.keys(SidebarData[Number(heading)]).map((subheading)=>{
//                              const values=SidebarData[Number(heading)][Number(subheading)];
                            
//                               return <ListGroup.Item
//                                     as="li"
//                                     key={subheading}
//                                     className={`d-flex justify-content-between ${values.mark?"bg-success":""} align-items-start`}
//                                     onClick={()=>{handle(Number(subheading))}}
//                                   >
//                                     <div className="ms-2 me-auto  font-myfamily text-blue-500 cursor-pointer">
//                                       <div className="fw-bold  text-black">{values.heading}</div>
//                                       <span className="text-sm underline">
//                                         {values.description}
//                                       </span>
//                                     </div>
//                                   </ListGroup.Item>
                            
//                         })
//                     }
//                 </div>
//                  })
//         }
    
    

//     </ListGroup>
//   );
// };

// export default Sidebar;
