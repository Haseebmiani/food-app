import React from "react";

const ReacipeIndex = ({ alphaIndex }) => {
  console.log(alphaIndex);
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "J",
    "I",
    "J",
    "k",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <>
      {alpha.map((item) => {
        return (
          <div className="numBox" onClick={() => alphaIndex(item)}>
            <h3>{item}</h3>
          </div>
        );
      })}
    </>
  );
};
export default ReacipeIndex;
