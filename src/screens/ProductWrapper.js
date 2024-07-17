import React from "react";
import { View, StyleSheet,  ScrollView, Button } from "react-native";
import Header from '../components/Header';
import Product from '../components/Product';
import { Provider } from "react-redux";
import store from "../redux/store";



const ProductWrapper = ({navigation}) => {





  const products = [

    {
      name: 'Samsung Mobile',
      color: 'white',
      price: 30000,
      image: 'https://firebasestorage.googleapis.com/v0/b/wetimecoupleapp.appspot.com/o/images.jpg?alt=media&token=e0bb1862-88e2-430c-9aec-aa8a78123f3e'
    },
    {
      name: 'Nokia',
      color: 'yellow',
      price: 30000,
      image: 'https://firebasestorage.googleapis.com/v0/b/wetimecoupleapp.appspot.com/o/images.jpg?alt=media&token=e0bb1862-88e2-430c-9aec-aa8a78123f3e'
    },
    {
      name: 'Apple',
      color: 'green',
      price: 30000,
      image: 'https://firebasestorage.googleapis.com/v0/b/wetimecoupleapp.appspot.com/o/images.jpg?alt=media&token=e0bb1862-88e2-430c-9aec-aa8a78123f3e'
    }
  ]
  return (

   
      
    <View style={styles.container}>
        <Button onPress={()=> navigation.navigate("User")} title='Go to user list'></Button>
      <Header />
      <ScrollView>
        {
          products.map((item) => <Product item={item} />

          )

        }


      </ScrollView>

      {/* <Product /> */}
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
   
  
    flex: 1,

  },
});

export default ProductWrapper;
