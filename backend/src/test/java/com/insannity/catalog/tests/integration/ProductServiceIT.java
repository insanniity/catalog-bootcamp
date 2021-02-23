package com.insannity.catalog.tests.integration;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.transaction.annotation.Transactional;

import com.insannity.catalog.dto.ProductDTO;
import com.insannity.catalog.services.ProductService;
import com.insannity.catalog.services.exceptions.ResourceNotFoundException;

@SpringBootTest
@Transactional
public class ProductServiceIT {
	
	@Autowired
	private ProductService service;
	
	private long existingId;
	private long nonExistingId;	
	private long countTotalProduct;
	private long countPCGamerProduct;
	private PageRequest pageRequest;
	
	
	@BeforeEach
	void setup () throws Exception{
		existingId = 1L;
		nonExistingId = 1000L;
		countTotalProduct = 25L;
		countPCGamerProduct = 21L;
		pageRequest = PageRequest.of(0, 10);
	}
	
	@Test
	public void deleteShouldDoNothingWhenIdExists() {		
		Assertions.assertDoesNotThrow(() -> {
			service.delete(existingId);
		});		
		
	}
	
	@Test
	public void deleteShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {		
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.delete(nonExistingId);
		});		
		
	}
	
	@Test
	public void findAllPagedShoulReturnNothingWhenNameDoesNotExist() {
		String name ="camera";
		Page<ProductDTO> result = service.findAllPaged(0L, name, pageRequest);
		Assertions.assertTrue(result.isEmpty());
		
	}
	
	@Test
	public void findAllPagedShouldReturnAllProductWhenNameIsEmpty() {
		String name = "";		
		Page<ProductDTO> result = service.findAllPaged(0L, name, pageRequest);		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countTotalProduct, result.getTotalElements());		
	}
	
	@Test
	public void findAllPagedShouldReturnProductWhenNameExistIgnoringCase() {
		String name = "pc gAmER";		
		Page<ProductDTO> result = service.findAllPaged(0L, name, pageRequest);		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countPCGamerProduct, result.getTotalElements());		
	}


}