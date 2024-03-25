import Card from "./Card"
import Column from "./Column"
import Modal from "./Modal";



export default function ShowCards({items, setItems, isOpen, setIsOpen}) {
  return (
    <>
      <div className='div-container'>
        <Card
          title="Todo"
          bgColor="#D3D3D3"
          items={items}
          setItems={setItems}
        />
  
        {/* <Card
          title= "Doing"
          bgColor= "#FCB711"
          color="white"
          items={items}
          setItems={setItems}
        />
        <Card
          title= "Done"
          bgColor= "#00873D"
          color="white"
          items={items}
          setItems={setItems}
      /> */}
        <Column
          title="Doing"
          bgColor="#FCB711"
          color="white"
        />
        <Column
          title="Done"
          bgColor="#00873D"
          color="white"
        />
      
      </div>
      <Modal/>
        <Modal/>
      <main>
        <button className='primaryBtn' onClick={() => setIsOpen(true)}>
          Open modal
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen}/>}
      </main>
    </>
  );
}