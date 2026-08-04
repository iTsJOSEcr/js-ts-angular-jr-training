function crateUser <T,U>(name: T, age: U): { name: T; age: U } {
    return {
        name,
        age,
    };
};


console.log(crateUser("José", 30));




function createdProduct<T, U>(id: T, name: U): {id: T, name: U} {
    return {
        id,
        name,
    }
};



console.log(createdProduct(1, "Laptop"));




function createResponse<T, U>(success: T, data: U): { success: T; data: U } {
    return {
        success,
        data,
    };
}

console.log(createResponse(true, "Usuario creado"));
console.log(createResponse(false, null));
console.log(createResponse(true, 200));



function createEmployee <T, U>(name: T, salary: U): { name: T, salary: U } {
    return {
        name,
        salary,
    }
};


console.log(createEmployee("José", 5000));




function createCoordinate<T, U>(x: T, y: U): { x: T; y: U } {
    return {
        x,
        y,
    };
}


console.log(createCoordinate(10, 20));



function createPerson<T, U, V>(name: T, age: U, active: V): { name: T; age: U; active: V } {
    return {
        name,
        age,
        active,
    };
}


console.log(createPerson("José", 30, true));

