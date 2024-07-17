import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./src/redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductWrapper from "./src/screens/ProductWrapper";
import UserList from "./src/screens/UserList";


const Stack = createStackNavigator();
const App = () => {





  return (

    <Provider  store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='Home'  component={ProductWrapper}/>
        <Stack.Screen name ='User'  component={UserList}/>
      </Stack.Navigator>
    </NavigationContainer>

      </PersistGate>
  
    

    </Provider>

  );
}


export default App;
