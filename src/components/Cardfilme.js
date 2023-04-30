import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native-web";

const baseUrl = 'https://api.otaviolube.com'

export default function CardFilme({filme, baseUrl}){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{filme.titulo}</Text>
            <Text style={styles.subtitulo}>{filme.subtitulo}</Text>
            <Image style={styles.poster} source={{uri: baseUrl + filme.poster.data.attributes.url}}/>
            <Text style={styles.sinopse}>{filme.sinopse}</Text>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.btexto}>Comprar</Text>
            </TouchableOpacity>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#87CEFA',
        margin: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    poster: { 
        width: '150px',
        height: '200px',
        borderRadius: 20,
        resizeMode: 'cover',
        marginBottom: 10
    },

    titulo: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold'
    },

    subtitulo: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },

    sinopse: {
        marginBottom: 10,
        fontSize: 14,
        fontStyle: 'italic'
    },

    botao: {
        height: 50,
        width: '100%',
        backgroundColor: '#6495ED',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    btexto: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})