import React from 'react'

import uuid from 'react-native-uuid'

var itemList = [{
    "id": uuid.v4(),
    "name": "name 1",
    "type": "type 1",
    "desc": "desc 1"
},
{
    "id": uuid.v4(),
    "name": "name 1",
    "type": "type 1",
    "desc": "desc 1"
},
{
    "id": uuid.v4(),
    "name": "name 1",
    "type": "type 1",
    "desc": "desc 1"
},
{
    "id": uuid.v4(),
    "name": "name 1",
    "type": "type 1",
    "desc": "desc 1"
}, {
    "id": uuid.v4(),
    "name": "name 1",
    "type": "type 1",
    "desc": "desc 1"
}
]



export function getItem() {
    return itemList;
}
