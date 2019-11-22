import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, SafeAreaView } from 'react-native';
import {
    Layout,
    Button,
    Icon
} from 'react-native-ui-kitten';
import { DrawerActions } from 'react-navigation-drawer';
import Carousel, { Pagination } from 'react-native-snap-carousel';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const sliderWidth = viewportWidth;
const slideHeight = viewportHeight * 0.36;

const StarIcon = (style) => (
    <Icon name='arrow-back-outline' width={32} height={32} fill='#000' />
);

export default class HomeService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [1, 2, 3, 4],
            activeSlide: 0
        }
    };
    goBack = (e) => {
        this.props.navigation.navigate('Society')
    }
    goList = (e) => {
        this.props.navigation.navigate('Fruit')
    }

    _renderItem({ item, index }) {
        return (
            <Layout style={styles.slide}>
                <Text style={styles.title}>{}</Text>
            </Layout>
        );
    }

    openDrawer = () => {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    }

    render() {
        return (
            <Layout style={styles.container}>
                <ScrollView>
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
                    <Layout>
                        <Button style={styles.backButton} onPress={this.openDrawer} icon={MenuIcon}></Button>
                        <Text style={styles.header}>Product & Services</Text>
                        <Layout style={styles.product}>
                            <View style={styles.view}>
                                <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 150, height: 150 }} />
                                <Text style={{ textAlign: 'center', backgroundColor: '#ccc' }} onPress={this.goList}>Fruits & Vegetables</Text>
                            </View>
                            <View style={styles.view}>
                                <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 150, height: 150 }} />
                                <Text style={{ textAlign: 'center', backgroundColor: '#ccc' }}>Grocery</Text>
                            </View>
                        </Layout>
                        <Layout style={styles.product}>
                            <View style={styles.view}>
                                <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 150, height: 150 }} />
                                <Text style={{ textAlign: 'center', backgroundColor: '#ccc' }}>House Audit</Text>
                            </View>
                            <View style={styles.view}>
                                <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 150, height: 150 }} />
                                <Text style={{ textAlign: 'center', backgroundColor: '#ccc' }}>Home Services</Text>
                            </View>
                        </Layout>
                        <Layout style={styles.product}>
                            <View style={styles.view}>
                                <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 150, height: 150 }} />
                                <Text style={{ textAlign: 'center', backgroundColor: '#ccc' }}>Move In/Move Out</Text>
                            </View>
                            <View style={styles.view}>
                                <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 150, height: 150 }} />
                                <Text style={{ textAlign: 'center', backgroundColor: '#ccc' }}>Annual Packages</Text>
                            </View>
                        </Layout>
                    </Layout>
                    <Layout>
                        <Text style={styles.header}>Popular Products</Text>
                        <Layout style={styles.service}>
                            <View style={styles.view}>
                                <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 150, height: 150 }} />
                                <Text style={{ textAlign: 'center', backgroundColor: '#ccc', }}>Centered text</Text>
                            </View>
                            <View style={styles.view}>
                                <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 150, height: 150 }} />
                                <Text style={{ textAlign: 'center', backgroundColor: '#ccc', }}>Centered text</Text>
                            </View>
                            <View style={styles.view}>
                                <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 150, height: 150 }} />
                                <Text style={{ textAlign: 'center', backgroundColor: '#ccc', }}>Centered text</Text>
                            </View>
                        </Layout>
                    </Layout>
                    <Layout>
                        <Text style={styles.header}>Popular Services</Text>
                        <Layout style={styles.service}>
                            <View style={styles.view}>
                                <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 150, height: 150 }} />
                                <Text style={{ textAlign: 'center', backgroundColor: '#ccc', }}>Centered text</Text>
                            </View>
                            <View style={styles.view}>
                                <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 150, height: 150 }} />
                                <Text style={{ textAlign: 'center', backgroundColor: '#ccc', }}>Centered text</Text>
                            </View>
                            <View style={styles.view}>
                                <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 150, height: 150 }} />
                                <Text style={{ textAlign: 'center', backgroundColor: '#ccc', }}>Centered text</Text>
                            </View>
                        </Layout>
                    </Layout>
                </ScrollView>
            </Layout>
        );
    }

}

const MenuIcon = (style) => (
    <Icon name='menu-outline' width={32} height={32} fill='#000' />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        marginBottom: 5,
        fontSize: 16,
        padding: 10,
        color: '#FF7553'
    },
    service: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 450,
        height: 'auto'
    },
    product: {
        flex: 1,
        flexDirection: 'row',
        width: 450,
        height: 'auto'
    },

    backButton: {
        position: "absolute",
        top: 40,
        left: 5
    },
    carousel: {
        flex: 1,
        height: 350,
        width: '100%',
    },
    dotStyle: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#000'
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
    view: {
        margin: 16,
        width: 150
    },
    subcontainer: {
        width: '100%'
    }
});