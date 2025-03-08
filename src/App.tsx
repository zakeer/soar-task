import './App.css'
import { Card } from './components/cards/Card'
import { cardData } from './mocks/card.mock'



function App() {

  return (
    <div>
      <Card
        name={cardData.name}
        expiration={cardData.expiration}
        balance={cardData.balance}
        cardNumber={cardData.cardNumber}
      />
      

      <Card {...cardData} variant='white' />

      <Card
        name={cardData.name}
        expiration={cardData.expiration}
        balance={cardData.balance}
        cardNumber={cardData.cardNumber}
        variant='white'
      />
      
    </div>
  )
}

export default App
