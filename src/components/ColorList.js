import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "blue"
  ];
  // To fix this error, we must give each <li> element a special key prop, like so:
  // This special key prop allows React internally to keep track of each element in the array of JSX
  const colorElements = colors.map((color) => {
    return <li key={color} style={{ color:color}}>{color}</li>;
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
        <ol>
          {colorElements}
        </ol>
    </div>
  );
}

export default ColorList;

// key prop with Object, use the ID as the key prop

// const userHeadings = users.map((user) => {
//   return <h1 key={user.id}>{user.firstName}</h1>;
// });



// With Non-Unique Arrays, use the index for the key properties, use as last resort only

// const fib = [0, 1, 1, 2, 3, 5];

// const fibList = fib.map((number, index) => {
//   return <div key={index}>{number}</div>;
// });




// With Nested Components

// ColorItem component
// function ColorItem(props) {
//   return <li style={{ color: props.color }}>{props.color}</li>;
// }

// ColorList component
// function ColorList() {
//   const colors = [
//     "firebrick",
//     "rebeccapurple",
//     "salmon",
//     "darkslategray",
//     "hotpink",
//   ];

//   const colorElements = colors.map((color) => {
//     return <ColorItem key={color} color={color} />;
//   });
//   // etc
// } 

