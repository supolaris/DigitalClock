import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Analytics from '../screens/Analytics';
import Notes from '../screens/Notes';
import Settings from '../screens/Settings';

export const MyBottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Analytics" component={Analytics} />
      <Tab.Screen name="Notes" component={Notes} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
