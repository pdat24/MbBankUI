import { RefObject, useEffect, useRef, useState } from 'react';
import {
    Animated,
    GestureResponderEvent,
    Image,
    StyleSheet,
    View,
} from 'react-native';
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';

const imgs = [
    require('../../assets/imgs/slide3.webp'),
    require('../../assets/imgs/slide2.webp'),
    require('../../assets/imgs/slide4.webp'),
    require('../../assets/imgs/slide5.webp'),
    require('../../assets/imgs/slide6.webp'),
];

const event = new EventEmitter();

function Indicators() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        event.addListener('moveToLeft', () =>
            setActive(prevActive => prevActive - 1),
        );
        event.addListener('moveToRight', () =>
            setActive(prevActive => prevActive + 1),
        );
        return () => {
            event.removeAllListeners('moveToLeft');
            event.removeAllListeners('moveToRight');
        };
    }, []);
    return (
        <View style={styles.indicatorBlock}>
            {(() => {
                const res = [];
                for (let i = 0; i < imgs.length; i++) {
                    res.push(
                        <View
                            key={i}
                            style={
                                active === i
                                    ? [styles.indicator, styles.indicatorActive]
                                    : styles.indicator
                            }></View>,
                    );
                }
                return res;
            })()}
        </View>
    );
}

function Carousel() {
    // translateX Width
    const leftWidth = useRef<number>(0);
    // touch start position
    const startPoint = useRef(0);
    // slide window
    const imgContainer = useRef() as RefObject<View>;
    const imgContainerWidth = useRef(0);
    // all images container
    const carousel = useRef() as RefObject<View>;
    const carouselX = useRef(0);

    const acitveImg = useRef(1);

    // handle start
    const handleTouchStart = (e: GestureResponderEvent) => {
        startPoint.current = e.nativeEvent.pageX;
    };
    // handle move
    const handleTouchMove = (e: GestureResponderEvent) => {
        carousel.current?.setNativeProps({
            style: {
                transform: [
                    {
                        translateX:
                            leftWidth.current +
                            (e.nativeEvent.pageX - startPoint.current),
                    },
                ],
            },
        });
    };
    // handle leave
    const handleTouchEnd = (e: GestureResponderEvent) => {
        imgContainer.current?.measure(
            (x, y, width) => (imgContainerWidth.current = width),
        );
        carousel.current?.measure(
            (x, y, width, height, pageX) => (carouselX.current = pageX),
        );
        setTimeout(() => {
            const activeImgX = carouselX.current - leftWidth.current;

            if (activeImgX > imgContainerWidth.current / 2) {
                if (acitveImg.current > 1) {
                    leftWidth.current += imgContainerWidth.current;
                    acitveImg.current--;
                    event.emit('moveToLeft');
                }
            } else if (activeImgX < -imgContainerWidth.current / 2) {
                if (acitveImg.current < imgs.length) {
                    leftWidth.current += -imgContainerWidth.current;
                    acitveImg.current++;
                    event.emit('moveToRight');
                }
            }
            carousel.current?.setNativeProps({
                style: {
                    transform: [{ translateX: leftWidth.current }],
                },
            });
        }, 10);
    };

    return (
        <View style={styles.imgBlock} ref={imgContainer}>
            <View
                ref={carousel}
                style={styles.imgsSequence}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchCancel={handleTouchEnd}
                onTouchEnd={handleTouchEnd}>
                {imgs.map(uri => (
                    <Image
                        key={uri}
                        resizeMode="stretch"
                        source={uri}
                        style={{ width: '100%', height: 180 }}
                    />
                ))}
            </View>
        </View>
    );
}

function Slide() {
    return (
        <View style={styles.container}>
            <Carousel />
            <Indicators />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'visible',
    },
    imgBlock: {
        marginBottom: 12,
        width: '100%',
        overflow: 'scroll',
    },
    indicator: {
        borderRadius: 100,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'gray',
        width: 10,
        height: 10,
    },
    indicatorActive: {
        borderColor: '#ea580c',
    },
    indicatorBlock: { justifyContent: 'center', flexDirection: 'row', gap: 8 },
    imgsSequence: { flexDirection: 'row' },
});

export default Slide;
