package com.devrobot.springbootecommerce.resource;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devrobot.springbootecommerce.model.Order;
import com.devrobot.springbootecommerce.repository.OrderRepository;

/**
 * The Class OrderResource.
 */
@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrderResource {

	@Autowired
	private OrderRepository orderRepository;

	@GetMapping("/all")
	public List<Order> getAllOrders() {
		return orderRepository.findAllByOrderByOrderDateDesc();
	}

	@GetMapping("/user/{username}")
	public List<Order> getUserOrders(@PathVariable("username") String username) {
		return orderRepository.findByUsernameOrderByOrderDateDesc(username);
	}

	@PostMapping("/create")
	public Order createOrder(@RequestBody Order order) {
		if (order.getOrderDate() == null || order.getOrderDate().isEmpty()) {
			DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
			order.setOrderDate(dtf.format(LocalDateTime.now()));
		}
		if (order.getStatus() == null || order.getStatus().isEmpty()) {
			order.setStatus("PENDING");
		}
		return orderRepository.save(order);
	}

	@PutMapping("/{id}/status")
	public Order updateOrderStatus(@PathVariable("id") Long id, @RequestBody Map<String, String> payload) {
		Optional<Order> orderOpt = orderRepository.findById(id);
		if (orderOpt.isPresent()) {
			Order order = orderOpt.get();
			String newStatus = payload.get("status");
			if (newStatus != null) {
				order.setStatus(newStatus);
				return orderRepository.save(order);
			}
		}
		return null;
	}
}
