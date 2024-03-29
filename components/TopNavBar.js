import { StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { Avatar, Icon, MenuItem, OverflowMenu, TopNavigationAction, TopNavigation } from '@ui-kitten/components';

const TopNavBar = ({ titulo, navigation }) => {
    return (
        <SafeAreaView style={styles.topNavBar}>
            <TopNavigation
                title={titulo}
                alignment="center"
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