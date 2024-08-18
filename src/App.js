import logo from './logo.svg';
import './App.css';



function Header(props){ //사용자 정의 태그 == 컴포넌트 

  console.log('props',props,props.title);
  return (
  <header>
  <h1><a href = "/">{props.title}</a></h1>
</header> );
}

function Navigator(props) {


  // const lis = [
  //   <li><a href = "/read1">html</a></li>,
  //   <li><a href = "/read2">css</a></li>,
  //   <li><a href = "/read3">js</a></li>
  // ]

  const lis = [];
  for(let i = 0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href = {'/read/'+ t.id}>{t.title}</a></li>);
  }
  return (
    <nav>

        <ol>
          {lis}
          

        </ol>


      </nav>

  );
}


function Article(props) {
return(
  <arcitle>
  <h2>{props.title}</h2>
  {props.body}
</arcitle>);

}


function App(props) {

  const topics = [
    {id:1, title:'html', body: 'html is .....'},
    {id:2, title:'css', body: 'css is .....'},
    {id:3, title:'js', body: 'js is .....'},

  ]
  
  return (
    <div>
      <Header title = "fuck"></Header>
      <Header></Header>
      <Header></Header>
     
      <Navigator topics = {topics}>


      </Navigator>
      
      <Article title = "Welcome" body = "hello suck"></Article>
     
    </div>
  );
}

export default App;
