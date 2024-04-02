import { View, TextInput, Image } from "react-native"
import { estilo } from "./styles"
import Card from "../../components/Card"
import Cabecalho from "../../components/Cabecalho"

export default function Home(){

  

    return(
        <View style={estilo.tela}>
            <Cabecalho />
            
                
            <View style={estilo.form}>

                <View style={estilo. views}>
                <Image style={estilo.img}
                    source={require('../../assets/images (1).png')}
                    />
                   <TextInput
                    style={estilo.input}
                    placeholder="Tecna"
                />
                </View>


                <View style={estilo. views}>
                <Image style={estilo.img}
                    source={require('../../assets/images.png')}
                    />
                   <TextInput
                    style={estilo.input}
                    placeholder="Bloom"
                />
                </View>


                <View style={estilo. views}>
                <Image style={estilo.img}
                    source={require('../../assets/musa.jpg')}
                    />
                    <TextInput
                    style={estilo.input}
                    placeholder="Musa"
                />
                   
                </View>

                <View style={estilo. views}>
                <Image style={estilo.img}
                    source={require('../../assets/img5e4eeee00be2b7.39554280.jpg')}
                    />
                   <TextInput
                    style={estilo.input}
                    placeholder="Flora"
                />
                </View>


            </View>
            </View>
        
    )
}