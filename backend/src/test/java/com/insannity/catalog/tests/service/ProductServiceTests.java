package com.insannity.catalog.tests.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.insannity.catalog.dto.ProductDTO;
import com.insannity.catalog.entities.Product;
import com.insannity.catalog.repositories.ProductRepository;
import com.insannity.catalog.services.ProductService;
import com.insannity.catalog.services.exceptions.DataBaseException;
import com.insannity.catalog.services.exceptions.ResourceNotFoundException;
import com.insannity.catalog.tests.factory.ProductFactory;

@ExtendWith(SpringExtension.class)
public class ProductServiceTests {
	
	@InjectMocks
	private ProductService service;
	
	@Mock
	private ProductRepository repository;
	
	private long existingId;
	private long nonExistingId;
	private long dependentId;
	private Product product;
	private PageImpl<Product> page;
	
	@BeforeEach
	void setup () throws Exception{
		existingId = 1L;
		nonExistingId = 1000L;
		dependentId = 4L;
		product = ProductFactory.createProduct();
		page = new PageImpl<>(List.of(product));		
		
		Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(product);		
		
		Mockito.when(repository.find(ArgumentMatchers.any(), ArgumentMatchers.anyString(), ArgumentMatchers.any())).thenReturn(page);
		
		Mockito.when(repository.findById(existingId)).thenReturn(Optional.of(product));		
		Mockito.when(repository.findById(nonExistingId)).thenReturn(Optional.empty());
		
		Mockito.when(repository.getOne(existingId)).thenReturn(product);
		Mockito.doThrow(EntityNotFoundException.class).when(repository).getOne(nonExistingId);
		
		Mockito.doNothing().when(repository).deleteById(existingId);
		Mockito.doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(nonExistingId);
		Mockito.doThrow(DataIntegrityViolationException.class).when(repository).deleteById(dependentId);
		
	}
	
	@Test
	public void updateShouldThrowResourceNotFoundExceptionWhenIdDoesNotExist() {		
		ProductDTO dto = new ProductDTO();		
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.update(nonExistingId, dto);
		});		
		
	}	
	
	@Test
	public void updateShouldReturnProductDTOWhenIdExist() {
		ProductDTO dto = new ProductDTO();
		ProductDTO result = service.update(existingId, dto);
		Assertions.assertNotNull(result);
	}
	
	
	
	@Test
	public void findByIdShouldThrowResourceNotFoundExceptionWhenIdDoesNotExist() {		
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.findById(nonExistingId);
		});		
		
	}	
	
	@Test
	public void findByIdShouldReturnProductDTOWhenIdExist() {
		ProductDTO result = service.findById(existingId);
		Assertions.assertNotNull(result);
	}
	
	@Test
	public void findAllPagedShouldReturnPage() {
		Long categoryId = 0L;
		String name = "";
		PageRequest pageRequest = PageRequest.of(0, 10);
		
		Page<ProductDTO> result = service.findAllPaged(categoryId, name, pageRequest);
		
		Assertions.assertNotNull(result);
		Assertions.assertFalse(result.isEmpty());
		
		Mockito.verify(repository, Mockito.times(1)).find(null, name, pageRequest);	
		
	}
	
	
	@Test
	public void deleteShouldDoNothingWhenIdExists() {		
		Assertions.assertDoesNotThrow(() -> {
			service.delete(existingId);
		});		
		Mockito.verify(repository).deleteById(existingId);
	}
	
	@Test
	public void deleteShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {		
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.delete(nonExistingId);
		});		
		Mockito.verify(repository).deleteById(nonExistingId);
	}
	
	@Test
	public void deleteShouldThrowDataBaseExceptionWhenDependentId() {		
		Assertions.assertThrows(DataBaseException.class, () -> {
			service.delete(dependentId);
		});		
		Mockito.verify(repository).deleteById(dependentId);
	}
	

}
