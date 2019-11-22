import React, { Component } from 'react';
import {
    StyleSheet,
    View, Image
} from 'react-native';
import {
    Layout,
    Text,
    Button,
  } from 'react-native-ui-kitten';
import { ScrollView } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input';

export default class Checkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }

    goNext = (e) => {
        this.props.navigation.navigate('Home');
      }

    render() {
        return(
            <ScrollView style={styles.main_container}>
                <View style={styles.container}>
                    <View style={styles.listview}>
                        <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 100, height: 100,}} />
                        <View style={{flex:1, flexDirection: 'column',borderRightColor: '#ccc', borderLeftWidth: 1, marginLeft: 10}}>
                            <Text style={{fontWeight: 'bold', padding: 5}}>Orange Kinnow Malta</Text>
                            <Text style={{padding:5}}>Fresh Fr</Text>
                            <Text  style={{padding:5}}>Quantity: 1KG</Text>
                            <View style={{flex:1, flexDirection: 'row',}}>
                                <Text  style={{padding:5}}>Price: 300</Text>
                                <View style={{ marginLeft: 50 }}>
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
                                        iconStyle={{ color: '#00D0C0', borderColor:'#00D0C0', borderRadius: 50}} 
                                        rightButtonBackgroundColor='#fff' 
                                        leftButtonBackgroundColor='#fff'/>
                                </View>
                            </View>
                        </View>
                    </View>    
                </View>
                <View style={styles.container}>
                    <View style={styles.listview}>
                        <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 100, height: 100, }} />
                        <View style={{flex:1, flexDirection: 'column',borderRightColor: '#ccc', borderLeftWidth: 1, marginLeft: 10}}>
                            <Text style={{fontWeight: 'bold', padding: 5}}>Orange Kinnow Malta</Text>
                            <Text style={{padding:5}}>Fresh Fr</Text>
                            <Text  style={{padding:5}}>Quantity: 1KG</Text>
                            <View style={{flex:1, flexDirection: 'row',}}>
                                <Text  style={{padding:5}}>Price: 300</Text>
                                <View style={{ marginLeft: 50 }}>
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
                                        iconStyle={{ color: '#00D0C0', borderColor:'#00D0C0', borderRadius: 50}} 
                                        rightButtonBackgroundColor='#fff' 
                                        leftButtonBackgroundColor='#fff'/>
                                </View>
                            </View>
                        </View>
                    </View>    
                </View>
                <View style={styles.container}>
                    <View style={styles.listview}>
                        <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 100, height: 100, }} />
                        <View style={{flex:1, flexDirection: 'column',borderRightColor: '#ccc', borderLeftWidth: 1, marginLeft: 10}}>
                            <Text style={{fontWeight: 'bold', padding: 5}}>Orange Kinnow Malta</Text>
                            <Text style={{padding:5}}>Fresh Fr</Text>
                            <Text  style={{padding:5}}>Quantity: 1KG</Text>
                            <View style={{flex:1, flexDirection: 'row',}}>
                                <Text  style={{padding:5}}>Price: 300</Text>
                                <View style={{ marginLeft: 50 }}>
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
                                </View>
                            </View>
                        </View>
                    </View>    
                </View>
                <View style={styles.container}>
                    <View style={styles.listview}>
                        <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 100, height: 100, }} />
                        <View style={{flex:1, flexDirection: 'column',borderRightColor: '#ccc', borderLeftWidth: 1, marginLeft: 10}}>
                            <Text style={{fontWeight: 'bold', padding: 5}}>Orange Kinnow Malta</Text>
                            <Text style={{padding:5}}>Fresh Fr</Text>
                            <Text  style={{padding:5}}>Quantity: 1KG</Text>
                            <View style={{flex:1, flexDirection: 'row',}}>
                                <Text  style={{padding:5}}>Price: 300</Text>
                                <View style={{ marginLeft: 50 }}>
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
                                </View>
                            </View>
                        </View>
                    </View>    
                </View>
                <Layout style={{flex: 1,justifyContent: 'flex-end', marginTop: 80}}>
                <View style={styles.checkout}>
                    <View style={{flex:1, flexDirection: 'column', padding: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>3 Items</Text>
                        <Text style={{fontSize: 18, fontWeight: '200', color: '#FF7553' }}>₹498</Text>
                    </View>
                    <Button style={styles.button} onPress={this.goNext}>CHECKOUT</Button>
                </View>
                </Layout>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main_container:{
       backgroundColor: '#ccc',
    },
    container: {
        borderColor: '#ccc',
        height: 160,
        marginTop:10,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10
    },
    listview : {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        margin: 20,
        flexDirection: 'row',
    },
    addtocart:{
        width: 100,
        marginLeft: 60,
        borderRadius:15,
        backgroundColor: '#00D0C0',
        borderColor: '#00D0C0'
    },
    total: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    button: {
        width: '30%',
        height: 50,
        borderRadius: 100,
        backgroundColor: '#00D0C0',
        borderColor: '#00D0C0',
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'normal',
        fontSize: 20,
        marginLeft: 20,
        marginRight: 10,
      },
    checkout: {
        backgroundColor:'#fff', 
        height: 100, 
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})