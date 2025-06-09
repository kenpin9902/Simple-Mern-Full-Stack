import React from 'react'
import styles from '../styles/pages/CreatePage.module.css'

const CreatePage = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.create_title}> Create A New Product</h2>
        <div className={styles.create_form}>
            <input type="text" placeholder='Name'/>
            <input type='number' placeholder='Price'/>
            <input type='text' placeholder='Image URL'/>
            <button>Add Product</button>
        </div>
    </div>
  )
}

export default CreatePage