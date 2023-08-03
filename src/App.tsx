function App() {

  return (
      <div className="page">
        <div className="title">Hello!</div>

        <table className="table-auto w-full hover">
          <thead>
            <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
          </tbody>
        </table>

        <br />
        <input type="text" />
        <input type="email" className="error" />
        <br />

        <button className="btn">default</button>
        <button className="btn dark">dark</button>
        <button className="btn danger">danger</button>
        <button className="btn primary">primary</button>
        <button className="btn accent">accent</button>
        <button className="btn success">success</button>
        <button className="btn success outline">outline</button>
        <button className="btn outline">outline</button>
        <button className="btn primary">base</button>
        <button className="btn primary lg">lg</button>
      </div>
  )
}

export default App
