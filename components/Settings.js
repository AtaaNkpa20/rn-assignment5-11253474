import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ThemeContext } from '../ThemeContext';

const Settings = ({navigation}) => {

  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, isDarkTheme && styles.darkContainer]}>
      <Text style={[styles.header, isDarkTheme && styles.darkText]}>Settings</Text>
      
      <View style={styles.settingItem}>
        <Text style={[styles.label, isDarkTheme && styles.darkText]}>Language</Text>
      </View>

      <TouchableOpacity style={styles.settingItem}>
        <Text style={[styles.label, isDarkTheme && styles.darkText]}>My Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem}>
        <Text style={[styles.label, isDarkTheme && styles.darkText]}>Contact Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem}>
        <Text style={[styles.label, isDarkTheme && styles.darkText]}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem}>
        <Text style={[styles.label, isDarkTheme && styles.darkText]}>Privacy Policy</Text>
      </TouchableOpacity>

      <View style={styles.toggleItem}>
        <Text style={[styles.label, isDarkTheme && styles.darkText]}>Dark Theme</Text>
        <Switch
          value={isDarkTheme}
          onValueChange={toggleTheme}
        />
      </View>

      <View style={[styles.bottomContainer, isDarkTheme && styles.darkBottomContainer]}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.home}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/9664/9664027.png' }} style={[styles.icon, isDarkTheme && styles.darkIcon]} resizeMode='cover' />
            <Text style={[styles.buttonText, isDarkTheme && styles.darkText]}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyCards')}>
          <View style={styles.home}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/9409/9409781.png' }} style={[styles.icon, isDarkTheme && styles.darkIcon]} resizeMode='cover' />
            <Text style={[styles.buttonText, isDarkTheme && styles.darkText]}>My Cards</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
          <View style={styles.home}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2936/2936690.png' }} style={[styles.icon, isDarkTheme && styles.darkIcon]} resizeMode='cover' />
            <Text style={[styles.buttonText, isDarkTheme && styles.darkText]}>Statistics</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <View style={styles.home}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2099/2099058.png' }} style={[styles.settingsIcon, isDarkTheme && styles.settingsIcon]} resizeMode='cover' />
            <Text style={[styles.settingsText, isDarkTheme && styles.settingsText]}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    darkContainer: {
      backgroundColor: '#010B13',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    darkText: {
      color: '#fff',
    },
    settingsIcon: {
      width: 25,
      height: 25,
      marginBottom: 5,
      tintColor: '#007AFF'
    },
    settingItem: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    toggleItem: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
    },
    picker: {
      height: 50,
      width: '100%',
    },
    darkPicker: {
      color: '#fff',
    },
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      borderTopWidth: 1,
      borderColor: '#ddd',
      marginTop: 210
    },
    darkBottomContainer: {
      borderColor: '#333',
    },
    icon: {
      width: 25,
      height: 25,
      marginBottom: 5
    },
    darkIcon: {
      tintColor: '#fff',
    },
    settingsText: {
      fontSize: 16,
      marginTop: 5,
      color: '#007AFF'
    },
    buttonText: {
      fontSize: 16,
      marginTop: 5,
    },
    home: {
      alignItems: 'center',
    },
  });
  
  export default Settings;
  