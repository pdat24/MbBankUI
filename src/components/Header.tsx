import { Pressable, StyleSheet, View } from 'react-native';
import StyledText from './StyledText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import gStyles from '../utils/GlobalStyle';
import { useNavigation } from '@react-navigation/native';
import { Dispatch, SetStateAction } from 'react';

interface IHeader {
    setVisiable: Dispatch<SetStateAction<boolean>>;
    title: string;
    homeIcon?: boolean;
}
function Header({ setVisiable, title, homeIcon = true }: IHeader) {
    const navigation = useNavigation();

    return (
        <View style={[sytles.container, gStyles.primaryBg]}>
            <Pressable onPress={() => setVisiable(false)}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
            </Pressable>
            <StyledText style={sytles.title}>{title}</StyledText>
            {homeIcon && (
                <Pressable
                    onPress={() => {
                        setVisiable(false);
                        navigation.navigate('home');
                    }}>
                    <Foundation name="home" size={24} color="#fff" />
                </Pressable>
            )}
        </View>
    );
}

const sytles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
});

export default Header;
