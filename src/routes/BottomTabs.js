import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../components/CustomTabBar';
import MyCustomBottomTabBar from '../components/tb';

import Home from '../screens/Home';
import Analytics from '../screens/Analytics';
import Notes from '../screens/Notes';
import Settings from '../screens/Settings';

export const MyBottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBar={props => <MyCustomBottomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Analytics" component={Analytics} />
      <Tab.Screen name="Notes" component={Notes} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
