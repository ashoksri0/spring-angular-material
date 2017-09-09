package net.ngjava.controller.hello;

import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@CrossOrigin()
public class HelloWorldController {

    private final String MESSAGE_FROM_SERVER = "Hello from the Server!";

    @ApiOperation(value = "Simple hello world!",
            notes = "Notes to the hello world api")
    @RequestMapping(value = "/rest/hello", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<Message> getHello() {
        return ResponseEntity.ok().body(new Message(MESSAGE_FROM_SERVER));
    }
}