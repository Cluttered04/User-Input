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

const isSupervisor = () => {
    if(document.querySelector("#supervisor").checked) {
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

