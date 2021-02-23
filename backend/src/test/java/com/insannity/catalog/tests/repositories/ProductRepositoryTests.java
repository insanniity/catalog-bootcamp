package com.insannity.catalog.tests.repositories;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import com.insannity.catalog.entities.Category;
import com.insannity.catalog.entities.Product;
import com.insannity.catalog.repositories.ProductRepository;
import com.insannity.catalog.tests.factory.ProductFactory;

@DataJpaTest
public class ProductRepositoryTests {
	
	@Autowired
	private ProductRepository repository;
	
	private long existingId;
	private long nonExistingId;
	private long countTotalProduct;
	private long countPCGamerProduct;
	private PageRequest pageRequest;
	
	@BeforeEach
	void setup() throws Exception{
		existingId = 1L;
		nonExistingId = 1000L;
		countTotalProduct = 25L;
		countPCGamerProduct = 21L;
		pageRequest = PageRequest.of(0, 10);
	}
	
	@Test
	public void findShowAllProductWhenCategoryNotInformed() {	
		List<Category> categories = null;
		Page<Product> result = repository.find(categories, "", pageRequest);	
		Assertions.assertEquals(countTotalProduct, result.getTotalElements());	
	}
	
	@Test
	public void findShoulReturnNothingWhenNameDoesNotExist() {
		String name ="camera";
		Page<Product> result = repository.find(null, name, pageRequest);
		Assertions.assertTrue(result.isEmpty());
		
	}
	
	@Test
	public void findShouldReturnAllProductWhenNameIsEmpty() {
		String name = "";		
		Page<Product> result = repository.find(null, name, pageRequest);		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countTotalProduct, result.getTotalElements());		
	}
	
	@Test
	public void findShouldReturnProductWhenNameExistIgnoringCase() {
		String name = "pc gAmER";		
		Page<Product> result = repository.find(null, name, pageRequest);		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countPCGamerProduct, result.getTotalElements());		
	}
	
	@Test
	public void findShouldReturnProductWhenNameExist() {
		String name = "PC Gamer";		
		Page<Product> result = repository.find(null, name, pageRequest);		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countPCGamerProduct, result.getTotalElements());		
	}
	
	@Test
	public void saveShouldPersistWithAutoIncrementWhenIdIsNull() {
		Product product = ProductFactory.createProduct();
		product.setId(null);
		product = repository.save(product);
		Optional<Product> result = repository.findById(product.getId());		
		Assertions.assertNotNull(product.getId());
		Assertions.assertEquals(countTotalProduct+1L, product.getId());
		Assertions.assertTrue(result.isPresent());
		Assertions.assertSame(result.get(), product);		
	}
	
	
	@Test
	public void deleteShoulDeleteObjectWhenIdExists() {
		repository.deleteById(existingId);
		Optional<Product> result = repository.findById(existingId);			
		Assertions.assertFalse(result.isPresent());		
	}
	
	@Test
	public void deleteShoulThrowEmptyResultDataAccessExceptionWhenDoesNotExist() {
		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
			repository.deleteById(nonExistingId);
		});		
	}
	
	
}
