const buildDOMString = (employee) => {
    return `<div id="div-${employee.id}"><h1>${employee.first} ${employee.last}</h1><p>${employee.email}</p><p>${employee.phone}</p><p>${employee.birth}</p><p>${employee.dept}</p><p>${employee.super}</p><p>${employee.gender}</p><button class="delete" id="Delete-${employee.id}">Delete</button></div>`
}