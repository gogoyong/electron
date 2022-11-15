import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

export default function FileSystemNavigator() {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 277, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem nodeId="100" label="Folder 1" />
      <TreeItem nodeId="200" label="Folder 2">
        <TreeItem nodeId="201" label="File 1" />
        <TreeItem nodeId="202" label="File 2" />
        <TreeItem nodeId="203" label="File 3" />
        <TreeItem nodeId="204" label="File 4" />
        <TreeItem nodeId="205" label="File 5" />
        <TreeItem nodeId="206" label="File 6" />
        <TreeItem nodeId="207" label="File 7" />
        <TreeItem nodeId="208" label="File 8" />
        <TreeItem nodeId="209" label="File 9" />
        <TreeItem nodeId="210" label="File 10" />
      </TreeItem>
    </TreeView>
  );
}
