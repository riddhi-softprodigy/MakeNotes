// This file contains all common navigator method()
import {CommonActions, StackActions} from '@react-navigation/native';

let _navigator: any;

// Setting a Top level navigator from App.js
function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

// Navigate to a particular screen
//params -> (Name of screen, parameters)
function navigate(routeName: any, params: any = {}) {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}
// Push to a particular screen
//params -> (Name of screen, parameters)
function push(routeName: any, params: any) {
  _navigator.dispatch(
    StackActions.push({
      routeName: routeName,
      params: params,
    }),
  );
}

// reset the current stack and navigate to a particular screen
//params -> (Name of screen, parameters)

function reset(routeName: any, params: any) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      // key:null,
      actions: [CommonActions.navigate({name: routeName, params})],
    }),
  );
}

function goBack() {
  _navigator.dispatch(CommonActions.goBack());
}
// add other navigation functions that you need and export them
export default {
  navigate,
  setTopLevelNavigator,
  reset,
  push,
  goBack,
};
