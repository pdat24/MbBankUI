import { ReactElement } from 'react';
import {
    Pressable,
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import StyledText from './StyledText';

interface IFeatureNavigation {
    icon: ReactElement;
    title: string;
    style?: StyleProp<TextStyle>;
    message?: string;
    chevron?: boolean;
}
function FeatureNavigation({
    icon,
    title,
    style,
    message,
    chevron = true,
    ...args
}: IFeatureNavigation) {
    return (
        <TouchableOpacity style={[styles.container, style || {}]} {...args}>
            <View style={styles.left}>
                {icon}
                <View style={styles.textBlock}>
                    <StyledText style={styles.title}>{title}</StyledText>
                    {message && (
                        <StyledText style={styles.message}>
                            {message}
                        </StyledText>
                    )}
                </View>
            </View>
            {chevron && (
                <Entypo name="chevron-right" size={24} color="#001665" />
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 24,
        paddingHorizontal: 16,
        elevation: 4,
        shadowColor: '#7E7F87',
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    message: {
        fontSize: 14,
        color: '#5C5F6D',
    },
    textBlock: {
        paddingRight: 32,
        paddingLeft: 16,
    },
});

export default FeatureNavigation;
