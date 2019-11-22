import React, { Component } from 'react';
import {
    StyleSheet,
    View, Image, TextInput
} from 'react-native';
import {
    Layout,
    Text,
    Button,
  } from 'react-native-ui-kitten';
import { ScrollView } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input';

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
            city: 'Adarsh Palm Retreat'
        }
    }

    render() {
        return(
                <ScrollView style={styles.container}>
                   <Layout style={{marginTop: 30, marginLeft: 10, marginRight: 10 }}>
                        <View style={styles.sub_container}>
                            <Text style={{fontWeight: 'bold', marginLeft:20}}>Orange Kinnow Malta</Text>
                            <View style={{flex:1, flexDirection: 'row', marginLeft: 20, width: '100%'}}>
                                <Text style={{ fontSize: 12}}>Quantity</Text>
                                <Text style={{fontWeight:'bold'}}>: 1KG</Text>
                                    <View style={{marginLeft: 20,flex: 1, flexDirection: 'row' }}>
                                        <NumericInput 
                                            value={this.state.value} 
                                            onChange={value => this.setState({value})} 
                                            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                                            totalWidth={100} 
                                            totalHeight={25} 
                                            iconSize={25}
                                            step={1}
                                            valueType='real'
                                            rounded 
                                            textColor='#00D0C0'
                                            borderColor='#00D0C0'
                                            iconStyle={{ color: '#00D0C0', borderColor:'#00D0C0'}} 
                                            rightButtonBackgroundColor='#fff' 
                                            leftButtonBackgroundColor='#fff'/>
                                            <Text style={{ marginLeft: 20}}>₹130</Text>
                                    </View>
                            </View>
                            <View style={{borderBottomWidth: 1, borderBottomColor: '#ccc'}}></View>
                        </View> 

                        <View style={styles.sub_container}>
                            <Text style={{fontWeight: 'bold', marginLeft:20}}>Orange Kinnow Malta</Text>
                            <View style={{flex:1, flexDirection: 'row', marginLeft: 20, width: '100%'}}>
                                <Text style={{ fontSize: 12}}>Quantity</Text>
                                <Text style={{fontWeight:'bold'}}>: 1KG</Text>
                                    <View style={{marginLeft: 20,flex: 1, flexDirection: 'row' }}>
                                        <NumericInput 
                                            value={this.state.value} 
                                            onChange={value => this.setState({value})} 
                                            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                                            totalWidth={100} 
                                            totalHeight={25} 
                                            iconSize={25}
                                            step={1}
                                            valueType='real'
                                            rounded 
                                            textColor='#00D0C0'
                                            borderColor='#00D0C0'
                                            iconStyle={{ color: '#00D0C0', borderColor:'#00D0C0'}} 
                                            rightButtonBackgroundColor='#fff' 
                                            leftButtonBackgroundColor='#fff'/>
                                            <Text style={{ marginLeft: 20}}>₹130</Text>
                                    </View>
                            </View>
                            <View style={{borderBottomWidth: 1, borderBottomColor: '#ccc'}}></View>
                        </View> 
                    </Layout>

                    <View style={styles.bellNotify}>
                        <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 20, height: 20, marginRight: 10 }} />
                        <Text style={{color: '#FF7553', borderLeftColor: '#FF7553', borderLeftWidth: 1, paddingLeft: 8}}>Any instructions? Eg: Don't ring the doorbell </Text>
                    </View>  

                    <Layout style={styles.amount}>
                        <Text style={{fontSize: 12, color: '#FF7553'}}>Invoice</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderBottomColor: '#ccc', borderBottomWidth: 1}}>         
                            <Text>Item Total</Text>
                            <Text >₹210</Text>  
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 15, borderBottomColor: '#ccc', borderBottomWidth: 1}}>
                                <Text>Partner Delivery Fee</Text>
                                <Text>₹21</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 15,}}>
                                <Text>Grand Total</Text>
                                <Text>₹222</Text>
                        </View>
                    </Layout> 
                        <Text style={{fontSize: 12, marginLeft:30, marginTop: 10}}>Please set up your delivery address</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={city => this.setState({ city })}
                            value={this.state.city}
                            placeholder=''
                        />
                        <Button style={styles.button} >Pay Now</Button> 
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
    },
    sub_container: {
        backgroundColor: '#fff',
        height: 100,
        paddingTop: 20,
    },
    bellNotify : {
        height: 50, 
        flex:1, 
        flexDirection: 'row', 
        backgroundColor: '#fff', 
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        paddingVertical: 15,
    },
    input: {
        flex: 10,
        backgroundColor: 'transparent',
        borderWidth: 0,
        paddingLeft: 30,
        fontSize: 16,
    },
    amount: {
        marginTop: 20, 
        backgroundColor: '#fff',
        height: 200,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 20,
        marginTop: 10
    },
    button: {
      width: '90%',
      height: 50,
      borderRadius: 100,
      backgroundColor: '#00D0C0',
      borderColor: '#00D0C0',
      textAlign: 'center',
      marginTop: 20,
      fontWeight: 'normal',
      fontSize: 20,
      marginLeft: 20,
      marginRight: 10
    }
})