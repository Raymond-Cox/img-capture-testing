import { useState } from 'react'
import * as classes from './App.module.css'

/**
 * Main component of the application.
 */
const App = () => {
  const [imgs, setImgs] = useState<string[]>([])

  const onChange = (event) => {
    const file = event.target.files[0]
    const src = URL.createObjectURL(file)
    setImgs((prev) => [...prev, src])

    const fileElement = document.getElementById('file') as HTMLInputElement
    fileElement.value = ''
  }

  const removeImage = (index) => {
    setImgs((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className={classes.container}>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        id="file"
        onChange={onChange}
      />
      <div className={classes.imageContainer}>
        {imgs.map((img, index) => (
          <div key={img} className={classes.image}>
            <img src={img} alt="captured" />
            <button onClick={() => removeImage(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
