import { StackScreenProps } from '@react-navigation/stack';
import { BottomTabScreenList, StackScreenList } from '../navigations';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type StackNavigationType = StackScreenProps<StackScreenList>;
type BottomTabNavigationType = BottomTabScreenProps<BottomTabScreenList>;
type BottomAndStackNavigationType = BottomTabNavigationType &
    StackNavigationType;

export {
    type StackNavigationType,
    type BottomTabNavigationType,
    type BottomAndStackNavigationType,
};
