package com.devrobot.springbootecommerce.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.devrobot.springbootecommerce.model.Product;
import com.devrobot.springbootecommerce.repository.ProductRepository;

/**
 * Service implementation for Product catalog business logic.
 *
 * @author Behara Karthik
 */
@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	public Optional<Product> getProductById(int id) {
		return productRepository.findById(id);
	}

	public List<Product> saveProduct(Product product) {
		productRepository.save(product);
		return productRepository.findAll();
	}

	public List<Product> deleteProduct(int id) {
		productRepository.deleteById(id);
		return productRepository.findAll();
	}

	public boolean exists(int id) {
		return productRepository.existsById(id);
	}
}
