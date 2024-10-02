"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testHandler = void 0;
const testHandler = async (req, resp) => {
    resp.setHeader("Content-Type", "application/json");
    resp.json(req.body);
    resp.end();
};
exports.testHandler = testHandler;
/*
The handler sets the Content-Type header of the response and writes the request body
to the response, which has the effect of echoing the data sent by the client.
In Part 1, I used the pipe method to achieve a similar effect, but that won’t work
in this example because the Express JSON middleware will read the request body and
decode the JSON data it contains into a JavaScript object, which means there is no
data in the request stream to read. For this reason, I create the response using
the Request.body property, which is where the object created by the JSON middleware
can be found.

*/ 
