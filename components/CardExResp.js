import { StyleSheet, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Layout, Text, Icon, Card, List, } from '@ui-kitten/components';

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebase'
import { async } from '@firebase/util';

export default function CardExResp() {
    const [dados, setdados] = useState([])

    async function getDados() {
        const q = query(collection(db, "ExerciciosResp"));

        const Dados = []

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(
            (ex) => {
                //console.log(ex.id, " => ", ex.data());
                Dados.push({
                    id: ex.id,
                    nome: ex.data().nome,
                    desc: ex.data().descricao,
                    img: ex.data().imagem,
                    vid: ex.data().video,
                    time: ex.data().duracao,
                    reps: ex.data().rep,
                    series: ex.data().series,
                })
            }
        )
        return Dados
    }

    useEffect(() => {
        getDados().then((dadosReturn) => {
            setdados(dadosReturn)
        })
    }, [])


    const renderItemHeader = (headerProps, info) => (
        <View {...headerProps}>
            <Text category='h6'>
                {info.item.nome}
            </Text>
        </View>
    );
    const renderItem = (info) => (
        <Card
            style={styles.cards}
            header={headerProps => renderItemHeader(headerProps, info)}
            onPress={() => {
                console.log('Dados:\n' + info.item.id)
                console.log(info.item.nome)
                console.log(info.item.desc)
                console.log(info.item.reps)
                console.log(info.item.time)
                console.log(info.item.series)
            }}>
            <Image
                style={{ height: 200, width: 320, minHeight: 80, minWidth: 150, maxWidth: 320, maxHeight: 200, marginBottom: 15, }}
                source={{ uri: info.item.img }} />
            <Text category='s1'>Descrição:</Text>
            <Text>
                {'\n'}{info.item.desc}
            </Text>
        </Card>
    );

    const withOutEx = () => {
        return (
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h5' status='danger' style={{ margin: '7%', marginTop: '-7%' }}>Não tens nenhum exercícios de fisioterapia respiratória!</Text>
            </Layout>
        )
    }
    const withEx = () => {
        return (
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <List
                    style={{ backgroundColor: '#fff', maxHeight: '100%', }}
                    contentContainerStyle={styles.contentContainer}
                    data={dados}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            </Layout>
        )
    }

    if (dados.length === 0) {
        return (
            withOutEx()
        )

    }
    else {
        return (
            withEx()
        )
    }

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