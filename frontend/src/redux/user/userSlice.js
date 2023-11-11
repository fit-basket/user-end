import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  userRole: null, // Include user role in the initial state
  loading: false,
  error: false,
};

const handleSignIn = (payload) => {
  const { data, token, role } = payload; // Include 'role' in the payload

  localStorage.setItem("authToken", token);
  localStorage.setItem("user", JSON.stringify(data));
  localStorage.setItem("userRole", role); // Store the user role in localStorage
};

const handleSignOut = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
  localStorage.removeItem("userRole"); // Clear the user role during sign-out
};

export const checkAuth = () => (dispatch) => {
  const authToken = localStorage.getItem("authToken");
  const user = localStorage.getItem("user");
  const userRole = localStorage.getItem("userRole"); // Retrieve the user role

  if (authToken && user && userRole) {
    dispatch(
      signInSuccess({
        data: JSON.parse(user),
        token: authToken,
        role: userRole,
      })
    );
  } else {
    dispatch(signOut());
  }
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload.data;
      state.userRole = action.payload.role; // Set the user role in the state
      state.loading = false;
      state.error = false;
      handleSignIn(action.payload);
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state, action) => {
      state.currentUser = null;
      state.userRole = null; // Clear the user role on sign-out
      state.loading = false;
      state.error = false;
      handleSignOut();
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, signOut } =
  counterSlice.actions;

export default counterSlice.reducer;
