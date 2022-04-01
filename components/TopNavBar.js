import { TouchableWithoutFeedback, StyleSheet, View, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Layout, Text, Button, Input, Icon, MenuItem, OverflowMenu, TopNavigationAction, TopNavigation, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';


const MenuIcon = (props) => (
    <Icon {...props} name='more-vertical' />
);
const DrawerIcon = (props) => (
    <Icon {...props} name='menu-arrow-outline' />
);
const LogoutIcon = (props) => (
    <Icon {...props} name='log-out' />
);

const TopNavBar = ({ titulo }) => {
    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    );

    const renderOverflowMenuAction = () => (
        <React.Fragment>
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}>
                <MenuItem accessoryLeft={DrawerIcon} title='Menu' />
                <MenuItem accessoryLeft={LogoutIcon} title='Logout' />
            </OverflowMenu>
        </React.Fragment>
    );



    return (
        <SafeAreaView style={styles.topNavBar}>
            <TopNavigation
                title={titulo}
                alignment="center"
                accessoryRight={renderOverflowMenuAction}
                accessoryLeft={<Avatar
                    style={styles.logo}
                    source={require('../assets/icon.png')}
                />}
            />
        </SafeAreaView>
    )
}

export default TopNavBar

const styles = StyleSheet.create({
    topNavBar: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
    },
    logo: {
        marginStart: 16,
        borderWidth: 2,
        borderColor: '#046f83',
    },
})