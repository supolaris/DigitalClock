import React, {useContext, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Keyboard,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HomeIcon from '../images/navigationIcons/HomeIcon.png';
import LeaderBoardIcon from '../images/navigationIcons/leader_Board.png';
import NotificationIcon from '../images/navigationIcons/notification.png';
import ProfileIcon from '../images/navigationIcons/profile.png';
import ReelsIcon from '../images/navigationIcons/Reels.png';
import Home from '../components/Home';
import * as Animatable from 'react-native-animatable';
import {NavigationState} from '@react-navigation/native';

const slideOut = {
  from: {
    translateY: 0,
  },
  to: {
    translateY: 140,
  },
};
let bottomTabRef: React.RefObject<Animatable.View> = React.createRef();
const BottomTabBar = ({
  state,
  descriptors,
  navigation,
}: {
  state: NavigationState;
  descriptors: any;
  navigation: any;
}) => {
  const userContext = useContext(UserContext);
  useEffect(() => {
    if (userContext.hideBottomTabs) {
      if (bottomTabRef.current?.animate) {
        bottomTabRef.current?.animate(slideOut);
      }
    } else {
      if (bottomTabRef.current?.slideInUp) {
        bottomTabRef.current?.slideInUp();
        // console.log('This is the scroll ', bottomTabRef.current);
      }
    }
  }, [userContext.hideBottomTabs]);
  return (
    <>
      {state.index === 2 ? null : (
        <Animatable.View
          ref={bottomTabRef}
          duration={400}
          style={{
            zIndex: 1,
            elevation: 0,
            position: 'absolute',
            bottom: 0,
            height: 120,
            width: '100%',
          }}>
          <ImageBackground
            source={require('../images/navigationIcons/NavigationBg.png')}
            resizeMode="stretch">
            <View
              style={{
                ...styles.tabBarContainer,
              }}>
              {state.routes.map((route: any, index: number) => {
                const {options} = descriptors[route.key];
                const isFocused = state.index === index;
                const onPress = () => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                  });
                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                  }
                };

                return (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    accessibilityRole="button"
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    style={{
                      ...styles.menuBtn,
                      borderTopLeftRadius: index === 0 ? 10 : 0,
                      borderTopRightRadius: index === 3 ? 10 : 0,
                    }}>
                    {index == 0 ? (
                      <>
                        <Image
                          source={HomeIcon}
                          style={{
                            ...styles.iconColor,
                            tintColor: isFocused ? '#E34DB9' : 'white',
                          }}
                          resizeMode="contain"
                        />
                        <Text
                          style={{
                            ...styles.iconText,
                            color: isFocused ? '#E34DB9' : 'white',
                          }}>
                          {' '}
                          Home{' '}
                        </Text>
                      </>
                    ) : index == 1 ? (
                      <>
                        <Image
                          source={LeaderBoardIcon}
                          style={{
                            ...styles.iconColor,
                            tintColor: isFocused ? '#E34DB9' : 'white',
                          }}
                        />
                        <Text
                          style={{
                            ...styles.iconText,
                            color: isFocused ? '#E34DB9' : 'white',
                          }}>
                          {' '}
                          LeaderBoard{' '}
                        </Text>
                      </>
                    ) : index == 2 ? (
                      <>
                        <Image
                          source={ReelsIcon}
                          style={{
                            height: 80,
                            width: 80,
                            marginBottom: 60,
                            marginLeft: 10,
                            marginRight: 10,
                          }}
                        />
                      </>
                    ) : index == 3 ? (
                      <>
                        <Image
                          source={NotificationIcon}
                          style={{
                            ...styles.iconColor,
                            tintColor: isFocused ? '#E34DB9' : 'white',
                          }}
                        />
                        <Text
                          style={{
                            ...styles.iconText,
                            color: isFocused ? '#E34DB9' : 'white',
                          }}>
                          {' '}
                          Notifications{' '}
                        </Text>
                      </>
                    ) : (
                      <>
                        <Image
                          source={ProfileIcon}
                          style={{
                            ...styles.iconColor,
                            tintColor: isFocused ? '#E34DB9' : 'white',
                          }}
                        />
                        <Text
                          style={{
                            ...styles.iconText,
                            color: isFocused ? '#E34DB9' : 'white',
                          }}>
                          {' '}
                          Profile{' '}
                        </Text>
                      </>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </ImageBackground>
        </Animatable.View>
      )}
    </>
  );
};
export default BottomTabBar;
const styles = StyleSheet.create({
  tabBarContainer: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  menuBtn: {
    flex: 1,
    height: hp(9),
    marginBottom: 10,
    alignItems: 'center',

    justifyContent: 'center',
  },
  iconColor: {
    height: wp(9),
    width: wp(9),
    marginTop: hp(5),
  },
  iconText: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: hp(0.5),
    // fontFamily: FontFamily.medium,
  },
});
