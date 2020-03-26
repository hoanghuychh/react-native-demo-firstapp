import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    FlatList,
} from "react-native";
import {
    Image,
    Button,
    Icon
} from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { dataListVien,dataListNghe } from "../../data/data";

class FlatListVien extends Component {
    constructor(){
        super()
        this.state={
            itemVien:"null",
            hover:true
        }
    }
    componentWillMount(){
        this.setState({itemVien:this.props.item});
    }
    render() {
        
        return (
            <View style={this.state.hover == true ? style.touchEnd : style.touchStart}
                onTouchStart={() => {
                    this.setState({ hover: false })
                }}
                onTouchCancel={() => {
                    this.setState({ hover: true })
                }} >
                <Image source={{uri:this.state.itemVien.icon}} style={{ width: 30, height: 30, borderRadius: 15 }} />

                <Text>  {this.state.itemVien.Vien}</Text>
            </View>
        )
    }
}
class FlatListNghe extends Component {
    constructor(){
        super()
        this.state={
            itemNghe:"null",
            hover:true
        }
    }
    componentWillMount(){
        this.setState({itemNghe:this.props.item});
    }
    render() {
        
        return (
            <View style={this.state.hover == true ? style.touchEnd : style.touchStart}
                onTouchStart={() => {
                    this.setState({ hover: false })
                }}
                onTouchCancel={() => {
                    this.setState({ hover: true })
                }} >
                <Text>  {this.state.itemNghe.Nghe}</Text>
            </View>
        )
    }
}
export default class DetailDocter extends Component {
    static navigationOptions={
        headerTransparent: true,
        title:'Thông tin bác sĩ',
        Top:200,
    }
    constructor(props) {
        super(props)
        this.state = {
            navigator: "null",
            itemdata: "null",
            hover2: true,
            droplist: false,
        }
    }
    componentWillMount() {
        const { navigation } = this.props;
        this.setState({ itemdata: navigation.getParam('item', 'null') })
    }
    componentDidMount() {

    }
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <View style={style.background}>
                        <Image style={{ width: '100%', height: "100%" }} source={{ uri: this.state.itemdata.image }} />
                    </View>
                    <View style={{ width: "100%", alignItems: 'center' }}>
                        <Image style={{ width: 60, height: 60, borderRadius: 30, top: -30 }} source={{ uri: this.state.itemdata.image }} />
                        <Text style={{ fontSize: 21, color: '#000000' }}>{this.state.itemdata.Ten}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>{this.state.itemdata.HocVan}</Text>
                            <Text>   •   </Text>
                            <Text>{this.state.itemdata.Tuoi}</Text>
                            <Text>tuổi</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="ios-star-outline" type='ionicon' size={16} />
                            <Icon name="ios-star-outline" type='ionicon' size={16} />
                            <Icon name="ios-star-outline" type='ionicon' size={16} />
                            <Icon name="ios-star-outline" type='ionicon' size={16} />
                            <Icon name="ios-star-outline" type='ionicon' size={16} />
                            <Text>( 0 Đánh giá)</Text>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 20, margin: 10, width: "90%", height: 80, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>Đánh giá của bạn</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="ios-star-outline" type='ionicon' size={28} />
                                <Icon name="ios-star-outline" type='ionicon' size={28} />
                                <Icon name="ios-star-outline" type='ionicon' size={28} />
                                <Icon name="ios-star-outline" type='ionicon' size={28} />
                                <Icon name="ios-star-outline" type='ionicon' size={28} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ alignItems: 'center', margin: 10 }} >
                                <Text style={{ fontSize: 20, color: '#000000' }}>0</Text>
                                <Text style={{ color: '#17171a' }}>Lượt tư vấn</Text>
                            </View>
                            <View style={{ alignItems: 'center', margin: 10 }} >
                                <Text style={{ fontSize: 20, color: '#000001' }}>0</Text>
                                <Text style={{ color: '#17171a' }}>Lượt cảm ơn</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '90%' }}>
                        <View style={{ padding: 5 }}>
                            <Text style={style.fontTieuDe}>Thông tin chung</Text>
                            <View style={{ flexDirection: 'row', margin: 5 }}>
                                <Icon name='ios-calendar' type='ionicon' color='#93aacf' size={17} style={style.icon} />
                                <Text>  {this.state.itemdata.KinhNghiem}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', margin: 5 }}>
                                <Icon name='ios-call' type='ionicon' color='#93aacf' size={17} style={style.icon} />
                                <Text style={{ color: '#384cff' }}>  {this.state.itemdata.sdt}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', margin: 5 }}>
                                <Icon name='ios-mail' type='ionicon' color='#93aacf' size={17} style={style.icon} />
                                <Text>  {this.state.itemdata.mail}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', margin: 5, height: 50, alignItems: 'center' }}>
                                <Icon name='map-marker' type='font-awesome' color='#93aacf' size={17} style={style.icon} />
                                <FlatList style={{width:'100%'}}
                                    horizontal={true}
                                    data={dataListVien}
                                    renderItem={({ item,index }) => {
                                        return (
                                            <FlatListVien item={item} index={index} parentFlastList={this}>

                                            </FlatListVien>
                                        )
                                    }}>

                                </FlatList>
                            </View>
                            <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center' }}>
                                <Icon name='stethoscope' type='font-awesome' color='#93aacf' size={17} style={style.icon} />
                                <FlatList style={{width:'100%'}}
                                    horizontal={true}
                                    data={dataListNghe}
                                    renderItem={({ item,index }) => {
                                        return (
                                            <FlatListNghe item={item} index={index} parentFlatList={this}>

                                            </FlatListNghe>
                                        )
                                    }}>

                                </FlatList>
                            </View>
                        </View>
                        <View>
                            <Text style={style.fontTieuDe}>Học vấn & kinh nghiệm</Text>
                        </View>
                        <View style={this.state.droplist == true ? style.listDown : style.listUp}>
                            <Text>Mô tả</Text>
                            <Text>{this.state.itemdata.MoTa}</Text>
                            <Text>Chức danh</Text>
                            <Text>{this.state.itemdata.ChucDanh}</Text>
                            <Text>Quá trình đào tạo</Text>
                            <Text>{this.state.itemdata.DaoTao}</Text>
                            <Text>Công nghệ nghiên cứu</Text>
                            <Text>{this.state.itemdata.NghienCuu}</Text>
                            <Text>Quá trình làm việc</Text>
                            <Text>{this.state.itemdata.QuaTrinhLamViec}</Text>
                            <Text>Tổ chức</Text>
                            <Text>{this.state.itemdata.ToChuc}</Text>
                        </View>
                    </View>

                    <View style={{ width: '95%', height: 20, margin: 20, }}>
                        <Button title={this.state.droplist == true ? "Thu gọn" : "Xem thêm"}
                            onPress={() => {
                                this.setState({ droplist: !this.state.droplist })
                                console.log(this.state.droplist)
                            }}
                        />
                    </View>
                    <View style={{ width: '95%', alignItems: 'center', backgroundColor: '#f5f5f5', marginTop: 15, paddingTop: 10, paddingBottom: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={style.box}>
                                <Image style={{ width: 22, height: 22 }} source={require('./../../images/message.png')} />
                                <Text>Trò chuyện</Text>
                            </View>
                            <View style={style.box}>
                                <Image style={{ width: 22, height: 22 }} source={require('./../../images/calendarColored.png')} />
                                <Text>Đặt lịch</Text>
                            </View>
                            <View style={style.box}>
                                <Image style={{ width: 22, height: 22 }} source={require('./../../images/calendarHistory.png')} />
                                <Text>Lịch sử</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={style.box}>
                                <Image style={{ width: 22, height: 22 }} source={require('./../../images/benhAn.png')} />
                                <Text>Sổ khám bệnh</Text>
                            </View>
                            <View style={style.box}>
                                <Image style={{ width: 22, height: 22 }} source={require('./../../images/sendMoney.png')} />
                                <Text>Chuyển tiền</Text>
                            </View>
                            <View style={style.box}>
                                <Image style={{ width: 22, height: 22 }} source={require('./../../images/question_info.png')} />
                                <Text>Đã trả lời</Text>
                            </View>
                        </View>


                    </View>
                </View>

            </ScrollView>
        )
    }
}

let widthScreen = Dimensions.get('window').width;
let heightScreen = Dimensions.get('window').height;
const style = StyleSheet.create({
    background: {
        width: "100%",
        height: heightScreen * 0.4,
    },
    icon: {

        margin: 8
    },
    touchStart: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 30,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        opacity: 0.2
    },
    touchEnd: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 30,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    },
    listUp: {
        height: 0,
        backgroundColor: '#fff'
    },
    listDown: {

    },
    box: {
        width: '27%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        margin: 8,
        paddingBottom: 15,
        paddingTop: 10,
        paddingLeft: 3,
        backgroundColor: '#ffffff',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    },
    fontTieuDe: {
        color: '#384cff',
        fontSize: 15
    }

})