import {View, Text, ImageBackground, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';

import dayjs from 'dayjs';

const App = () => {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const myInterval = setInterval(() => {
      setDate(dayjs());
    }, 1000);

    return clearInterval(myInterval);
  }, []);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        style={{flex: 1}}
        source={require('./assets/wallpaper.jpg')}>
        <View style={{alignItems: 'center', paddingTop: 60}}>
          <Text style={{fontSize: 20, color: 'white'}}>
            {date.format('dddd, DD MMMM')}
          </Text>
          <Text
            style={{
              fontSize: 45,
              fontWeight: 'bold',
              paddingTop: 10,
              color: 'white',
            }}>
            {date.format('HH:mm:ss')}
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};

export default App;
