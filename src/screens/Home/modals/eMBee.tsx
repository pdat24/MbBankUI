import { ScrollView, StyleSheet, View } from 'react-native';
import ModalWrapper from './ModalWrapper';
import { Dispatch, SetStateAction } from 'react';
import E_MBee from '../../Login/screens/eMBee';

function E_MBeeModal({
    visible,
    setVisible,
}: {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <ModalWrapper
            visible={visible}
            setVisible={setVisible}
            title="eMBee Helper"
            homeIcon={false}>
            <View style={{ height: '100%' }}>
                <ScrollView>
                    <View style={{ paddingBottom: 40 }}>
                        <E_MBee />
                    </View>
                </ScrollView>
            </View>
        </ModalWrapper>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontSize: 18,
        marginBottom: 16,
        fontWeight: 'bold',
        marginTop: 20,
    },
    item: {
        width: '47%',
        marginBottom: 16,
        paddingHorizontal: 14,
    },
    block: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default E_MBeeModal;
