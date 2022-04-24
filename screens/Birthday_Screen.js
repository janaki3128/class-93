import React,{Component} from "react";
import {Textview,
StyleSheet,
TouchableOpactiy,
View,
Flatlist, 
Platform,
} from react-native;

import Model from "../component/birthday/birthdayModel";
import {context} from "../context/birthdayDataContext";

export default class BirthdayScreen extends React.Component{
  
}
function my_list(){
    const {state,add_birthday,delete_birthday,edit} = useContext(context);
    const {colors} = useTheme();
    const [showModel,setModel] = useState(false);
    const [selecteditem,setSelecteditem] = useState(null);

    useEffect(()=>{
        state.sort(function(a,b){
           var keyA = new Date(a.Date).getTime(),
            keyB = new Date(b.Date).getTime();

            if(KeyA <KeyB) return -1;
            if(KeyA> keyB) return 1
            return 0;
        });
    }, [state]);

    useEffect(()=>{
state.map((item)=>{
    edit({selectitem : item,text: item.text,time: item.date});

});
    },[]);

    let itemRefs = new Map();
    
    const change_model = (item) =>{
        layoutAnimation.configureNext(
            layoutAnimation.create(
                200,
                layoutAnimation.Types.linear,
                layoutAnimation.properties.opacity
            )

        );

    setSelecteditem(item);
    setModel(!showModel);
     };
 
     const hide_model = ()=>{
         layoutAnimation.configureNext(
             layoutAnimation.create(
                 200,
                 layoutAnimation.Types.linear,
                 layoutAnimation.properties.opacity
             )
         );

         setModel(false);
         setSelecteditem(null);
     };
    function emptyList(){
        return(
        <View
        style = {{
            justifyContent:"center",
            alignItems:"center",

        }}>

        <Text 
        style = {[
            styles.text,
            {fontSize : 25, textAlign : "center",color: color.text},
        ]}>
              {"click on the plus icon to add birthday remainder"}  
                        </Text>
            </View>
            );
    }
function footer(){
    return(
        <View 
        style = {{
            height:75,
            justifyContent: "center",
            alignItems: "center"  ,
              }}>

        <TouchableOpactiy
        onPress = {()=>{
            add_birthday();
            
        }} >
            
            
            
            </TouchableOpactiy>  
            </View>
                   
    )
}
     
}