import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/action";

const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item.name));
    };

    useEffect(() => {
        const results = cartItems.filter((element) => element.name === item.name);
        setIsAdded(results.length > 0);
    }, [cartItems]);

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>Price: ${item.price}</Text>
                <Text style={styles.color}>Color: {item.color}</Text>
                {
                    isAdded ?
                        <TouchableOpacity style={styles.buttonRemove} onPress={() => handleRemoveFromCart(item)}>
                            <Text style={styles.buttonText}>Remove from Cart</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.buttonAdd} onPress={() => handleAddToCart(item)}>
                            <Text style={styles.buttonText}>Add to Cart</Text>
                        </TouchableOpacity>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: '#888',
        marginVertical: 2,
    },
    color: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    buttonAdd: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonRemove: {
        backgroundColor: '#dc3545',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Product;
