import { StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { BottomNavigation,BottomNavigationTab, Icon } from '@ui-kitten/components';


const PersonIcon = (props) => (
    <Icon {...props} name='person-outline' />
);
const HomeIcon = (props) => (
    <Icon {...props} name='home-outline' />
);
const ExercicesIcon = (props) => (
    <Icon {...props} name='heart-outline' />
);
const InfoIcon = (props) => (
    <Icon {...props} name='people-outline' />
);
const FisioIcon = (props) => (
    <Icon {...props} name='alert-circle-outline' />
);

const useBottomNavigationState = (initialState = 0) => {
    const [selectedIndex, setSelectedIndex] = React.useState(initialState);
    return { selectedIndex, onSelect: setSelectedIndex };
};

const BottomNavBar = ({ navigation, state}) => {


    return (
        <SafeAreaView style={styles.btmNavBar}>
            <BottomNavigation style={styles.bottomNavigation}
                selectedIndex={state.index}
                onSelect = {index => navigation.navigate(state.routeNames[index])}>
                <BottomNavigationTab title='INICIO' icon={HomeIcon} />
                <BottomNavigationTab title='SOBRE NÓS' icon={InfoIcon} />
                <BottomNavigationTab title='EXERCICIOS' icon={ExercicesIcon} />
                <BottomNavigationTab title='SABER MAIS' icon={FisioIcon} />
                <BottomNavigationTab title='CONTA' icon={PersonIcon} />
            </BottomNavigation>
        </SafeAreaView>
    )
}

export default BottomNavBar

const styles = StyleSheet.create({
    btmNavBar: {
        marginBottom: StatusBar.currentHeight,
        backgroundColor: '#fff',
    },
})