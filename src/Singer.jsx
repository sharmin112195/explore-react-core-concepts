export default function Singer({singer}){
    console.log(singer)
  return(
    <div style={{
        margin:'20px',
    padding:'20px',
    border:'2px solid purple',
    borderRadius:'10px'
    }}>
        <h3>Singer: {singer.name}</h3>
        <p>Age: {singer.age}</p>
        <p>Id: {singer.id} </p>
    </div>
  )
}