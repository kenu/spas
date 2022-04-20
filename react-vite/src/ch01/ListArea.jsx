const ListArea = function () {
  const list = [1,2,3,4,5]

  return (
    <ul>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
export default ListArea
