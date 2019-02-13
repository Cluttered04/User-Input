
document.querySelector("#addEmployee").addEventListener("click", () => {

const firstName = document.querySelector("#firstName").value;
const lastName = document.querySelector("#lastName").value;
const emailAddress = document.querySelector("#email").value;
const phoneNumber = document.querySelector("#phoneNumber").value;
const birthday = document.querySelector("#birthday").value;
const department = document.querySelector("#department").value;
const supervisor = isSupervisor();
const gender = maleOrFemale();

document.querySelector("#employeePrintout").innerHTML = "";

const employeeObject = addEmployee(firstName, lastName, emailAddress, phoneNumber, birthday, department, supervisor, gender);

postAndRetrieve(employeeObject);
})


document.querySelector("#searchForSuper").addEventListener("click", () => {
    fetch("http://localhost:8088/employees?super=true",{
        method: "GET",
        headers: {
            "Content-type": "application"
        }
    })
    .then(response => response.json())
    .then(parsedResponse => {
        parsedResponse.forEach(employee => {
        document.querySelector("#employeePrintout").innerHTML += buildDOMString(employee);
    })
})
})

document.querySelector("#employeePrintout").addEventListener("click", () => {
    if(event.target.classList.contains("delete")){
       const deleteID =  event.target.id.split("-")[1];
       deleteEntry(deleteID)
    } else if(event.target.classList.contains("edit")){
        const editID = event.target.id.split("-")[1];
        editEntry(editID);
    } else if (event.target.classList.contains("save")){
        const saveID = event.target.id.split("-")[2];
        const firstName = document.querySelector(`#task-first-edit-${saveID}`).value;
        const lastName = document.querySelector(`#task-last-edit-${saveID}`).value;
        const emailAddress = document.querySelector(`#task-email-edit-${saveID}`).value;
        const phoneNumber = document.querySelector(`#task-phone-edit-${saveID}`).value;
        const birthday = document.querySelector(`#task-birth-edit-${saveID}`).value;
        const department = document.querySelector(`#task-dept-edit-${saveID}`).value;
        const supervisor = document.querySelector(`#task-super-edit-${saveID}`).value;
        const gender = document.querySelector(`#task-gender-edit-${saveID}`).value;
        const employeeObject = addEmployee(firstName, lastName, emailAddress, phoneNumber, birthday, department, supervisor, gender);
        console.log(employeeObject);
        saveEditEntry(saveID, employeeObject);
    }
})

// document.querySelector("#employeePrintout").addEventListener("click", () => {
//     var modal = document.querySelector(".modal")
//     if(event.target.classList.contains("delete")){
//         modal.classList.toggle("show-modal");
//     }
// })

document.querySelector("#searchByFirstName").addEventListener("click", () => {
    const nameSearch = document.querySelector("#nameSearchBar").value;
    console.log(nameSearch);
    searchByFirstName(nameSearch);

})

document.querySelector("#searchByLastName").addEventListener("click", () => {
    const nameSearch = document.querySelector("#nameSearchBar").value;
    searchByLastName(nameSearch);
})

document.querySelector("#deptSearchButton").addEventListener("click", () => {
    const deptSearch = document.querySelector("#deptSearch").value;
    searchByDepartment(deptSearch);
})







