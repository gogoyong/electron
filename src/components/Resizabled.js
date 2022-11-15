import * as React from 'react';
import { Resizable } from 're-resizable';
const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 0px #ddd',
  // background: '#f0f0f0',
};

const Resizabled = () => {
  const [width, setWidth] = React.useState(300);
  const [height, setHeight] = React.useState(1);
  return (
    <Resizable
      style={style}
      size={{ width, height }}
      onResizeStop={(e, direction, ref, d) => {
        setWidth(width + d.width);
        setHeight(height + d.height);
      }}
    ></Resizable>
  );
};

export default Resizabled;
