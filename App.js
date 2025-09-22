import logo from './logo.svg';
import './App.css';
import { Data } from './EmployeeData';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([Data]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  
  useEffect(() => {
    setData(Data);
  }, [])

  const handleEdit = (id) => {
    // alert(id)
    const emp = data.filter((d) => d.id === id);
    if(emp !== undefined && emp.length > 0){
      setName(emp[0].name);
      setAge(emp[0].age);
      setDepartment(emp[0].department);
      setPosition(emp[0].position);
      
    }
  }

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure to delete this item?")) {
        const dt = data.filter((d) => d.id !== id);
        // console.log(dt);
        setData(dt);
      }

    }
  }
  const handleAdd = (e) => {
    if (name !== "" && age !== "" && department !== "" && position !== "") {
      const obj = {
        id: data.length + 1,
        name: name,
        age: age,
        department: department,
        position: position,
        
      }
      setData([...data, obj]);
      setName("");
      setAge("");
      setDepartment("");
      setPosition("");
    } else {
      alert("Please fill all the fields");
    }
   
  }
  const handleClear = (e) => {
    setName("");
    setAge("");
    setDepartment("");
    setPosition("");
  }

    return (
      <div className="App">
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" , marginBottom: "50px"}}>
          <div>
            <label>Name</label>
            <input type="text" className='form-control' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} value={name}/>
          </div>
          <div>
            <label>Age</label>
            <input type="number" className='form-control' placeholder='Enter your age' onChange={(e)=>setAge(e.target.value)} value={age}/>
          </div><div>
            <label>Department</label>
            <input type="text" className='form-control' placeholder='Enter your department' onChange={(e)=>setDepartment(e.target.value)} value={department} />
          </div><div>
            <label>Position</label>
            <input type="text" className='form-control' placeholder='Enter your position' onChange={(e)=>setPosition(e.target.value)} value={position}/>
          </div>
          <div>
            <button className='btn btn-success' style={{ marginTop: "30px" }} onClick={() => handleAdd()} >Add Employee</button>
            <button className='btn btn-info' style={{ marginTop: "30px", marginLeft: "10px" }} onClick={() => handleClear()}>Clear Employee</button>
            
          </div>

        </div>
        <table border={1} style={{ margin: "auto" }} className='table table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Department</th>
              <th>Position</th>
              
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.department}</td>
                <td>{employee.position}</td>
                
                <td><button className='btn btn-primary' onClick={() => handleEdit(employee.id)}>Edit</button></td>
                <td><button className='btn btn-danger' onClick={() => handleDelete(employee.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }


export default App;
