import Card from './components/Card/Card'
import posterStarWars from '/assets/star-wars.jpg'
import empireStrike from '/assets/esb-poster.jpg'
import returnJedi from '/assets/rotj-poster.jpg'


import './App.css'

const App = () => (
    <>
        <Card title="Pôster: Star Wars (1977)" imgPoster={posterStarWars} />
        <Card title="Pôster: Empire Strikes Back (1980)" imgPoster={empireStrike} />
        <Card title="Pôster: Return of the Jedi (1983)" imgPoster={returnJedi} />
    </>
)

export default App
