import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import {
  Layout,
  Text,
  Button,
} from 'react-native-ui-kitten';

import Carousel, { Pagination } from 'react-native-snap-carousel';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const sliderWidth = viewportWidth;
const slideHeight = viewportHeight * 0.36;


export default class LoginAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [1, 2, 3, 4],
      activeSlide: 0
    }
  };

  goNext = (e) => {
    this.props.navigation.navigate('Mobile')
  }

  _renderItem({ item, index }) {
    return (
      <Layout style={styles.slide}>
        <Text style={styles.title}>{}</Text>
      </Layout>
    );
  }

  render() {
    return (
      <Layout style={styles.container}>
        <Layout style={styles.carousel}>
          <Carousel
            layout={'default'}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={viewportWidth}
            itemWidth={viewportHeight}
            onSnapToItem={(index) => this.setState({ activeSlide: index })}
          />

          <Pagination
            dotsLength={this.state.entries.length}
            activeDotIndex={this.state.activeSlide}
            containerStyle={{ top: -70 }}
            dotStyle={styles.dotStyle}
            inactiveDotStyle={{
              borderColor: '#007c73',
              borderWidth: 1,
              backgroundColor: 'transparent'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </Layout>
        <Layout style={styles.about}>
          <Text category='h6' style={{ color: '#FF7553', fontSize: 20 }}>About us</Text>
          <Text category='p2' style={styles.aboutDetails}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          <Button style={styles.button} onPress={this.goNext}>LOG IN</Button>
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontSize: 24
  },
  carousel: {
    flex: 2
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00D0C0'
  },
  about: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    overflow: 'scroll'
  },
  aboutDetails: {
    textAlign: 'center',
    padding: 15,
    fontSize: 18,
    lineHeight: 25,
    color: '#aaa',
    width: '80%'
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