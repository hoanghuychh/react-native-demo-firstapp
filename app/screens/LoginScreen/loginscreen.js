import React, { Component, PropType } from 'react'
import { Dimensions, TouchableOpacity } from 'react-native';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Button, Input, Image, Icon } from 'react-native-elements';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            number: 1,
            errorMess: "",
            inputValue: '',
            booleanT: true,
        }
        this._Login = this._Login.bind(this);
    }
    validateEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    validatePhone = phone => {
        var intRegex = /(0)+([0-9]{9})|([0-9]{10})\b/;
        console.log("validate phone")

        return intRegex.test(phone);
    }
    componentWillMount() {
        let userInfo = {
            username: '1@gmail.com',
            password: '1'
        }
    }
    componentDidMount() {

    }
    checkLogin() {
        if (this.state.username === userInfo.username && this.state.password === userInfo.password) {
            this.props.navigation.navigate("Docter");
            this.setState({ errorMess: '' })
        }
        else {
            alert("login faled")
        }
    }
    _Login() {
        if (this.state.username === '')
            this.setState({ errorMess: 'Vui lòng nhập vào giá trị' })
        else if (this.state.password === '') {
            this.setState({ errorMess: '' })
            this.setState({ inputValue: 'Vui lòng nhập vào giá trị' })
        }
        else if (this.validateEmail(this.state.username) || this.validatePhone(this.state.username)) {

            this.checkLogin();

        }
        else {
            this.setState({ inputValue: '' })
            console.log('{0}', this.validatePhone(this.state.username))
            this.setState({ errorMess: 'Bạn phải nhập vào email hoặc số điện thoại' })
        }
    }
    render() {
        let { booleanT } = this.state;
        let widthScreen=Dimensions.get('window').width;
        let heightScreen=Dimensions.get('window').height;
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <View style={s.imageBackground}>
                    <Image   source={require("./../../images/9fc6395a8d2676782f37.jpg")}></Image>
                </View>
                <View style={{width:widthScreen ,minHeight:"50%",position:'absolute',marginTop:'50%',justifyContent:'center',alignItems:'center'}}>
                    <View style={s.formLogin}>
                        <Text style={s.lbLogin} >Đăng nhập</Text>
                        <View style={s.inputUser} ref={"nhapInput"}>
                            <Input style={s.inputUsN}
                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                keyboardType='email-address'
                                placeholder="Email hoặc số điện thoại"
                                placeholderTextColor='gray'
                                onChangeText={(username) => this.setState({ username })}
                                value={this.state.username}
                                returnKeyType="next"
                                errorStyle={{ color: 'red' }}
                                errorMessage={this.state.errorMess}
                            />
                        </View>
                        <View style={this.state.number == 1 ? s.inputPassword : s.style2}>
                            <Input style={s.inputPw}
                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                secureTextEntry={booleanT}
                                placeholder="Mật khẩu"
                                placeholderTextColor='gray'
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password}
                                errorStyle={{ color: 'red' }}
                                errorMessage={this.state.inputValue} 
                            />
                            <TouchableOpacity style={s.btnEye}>
                                <Icon name={this.state.booleanT == true ? 'eye-slash' : 'eye'} size={25} color="gray"
                                    onPress={() => {
                                        this.setState({ booleanT: !this.state.booleanT })
                                    }}
                                />
                            </TouchableOpacity>

                        </View>

                        <View><Text style={s.lbForgetPw}>Quên mật khẩu ?</Text></View>
                        <View style={s.btnLogin}>
                            <Button onPress={() => this._Login()}
                                title="Đăng nhập"
                            /></View>
                        <View><Text style={{ padding: 10, paddingLeft: 20 }}>Là người dùng mới ?</Text><Text style={s.btnSignup}>Đăng kí</Text></View>
                        <Text style={s.btnHelp}>Trợ giúp</Text>
                    </View>
                </View>
            </View>
        )
    }


}
const s = StyleSheet.create({
    imageBackground: {
        flex: 1,
    },
    formLogin: {
        backgroundColor: 'white',
        height: "100%",
        width:'100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems:'center',
    },
    lbLogin: {
        fontSize: 30,
        marginTop: 20,
        color: 'mediumblue',
        textAlign: 'center',
    },
    inputUser: {
        borderColor: 'red',
        height: 50,
        margin: 20,
        padding: 7,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,


    },
    inputPassword: {
        height: 50,
        margin: 20,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,

    },
    inputUsN: {
        borderBottomWidth: 0, padding: 0, flex: 1

    },
    inputPw: {
        borderBottomWidth: 20
    }
    ,
    btnLogin: {
        height: 30,
        padding: 10,
        margin: 20,
        borderRadius: 20,

    },
    lbForgetPw: {
        textAlign: 'right',
        color: 'blue',
        paddingRight: 30
    },
    btnSignup: {
        color: 'blue',
        position: 'absolute',
        margin: 10,
        marginLeft: 150
    },
    btnHelp: {
        textAlign: 'right',
        marginRight: 40,
        color: 'blue'
    }, error: {
        position: "absolute",
        bottom: 0,
        color: "red",
        fontSize: 12
    },
    btnEye: {
        position: 'absolute',
        top: 13,
        right: 20
    }
})