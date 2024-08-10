package com.wecp.eventmanagementsystem.service;

import com.wecp.eventmanagementsystem.entity.Allocation;
import com.wecp.eventmanagementsystem.entity.Event;
import com.wecp.eventmanagementsystem.entity.Resource;
import com.wecp.eventmanagementsystem.repository.EventRepository;
import com.wecp.eventmanagementsystem.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ResourceService {


    @Autowired
    private ResourceRepository resourceRepository;

    @Autowired
    private EventRepository eventRepository;

    public Resource addResource(Resource resource) {
        return resourceRepository.save(resource);
    }

    public List<Resource> getAllResources() {
        return resourceRepository.findAll();
    }

    public void allocateResources(Long eventId, Long resourceId, Allocation allocation) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new EntityNotFoundException("Event not found with ID: " + eventId));

        Resource resource = resourceRepository.findById(resourceId)
                .orElseThrow(() -> new EntityNotFoundException("Resource not found with ID: " + resourceId));

        // Validate resource availability or implement other business rules as needed
        if (!resource.isAvailability()) {
            throw new RuntimeException("Resource is not available for allocation: " + resource.getName());
        }

        // Update resource availability status
        resource.setAvailability(false);
        resourceRepository.save(resource);

        // Allocate the resource to the event
        allocation.setEvent(event);
        allocation.setResource(resource);

        // Update the event with resource allocation
        event.getAllocations().add(allocation);
        eventRepository.save(event);
    }
}
