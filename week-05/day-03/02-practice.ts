function getStudentProperty<T, K extends keyof T> (object:T, key: K) {
    return object[key];
}

const student = {
    id: 1,
    name: "Carlos",
    grade: 95,
    approved: true
};


console.log(getStudentProperty(student, "name"));
console.log(getStudentProperty(student, "grade"));
console.log(getStudentProperty(student, "approved"));




function getMovieProperty<T, K extends keyof T> (object: T, key: K) {
    return object [key];
}


const movie = {
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    available: true
};

console.log(getMovieProperty(movie, "title"));
console.log(getMovieProperty(movie, "year"));
console.log(getMovieProperty(movie, "rating"));





function readAccountProperty<T, K extends keyof T>(object:T, key: K) {
    return object [key];
}


const account = {
    accountNumber: 12345,
    owner: "José",
    balance: 250000,
    active: true
};


console.log(readAccountProperty(account, "owner"));
console.log(readAccountProperty(account, "balance"));
console.log(readAccountProperty(account, "active"));




function getPhoneProperty<T, K extends keyof T>(object: T, key: K) {
    return object[key];
}

const phone = {
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    storage: 256,
    available: true
};

console.log(getPhoneProperty(phone, "brand"));
console.log(getPhoneProperty(phone, "model"));
console.log(getPhoneProperty(phone, "storage"));




function getGameProperty<T, K extends keyof T>(object: T, key: K) {
    return object[key];
}

const game = {
    title: "Need for Speed Heat",
    year: 2019,
    price: 30,
    multiplayer: true
};

console.log(getGameProperty(game, "title"));
console.log(getGameProperty(game, "price"));
console.log(getGameProperty(game, "multiplayer"));




function getOrderProperty<T, K extends keyof T>(object: T, key: K) {
    return object[key];
}

const order = {
    id: 150,
    customer: "José",
    total: 35000,
    delivered: false
};

console.log(getOrderProperty(order, "id"));
console.log(getOrderProperty(order, "customer"));
console.log(getOrderProperty(order, "total"));




function getCourseProperty<T, K extends keyof T>(object: T, key: K) {
    return object[key];
}

const course = {
    name: "TypeScript",
    duration: 40,
    students: 25,
    completed: false
};

console.log(getCourseProperty(course, "name"));
console.log(getCourseProperty(course, "duration"));
console.log(getCourseProperty(course, "completed"));




function getVehicleProperty<T, K extends keyof T>(object: T, key: K) {
    return object[key];
}

const vehicle = {
    brand: "Toyota",
    model: "Corolla",
    year: 2025,
    automatic: true
};

console.log(getVehicleProperty(vehicle, "brand"));
console.log(getVehicleProperty(vehicle, "year"));
console.log(getVehicleProperty(vehicle, "automatic"));



