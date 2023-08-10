import { StyleSheet, TouchableOpacity, View } from 'react-native';
import StyledText from './StyledText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { ReactElement, useRef, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomTabNavigationType } from '../utils/types';
import HotBadge from './HotBadge';

type screens = 'home' | 'gifts' | 'mb++' | 'login' | 'products' | 'utilities';

interface IScreenNav {
    title: string;
    icon: ReactElement;
    onPress: () => void;
    active: boolean;
}
function ScreenNav({ onPress, title, icon, active }: IScreenNav) {
    return (
        <TouchableOpacity
            style={active ? [styles.icon, styles.iconActive] : styles.icon}
            onPress={onPress}>
            {icon}
            <StyledText style={active ? styles.titleActive : styles.title}>
                {title}
            </StyledText>
        </TouchableOpacity>
    );
}

function BottomTab({ navigation, route }: BottomTabNavigationType) {
    const screenName = useRef(route.name).current;

    const tabs: Array<{ icon: ReactElement; title: string; screen: screens }> =
        [
            {
                icon: (
                    <MaterialIcons
                        name="home-filled"
                        size={28}
                        color={screenName === 'home' ? '#002DD2' : '#71717a'}
                    />
                ),
                title: 'Trang chủ',
                screen: 'home',
            },
            {
                icon: (
                    <Entypo
                        name="box"
                        size={28}
                        color={
                            screenName === 'products' ? '#002DD2' : '#71717a'
                        }
                    />
                ),
                title: 'Sản phẩm',
                screen: 'products',
            },
            {
                icon: (
                    <HotBadge
                        icon={
                            <FontAwesome5
                                name="gift"
                                size={28}
                                color={
                                    screenName === 'mb++'
                                        ? '#002DD2'
                                        : '#71717a'
                                }
                            />
                        }
                        badgeStyle={{
                            top: 0,
                        }}
                    />
                ),
                title: 'MB++',
                screen: 'mb++',
            },
            {
                icon: (
                    <Entypo
                        name="credit-card"
                        size={28}
                        color={screenName === 'gifts' ? '#002DD2' : '#71717a'}
                    />
                ),
                title: 'Quà tặng',
                screen: 'gifts',
            },
            {
                icon: (
                    <MaterialCommunityIcons
                        name="view-grid-plus"
                        size={28}
                        color={
                            screenName === 'utilities' ? '#002DD2' : '#71717a'
                        }
                    />
                ),
                title: 'Tiện ích',
                screen: 'utilities',
            },
        ];
    return (
        <View style={styles.container}>
            {tabs.map(tab => (
                <ScreenNav
                    key={tab.title}
                    icon={tab.icon}
                    title={tab.title}
                    onPress={() => navigation.navigate(tab.screen)}
                    active={screenName === tab.screen}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 12,
        paddingBottom: 4,
        backgroundColor: '#fff',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 4,
    },
    icon: {
        alignItems: 'center',
        paddingTop: 2,
    },
    title: {
        color: '#71717a',
    },
    titleActive: {
        color: '#002DD2',
    },
    iconActive: {
        borderTopWidth: 2,
        borderTopColor: '#002DD2',
        marginTop: -2,
    },
});

export default BottomTab;
