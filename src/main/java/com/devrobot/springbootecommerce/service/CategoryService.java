package com.devrobot.springbootecommerce.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.devrobot.springbootecommerce.model.Category;
import com.devrobot.springbootecommerce.repository.CategoryRepository;

/**
 * Service implementation for Category management business logic.
 *
 * @author Behara Karthik
 */
@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	public List<Category> getAllCategories() {
		return categoryRepository.findAll();
	}

	public Optional<Category> getCategoryById(int id) {
		return categoryRepository.findById(id);
	}

	public List<Category> saveCategory(Category category) {
		categoryRepository.save(category);
		return categoryRepository.findAll();
	}

	public List<Category> deleteCategory(int id) {
		categoryRepository.deleteById(id);
		return categoryRepository.findAll();
	}

	public boolean exists(int id) {
		return categoryRepository.existsById(id);
	}
}
