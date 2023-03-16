import React from "react";

export default function TryProps(props) {
  // console.log(props.redius)
  let r = props.redius;
  let sideOfSquer = Math.sqrt(2) * r;
  console.log(sideOfSquer);

  return (
    <div className="parentdiv">
      <div
        style={{
          width: `${r*2}px`,
          height: `${r*2}px`,
          borderRadius: "50%",
          border: "2px solid black",
          display:'flex', justifyContent: 'center', alignItems:'center'
        }}
      >
        <div 
          style={{
            width: `${sideOfSquer}px`,
            height: `${sideOfSquer}px`,
            border: "2px solid red",
          }}
        >
        </div>
      </div>
    </div>
  );
}
