import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar, Layout, Text, Button, Input, CheckBox, Icon, TopNavigationAction } from '@ui-kitten/components';

const RegistoPage = () => {
    //inputs variables 
    //valor que esta a ser escrito e sendo atualizado a cada modificacao
    const [valueEmail, setValueEmail] = React.useState('');
    //password
    const [valuePass, setValuePass] = React.useState('');
    const [valuePassConfirm, setValuePassConfirm] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} fill='#000000' name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back' />
    );

    const useCheckboxState = (initialCheck = false) => {
        const [checked, setChecked] = React.useState(initialCheck);
        return { checked, onChange: setChecked };
    };

    const successCheckboxState = useCheckboxState();

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginStart: '5%', marginEnd: '5%' }}>
            <TopNavigationAction icon={BackIcon} style={styles.backicon} />
            <Avatar source={require('../assets/icon.png')}
                style={styles.logo} />

            <Input
                placeholder='Endereço de Email'
                status='basic'
                style={styles.imputEmail}
                keyboardType="email-address"
                value={valueEmail}
                onChangeText={nextValue => setValueEmail(nextValue)}
            />
            <Input
                value={valuePass}
                placeholder='Palavra-Passe'
                status='basic'
                style={styles.imputPass}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={nextValue => setValuePass(nextValue)}
            />
            <Input
                value={valuePassConfirm}
                placeholder='Confirmar Palavra-Passe'
                status='basic'
                style={styles.imputPass}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={nextValue => setValuePassConfirm(nextValue)}
            />
            <CheckBox
                style={styles.checkbox}
                status='basic' 
                {...successCheckboxState}>
                Aceito os termos e condições.
            </CheckBox>

            <Button style={styles.regist} appearance='filled' status='primary'>
                Registar
            </Button>
        </Layout>
    )
}

export default RegistoPage

const styles = StyleSheet.create({
    backicon: {
        marginBottom: 30,
        marginRight: '95%',
    },
    logo: {
        height: 230,
        width: 230,
        maxWidth: 250,
        maxWidth: 250,
        minHeight: 50,
        minWidth: 50,
        borderWidth: 2,
        borderColor: '#046f83',
    },
    imputEmail: {
        marginTop: 80,
        width: '85%',
        borderColor: '#E4E9F2',
    },
    imputPass: {
        marginTop: 20,
        width: '85%',
        borderColor: '#E4E9F2',
    },
    checkbox: {
        marginTop: 25,
        marginRight: '20%',
    },
    regist: {
        backgroundColor: '#283739',
        width: '85%',
        marginTop: 50,
        borderRadius: 50,
        borderColor: '#000',
    },
})