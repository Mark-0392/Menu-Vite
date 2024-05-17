import Menuitem from './Menuitem'

const Menu = ({ menuItems }) => {
  //   console.log(menuItems)

  return (
    <div className="section-center">
      {menuItems.map((items) => {
        return <Menuitem key={items.id} {...items} />
      })}
    </div>
  )
}
export default Menu
