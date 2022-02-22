import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#181818',
        justifyContent: 'center',
        alignItems: 'center'
                    
    },

    logo: {

        maxWidth: 300,
        resizeMode: 'contain',
        

      },

      text: {
        marginTop: 30,
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'

      },

      slider: {
        
        marginTop: 30,
        

      },

      buttonCta: {

          backgroundColor: '#3eb72b',
          width: 230,
          height: 50,
          borderRadius: 25,
          marginTop: 30,
          
      },

      btnArea: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

      },

      btnText: {

        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
      }

});