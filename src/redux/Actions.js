export const NewNoteToggle = () => {
  return {
    type: "NewNoteToggle",
  };
};

export const MiniDrawerPaneSelection = (selectedPane) => {
  return {
    type: "PaneSelection",
    pane: selectedPane,
  };
};

export const MiniDrawerOpenClose = () => {
  return {
    type: "DrawerOpen",
  };
};

export const ApiSensor = () => {
  return {
    type : 'ApiCall'
  }
}
