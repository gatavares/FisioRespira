import { StyleSheet, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Layout, Text, Icon, Card, List, Spinner } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db, auth } from '../firebase/firebase'


/*

    id: getExerciciosSnap.id,
    nome: getExerciciosSnap.data().nome,
    desc: getExerciciosSnap.data().descricao,
    tipoEx: getExerciciosSnap.data().tipo,
    img: getExerciciosSnap.data().imagem,
    vid: getExerciciosSnap.data().video,
    time: getExerciciosSnap.data().duracao,
    reps: getExerciciosSnap.data().rep,
    descanso: getExerciciosSnap.data().descanso,

*/



export default function CardExResp() {

    const navigation = useNavigation()
    const [dados, setdados] = useState([])

    const [loaded, setLoaded] = useState(false)




    async function getRespExercises() {
        try {
            let exercises = []
            const exerciseQuery = await query(collection(db, "ExerciciosResp"), where("users", "array-contains", auth.currentUser.uid))
            const exerciseSnap = await getDocs(exerciseQuery)

            exerciseSnap.forEach((getExerciciosSnap) => {
                exercises.push({
                    id: getExerciciosSnap.id,
                    nome: getExerciciosSnap.data().nome,
                    desc: getExerciciosSnap.data().descricao,
                    tipoEx: getExerciciosSnap.data().tipo,
                    img: getExerciciosSnap.data().imagem,
                    vid: getExerciciosSnap.data().video,
                    time: getExerciciosSnap.data().duracao,
                    reps: getExerciciosSnap.data().rep,
                    descanso: getExerciciosSnap.data().descanso,

                })
            })
            return exercises
        } catch (error) {

        }
    }

    useEffect(() => {
        loaded || getRespExercises().then((exes) => {
            setdados(exes)
            setLoaded(true)
        })

    }, [])


    const renderItemHeader = (headerProps, info) => (
        <View {...headerProps}>
            <Text category='h6'>
                {info.item.nome}
            </Text>
        </View>
    )

    const renderItem = (info) => (
        <Card
            style={styles.cards}
            header={headerProps => renderItemHeader(headerProps, info)}
            onPress={() => {
                console.log('Dados:\n' + info.item.id)

                navigation.navigate('Exer', {
                    id: info.item.id,
                    nome: info.item.nome,
                    desc: info.item.descricao,
                    tipoEx: info.item.tipoEx,
                    img: info.item.img,
                    vid: info.item.vid,
                    time: info.item.time,
                    reps: info.item.reps,
                    descanso: info.item.descanso,
                })
            }}>
            <Image
                style={{ height: 200, width: 320, minHeight: 80, minWidth: 150, maxWidth: 320, maxHeight: 200, marginBottom: 15, }}
                source={{ uri: info.item.img }} />
            <Text category='s1'>Tipo de Exercício:</Text>
            <Text>
                {'\n'}{info.item.tipoEx}{'\n'}{'\n'}
            </Text>
            <Text category='s1'>Descrição:</Text>
            <Text>
                {'\n'}{info.item.desc}
            </Text>
        </Card>
    );

    // const withOutEx = () => {
    //     return (
    //         <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <Text category='h5' status='danger' style={{ margin: '7%', marginTop: '-7%' }}>Não tens nenhum exercícios de fisioterapia respiratória!</Text>
    //         </Layout>
    //     )
    // }
    // const withEx = () => {
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {loaded ?
                <List
                    style={{ backgroundColor: '#fff', maxHeight: '100%', }}
                    contentContainerStyle={styles.contentContainer}
                    data={dados}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                /> : <Spinner />}
        </Layout>
    )


}

const styles = StyleSheet.create({
    cards: {
        marginLeft: 10,
        marginRight: 15,
        marginBottom: 15,
    },
    contentContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
})