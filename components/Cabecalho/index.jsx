import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { Icon } from 'react-native-elements'
import styles from "./styles";

export default function Cabecalho(){
    return (
        <View style={styles.container}>

              <View style={styles.componentes}>
                <Image style={styles.imagem}
                    source={require('../../assets/winx.jpg')}
                    />
              </View>


                <View style = {styles.view2}>
                <TextInput
                    style={styles.campo_pesquisa}
                    placeholder="Campo das Winx..."
                    
                />
                <TouchableOpacity style={styles.botao_pesquisa}>
                    <Icon 
                        name="search"
                        type="material"
                        color={'#ffff'}
                    />
                </TouchableOpacity>
                </View>
        </View>
    )
}