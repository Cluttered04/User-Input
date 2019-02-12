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
            "Content-type": "application"
        }
    }) .then(response => response.json())
        .then(parsedResponse => {
            parsedResponse.forEach(employee => {
            document.querySelector("#employeePrintout").innerHTML += buildDOMString(employee);
        })
    })
}

const searchByLastName = (name) => {
    fetch(`http://localhost:8088/employees?last=${name}`, {
        method: "GET",
        headers: {
            "Content-type": "application"
        }
    }) .then(response => response.json())
        .then(parsedResponse => {
            parsedResponse.forEach(employee => {
            document.querySelector("#employeePrintout").innerHTML += buildDOMString(employee);
        })
    })
}

// const searchByDepartment = (department) => {
//     fetch(`http://localhost:8088/employees?last=${name}`, {
//         method: "GET",
//         headers: {
//             "Content-type": "application"
//         }
//     }) .then(response => response.json())
// }

const loopThroughEmployees () => {
    return .then(() => {
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