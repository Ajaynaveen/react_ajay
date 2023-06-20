// import logo from './logo.svg';
// import './App.css';
const Hello=()=>{
  return(
    <div>

      <h1>hello world</h1>
    </div>

  );
}
const App=()=>{
  console.log("hello App")
  const now=new Date()
  return (
    <div >
      <p>greetings</p>
      <Hello/>
     
    </div>
  );
}

export default App;
