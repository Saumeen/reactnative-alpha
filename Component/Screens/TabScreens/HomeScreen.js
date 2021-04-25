import React, { useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

import GLOBAL from '../../AppConstant'
import CardList from '../../Common/CardList'

import { getItem } from '../../../Db/ItemData'

function geetingMsg(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (ampm == 'am' && hours >= 4 && hours <= 11 && minutes < 59) {
        return "Good Morning"
    }
    else if (ampm == 'pm' && (hours >= 12 || hours <= 4)) {
        return "Good Afternoon"
    }
    else if (ampm == 'pm' && hours > 4 && hours <= 9) {
        return "Good Evening"
    } else {
        return ""
    }

}



export default (props) => {

    const [greeting, setGreeting] = useState('');
    const opacity = new Animated.Value(0);



    useEffect(() => {

        //console.log(getItem());

        setInterval(() => {
            setGreeting(geetingMsg(new Date));
        }, 1000);

        Animated.timing(opacity, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true
        }).start();

    })


    return (
        <View style={styles.container}>
            <View style={[styles.card, { backgroundColor: GLOBAL.COLOR.YELLOW_TRANS_05 }]}>
                <Text style={styles.title}>Hello there !!</Text>
                <Animated.Text style={[styles.greeting, { opacity: opacity }]} >{greeting}</Animated.Text>
            </View>
            <View style={[
                styles.card,
                {
                    backgroundColor: GLOBAL.COLOR.DARK_OLIV_GREEN_TRAN,
                    justifyContent: 'center', alignItems: 'center'
                }]}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 15 }} >Your Item List </Text>
            </View>

            <View>
                <CardList data={getItem()} color={GLOBAL.COLOR.EERIE_BLACK_01} />
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
    card: {
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderRadius: 20,
        padding: 20,
        marginBottom: 5
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    greeting: {
        fontSize: 30,
        fontWeight: "bold",
        paddingVertical: 5,
        color: GLOBAL.COLOR.BLACK
    }

})
