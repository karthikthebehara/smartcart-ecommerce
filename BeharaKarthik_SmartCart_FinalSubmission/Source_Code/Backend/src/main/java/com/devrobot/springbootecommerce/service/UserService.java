package com.devrobot.springbootecommerce.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.devrobot.springbootecommerce.model.User;
import com.devrobot.springbootecommerce.repository.UserRepository;

/**
 * Service implementation for User business logic.
 *
 * @author Behara Karthik
 */
@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public Optional<User> getUserByUsername(String username) {
		return userRepository.findById(username);
	}

	public User saveUser(User user) {
		return userRepository.save(user);
	}

	public void deleteUser(String username) {
		userRepository.deleteById(username);
	}

	public boolean exists(String username) {
		return userRepository.existsById(username);
	}
}
