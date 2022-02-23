import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#181818',
        justifyContent: 'center',
        alignContent: 'center'
                    
    },

    logo: {

        maxWidth: 300,
        resizeMode: 'contain',
        marginLeft: 50

    },

    text: {
       marginTop: 40,
       color: '#fff',
       fontSize: 18,
       textAlign: 'center'

    },

    slider: {
        
      marginTop: 40,
        

    },

    buttonCta: {

      backgroundColor: '#3eb72b',
      width: 230,
      height: 50,
      borderRadius: 25,
      marginTop: 40,
      marginLeft: 80
          
    },

    btnArea: {

      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },

    btnText: {

      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff'
    },

    containerPassword: {

      maxWidth: 480,
      height: 90,
      borderRadius: 4,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      marginTop: 40

      
    }

});