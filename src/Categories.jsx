const Categories = ({ categoriesList, filterbtns }) => {
  //   console.log(categoriesList)
  return (
    <div className="btn-container">
      {categoriesList.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filterbtns(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
export default Categories
