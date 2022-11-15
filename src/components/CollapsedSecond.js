import React from 'react';
import { Collapse } from 'antd';
import FileSystemNavigator from './TreeView';

const { Panel } = Collapse;

const CollapsedSecond = () => {
  return (
    <Collapse>
      <Panel header="Category 2" key="2">
        <FileSystemNavigator />
      </Panel>
    </Collapse>
  );
};

export default CollapsedSecond;
