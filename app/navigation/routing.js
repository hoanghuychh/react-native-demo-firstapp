import React,{Component} from 'react'
import { View, Text,Button } from 'react-native';
import {createStackNavigator ,createAppContainer} from 'react-navigation'
import DocterScreen from './../screens/DocterScreen/docterScreen'
import DetailDocter from './../screens/DocterScreen/detailDocter'
// import LoginScreen from './../screens/LoginScreen/loginscreen'
class Routing extends Component{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
              title="Go to Details"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('ListDocter', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
              }}
            />
          </View>
        )
    }
}

const AppNavigator=createStackNavigator(
    {
        Home:Routing,
        ListDocter:DocterScreen,
        DetailDocter:DetailDocter,
    },
    {
        initialRouteName:"Home",
    }
)
// const navigationOptions = ({navigation}) => { return { headerTitle: <Text style={{color: 'white', fontSize: 18}}>Test</Text>, headerTransparent: true, headerStyle: { borderBottomWidth: 0, } } }
export default createAppContainer(AppNavigator);