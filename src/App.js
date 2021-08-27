import './App.css';
import Icon from "./component/Icon";
import ButtonIcon from "./component/ButtonIcon";


function App() {
  return (
    <div className="App">
        <Icon name={"cog"} color={"green"} size={50}/>
        <ButtonIcon name={"cog"} size={54} color={"gray"} hoverColor={"red"}/>
    </div>
  );
}

export default App;
