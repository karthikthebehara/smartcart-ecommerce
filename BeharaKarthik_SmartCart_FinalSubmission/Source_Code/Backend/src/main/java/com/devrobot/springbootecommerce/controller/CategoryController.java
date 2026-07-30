package com.devrobot.springbootecommerce.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.devrobot.springbootecommerce.model.Category;
import com.devrobot.springbootecommerce.service.CategoryService;

/**
 * Controller endpoint handler for Category operations.
 *
 * @author Behara Karthik
 */
@RestController
@RequestMapping("/api/categories")
@CrossOrigin("*")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;

	@GetMapping("/all")
	public List<Category> getAll() {
		return categoryService.getAllCategories();
	}

	@GetMapping("/get")
	public Category get(@RequestParam("id") int id) {
		return categoryService.getCategoryById(id).orElse(null);
	}

	@PostMapping("/add")
	public List<Category> persist(@RequestBody Category category) {
		return categoryService.saveCategory(category);
	}

	@DeleteMapping("/delete/{id}")
	public List<Category> delete(@PathVariable int id) {
		return categoryService.deleteCategory(id);
	}

	@PutMapping("/put/{id}")
	public List<Category> put(@PathVariable int id, @RequestBody Category category) {
		if (categoryService.exists(id)) {
			categoryService.deleteCategory(id);
			return categoryService.saveCategory(category);
		}
		return categoryService.getAllCategories();
	}
}
