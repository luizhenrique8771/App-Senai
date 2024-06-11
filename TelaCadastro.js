
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';



export default function TelaCadastro({ navigation }){
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [nomeUsuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaNovamente, setSenhaNovamente] = useState('');
    const [senhaOculta] = useState(true);


    return(
        <View style={estilos.container}>
        
         <Text style={estilos.cxText}>Cadastrar</Text>   

         <View style={estilos.container2}>
            <TextInput
            placeholder='Nome Completo'
            mode="outlined"
            value={nomeCompleto}
            onChangeText={text => setNomeCompleto(text)}
            style={estilos.cxInput}
            />

            <TextInput
            placeholder="Usuario"
            mode="outlined"
            value={nomeUsuario}
            onChangeText={text => setUsuario(text)}
            style={estilos.cxInput}
            />

            <TextInput
            
            mode="outlined"
            placeholder="Senha"
            value={senha}
            secureTextEntry={senhaOculta}
            onChangeText={text => setSenha(text)}
            style={estilos.cxInput}
            />

            <TextInput
            mode="outlined"
            placeholder="Repita a senha"
            value={senhaNovamente}
            secureTextEntry={senhaOculta}
            onChangeText={text => setSenhaNovamente(text)}
            style={estilos.cxInput}
            />
          
          <View style={estilos.container3}>
            <TouchableOpacity 
            onPress={()=> navigation.navigate('Tela Login')}
            style={estilos.cxBotao}>
                <Text style={estilos.cxText2}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
          </View>

          <View style={estilos.cxImagem}>
          <Image source={require('./assets/logo_senai.png')}
             Style={estilos.Imagem}  
             />
          </View>
            
            
         </View>
         
        </View>
    );
}
const estilos= StyleSheet.create({
container:{
    backgroundColor:'#3850D2',
    width: '100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    
   
    
},
cxText:{
    color:'#FFFFFF',
    fontSize: 30,
    fontWeight: "bold",
},
cxInput:{
    width: 350,
    marginTop: 18,
    flexDirection: 'row',
    borderRadius:"20rem"
},
container2:{
    alignItems: 'center',
    justifyContent: 'center',
    
},
cxBotao:{
    backgroundColor: '#6079FF',
    width: 350,
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    color:"#fff",
    height:"90%"
},
cxText2:{
    fontSize: 13,
    fontWeight: "900",
    width:'20%',
    color:"white",
},
cxImagem:{
    width:'20%',
    height:'20%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'10%'
  
  },
  container3:{
    height:'10%',
    width:'10rem',
    marginTop:30,
    color:"#fff"
  }
});
