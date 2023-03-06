import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const entSlice = createSlice({
  name: "ent",
  initialState,
  reducers: {
    replaceEnt(state, action) {
      state.items = action.payload;
    },
    toggle(state, action) {
      const itemTitle = action.payload;
      const findBookmark = state.items.find((item) => item.title === itemTitle);
      findBookmark.isBookmarked = !findBookmark.isBookmarked;
    },
  },
});

export const fetchEntData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://entertainment-app-9d0fc-default-rtdb.europe-west1.firebasedatabase.app/ent.json"
      );

      const data = await response.json();

      return data;
    };
    try {
      const entData = await fetchData();
      dispatch(entActions.replaceEnt(entData.items || []));
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const entActions = entSlice.actions;
export default entSlice;
