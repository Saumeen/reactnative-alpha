import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import uuid from 'react-native-uuid'


import GLOBAL from '../../AppConstant'
import { itemDb } from '../../../Db/ItemData'

import { useNavigation } from '@react-navigation/native'


export default () => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [desc, setDesc] = useState('');

    const navigation = useNavigation();

    const handleSubmitPress = () => {

        if (!name) {
            alert("Please enter name before add")
        }

        const msg = "Name : " + name.toString() + " Type : " + type.toString() + " Desc : " + desc.toString();
        ToastAndroid.show(msg, ToastAndroid.SHORT);

        navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View >
                    <Text style={styles.text}>Add Data!!</Text>
                </View>
            </View>

            <View style={styles.addmodel}>
                <View style={styles.section}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter Item Name"
                        placeholderTextColor={GLOBAL.COLOR.EERIE_BLACK}
                        autoCapitalize="none"
                        onChange={(text) => {
                            setName(text)
                        }}
                    ></TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter Item Type"
                        placeholderTextColor={GLOBAL.COLOR.EERIE_BLACK}
                        autoCapitalize="none"
                        onChange={(text) => {
                            setType(text)
                        }}
                    ></TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter Item description"
                        placeholderTextColor={GLOBAL.COLOR.EERIE_BLACK}
                        autoCapitalize="none"
                        onChange={(text) => {
                            setDesc(text)
                        }}
                    ></TextInput>
                </View>

                <View style={styles.section}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={handleSubmitPress}
                    >
                        <Text style={styles.buttonTextStyle}>ADD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GLOBAL.COLOR.WHITE,
        flexDirection: 'column',

    },
    card: {
        height: 50,
        backgroundColor: GLOBAL.COLOR.YELLOW_TRANS_05,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    addmodel: {
        height: 300,
        //backgroundColor: GLOBAL.COLOR.EERIE_BLACK_01,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,

    },
    section: {
        flexDirection: 'row',


    },
    inputStyle: {
        flex: 1,
        color: GLOBAL.COLOR.BLACK,
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: GLOBAL.COLOR.BLACK,

    },
    buttonStyle: {
        padding: 5,
        backgroundColor: GLOBAL.COLOR.GRAY,
        borderRadius: 20,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6
    }
});
