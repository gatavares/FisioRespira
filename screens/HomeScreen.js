import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Layout, Text } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavBar from '../components/BottomNavBar';
import FisioInfoPage from './FisioInfoPage';
import TopNavBar from "../components/TopNavBar"

const Tab = createBottomTabNavigator();

const HomeScreenRender = () => {
  return (
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
  )
}


const HomeScreen = ({ navigation }) => {
  return (

    <Tab.Navigator
      tabBar={props => <BottomNavBar {...props} />}
    >
      <Tab.Screen name="Inicio" component={HomeScreenRender} options={{
        header: () => <TopNavBar titulo="Inicio!" />
      }} />
      <Tab.Screen name="Saber Mais" component={FisioInfoPage}
        options={{
          header: () => <TopNavBar titulo="Informações!" />
        }}
      />

    </Tab.Navigator>
  )
};

export default HomeScreen

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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