import { StyleProp, Text, TextStyle } from 'react-native';

interface IStyledText {
    children: any;
    fontStyle?:
        | 'Black'
        | 'Bold'
        | 'Regular'
        | 'Italic'
        | 'Light'
        | 'Medium'
        | 'Thin';
    style?: StyleProp<TextStyle>;
}
function StyledText({ children, fontStyle = 'Regular', style }: IStyledText) {
    return (
        <Text style={[{ fontFamily: `Roboto-${fontStyle}` }, style || {}]}>
            {children}
        </Text>
    );
}

export default StyledText;
