const buildDOMString = (employee) => {
    return `<div id="div-${employee.id}"><h1>${employee.first} ${employee.last}</h1><p>${employee.email}</p><p>${employee.phone}</p><p>${employee.birth}</p><p>${employee.dept}</p><p>${employee.super}</p><p>${employee.gender}</p><button class="delete" id="Delete-${employee.id}">Delete</button><button class="edit" id="edit-${employee.id}">Edit</button></div>`
}

const buildEditForm = (singleEmployee) => {
    const deptArray = [
        "HR", "Receiving", "Shipping", "Accounting"
    ]

    let htmlString = "";
    for(i = 0; i < deptArray.length; i++){
        if(singleEmployee.dept === deptArray[i]){
            htmlString += `<option value=${deptArray[i]} selected>${deptArray[i]}</option>`
        } else {
            htmlString += `<option value=${deptArray[i]}>${deptArray[i]}</option>`
        }
    }
    let dropdown = `<select name="" id="department">${htmlString}</select>`

    return `<div class="edit-form"><input value="${singleEmployee.first}" id="task-first-edit-${singleEmployee.id}" type="text" class="validate"><input value="${singleEmployee.last}" id="task-last-edit-${singleEmployee.id}" type="text" class="validate"><input value="${singleEmployee.email}" id="task-email-edit-${singleEmployee.id}" type="text" class="validate"><input value="${singleEmployee.phone}" id="task-phone-edit-${singleEmployee.id}" type="text" class="validate"><input value="${singleEmployee.birth}" id="task-birth-edit-${singleEmployee.id}" type="text" class="validate"><input type="checkbox" id="task-super-edit-${singleEmployee.id}" ${singleEmployee.super === "true" || singleEmployee.super === true ? "checked" : ""}/>Supervisor?<br /></input> ${dropdown}
    <input type="radio" id="task-gender-edit-${singleEmployee.id}" value="female" name="gender" ${singleEmployee.gender === "Female" ? "checked": ""}/><label for="female">Female</label><input type="radio" id="task-gender-edit-${singleEmployee.id}" value="male" name="gender" ${singleEmployee.gender === "Male" ? "checked" : ""} /><label for="male">Male</label><button class="save" id="edit-save-${singleEmployee.id}">Save edit</button></div>`
    }
