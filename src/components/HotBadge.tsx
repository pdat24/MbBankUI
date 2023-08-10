import { ReactElement } from 'react';
import { View, ViewStyle } from 'react-native';
import StyledText from './StyledText';

export default function HotBadge({
    icon,
    badgeStyle,
    ...others
}: {
    icon: ReactElement;
    badgeStyle?: ViewStyle;
}) {
    return (
        <View style={{ position: 'relative' }} {...others}>
            {icon}
            <View
                style={[
                    {
                        backgroundColor: '#e11d48',
                        borderRadius: 100,
                        width: 22,
                        height: 22,
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: '-30%',
                        right: '-30%',
                    },
                    badgeStyle || {},
                ]}>
                <StyledText
                    style={{ fontSize: 8, fontWeight: 'bold', color: '#fff' }}>
                    HOT
                </StyledText>
            </View>
        </View>
    );
}
