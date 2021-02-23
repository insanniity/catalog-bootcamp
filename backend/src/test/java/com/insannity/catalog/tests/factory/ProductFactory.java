package com.insannity.catalog.tests.factory;

import java.time.Instant;

import com.insannity.catalog.dto.ProductDTO;
import com.insannity.catalog.entities.Category;
import com.insannity.catalog.entities.Product;

public class ProductFactory {
	
	public static Product createProduct() {
		Product product = new Product(1L, "Phone", "Good phone", 800.0, "http://img.com/img.png", Instant.parse("2021-01-22T10:20:16.557934400Z"));
		product.getCategories().add(new Category(1L, "Phone"));
		return product;
	}
	
	
	public static ProductDTO createProductDto() {
		Product product = createProduct();		
		return new ProductDTO(product, product.getCategories());
	}
	
	public static ProductDTO createProductDto(Long id) {
		ProductDTO dto = createProductDto();
		dto.setId(id);
		return dto;
	}
	
}
