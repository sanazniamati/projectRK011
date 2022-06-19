import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Rect, Text } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={150}
          y={150}
          width={300}
          height={100}
          stroke={"#0D4164"}
          cornerRadius={[50, 0, 50, 50]}
        />
        <Text
          x={190}
          y={175}
          text={`GITWeLD`}
          fontSize={50}
          fill={"#0D4164 "}
          fontStyle={"bold"}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
