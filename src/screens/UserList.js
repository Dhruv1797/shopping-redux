import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../redux/action';

const UserList = () => {
    const dispatch = useDispatch();
    const userlist = useSelector((state) => state.reducer);

    useEffect(() => {
        dispatch(getUserList());
    }, []);

    console.warn("in component", userlist);

    return (
        <View style={styles.container}>
            {
                userlist.length?
            <FlatList
                data={userlist[0].users}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
                            <Text style={styles.details}>Email: {item.email}</Text>
                            <Text style={styles.details}>Phone: {item.phone}</Text>
                            <Text style={styles.details}>Age: {item.age}</Text>
                            <Text style={styles.details}>Gender: {item.gender}</Text>
                            <Text style={styles.details}>Address: {item.address.address}, {item.address.city}, {item.address.state}</Text>
                        </View>
                    </View>
                )}
            /> : <View style={[styles.container, styles.loaderContainer]}>
            <ActivityIndicator size="large" color="#4CAF50" />
        </View>
}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
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
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    info: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 14,
        color: '#666',
    },
});

export default UserList;
