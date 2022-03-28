import { TouchableWithoutFeedback, StyleSheet, View, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Layout, Text, Button, Input, Icon, MenuItem, OverflowMenu, TopNavigationAction, TopNavigation } from '@ui-kitten/components';


const MenuIcon = (props) => (
  <Icon {...props} name='more-vertical' />
);

const DrawerIcon = (props) => (
  <Icon {...props} name='menu-arrow-outline' />
);

const LogoutIcon = (props) => (
  <Icon {...props} name='log-out' />
);

const HomeScreen = ({ navigation }) => {

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

  const renderTitle = (props) => (
    <View style={styles.titleContainer}>
      <Avatar
        style={styles.logo}
        source={require('../assets/icon.png')}
      />
      <Text {...props}>Inicio</Text>
    </View>
  );

  return (
    <>
      <SafeAreaView style={styles.NavBar}>
        <TopNavigation
          title={renderTitle}
          accessoryRight={renderOverflowMenuAction}
        />
      </SafeAreaView>

      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={styles.scrollView}>
          <Text category='s1' style={{fontSize: 22,}}>O QUE É FISIOTERAPIA RESPIRATÓRIA?</Text>
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
  NavBar: {
    marginTop: StatusBar.currentHeight,
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