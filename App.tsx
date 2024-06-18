import {View, Text, ImageBackground, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';

import {MyStack} from './src/routes/Stack';

import dayjs from 'dayjs';

const App = () => {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const myInterval = setInterval(() => {
      setDate(dayjs());
    }, 1000);

    return clearInterval(myInterval);
  }, []);

  return <MyStack />;
};

export default App;
