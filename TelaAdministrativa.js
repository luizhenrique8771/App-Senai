import {StyleSheet, View, Text, Image, ScrollView,TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from 'expo-status-bar';

export default function TelaAdministrativa({ navigation }){
    return(
        <View style={estilos.container}>
            <ScrollView Style={estilos.cxScrollView}>
                <View style={estilos.cxTopo}>

                <View style={estilos.cxBemVindo}>
                    <Text style={{color:'white',
                        fontWeight:"bold"
                    }}>
                        Bem Vindo,
                    </Text>
                    <Text style={{
                        color:'white',
                        fontSize: 25
                    }}>
                        Fulano de Tal
                    </Text>
                </View>

                <View style={estilos.cxPessoa}>
                <Ionicons
                            name="person"
                            size={40}
                            color="#959595"
                        />
                </View>

            </View>
            {/* Fim da cxTopo */}

            <View style={estilos.cxMeio}>
                <View style={estilos.cxReque}>
                    <Text style={{
                        color:'white',
                        fontSize: 15,
                        
                    }}>
                        Requerimentos
                    </Text>
                </View>

                <View style={estilos.cxNotas}>
                    <Text style={{
                        color:'white',
                        fontSize: 15,
                        alignItems:'center',
                        marginLeft:'1rem'
                    }}>
                        Notas
                    </Text>
                </View>
                
            </View>
            {/* Fim da cxMeio */}

            <View style={estilos.cxMeio2}>
                <View style={estilos.cxFrequ}>
                    <Text style={{
                        color:'white',
                        fontSize: 15
                    }}>
                        Frequência
                    </Text>
                </View>
                <View style={estilos.cxAvali}>
                    <Text style={{
                        color:'white',
                        fontSize: 15
                    }}>
                        Avaliações
                    </Text>
                </View>

            </View>
            {/* Fim da cxMeio2*/}

            <View style={estilos.cxMeio3}>
                <View style={estilos.cxFinan}>
                    <Text style={{
                        color:'white',
                        fontSize: 15
                    }}>
                        Financeiro
                    </Text>
                </View>
                <View style={estilos.cxDoc}>
                    <Text style={{
                        color:'white',
                        fontSize: 15
                    }}>
                        Documentos
                    </Text>
                </View>

                
            </View>
            {/* Fim da cxMeio3*/}
            
            <View style={estilos.cxImagem}>
            <Image source={require('./assets/logo_senai.png')}
             Style={estilos.Imagem}  
             />
                </View>
            
            
            <StatusBar style="auto" />


            

            </ScrollView>
        </View>
    );
}

const estilos = StyleSheet.create({
container:{
    backgroundColor:'#3850D2',
    width:'100%',
    height:'100%',
    flex: 1
},
scrollViewContent: {
    flexGrow: 1, 
    justifyContent: 'center',
    alignItems: 'center',
},
cxTopo:{
    flexDirection: "row",
    width: "90%",
    marginTop: 60,
    
},
cxBemVindo:{
  marginLeft: 20
},
cxPessoa:{
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 100,
    marginRight: 10,
    cursor: 'pointer',
    marginLeft: 150
},


cxMeio:{
    flexDirection:'row'
},
cxReque:{
    backgroundColor:'#6079FF',
    marginTop: 35,
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 25,
    height: 135,
    textAlign: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: 40,
    width:"38%"
    
    
},
cxNotas:{
    backgroundColor:'#6079FF',
    marginTop: 35,
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 25,
    height: 135,
    textAlign: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: 15,
    width:"38%",
    alignItems:"center"
    
},


cxMeio2:{
    flexDirection:'row'
},
cxFrequ:{
    backgroundColor:'#6079FF',
    marginTop: 30,
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 25,
    height: 135,
    textAlign: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: 40,
    width:"38%",
    alignItems:"center"
    
},
cxAvali:{
    backgroundColor:'#6079FF',
    marginTop: 30,
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 25,
    height: 135,
    textAlign: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: 15,
    width:"38%",
    alignItems:"center"
    
},


cxMeio3:{
    flexDirection:'row'
},
cxFinan:{
    backgroundColor:'#6079FF',
    marginTop: 30,
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 25,
    height: 135,
    textAlign: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: 40,
    width:"38%",
    alignItems:"center"
    
    
},
cxDoc:{
    backgroundColor:'#6079FF',
    marginTop: 30,
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 25,
    height: 135,
    textAlign: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: 15,
    width:"38%",
    alignItems:"center"
},


cxImagem:{
    width:'10%',
    height:'10%',
    marginLeft:'18%'    
    
    
  },
  


});
