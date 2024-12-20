// rafce

import Button from "./components/button/Button"
import Header from "./components/header/Header"
import { useState } from "react"
import './App.css'
import Check from "./components/check/Check"

const buttons = [
  {
    id: 1,
    name: "Все"
  },
  {
    id: 2,
    name: "Мясные"
  },
  {
    id: 3,
    name: "Сырные"
  },
  {
    id: 4,
    name: "Гриль"
  },
  {
    id: 5,
    name: "Вегетарианские"
  },
  {
    id: 6,
    name: "Острые"
  },
  {
    id: 7,
    name: "Закрытые"
  },
]

const App = () => {
  //  alert() , prompt(), confirm(), setInterval(), fetch()
  const [activeBtn, setActiveBtn] = useState('Все')
  // hoc - high ordered function (map, filter,sort,reduce, find, forEach)
  return (
    <div>
      <Header />
      <div className="filter-buttons">
        {buttons.map((btn) => {
          return <Button
            onClick={() => {
              setActiveBtn(btn.name)
            }}
            activeBtn={activeBtn}
            key={btn.id}
            name={btn.name} />
        })}
      </div>
      {/* <Check/> */}
    </div>
  )
}

export default App