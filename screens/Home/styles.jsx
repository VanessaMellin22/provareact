import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#e0aaff',
    },
    
    
    form: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
       flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
        
    },
    views: {
       
        height: 100,
        width: 350,
        color: '#FFF',
        fontSize: 26,
        padding: 12,
        borderRadius: 30,
        backgroundColor: '#fff',
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20
    },
    img:{
        height:70,
        width: 70,
        borderRadius: 50,
        
    },
    input:{
        height:50,
        width: 200,
        backgroundColor: '#fff',
        marginLeft: 20
    }
   
})