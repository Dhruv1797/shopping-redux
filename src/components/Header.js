import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Header = () => {
    const cartData = useSelector((state) => state.reducer);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        setCartItemCount(cartData.length);
    }, [cartData]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shpping-App</Text>
            <View style={styles.cartContainer}>
                <Text style={styles.cartText}>{cartItemCount}</Text>
                <Text style={styles.cartLabel}>Items in Cart</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#4CAF50', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    cartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginRight: 5,
    },
    cartLabel: {
        fontSize: 14,
        color: '#FFFFFF',
    },
});

export default Header;
