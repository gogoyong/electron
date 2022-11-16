import React from 'react';
import { Collapse } from 'antd';
import FileSystemNavigator from './TreeView';
import Resizabled from './Resizabled';
import ResizabledStyle from './ResizabledStyle';

const { Panel } = Collapse;

const Collapsed = () => {
  return (
    <Collapse>
      <Panel header="Category 1" key="1">
        <FileSystemNavigator />
      </Panel>
      <ResizabledStyle>
        <Resizabled />
      </ResizabledStyle>
    </Collapse>
  );
};

export default Collapsed;
