import { StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { Avatar, Icon, MenuItem, OverflowMenu, TopNavigationAction, TopNavigation } from '@ui-kitten/components';
import { getAuth, signOut } from "firebase/auth";


const MenuIcon = (props) => (
    <Icon {...props} name='more-vertical' />
);
const LogoutIcon = (props) => (
    <Icon {...props} name='log-out' />
);

const TopNavBar = ({ titulo, navigation }) => {
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
                <MenuItem accessoryLeft={LogoutIcon} title='Logout' 
                // onPress={() => {
                //     const auth = getAuth();
                //     signOut(auth).then(() => {
                //         navigation.navigate('LandingPage')
                //     }).catch((error) => {
                //         const errorCode = error.code;
                //         console.log(error)
                //     });
                // }} 
                />
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