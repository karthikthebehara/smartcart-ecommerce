package com.devrobot.springbootecommerce.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.devrobot.springbootecommerce.model.Order;

/**
 * The Interface OrderRepository.
 */
public interface OrderRepository extends JpaRepository<Order, Long> {
	List<Order> findByUsernameOrderByOrderDateDesc(String username);
	List<Order> findAllByOrderByOrderDateDesc();
}
