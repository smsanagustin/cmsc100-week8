import SubjectList from "./SubjectList";
import './assets/stylesheet.css';
import { useState} from "react";

function App() {
  
  const [CMSCSubjects, setCMSCSubject] = useState([
    { code: "CMSC100", description: "Web programming", id: 1 },
    { code: "CMSC100", description: "Scientific computation", id: 2 },
    { code: "CMSC100", description: "Philosoophy", id: 3 },
  ]);

  const [CHEMSubjects, setCHEMSubjects] = useState([
    { code: "CHEM18", description: "Chem1", id: 1 },
    { code: "CHEM19", description: "Chem2", id: 2 },
    { code: "CHEM20", description: "Chem3", id: 3 },
  ]);

  function eventHandler() {
    alert("Added a new course!");
  }

  return (
    <div class="wrapper">
      <h1>LIST OF COURSES</h1>

      <label htmlFor="courseCode">Course Code: </label>
      <input type="text" id="courseCode"/>
      <label htmlFor="courseDesc">Description: </label>
      <input type="text" placeholder="Course Description" id="courseDesc"/> <br />
      <label htmlFor="courseId">Course ID: </label>
      <input type="text" placeholder="ID" id="courseId"/><br />
      <label htmlFor="c ourseCategory">Category: </label>
      <input type="radio" name="category" id="CScourseCategory" value="CMSC"/><label>Computer Science</label>
      <input type="radio" name="category" id="CHcourseCategory" value="CHEM"/><label>Chemistry</label>
      <br />
      <button onClick= {() => eventHandler()}>ADD THIS COURSE</button>

      <SubjectList className="list" 
        data={CMSCSubjects} 
        title={'Computer Science Subjects'}/>
      <SubjectList className="list" 
        data={CHEMSubjects} 
        title={'Chemistry Subjects'}/>
    </div>
  );
}

export default App;