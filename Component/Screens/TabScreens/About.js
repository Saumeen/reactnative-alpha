import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import GLOBAL from '../../AppConstant'

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.about}>
                <Text style={styles.header}>About</Text>
            </View>
            <View style={styles.info}>
                <Text>Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. </Text>
                <Text>Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. </Text>
                <Text>Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. </Text>
                <Text>Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. </Text>
                <Text>Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. </Text>
                <Text>Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. </Text>
                <Text>Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. </Text>
                <Text>Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. </Text>
                <Text>Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. Demo pharagraph. </Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: GLOBAL.STATUS_HEIGHT,
        backgroundColor: GLOBAL.COLOR.WHITE,
        flexDirection: 'column',
        padding: 20,
    },
    info: {
        flex: 1,
        alignItems: 'center',
        fontSize: 50,
        fontWeight: "500",
        backgroundColor: GLOBAL.COLOR.EERIE_BLACK_01,
        borderRadius: 20,
        paddingVertical: 10,
        marginTop: 10,
        padding: 15
    },
    about: {
        width: "100%",
        height: "30%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: GLOBAL.COLOR.YELLOW_TRANS_05,
        borderRadius: 20,
    },
    header: {
        fontSize: 70,
        fontWeight: "bold"
    },

})
