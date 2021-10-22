import React from "react";
import { Button, View, Text} from "react-native";

const ExpenableText = ({title, text}) => {
    
    const [displayText, setDisplayText] = React.useState('');
    console.log(displayText, text);

    const toggleText = () => {
        if(displayText != ''){
            setDisplayText('');
        }else{
            setDisplayText(text);
        }
    }

    return(
        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
                <Button 
                    title={title}
                    onPress={toggleText}
                />
            </View>
            <View style={{flex: 10}}>
                <Text>{displayText}</Text>
            </View>
            
        </View>
    )
}

export default ExpenableText;