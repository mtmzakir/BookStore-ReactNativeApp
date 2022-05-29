import React from 'react'
import {StyleSheet,Text,View,Button,Alert,TouchableOpacity,Image,TextInput,} from 'react-native'

const SignUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={{width:"60%",height:"15%" , marginBottom:20}} source={require('./signg.gif')} />
            <Text style={{color:"#ff4d00",fontSize:25,fontWeight:"bold",marginBottom:20}} >Create New Account</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Email</Text>
                <TextInput style={styles.textField} placeholder={'Enter Email'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Phone Number</Text>
                <TextInput style={styles.textField} placeholder={'Enter Phone Number'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >Password</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter Password'} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >Re-type Password</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter Password Again'} />
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('SignIn')}>
                <Text style={styles.btnText}>Create Account Now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000c2b',
        justifyContent:'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        paddingBottom:"2%",
    },
    textField: {
        backgroundColor:"#fff0e1",
        padding:"2%",
        borderRadius:6,
    },
    headField: {
        marginTop:15,
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10,
    },
    btn : {
        marginTop: 20,
        backgroundColor:'#ff4d00',
        borderRadius:10,
        width:250,
        alignItems: "center"
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding:10
    }
});


export default SignUp