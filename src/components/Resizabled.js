import * as React from 'react';
import { Resizable } from 're-resizable';
const style = {
  border: 'solid 0px #ddd',
};

const Resizabled = () => {
  return (
    <Resizable
      style={style}
      Size={{
        width: 230,
      }}
    />
  );
};

export default Resizabled;
