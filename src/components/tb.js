import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Platform} from 'react-native';

import HomeIcon from 'react-native-vector-icons/FontAwesome';
import AnalyticsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import NotesIcon from 'react-native-vector-icons/MaterialIcons';
import SettingIcon from 'react-native-vector-icons/Feather';

function MyCustomBottomTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            //event focus it
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.iconTexttouchable}>
            {
              index == 0 ? (
                <View style={styles.iconTextView}>
                  <HomeIcon
                    style={styles.icon}
                    name="home"
                    size={25}
                    color={isFocused ? 'white' : 'gray'}
                  />
                  <Text
                    style={[
                      styles.text,
                      {color: isFocused ? 'white' : 'gray'},
                    ]}>
                    Home
                  </Text>
                </View>
              ) : index == 1 ? (
                <View style={styles.iconTextView}>
                  <AnalyticsIcon
                    style={styles.icon}
                    name="google-analytics"
                    size={25}
                    color={isFocused ? 'white' : 'gray'}
                  />
                  <Text
                    style={[
                      styles.text,
                      {color: isFocused ? 'white' : 'gray'},
                    ]}>
                    Analytics
                  </Text>
                </View>
              ) : index == 2 ? (
                <View style={styles.iconTextView}>
                  <NotesIcon
                    style={styles.icon}
                    name="notes"
                    size={25}
                    color={isFocused ? 'white' : 'gray'}
                  />
                  <Text
                    style={[
                      styles.text,
                      {color: isFocused ? 'white' : 'gray'},
                    ]}>
                    Notes
                  </Text>
                </View>
              ) : index == 3 ? (
                <View style={styles.iconTextView}>
                  <SettingIcon
                    style={styles.icon}
                    name="settings"
                    size={25}
                    color={isFocused ? 'white' : 'gray'}
                  />
                  <Text
                    style={[
                      styles.text,
                      {color: isFocused ? 'white' : 'gray'},
                    ]}>
                    Setting
                  </Text>
                </View>
              ) : null
              // (
              //   <View>
              //     <HomeIcon
              //       style={styles.icon}
              //       name="home"
              //       size={25}
              //       color={isFocused ? 'white' : 'gray'}
              //     />
              //     <Text
              //       style={[styles.text, {color: isFocused ? 'white' : 'gray'}]}>
              //       Settings
              //     </Text>
              //   </View>
              // )
            }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default MyCustomBottomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 72,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'black',
    borderWidth: 1.5,
    borderColor: '#e6e6e6',
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000',
  },
  iconTexttouchable: {
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: 'white',
    flex: 1,
    alignItems: 'center',
    elevation: 40,
  },
  iconTextView: {
    alignItems: 'center',
  },
  icon: {},
  text: {
    fontSize: 16,
  },
});
