import React, { useState, useContext } from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Context } from '../context/BlogContext';



const EditScreen = ({navigation}) => { 
    const id = navigation.getParam('id');
    const {state} = useContext(Context)
    
    const blogPost = state.find((post) => post.id === id)

    const [title,setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content)


    return (
        <View>
        <Text style={styles.label} > Enter title   </Text>
        <TextInput
          style={styles.input}
          value={title}
        //   onChangeText= { (text) => setTitle(text)}
        />
        <Text style={styles.label} > Enter content  </Text>
        <TextInput
          style={styles.input}
        //   onChangeText= { (text) => setContent(text)}
          value={content}
        />
        {/* <Button 
        //   onPress={() => title && content ? addBlogPost(title,content):null}
          title='add Post'/> */}
          
    </View>
    )
}

EditScreen.navigationOptions = () => { 
    return { 
        title: 'Edit Post',
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

export default EditScreen;

