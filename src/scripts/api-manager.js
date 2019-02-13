const postAndRetrieve = (addEmployee) => {
    fetch("http://localhost:8088/employees", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(addEmployee)
}) .then(() => {
    fetch("http://localhost:8088/employees", {
    }).then(response => response.json())
    .then(parsedResponse => {
        console.log(parsedResponse)
        parsedResponse.forEach(employee => {
             document.querySelector("#employeePrintout").innerHTML += buildDOMString(employee);
        }
        )
        })

})
}

const deleteEntry = (deleteID) => {
    fetch(`http://localhost:8088/employees/${deleteID}`, {
        method: "DELETE"
    }).then(() => {fetch("http://localhost:8088/employees", {
    }).then(response => response.json())
    .then(parsedResponse => {
        document.querySelector("#employeePrintout").innerHTML = ""
        console.log(parsedResponse)
        parsedResponse.forEach(employee => {
             document.querySelector("#employeePrintout").innerHTML += buildDOMString(employee);
        }
        )
        })})

}


const searchByFirstName = (name) => {
    fetch(`http://localhost:8088/employees?first=${name}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    }) .then(response => response.json())
        .then(parsedResponse => {
            document.querySelector("#employeePrintout").innerHTML = ""
            parsedResponse.forEach(employee => {
            document.querySelector("#employeePrintout").innerHTML += buildDOMString(employee);
        })
    })
}

const searchByLastName = (name) => {
    fetch(`http://localhost:8088/employees?last=${name}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    }) .then(response => response.json())
        .then(parsedResponse => {
            document.querySelector("#employeePrintout").innerHTML = ""
            parsedResponse.forEach(employee => {
            document.querySelector("#employeePrintout").innerHTML += buildDOMString(employee);
        })
    })
}

const searchByDepartment = (department) => {
    fetch(`http://localhost:8088/employees?dept=${department}`, {
        method: "GET",
        headers: {
        "Content-type": "application/json"
        }
    }).then(response => response.json())
    .then(parsedResponse => {
        document.querySelector("#employeePrintout").innerHTML = ""
        parsedResponse.forEach(employee => {
            if(employee.super){
            document.querySelector("#employeePrintout").innerHTML += `<div id="div-${employee.id}" class="supervisor"><h1 class="superName">${employee.first} ${employee.last}</h1><p>${employee.email}</p><p>${employee.phone}</p><p>${employee.birth}</p><p>${employee.dept}</p><p>${employee.super}</p><p>${employee.gender}</p><button class="delete" id="Delete-${employee.id}">Delete</button><button class ="edit" id="edit-${employee.id}">Edit</button></div>`;
            } else {
                document.querySelector("#employeePrintout").innerHTML += buildDOMString(employee);
            }
        })
    })
}

const editEntry = (idParam) => {
    fetch(`http://localhost:8088/employees/${idParam}`, {
    }).then(response => response.json())
    .then((parsedResponse) => {
        document.querySelector("#employeePrintout").innerHTML = buildEditForm(parsedResponse)
        console.log(buildEditForm(parsedResponse))
        console.log(parsedResponse.super)
    })
}

const saveEditEntry = (idParam, employeeObject) => {
    fetch(`http://localhost:8088/employees/${idParam}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body:JSON.stringify(employeeObject)
    }).then(() => {fetch("http://localhost:8088/employees", {
    }).then(response => response.json())
    .then(parsedResponse => {
        document.querySelector("#employeePrintout").innerHTML = ""
        parsedResponse.forEach(employee => {
        document.querySelector("#employeePrintout").innerHTML += buildDOMString(employee);
        }
        )
    })})
}


