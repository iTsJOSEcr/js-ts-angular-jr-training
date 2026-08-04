interface ApiResponse<T> {
    success: boolean;
    data: T;
}

function createResponse<T>(
    success: boolean,
    data: T
): ApiResponse<T> {
    return {
        success,
        data
    };
}


console.log(createResponse(true, "Usuario creado"));
console.log(createResponse(false, 404));
console.log(createResponse(true, ["JS", "TS"]));



interface Box<T> {
    value: T;
}

function createBox<T>(
    value: T
): Box<T> {
    return {
        value
    };
}


console.log(createBox("Hola"));
console.log(createBox(100));
console.log(createBox(true));

