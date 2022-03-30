import { TouchableWithoutFeedback, StyleSheet, View, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Layout, Text, Button, Input, Icon, MenuItem, OverflowMenu, TopNavigationAction, TopNavigation, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

//top navbar
const MenuIcon = (props) => (
  <Icon {...props} name='more-vertical' />
);
const DrawerIcon = (props) => (
  <Icon {...props} name='menu-arrow-outline' />
);
const LogoutIcon = (props) => (
  <Icon {...props} name='log-out' />
);

//buttom navbar
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

const HomeScreen = ({ navigation }) => {

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const bottomState = useBottomNavigationState();

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

  const renderTitle = (props) => (
    <View style={styles.titleContainer}>
      <Avatar
        style={styles.logo}
        source={require('../assets/icon.png')}
      />
      <Text {...props}>Inicio</Text>
    </View>
  );

  const conteudo = () => {

  }

  return (
    <>
      <SafeAreaView style={styles.topNavBar}>
        <TopNavigation
          title={renderTitle}
          accessoryRight={renderOverflowMenuAction}
        />
      </SafeAreaView>

      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={styles.scrollView}>
          <Text category='s1' style={{ fontSize: 22, }}>O QUE É FISIOTERAPIA RESPIRATÓRIA?</Text>
          <Text category='p2' style={styles.text}>
            {'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text category='s1' style={styles.title}>UTILIDADES</Text>
          <Text category='p2' style={styles.text}>
            {'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text category='s1' style={styles.title}>VANTAGENS</Text>
          <Text category='p2' style={styles.text}>
            {'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text category='s1' style={styles.title}>PARA QUEM É RECOMENDADO E DIRECIONADO?</Text>
          <Text category='p2' style={styles.text}>
            {'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>

        

      </Layout>
      <SafeAreaView style={styles.btmNavBar}>
          <BottomNavigation style={styles.bottomNavigation} {...bottomState}>
            <BottomNavigationTab title='INICIO' icon={HomeIcon} component={HomeScreen}/>
            <BottomNavigationTab title='SOBRE NÓS' icon={InfoIcon} />
            <BottomNavigationTab title='EXERCICIOS' icon={ExercicesIcon} />
            <BottomNavigationTab title='SABER MAIS' icon={FisioIcon} />
            <BottomNavigationTab title='CONTA' icon={PersonIcon} />
          </BottomNavigation>

        </SafeAreaView>
    </>
  )
};

export default HomeScreen

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 16,
    borderWidth: 2,
    borderColor: '#046f83',
  },
  topNavBar: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
  btmNavBar: {
    marginBottom: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
  scrollView: {
    margin: '7%',
  },
  title: {
    marginTop: 50,
    fontSize: 22,
  },
  text: {
    fontSize: 17,
  },
})