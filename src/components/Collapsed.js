import React from 'react';
import { Collapse } from 'antd';
import FileSystemNavigator from './TreeView';
import Resizabled from './Resizabled';

const { Panel } = Collapse;

const Collapsed = () => {
  return (
    <Collapse>
      <Panel header="Category 1" key="1">
        <FileSystemNavigator />
      </Panel>
      <Resizabled />
    </Collapse>
  );
};

export default Collapsed;
