import Categories from './Categories'
import Menu from './Menu'
import Title from './Title'
import data from './data'
import { useState } from 'react'

const App = () => {
  const newCategories = new Set(data.map((items) => items.category))
  // console.log(newCategories)
  const categories = Array.from(['all', ...newCategories])
  // console.log(categories)
  const [menuItems, setMenuItems] = useState(data)
  const [categoriesList, setCategoriesList] = useState(categories)
  const filterbtns = (category) => {
    if (category === 'all') {
      setMenuItems(data)
      return
    }
    const filteredCategory = data.filter((item) => item.category === category)
    setMenuItems(filteredCategory)
  }
  return (
    <main>
      <section className="menu"></section>

      <Title text={`Rita's Menu`} />
      <Categories categoriesList={categoriesList} filterbtns={filterbtns} />
      <Menu menuItems={menuItems} />
    </main>
  )
}
export default App
