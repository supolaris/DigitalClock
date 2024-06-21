import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {MyBottomTabs} from './BottomTabs';

export const MyStack = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomTabs" component={MyBottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
