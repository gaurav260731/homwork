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

export default class LoginOTP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    };

    goNext = (e) => {
        this.props.navigation.navigate('Society')
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
                    <Text style={styles.vheader} category='h2'>Verification code</Text>
                    <Text category='s2' style={styles.s2, { paddingTop: 10, color: '#adadad' }}>Enter the verification code sent</Text>
                    <Text category='s2' style={styles.s2, { paddingTop: 0, paddingBottom: 20, color: '#adadad' }}>to +91 1234567890</Text>
                    <Layout style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            onChangeText={value => this.setState({ value1 })}
                            value={this.state.value1}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={value => this.setState({ value2 })}
                            value={this.state.value2}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={value => this.setState({ value3 })}
                            value={this.state.value3}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={value => this.setState({ value4 })}
                            value={this.state.value4}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={value => this.setState({ value5 })}
                            value={this.state.value5}
                        />
                    </Layout>
                    <Button style={styles.button} onPress={this.goNext}>VERIFY</Button>

                    <Text category='s2' style={styles.s2, { color: '#8B8B8B', marginTop: 15 }}>Didn't get code RESEND!</Text>
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
        paddingTop: 15,
        fontSize: 16,
        fontWeight: '100'
    },
    inputBox: {
        padding: 15,
        width: '70%',
        borderRadius: 100,
        borderColor: '#00D0C0',
        borderWidth: 1,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
        borderBottomWidth: 2,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
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