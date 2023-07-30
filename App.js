import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, SafeAreaView, FlatList } from 'react-native';

import data from "./src/utily/news_data.json"
import imageData from "./src/utily/news_banner_data.json"

import { Card, BannerImage } from './src/components';


export default function App() {

  const renderNews = ({item}) => <BannerImage item={item} />;

  return (
    <SafeAreaView style={styles.container}>
  
    
      <ScrollView horizontal style={styles.ScrollBanner}>

        {imageData.map((item) => (
          <BannerImage key={item.id} item={item} />
        ))}

      </ScrollView>


      <ScrollView>

        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}

      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: "center",
    alignItems: "center"
  },

  ScrollBanner:{
    width:"100%",
     flexDirection: "row",
  }
});
