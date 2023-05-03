import React from "react";
// import './assets/stylesheet.css'

function SubjectList(props) {
    let subjects = props.data;
    let title = props.title;

    return(
        <div>
            <p>{title}</p>
            {/* <ol>
                <li>{ subjects[0].code } - {subjects[0].description }</li>
                <li>{ subjects[1].code } - {subjects[1].description }</li>
                <li>{ subjects[2].code } - {subjects[2].description }</li>
            </ol> */}
            <ol>
                {
                    subjects.map((subject) => {
                        return <li key={subject.id}>{subject.code} - {subject.description}</li>
                    })
                }   
            </ol>
        </div>
    );
}

export default SubjectList;