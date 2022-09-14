import './App.css'
import Wilder from './components/Wilder';

function App() {

  const wilders = [
    {
      id: "aaaa",
      firstName: "Cristiano",
      lastName: "Ronaldo",
      skills: [
        {
          id:"skill-1",
          skillName:"JS"
        }
      ]
    },
    {
      id: "bbbb",
      firstName: "John",
      lastName: "Terry",
      skills: [
        {
          id:"skill-2",
          skillName:"PHP"
        }
      ]
    },
    {
      id: "ccccc",
      firstName: "Salut",
      lastName: "à tous",
      skills: [
        {
          id:"skill-3",
          skillName:"CSS"
        }
      ]
    }
  ]
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
        {/* <Wilder firstName={'Joseph'} lastName={'dupont'}/>
        <Wilder firstName={'Maria'} lastName={'tuconnais'}/>
        <Wilder firstName={'Suzy'} lastName={'bonsoir'}/> */}
        {wilders.map((wilder) => {
         return <Wilder 
         key={wilder.id}
         firstName={wilder.firstName} 
         lastName={wilder.lastName}
         skills={wilder.skills} />
        })}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
