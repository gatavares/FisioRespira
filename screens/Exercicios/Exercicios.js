import { StyleSheet, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { Layout, Text, Icon, Button } from '@ui-kitten/components';
import { Video } from 'expo-av';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';


export default function Exercicios({ navigation, route }) {


    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: '',

            headerRight: () => (
                <Button
                    style={{ marginRight: -30, marginTop: -2, marginLeft: 0, }}
                    appearance='ghost'
                    accessoryLeft={Edit}
                    status='danger'
                    onPress={() => {

                    }}
                >
                    Adicionar Medições
                </Button>
            ),
        });
    }, [navigation]);


    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [isPlaying, setIsPlaying] = useState(false)
    const [contagem, setContagem] = useState(5)
    const [reps, setReps] = useState(1)



    const Edit = (props) => (
        <Icon {...props} name='activity-outline' style={[props.style, styles.iconHeader]} />
    );

    const IconContDown = (props) => (
        <Icon {...props} name={status.isPlaying ? 'pause-circle-outline' : 'play-circle-outline'} style={[props.style, styles.icon]} />
    );

    return (
        <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={{ marginBottom: 30, marginTop: 15 }} category='h5'>{route.params.nome}</Text>
            <View style={{ marginBottom: 30, }}>
                <CountdownCircleTimer
                    isPlaying={isPlaying}
                    duration={
                        5//route.params.time
                    }
                    size={125}
                    strokeWidth={8}
                    trailStrokeWidth={5}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[13, 6, 3, 0]}
                    onComplete={() => ({
                        shouldRepeat: reps === 0 ? false : true,
                        delay: 5,
                    })}

                    onUpdate={() => {
                        setContagem(contagem - 1)
                        if (contagem === 0) {
                            console.log('Loop Concluido')
                            setReps(reps - 1)
                            console.log('reps: ' + reps)
                            setContagem(5)
                            /*if (reps === 0){
                                setStatus(video.current.pauseAsync())
                            }*/
                        }
                        else {
                            console.log('segundos restantes: ' + contagem)
                        }
                    }}

                >
                    {({ remainingTime, color }) => (
                        <Text style={{ color, fontSize: 23 }}>
                            {remainingTime + '"'}
                        </Text>
                    )}
                </CountdownCircleTimer>
            </View>

            <Video
                ref={video}
                style={styles.video}
                source={
                    //uri: route.params.vid,
                    require('../../assets/Night.mp4')
                }
                useNativeControls
                resizeMode="contain"
                isLooping={true}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 15, }} >
                <Button
                    style={styles.button}
                    appearance='outline'
                    status={status.isPlaying ? 'danger' : 'success'}
                    accessoryLeft={IconContDown}
                    onPress={() => {
                        { status.isPlaying ? setIsPlaying(prev => !prev) : setIsPlaying(prev => !prev) }
                        { status.isPlaying ? video.current.pauseAsync() : video.current.playAsync() }
                    }}>
                </Button>
            </View>
        </Layout >
    )
}



const styles = StyleSheet.create({
    video: {
        alignSelf: 'center',
        width: '95%',
        height: '25%',
    },
    button: {
        marginTop: 120,
        height: 100,
        width: 100,
        borderRadius: 100,
    },
    iconHeader: {
        width: 25,
        height: 25,
        marginRight: -5,
    },
    icon: {
        width: 40,
        height: 40,
    },
})