import logo from './logo.svg';
import './App.css';
import Componenets from './Profile/Componenets';


function App() {
  let FullName = 'omaima chaari'
  let bio = 'cool life '
  let proffession = 'develloper'
  let handleName = (x) => {
    alert (`the name is ${x}`)
  }
  
  return (
    <div className="App">

      <Componenets
       name= {FullName} 
       bio= {bio}
        pro={proffession}
        handleName={handleName} 
        >
           <img style={{border:'500px' , width: "400px", height: "400px"}} 
           src='https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg'
           alt='photo'
           >

           </img>

           
        </Componenets>
     
     
    </div>
  );
}

export default App;
