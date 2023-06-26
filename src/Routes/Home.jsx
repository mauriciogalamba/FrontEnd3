import Card from "../Components/Card"
import styles from './Home.module.css'

function List()  {
    let array =[]
    for (let index = 0; index<10; index++)
    {
        array.push({n:"nombre "+index, u:"Usuario "+ index, i:index})
    }
    
      return (
      <>
      <div className={styles.list}>
          {array.map((e) =>(
            <Card name= {e.n}
              username={e.u}
              id={e.i}
              key={e.i} />
            
        ))}
      </div>
      </>
    )
    
    
}

export default List