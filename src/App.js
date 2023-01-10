import Button from './Button'
import styles from "./Title.module.css"


function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome To React</h1>
      <Button text={'Continue'} />
    </div>
  )
}

export default App
 