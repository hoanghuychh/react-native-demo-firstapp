import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconInfo from "./icon";
import { Image, Button } from "react-native-elements";  

export default class ItemDocter extends Component {
    constructor(){
        super()
        this.state={
        }
    }
    render() {
        const navigation=this.props;
        const cardItem={
            onTouchEnd:()=>{
                this.props.navigation.navigate("DetailDocter",{item:this.props.item,navigation:navigation});
                // console.log("this is naviagtion:"+navigation);
            }
        }
        return ( 
            <View style={style.boxItem} {...cardItem} >
                <View style={this.props.item.HocVan==""?style.imageItemKhongHocVan:style.imageItemHocVan}>
                    <Image style={{width:100,height:100,borderRadius:50}} source={require("./../../images/stockman.jpg")} />
                </View>
                <View style={{width:"10%"}}></View>
                <View style={style.infoItem}>
                    <View style={style.TenItem}>
                        <Text style={{fontSize:15,margin:5}}>{this.props.item.Ten}</Text>
                    </View>
                    <View style={style.oldItem}>
                        <IconInfo nameIcon="user"/>
                        <Text style={{fontSize:13,fontFamily:'roboto',color:'gray'}}>  {this.props.item.GioiTinh} .</Text><Text style={{fontSize:13,fontFamily:'roboto',color:'gray'}}> {this.props.item.Tuoi} Tuổi</Text>
                    </View>
                    <View style={this.props.item.HocVan==""?style.disableView:style.hocVanItem}>
                        <IconInfo nameIcon="graduation-cap" />
                        <Text style={{fontSize:13,fontFamily:'roboto',color:'gray'}}>  {this.props.item.HocVan}</Text>
                    </View>
                    <View style={style.ngheItem}>
                        <IconInfo nameIcon="stethoscope" />
                        <Text style={{fontSize:13,fontFamily:'roboto',color:'gray'}}>  {this.props.item.Nghe}</Text>
                    </View>
                    <View style={style.vienItem}>
                        <IconInfo nameIcon="map-marker" />
                        <Text style={{fontSize:13,fontFamily:'roboto',color:'gray'}}>  {this.props.item.Vien}</Text>
                    </View>
                    <View style={this.props.item.HocVan==""?style.flexHocVan:style.disableView}></View>
                </View>
            </View> 
        )
    }
}
const style = StyleSheet.create({
    boxItem: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: '#ffffff',
        width: "95%",
        borderRadius: 10, 
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        flexDirection:'row',
        margin:10
        
    },
    imageItemHocVan: {
        width:'20%',
        height:'60%',
        borderRadius:1000,
        overflow: 'hidden',
        margin:10,
        borderWidth:1,
        borderColor:'#ffffff',
        shadowColor:'blue', 
        shadowOpacity:0,
        elevation:1,

    },
    imageItemKhongHocVan: {
        width:'20%',
        height:'60%',
        borderRadius:1000,
        overflow: 'hidden',
        margin:10,
        borderWidth:2,
        borderColor:'#ffffff',  
        shadowOpacity:1,
        elevation:1,
    },
    infoItem:{
        flex:1,
        flexDirection:'column',
        fontSize:15, 
    },
    TenItem:{ 

    },
    oldItem:{
        flexDirection:'row'
    },
    hocVanItem:{

        flexDirection:'row'
    },
    ngheItem:{

        flexDirection:'row'
    },
    vienItem:{

        flexDirection:'row'
    },
    disableView:{
        height:0,
        width:0
    },
    flexHocVan:{

    }
})