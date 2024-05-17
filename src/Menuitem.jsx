const Menuitem = ({ title, price, img, desc }) => {
  return (
    <article className="menu-item">
      <img className="img" src={img} alt={title} />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price ">{price}</span>
          <p className="item-text">{desc}</p>
        </header>
      </div>
    </article>
  )
}
export default Menuitem
