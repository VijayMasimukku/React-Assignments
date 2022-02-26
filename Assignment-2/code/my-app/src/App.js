import logo from './logo.svg';
import './App.css';



function App(props) {
  const { employee } = props;

  return (
    <div className="container" >
      <div className='employee-card'>
        <div className="employee-img">
          <img src={employee.profileImg} height="150" width="150" />
        </div>
        <div className='employee-name'>
          <h2>{employee.name}</h2>
        </div>
        <div className='employee-data'>
          <label>Location</label><br></br>
          <strong>{employee.location}</strong>
        </div>
        <div className='employee-data'>
          <label>Blood group</label><br></br>
          <strong>{employee.bloodGroup}</strong>
        </div>
        <div className='employee-data'>
          <label>Age</label><br></br>
          <strong>{employee.age}</strong>
        </div>
      </div>

    </div>
  )
}



export default App;
