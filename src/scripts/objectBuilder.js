const addEmployee = (firstNameParam, lastNameParam, emailParam, phoneParam, birthParam, deptParam, supervisorParam, genderParam) => {
    return {
       first: firstNameParam,
       last: lastNameParam,
       email: emailParam,
       phone: phoneParam,
       birth: birthParam,
       dept : deptParam,
       super: supervisorParam,
       gender: genderParam
   }

}

const isSupervisor = (supervisorID) => {
    if(document.querySelector(`#${supervisorID}`).checked) {
        return true;
    } else {
        return false;
    }
}

const maleOrFemale = () => {
    if(document.querySelector("#femaleChoice").checked) {
        return "Female"
    } else if (document.querySelector("#maleChoice").checked) {
        return "Male"
    }
}


    // if(employee.gender === "Female"){
    //     return  document.querySelector("#femaleChoice").checked
    // } else if (employee.gender === "Male") {
    //     return document.querySelector("#maleChoice").checked
    // }


