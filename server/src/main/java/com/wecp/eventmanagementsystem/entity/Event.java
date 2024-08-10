package com.wecp.eventmanagementsystem.entity;


import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "events") // do not change table name
public class Event {
    // implement entity

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventID;
    private String title;
    private String description;
    private Date dateTime;
    private String location;
    private String status;

    @OneToMany( mappedBy = "event", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Allocation> allocations;

    // @OneToMany(mappedBy = "event",cascade = CascadeType.ALL)
    // private List<Resource>  resource =  new ArrayList<>();
    // public List<Resource> getResource() {
    //     return resource;
    // }

    // public void setResource(List<Resource> resource) {
    //     this.resource = resource;
    // }

    public List<Allocation> getAllocations() {
        return allocations;
    }

    public void setAllocations(List<Allocation> allocations) {
        this.allocations = allocations;
    }

    public Event() {
    }

    public Event(String title, String description, Date dateTime, String location, String status) {
        this.title = title;
        this.description = description;
        this.dateTime = dateTime;
        this.location = location;
        this.status = status;
    }

    public Long getEventID() {
        return eventID;
    }

    public void setEventID(Long eventID) {
        this.eventID = eventID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDateTime() {
        return dateTime;
    }

    public void setDateTime(Date dateTime) {
        this.dateTime = dateTime;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    // public List<Allocation> getAllocations() {
    //     return allocations;
    // }

    // public void setAllocations(List<Allocation> allocations) {
    //     this.allocations = allocations;
    // }

    // public void addResource(Resource resource) {
    //     // Step 1: Add the resource to the event's resource collection
    //     resource.add(resource);
        
    //     // Step 2: Set the back-reference from resource to this event (if bidirectional)
    //     resource.setEvent(this);
    // }
    
}
