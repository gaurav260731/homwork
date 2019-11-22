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
      value: ''
    }
  };

  goNext = (e) => {
    this.props.navigation.navigate('OTP')
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
          <Text category='h2' style={styles.textcolor}>LOG IN</Text>
          <Text category='s2' style={styles.s2}>Good to see you again</Text>
          <Layout style={styles.inputBox}>
            <Layout style={styles.prefixBox}>
              <Layout style={{ backgroundColor: '#ccc', height: 25, width: 25 }}></Layout>
              <Text> +91</Text>
            </Layout>
            <TextInput
              style={styles.input}
              onChangeText={value => this.setState({ value })}
              value={this.state.value}
              placeholder='Enter your mobile number'
            />
          </Layout>
          <Button style={styles.button} onPress={this.goNext}>SEND OTP</Button>
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
  textcolor: {
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
    padding: 2,
    fontSize: 16,
    fontWeight: '100',
    marginBottom: 40
  },
  inputBox: {
    padding: 10,
    width: '90%',
    borderRadius: 100,
    borderColor: '#00D0C0',
    borderWidth: 1,
    flexDirection: 'row'
  },
  input: {
    flex: 10,
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingLeft: 10,
  },
  prefixBox: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    borderRightWidth: 1,
    borderRightColor: '#00D0C0'
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
    fontSize: 20
  }
});