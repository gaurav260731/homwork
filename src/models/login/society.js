import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import {
    Layout,
    Text,
    Button,
    Icon,
    Input
} from 'react-native-ui-kitten';
import { TextInput } from 'react-native';

const StarIcon = (style) => (
    <Icon name='arrow-back-outline' width={32} height={32} fill='#000' />
);

export default class LoginMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Adarsh Palm Retreat'
        }
    };

    goNext = (e) => {
        this.props.navigation.navigate('Services')
    }
    goBack = (e) => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <Layout style={styles.container}>
                <Layout style={{ flex: 3 }}>
                    <Button style={styles.backButton} onPress={this.goBack} appearance='ghost' status='danger' icon={StarIcon} />

                    <Layout style={styles.logo}></Layout>
                </Layout>
                <Layout style={{ flex: 4, alignItems: 'center' }}>
                    <Text category='h2' style={styles.vheader}>Enter your society</Text>
                    <Text category='s2' style={styles.s2}>Bangalore</Text>
                    <Layout style={styles.inputBox}>
                        <Layout style={styles.prefixBox}>
                            <Layout style={{ backgroundColor: '#ccc', height: 25, width: 25 }}></Layout>
                        </Layout>
                        <TextInput
                            style={styles.input}
                            onChangeText={value => this.setState({ value })}
                            value={this.state.value}
                            placeholder=''
                        />
                    </Layout>
                    <Button style={styles.button} onPress={this.goNext}>DONE</Button>
                </Layout>

            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    vheader: {
        color: '#FF7553',
        marginTop: 20,
        fontWeight: 'normal'
    },
    backButton: {
        position: "absolute",
        top: 40,
        left: 5
    },
    logo: {
        backgroundColor: '#ccc',
        height: 200,
        width: 200,
        alignSelf: "center",
        top: 200
    },
    s2: {
        textAlign: 'center',
        padding: 10,
        fontSize: 16,
        color: '#adadad'
    },
    inputBox: {
        padding: 10,
        width: '75%',
        borderBottomColor: '#00D0C0',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    input: {
        flex: 10,
        backgroundColor: 'transparent',
        borderWidth: 0,
        paddingLeft: 10,
        fontSize: 16
    },
    prefixBox: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        borderRightWidth: 1,
        borderRightColor: '#00D0C0'
    },
    button: {
        width: '70%',
        height: 50,
        borderRadius: 100,
        backgroundColor: '#00D0C0',
        borderColor: '#00D0C0',
        textAlign: 'center',
        marginTop: 30,
        fontWeight: 'normal',
        fontSize: 20
    }
});