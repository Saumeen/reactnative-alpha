import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import GLOBAL from '../AppConstant'

export default (props) => {

    return (
        <View style={styles.container}>

            <View style={[styles.card, { backgroundColor: props.color }]}>
                <View style={styles.cardContent}>
                    <Image style={styles.img} source={require('../../assets/tableware.png')} ></Image>
                </View>
                <View style={styles.cardContentText}>
                    <Text style={styles.text}>Item Name : {props.text == null ? 'None' : props.text} </Text>
                    <Text style={styles.text}>Item Type : {props.type == null ? 'None' : props.type} </Text>
                    <Text style={styles.text}>Item Description : {props.desc == null ? "None" : props.desc} </Text>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        width: "100%",
        height: 80,
        marginVertical: 5,
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
    },
    text: {
        paddingHorizontal: 20
    },
    img: {

        width: '100%',
        height: 150

    },
    cardContentText: {
        flex: 3,
    },
    cardContent: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }

})
