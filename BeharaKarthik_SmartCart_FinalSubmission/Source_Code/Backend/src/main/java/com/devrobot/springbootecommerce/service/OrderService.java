package com.devrobot.springbootecommerce.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.devrobot.springbootecommerce.model.Order;
import com.devrobot.springbootecommerce.repository.OrderRepository;

/**
 * Service implementation for Order processing business logic.
 *
 * @author Behara Karthik
 */
@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	public List<Order> getAllOrders() {
		return orderRepository.findAllByOrderByOrderDateDesc();
	}

	public List<Order> getUserOrders(String username) {
		return orderRepository.findByUsernameOrderByOrderDateDesc(username);
	}

	public Order createOrder(Order order) {
		if (order.getOrderDate() == null || order.getOrderDate().isEmpty()) {
			DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
			order.setOrderDate(dtf.format(LocalDateTime.now()));
		}
		if (order.getStatus() == null || order.getStatus().isEmpty()) {
			order.setStatus("PENDING");
		}
		return orderRepository.save(order);
	}

	public Order updateOrderStatus(Long id, String newStatus) {
		Optional<Order> orderOpt = orderRepository.findById(id);
		if (orderOpt.isPresent()) {
			Order order = orderOpt.get();
			if (newStatus != null && !newStatus.isEmpty()) {
				order.setStatus(newStatus);
				return orderRepository.save(order);
			}
		}
		return null;
	}
}
