import React, { useContext, useState } from 'react';
import { Text , View , StyleSheet , TextInput ,Button} from 'react-native';
import { Context } from '../context/BlogContext';
import * as Font from 'expo-font'; 

const CreateScreen = ({navigation}) => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const {addBlogPost} = useContext(Context);  
    return (
        <View>
            <Text style={styles.label} > Enter title   </Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText= { (text) => setTitle(text)}
            />
            <Text style={styles.label} > Enter content  </Text>
            <TextInput
              style={styles.input}
              onChangeText= { (text) => setContent(text)}
              value={content}
            />
            <Button 
              onPress={() => title && content ? addBlogPost(title,content):null}
              title='add Post'/>
              
        </View>
    )
}
Font.loadAsync({
    'billabong':require('../../assets/fonts/Billabong.ttf')
})
CreateScreen.navigationOptions = () => {
    return { 
        title: 'New Post',
        headerTitleStyle: {
            fontFamily:'billabong',
            fontWeight:'200',
            fontSize:29
        }
    }
  }
const styles = StyleSheet.create({
    input: {
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom:15,
        padding:5
    },
    label:{
        fontSize:20,
        marginBottom:5
    }
});

export default CreateScreen;