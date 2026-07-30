package com.devrobot.springbootecommerce.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.devrobot.springbootecommerce.model.Product;
import com.devrobot.springbootecommerce.service.ProductService;

/**
 * Controller endpoint handler for Product operations.
 *
 * @author Behara Karthik
 */
@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {

	@Autowired
	private ProductService productService;

	@GetMapping("/all")
	public List<Product> getAll() {
		return productService.getAllProducts();
	}

	@GetMapping("/get")
	public Product get(@RequestParam("id") int id) {
		return productService.getProductById(id).orElse(null);
	}

	@PostMapping("/add")
	public List<Product> persist(@RequestBody Product product) {
		return productService.saveProduct(product);
	}

	@DeleteMapping("/delete/{id}")
	public List<Product> delete(@PathVariable int id) {
		return productService.deleteProduct(id);
	}

	@PutMapping("/put/{id}")
	public List<Product> put(@PathVariable int id, @RequestBody Product product) {
		if (productService.exists(id)) {
			productService.deleteProduct(id);
			return productService.saveProduct(product);
		}
		return productService.getAllProducts();
	}
}
