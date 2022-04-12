import { View, StyleSheet, Button } from 'react-native';
import * as React from 'react'
import { Layout, Text } from '@ui-kitten/components';
import { Video, AVPlaybackStatus } from 'expo-av';

const Testes = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{ marginBottom: 25}} category='h3'>Teste de Video</Text>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/fisio-appgpsi.appspot.com/o/Night%20-%2028860.mp4?alt=media&token=81f61705-d13e-4bf8-8f5c-e34d4d8f3b9e',
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.buttons}>
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>
        </Layout >
    )
}

export default Testes

const styles = StyleSheet.create({
    video: {
        alignSelf: 'center',
        width: '95%',
        height: '25%',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})