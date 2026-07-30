package com.devrobot.springbootecommerce.controller;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.devrobot.springbootecommerce.model.Order;
import com.devrobot.springbootecommerce.service.OrderService;

/**
 * Controller endpoint handler for Order operations.
 *
 * @author Behara Karthik
 */
@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrderController {

	@Autowired
	private OrderService orderService;

	@GetMapping("/all")
	public List<Order> getAllOrders() {
		return orderService.getAllOrders();
	}

	@GetMapping("/user/{username}")
	public List<Order> getUserOrders(@PathVariable("username") String username) {
		return orderService.getUserOrders(username);
	}

	@PostMapping("/create")
	public Order createOrder(@RequestBody Order order) {
		return orderService.createOrder(order);
	}

	@PutMapping("/{id}/status")
	public Order updateOrderStatus(@PathVariable("id") Long id, @RequestBody Map<String, String> payload) {
		String newStatus = payload != null ? payload.get("status") : null;
		return orderService.updateOrderStatus(id, newStatus);
	}
}
