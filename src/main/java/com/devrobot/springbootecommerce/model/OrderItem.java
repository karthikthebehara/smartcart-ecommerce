package com.devrobot.springbootecommerce.model;

import jakarta.persistence.*;

/**
 * The Class OrderItem.
 */
@Entity
@Table(name = "order_item")
public class OrderItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String productName;

	private Integer productId;

	private double price;

	private int quantity;

	private String picture;

	public OrderItem() {
	}

	public OrderItem(Long id, String productName, Integer productId, double price, int quantity, String picture) {
		this.id = id;
		this.productName = productName;
		this.productId = productId;
		this.price = price;
		this.quantity = quantity;
		this.picture = picture;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}
}
