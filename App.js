import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductWrapper from "./src/screens/ProductWrapper";
import UserList from "./src/screens/UserList";


const Stack = createStackNavigator();
const App = () => {





  return (

    <Provider  store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='Home'  component={ProductWrapper}/>
        <Stack.Screen name ='User'  component={UserList}/>
      </Stack.Navigator>
    </NavigationContainer>
    

    </Provider>

  );
}


export default App;
