
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#7b2cbf',

        
    },
   
    imagem: {
        resizeMode: 'cover',
        height: 100,
        width: '100%',
        
    },
    campo_pesquisa:{
        flex: 1,
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#e0aaff',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        width: 300
    },
    botao_pesquisa:{
        width: 56,
        height: 56,
        backgroundColor: '#e0aaff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icone_lupa:{
        width: 20,
        height: 20,
        
    },
    view2:{
        flexDirection: 'row',
        backgroundColor: '#7b2cbf',
        margin: 20,
        marginTop: 30
    }
})

export default styles