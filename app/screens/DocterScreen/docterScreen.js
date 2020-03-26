import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Platform,
    PixelRatio,
    Button,
    TouchableOpacity
} from "react-native";
import { Input, Icon } from "react-native-elements";
import ListDocter from "./docter";

export default class DocterScreen extends Component {

    constructor() {
        super()
        this.state = {
        }
    }
    static navigationOptions = ({navigation}) => { return { 
        headerTitle: 'Danh sách bác sĩ',   } }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', width: '100%', backgroundColor: "#ffffff" }}>
                <View style={style.unBottonLineInput}>
                    <View style={style.boxInput}>
                        <Input
                            placeholder="Nhập tên bác sĩ"
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            placeholderStyle={{ fontFamily: 'OpenSans-Regular' }}
                            inputStyle={{ paddingRight: '10%' }}
                        />
                        <TouchableOpacity style={{ position: 'absolute', right: '4%', top: 5 }}>
                            <Icon name="search" size={25} color="gray"
                                onPress={() => {
                                    alert("Tìm kiếm")
                                }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, width: "100%", alignItems: "center", backgroundColor: "#d3d3d3" }}>
                    <ListDocter navigation={this.props.navigation}></ListDocter>
                </View>
            </View>

        )
    }
}

const style = StyleSheet.create({
    boxInput: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,

    },
    unBottonLineInput: {
        width: '95%',
        height: 40,
        padding: 2,

    }
})