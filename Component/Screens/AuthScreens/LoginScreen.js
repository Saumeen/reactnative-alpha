import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import GLOBAL from '../../AppConstant'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const navigation = useNavigation();
    const handleSubmitPress = () => {
        if (!email) {
            setError('Please Enter Email');
            return;
        }
        if (!password) {
            setError('Please Enter Password');
            return;
        }

        AsyncStorage.setItem('user_id', email);
        navigation.navigate('BottomNavigation')

    }

    return (
        <View style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <View>
                    <KeyboardAvoidingView enabled>
                        <View style={styles.logo}>
                            <Image style={styles.img} source={require("../../../assets/logo.png")}></Image>
                        </View>

                        <View style={styles.login}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: GLOBAL.COLOR.EERIE_BLACK
                            }}>Login Page </Text>
                            <View style={styles.section}>
                                <TextInput
                                    style={styles.inputStyle}
                                    placeholder="Enter Email"
                                    placeholderTextColor={GLOBAL.COLOR.EERIE_BLACK}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    onChangeText={(text) => {
                                        setEmail(text)
                                        console.log(text)
                                    }}


                                ></TextInput>
                            </View>
                            <View style={styles.section}>
                                <TextInput
                                    style={styles.inputStyle}
                                    placeholder="Enter Password"
                                    placeholderTextColor={GLOBAL.COLOR.EERIE_BLACK}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    onChangeText={(text) => {
                                        setPassword(text)
                                        console.log(text)
                                    }}
                                ></TextInput>
                            </View>
                            {error != '' ? (
                                <Text style={styles.errorTextStyle}>
                                    {error}
                                </Text>
                            ) : null}
                            <View style={styles.section}>
                                <TouchableOpacity
                                    style={styles.buttonStyle}
                                    activeOpacity={0.5}
                                    onPress={handleSubmitPress}
                                >
                                    <Text style={styles.buttonTextStyle}>LOGIN</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.section}>
                                <Text
                                    style={styles.registerTextStyle}
                                    onPress={() => navigation.navigate('Registration')}>
                                    New Here ? Register
                    </Text>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    img: {

        width: 250,
        height: 120,
        top: -80,
        left: 50,
        resizeMode: 'contain'

    },
    login: {
        width: 370,
        height: 300,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: GLOBAL.COLOR.YELLOW_TRANS_05,
        borderRadius: 20,
    },
    section: {
        flexDirection: 'row',


    },
    inputStyle: {
        flex: 1,
        color: GLOBAL.COLOR.BLACK,
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 10,
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
    },
    registerTextStyle: {
        color: GLOBAL.COLOR.BLACK,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
})