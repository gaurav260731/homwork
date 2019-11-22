import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// Login Routes
import LoginAbout from './models/login/about';
import LoginMobile from './models/login/mobile';
import LoginOTP from './models/login/otp';
import LoginSociety from './models/login/society'
// Dashboard Routes
import HomeServices from './models/dashboard/services';
import HomeManagedLiving from './models/dashboard/managedLiving';
import HomeOrders from './models/dashboard/orders';
import HomeCart from './models/cart/cart';
import Checkout from './models/cart/checkout';
import ProductList from './models/product/productsList';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SideMenu from './models/sidemenu/sidemenu';
//Product Routes
import Fruits from './models/product/productsList';


const AppStack = createBottomTabNavigator({
    Services: HomeServices,
    ManagedLiving: HomeManagedLiving,
    Orders: HomeOrders,
    Cart: Checkout,
});
const AuthStack = createStackNavigator({
    About: LoginAbout,
    Mobile: LoginMobile,
    OTP: LoginOTP,
    Society: LoginSociety,
    Home: HomeCart
}, {
    headerMode: 'none',
});

const DrawerNav = createDrawerNavigator({
    Home: {
        screen: HomeServices
    }
}, {
    contentComponent: SideMenu,
    drawerWidth: 300,
    drawerPosition: 'left'
})

export default createAppContainer(
    createSwitchNavigator({
        Auth: AuthStack,
        App: AppStack,
        HomeDrawer: DrawerNav,
    },
        {
            initialRouteName: 'Auth',
        })
);