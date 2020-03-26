import React,{ Component } from "react";
import { View, FlatList, Text } from "react-native";
import {dataListDocter} from '../../data/data'
import ItemDocter from './itemDocter'


export default class ListDocter extends Component {
    constructor(){
        super()
        this.state={
        }
    }
    render() {
        const {navigation}=this.props;
        console.log(navigation);
        return (
            <View style={{ flex: 1 ,width:'100%',backgroundColor:"#ffffff"}}>
                <FlatList data={dataListDocter}
                    style={{alignItem:'flex-end'}}
                    renderItem={({ item, index }) => {
                        return <ItemDocter item={item} index={index} navigation={navigation}>
                        </ItemDocter>
                    }
                    }
                >
                </FlatList>
            </View>
        )
    }
}