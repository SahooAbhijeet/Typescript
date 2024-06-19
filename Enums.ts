
// mapping the enum to the string value
enum TicketStatus  {
    INTIALISED = "initialised",
    PENDING = "pending",
    CANCELLED = "cancelled",
    CLOSED = "closed"
}

const Ticket = {
    id: 1,
    title: "New Ticket",
    status: TicketStatus.INTIALISED
}

console.log(Ticket);

// mapping the enum to the numeric value
enum StatusCodes {
    Success = 200,
    Created = 201,
    Accepted = 202,
    NotFound = 404,
    BadRequest = 400
}

const response = {
    url: "www.google.com",
    type: "GET",
    data: "somestring",
    status: StatusCodes.Created
}
console.log(response);