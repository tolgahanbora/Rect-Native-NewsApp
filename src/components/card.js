import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


const styles = StyleSheet.create({

    cardContainer: {
        backgroundColor: "white",
        flexDirection: "column",
        borderRadius: 7,
        margin: 50,
        padding: 20,
        paddingBottom: 10,
        width: "75%",
        justifyContent: "center"
    },  
    cardTitle: {

    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12
    },

    cardPhoto: {
        width: "100%", // Tam çerçeveye oturacak şekilde ayarlayabilirsiniz
        height: 200, // Yüksekliği belirli bir değere göre ayarlayabilirsiniz
       marginBottom: 10
    },
    authorText:{
        textAlign: "right",
        fontWeight: "bold",
        fontSize: 14

    }

})



function card(item) {



    return (
        <View style={styles.cardContainer}>
            <Image 
            source={{ uri: item.item.imageUrl}}
            style={styles.cardPhoto}
             />
            <Text style={styles.cardTitle} >
              {item.item.title}
            </Text>
            <Text style={styles.cardBody}>
                {item.item.description}
            </Text>
            <Text style={styles.authorText}>{item.item.author}</Text>
        </View>


    )
}

export default card