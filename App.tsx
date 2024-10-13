import Calculator from "./component/Calculator";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
const App =()=>{
  return(
    <NavigationContainer>
      <PaperProvider>
        <Calculator/>
      </PaperProvider>
  </NavigationContainer>    
  )
}
export default App;