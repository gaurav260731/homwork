import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './sidemenu.style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-ui-kitten';


class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    closeDrawer = () => {
        this.props.navigation.dispatch(DrawerActions.closeDrawer());
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.flexItem} onPress={this.navigateToScreen('Services')}>
                        <Image style={styles.imageItem} source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }} />
                        <View style={styles.details}>
                            <Text style={styles.titleItem}>
                                Ricardo Hubbard
                            </Text>
                            <Text style={styles.phoneItem}>
                                825-296-2847
                            </Text>
                        </View>
                        <Icon name='chevron-right-outline' width={32} height={32} fill='#fff' style={styles.rightButton} />
                    </View>
                    <View>
                        <Text style={styles.sectionHeadingStyle}>
                            Welcome
                        </Text>
                        <View style={[styles.flexItem, styles.flexListItem]} onPress={this.navigateToScreen('Services')}>
                            <Image style={styles.imageListItem} source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }} />
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Services')}>
                                My Address
                            </Text>
                        </View>
                        <View style={[styles.flexItem, styles.flexListItem]} onPress={this.navigateToScreen('Services')}>
                            <Image style={styles.imageListItem} source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }} />
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Services')}>
                                My Orders
                            </Text>
                        </View>
                        <View style={[styles.flexItem, styles.flexListItem]} onPress={this.navigateToScreen('Services')}>
                            <Image style={styles.imageListItem} source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }} />
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Services')}>
                                My Cart
                            </Text>
                        </View>
                        <View style={[styles.flexItem, styles.flexListItem]} onPress={this.navigateToScreen('Services')}>
                            <Image style={styles.imageListItem} source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }} />
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Services')}>
                                Offer zone
                            </Text>
                        </View>
                        <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginLeft: 15, paddingTop: 10 }} ></View>
                        <Text style={styles.sectionHeadingStyle}>
                            Others
                        </Text>
                        <View style={[styles.flexItem, styles.flexListItem]} onPress={this.navigateToScreen('Services')}>
                            <Image style={styles.imageListItem} source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }} />
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Services')}>
                                Customer Support
                            </Text>
                        </View>
                        <View style={[styles.flexItem, styles.flexListItem]} onPress={this.navigateToScreen('Services')}>
                            <Image style={styles.imageListItem} source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }} />
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Services')}>
                                Rate Us
                            </Text>
                        </View>
                        <View style={[styles.flexItem, styles.flexListItem]} onPress={this.navigateToScreen('Services')}>
                            <Image style={styles.imageListItem} source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }} />
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Services')}>
                                Share
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;