const initialState = {
  NewNoteTogglePosition: false,
  MiniDrawerPane: "Notes",
  MiniDrawerOpen: false,
  ApiCallSense: false,
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

    case "ApiCall":
      return {
        ...state,
        ApiCallSense: !state.ApiCallSense,
      };

    default:
      return state;
  }
};
