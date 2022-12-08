const initialState = {
  NewNoteTogglePosition: false,
  MiniDrawerPane: "Notes",
  MiniDrawerOpen: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NewNoteToggle":
      return {
        ...state,
        NewNoteTogglePosition: !state.NewNoteTogglePosition,
      };

    case "PaneSelection":
      return {
        ...state,
        MiniDrawerPane: action.pane,
      };

    case "DrawerOpen":
      return {
        ...state,
        MiniDrawerOpen: !state.MiniDrawerOpen,
      };

    default:
      return state;
  }
};
