import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'

import Card from './CardItem'
export default (props) => {


    const renderItem = ({ item }) => (
        <Card text={item.name} type={item.type} desc={item.desc} color={props.color} />
    );
    return (

        <FlatList
            data={props.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        >
        </FlatList>

    )
}

