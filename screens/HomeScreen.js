import { TouchableWithoutFeedback, StyleSheet, View, StatusBar, SafeAreaView} from 'react-native'
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

        <Text>Pagina Principal</Text>
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
})