package com.devrobot.springbootecommerce.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.devrobot.springbootecommerce.model.User;
import com.devrobot.springbootecommerce.service.UserService;

/**
 * Controller endpoint handler for User operations.
 *
 * @author Behara Karthik
 */
@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/all")
	public List<User> getAll() {
		return userService.getAllUsers();
	}

	@GetMapping("/{username}")
	public User get(@PathVariable("username") String username) {
		return userService.getUserByUsername(username).orElse(null);
	}

	@PostMapping("/add")
	public User persist(@RequestBody User user) {
		return userService.saveUser(user);
	}

	@DeleteMapping("/delete/{username}")
	public List<User> delete(@PathVariable String username) {
		userService.deleteUser(username);
		return userService.getAllUsers();
	}

	@PutMapping("/{username}/put")
	public List<User> put(@PathVariable String username, @RequestBody User user) {
		if (userService.exists(username)) {
			userService.deleteUser(username);
			userService.saveUser(user);
		}
		return userService.getAllUsers();
	}
}
