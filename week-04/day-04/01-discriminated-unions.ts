type PaymentState =
    | { status: "pending" }
    | { status: "completed" }
    | { status: "failed" };

const payment: PaymentState = {
    status: "pending",
};

console.log(payment);



type UserState =
    | { status: "online" }
    | { status: "offline" }
    | { status: "busy" };

const user: UserState = {
    status: "online",
};

console.log(user);


status: "offline"
status: "busy"



type OrderState =
    | { status: "preparing" }
    | { status: "shipping" }
    | { status: "delivered" };

const order: OrderState = {
    status: "shipping",
};

console.log(order);





type TrafficLight =
    | { color: "red" }
    | { color: "yellow" }
    | { color: "green" };

const light: TrafficLight = {
    color: "green",
};

console.log(light);



type ServerState =
    | { status: "starting" }
    | { status: "running" }
    | { status: "stopped" };

const server: ServerState = {
    status: "running",
};

console.log(server);



type ExamState =
    | { status: "pending" }
    | { status: "passed" }
    | { status: "failed" };

const exam: ExamState = {
    status: "passed",
};

console.log(exam);



