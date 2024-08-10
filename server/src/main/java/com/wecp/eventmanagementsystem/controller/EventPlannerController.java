package com.wecp.eventmanagementsystem.controller;


import com.wecp.eventmanagementsystem.entity.Allocation;
import com.wecp.eventmanagementsystem.entity.Event;
import com.wecp.eventmanagementsystem.entity.Resource;
import com.wecp.eventmanagementsystem.service.EventService;
import com.wecp.eventmanagementsystem.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

import javax.persistence.EntityNotFoundException;

@RestController
public class EventPlannerController {

    @Autowired
    private EventService eventService;
    @Autowired
    private ResourceService resourceService;

    @PostMapping("/api/planner/event")
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        // create event and return created event with status code 201 (CREATED)
        return new ResponseEntity<Event>(eventService.createEvent(event), HttpStatus.CREATED);
    }

    @GetMapping("/api/planner/events")
    public ResponseEntity<List<Event>> getAllEvents() {
        // get all events and return the list with status code 200 (OK)
        return new ResponseEntity<List<Event>>(eventService.getAllEvents(),HttpStatus.OK);
    }

    // @PostMapping("/api/planner/resource")
    // public ResponseEntity<Resource> addResource(@RequestBody Resource resource) {
    //     // add resource and return added resource with status code 201 (CREATED)
    //      return new ResponseEntity<Resource>(resourceService.addResource(resource), HttpStatus.CREATED);
    //     // return ResponseEntity.ok(resource);
    // }
    @PostMapping("/api/planner/resource")
    public ResponseEntity<Resource> addResource(@RequestBody Resource resource) {
    // add resource and return added resource with status code 201 (CREATED)
    return new ResponseEntity<Resource>(resourceService.addResource(resource), HttpStatus.CREATED);
}


    @GetMapping("/api/planner/resources")
    public ResponseEntity<List<Resource>> getAllResources() {
        // get all resources and return the list with status code 200 (OK)
        return new ResponseEntity<List<Resource>>(resourceService.getAllResources(),HttpStatus.OK);
    }

    // @PostMapping("/api/planner/allocate-resources")
    // public ResponseEntity<String> allocateResources(@RequestParam Long eventId, @RequestParam Long resourceId,
    //         @RequestBody Allocation allocation) {
    //     try {
    //         // allocate resources for the event and return a success message with status code 201 (CREATED)
    //         resourceService.allocateResources(eventId, resourceId, allocation);
    //         return new ResponseEntity<>("{\"message\": \"Resource allocated successfully for Event ID: " + eventId + "\"}", HttpStatus.CREATED);
    //     }
    //     //  catch (ResponseStatusException e) {
    //     //     // If a ResponseStatusException is thrown, return its status and reason
    //     //     return ResponseEntity.status(e.getStatus()).body(e.getReason());
    //     // }
    //      catch (Exception e) {
    //         // For any other exceptions, return a 500 (INTERNAL SERVER ERROR) status code
    //         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
    //     }
    // }
    @PostMapping("/api/planner/allocate-resources")
    public ResponseEntity<String> allocateResources(@RequestParam Long eventId, @RequestParam Long resourceId, @RequestBody Allocation allocation) {
    
            resourceService.allocateResources(eventId, resourceId, allocation);
            return new ResponseEntity<>("{\"message\": \"Resource allocated successfully for Event ID: " + eventId + "\"}", HttpStatus.CREATED);
    
    }
//     @PostMapping("/api/planner/allocate-resources")
// public ResponseEntity<String> allocateResources(@RequestParam Long eventId, @RequestParam Long resourceId) {
//     try {
//         // allocate resources for the event and return a success message with status code 201 (CREATED)
//         resourceService.allocateResources(eventId, resourceId);
//         return new ResponseEntity<>("{\"message\": \"Resource allocated successfully for Event ID: " + eventId + "\"}", HttpStatus.CREATED);
//     } 
//     // catch (EntityNotFoundException e) {
//     //     // If an EntityNotFoundException is thrown, return a 404 (NOT FOUND) status code
//     //     return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
//     // } catch (RuntimeException e) {
//     //     // If a RuntimeException is thrown (for example, when a resource is not available), return a 400 (BAD REQUEST) status code
//     //     return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//     // } 
//     catch (Exception e) {
//         // For any other exceptions, return a 500 (INTERNAL SERVER ERROR) status code
//         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
//     }
// }
// p
    
}

    

