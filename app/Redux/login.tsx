import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { store } from './index';
import { hideLoader, showLoader } from './loader';
import { firebase } from '../Utils/firebaseConfig';
import * as storage from '../Service/asyncStoreConfig';
import { showToast } from '../Utils/functions';
import navigationService from '../Navigation/navigationService';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (body: { email: string; password: string }, { dispatch }) => {
    try {
      dispatch(showLoader());
      const userCredential = await firebase.auth().signInWithEmailAndPassword(body.email, body.password);
      console.log(userCredential['user']);
      console.log('User registered');
      dispatch(hideLoader());
      const data = {
        user: {
          uid: userCredential['user']['uid'],
          email: userCredential['user']['email'],
        },
      }
      storage.setItem('userData', JSON.stringify(data
      ));
      return data;
    } catch (error: any) {
      console.log(error);
      console.log("*******");
      showToast("Incorrent credential, Please try again", 1);
      dispatch(hideLoader());
    }
  },
);
export const logoutUser = createAsyncThunk(
  'user/logout',
  async (data: { showToast: boolean }, { dispatch }) => {
    try {
      const userData = store.getState()?.loginReducer?.userData;
      dispatch(showLoader());
      await firebase.auth().signOut();
      dispatch(hideLoader());
      if (data?.showToast) {
        showToast("Logout Successfully", 1);
      }
      logOutState();
    } catch (error: any) {
      showToast(error || 'Something went wrong', 1);
      dispatch(hideLoader());
    }
  },
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (body: { email: string; password: string }, { dispatch }) => {
    try {
      dispatch(showLoader());
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(body.email, body.password);
      dispatch(hideLoader());
      showToast('Registered successfully', 1);
      navigationService.navigate('Login');
      return {
        user: {
          uid: userCredential['user']['uid'],
          email: userCredential['user']['email'],
        },
      };
    } catch (error: any) {
      showToast(error?.response?.data?.message || 'Something went wrong', 1);
      dispatch(hideLoader());
    }
  },
);
export const logOutState = () => {
  storage.removeData('userData');
  store.dispatch(setLogout(null));
};
export type errorType = {
  type?: string;
  message: string;
};

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: true,
    error: {
      type: '' as string,
      message: '' as string,
    } as errorType,
    loggedIn: false,
    token: null,
    showSplash: true,
    userData: null,
  },
  reducers: {
    setToken: (state, action: any) => {
      state.userData = action.payload.user;
      state.showSplash = false;
    },
    setLogout: (state, action: any) => {
      state.userData = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = {
          type: '',
          message: '',
        };
      })
      .addCase(loginUser.fulfilled, (state, action: any) => {
        state.loading = false;
        state.loggedIn = true;
        state.userData = action.payload?.user;
        console.log(state.userData)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as errorType; // Use type assertion
      });
  },
});

export const { setToken, setLogout } = userSlice.actions;

export default userSlice.reducer;
