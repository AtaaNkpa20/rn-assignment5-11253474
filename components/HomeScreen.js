import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from '../ThemeContext';

const data = [
  {
    id: 1,
    job: "Apple Store",
    companyName: "Entertainment",
    cost: "-$5,99",
    image: 'https://cdn-icons-png.flaticon.com/128/731/731985.png'
  },
  {
    id: 2,
    job: "Spotify",
    companyName: "Music",
    cost: "-$12,99",
    image: 'https://cdn-icons-png.flaticon.com/128/174/174872.png'
  },
  {
    id: 3,
    job: "Money Transfer",
    companyName: "Transaction",
    cost: "$300",
    image: 'https://cdn-icons-png.flaticon.com/128/2048/2048743.png'
  },
  {
    id: 4,
    job: 'Grocery',
    cost: '-$88',
    image: 'https://cdn-icons-png.flaticon.com/128/2203/2203183.png'
  },
];

const HomeScreen = ({ navigation }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const renderItem = ({ item }) => (
    <View style={[styles.jobItem, isDarkTheme && styles.darkJobItem]}>
      <View style={[styles.imagebox, isDarkTheme && styles.darkSearch]}>
        <Image 
          source={typeof item.image === 'string' ? { uri: item.image } : item.image} 
          style={[styles.jobImage, isDarkTheme && styles.darkimage]} 
        />
      </View>
      <View style={styles.jobDetails}>
        <View style={styles.safe}>
          <View style={styles.contain}>
            <Text style={[styles.jobTitle, isDarkTheme && styles.darkText]}>{item.job}</Text>
            <Text style={[styles.companyName, isDarkTheme && styles.darkText]}>{item.companyName}</Text>
          </View>
            <Text style={[styles.cost, isDarkTheme && styles.darkText]}>{item.cost}</Text>
            <Text style={[styles.price, isDarkTheme && styles.darkText]}>{item.cost}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, isDarkTheme && styles.darkContainer]}>
      <View style={styles.head}>
        <View style={styles.profileContainer}>
          <Image source={require('../assets/profile.png')} style={styles.profile} resizeMode='cover'/>
        </View>

        <View style={styles.textContainer}>
          <Text style={[styles.welcome, isDarkTheme && styles.darkText]}>Welcome back</Text>
          <Text style={[styles.name, isDarkTheme && styles.darkText]}>Eric Atsu</Text>
        </View>

        <TouchableOpacity style={[styles.searchIcon, isDarkTheme && styles.darkSearch]}>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/622/622669.png'}} style={[styles.search, isDarkTheme && styles.darkimage]} resizeMode='cover'/>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
      <View style={styles.card}>
        <Image source={require('../assets/Card.png')} style={styles.cardImage} resizeMode='cover'/>
      </View>

      <View style={styles.buttons}>
        <View style={styles.topUp}>
        <TouchableOpacity style={[styles.box, isDarkTheme && styles.darkSearch]}>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/8035/8035450.png'}} style={[styles.image, isDarkTheme && styles.darkimage]} resizeMode='cover'/>
        </TouchableOpacity>
        <Text style={isDarkTheme && styles.darkText}>Sent</Text>
        </View>
        <View style={styles.topUp}>
        <TouchableOpacity style={[styles.box, isDarkTheme && styles.darkSearch]}>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/2676/2676742.png'}} style={[styles.image, isDarkTheme && styles.darkimage]} resizeMode='cover'/>
        </TouchableOpacity>
        <Text style={isDarkTheme && styles.darkText}>Recieve</Text>
        </View>
        <View style={styles.topUp}>
        <TouchableOpacity style={[styles.box, isDarkTheme && styles.darkSearch]}>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/5336/5336612.png'}} style={[styles.image, isDarkTheme && styles.darkimage]} resizeMode='cover'/>
        </TouchableOpacity>
        <Text style={isDarkTheme && styles.darkText}>Loan</Text>
        </View>
        <View style={styles.topUp}>
        <TouchableOpacity style={[styles.box, isDarkTheme && styles.darkSearch]}>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/1951/1951621.png'}} style={[styles.imageTopUp, isDarkTheme && styles.darkimage]} resizeMode='cover'/>
        </TouchableOpacity>
        <Text style={isDarkTheme && styles.darkText}>Top Up</Text>
        </View>
      </View>

      <View style={styles.details}>
        <Text style={[styles.text1, isDarkTheme && styles.darkText]}>Transactions</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
          <Text style={[styles.subTitle, isDarkTheme && styles.darkText]}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <View style={[styles.bottomContainer, isDarkTheme && styles.darkBottomContainer]}>
        <View style={styles.home}>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/9664/9664027.png'}} style={[styles.homeIcon, isDarkTheme && styles.darkHome]} resizeMode='cover'/>
          <Text style={[styles.buttonhome, isDarkTheme && styles.darkText]}>Home</Text>
        </View>
        <View style={styles.home}>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/9409/9409781.png'}} style={[styles.mycardsIcon, isDarkTheme && styles.darkIcon]} resizeMode='cover'/>
          <Text style={[styles.button, isDarkTheme && styles.darkText]}>My Cards</Text>
        </View>
        <View style={styles.home}>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/2936/2936690.png'}} style={[styles.statisticsIcon, isDarkTheme && styles.darkIcon]} resizeMode='cover'/>
          <Text style={[styles.button, isDarkTheme && styles.darkText]}>Statistics</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <View style={styles.home}>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/2099/2099058.png'}} style={[styles.settingsIcon, isDarkTheme && styles.darkIcon]} resizeMode='cover'/>
            <Text style={[styles.button, isDarkTheme && styles.darkText]}>Settings</Text>
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
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  darkContainer: {
    backgroundColor: '#161626',
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  profileContainer: {},
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  welcome: {
    opacity: 0.5,
    fontSize: 16,
  },
  name: {
    fontSize: 34,
    color: "#024",
    fontWeight: "bold",
  },
  search: {
    width: 20,
    height: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  darkSearch: {
    backgroundColor: '#2c2c39'
  },
  searchIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#F5F5F5',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 100,
  },
  card: {
    marginRight: 0,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#d4d4d7',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 27,
    height: 27,
    borderRadius: 100,
  },
  darkimage: {
    tintColor: '#fff'
  },
  imageTopUp: {
    width: 27,
    height: 27,
    borderRadius: 100,
  },
  topUp: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    color: 'blue',
  },
  jobItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  darkJobItem: {
    borderColor: '#333',
    backgroundColor: '#222',
  },
  imagebox: {
    width: 50,
    height: 50,
    backgroundColor: '#d4d4d7',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobImage: {
    width: 20,
    height: 20,
  },
  jobDetails: {
    marginLeft: 10,
  },
  contain: {
    flexDirection: 'column',
  },
  safe: {
    width: '110%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  companyName: {
    fontSize: 16,
    opacity: 0.5,
  },
  cost: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    opacity: 0.8,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  darkBottomContainer: {
    borderColor: '#333',
  },
  button: {
    fontSize: 16,
    marginTop: 5,
  },
  buttonhome: {
    fontSize: 16,
    marginTop: 5,
    color: '#007AFF',
  },
  home: {
    alignItems: 'center',
  },
  homeIcon: {
    width: 25,
    height: 25,
    marginBottom: 5,
    tintColor: '#007AFF'
  },
  mycardsIcon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  statisticsIcon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  settingsIcon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  darkIcon: {
    tintColor: '#fff',
  },
  darkHome: {
    tintColor: '#007AFF',
  },
  darkText: {
    color: '#fff',
  },
});

export default HomeScreen;
