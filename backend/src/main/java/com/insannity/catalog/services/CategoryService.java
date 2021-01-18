package com.insannity.catalog.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.insannity.catalog.dto.CategoryDTO;
import com.insannity.catalog.entities.Category;
import com.insannity.catalog.repositories.CategoryRepository;

@Service
public class CategoryService {
	
	@Autowired
	private CategoryRepository repository;
	
	@Transactional(readOnly = true)
	public List<CategoryDTO> findAll(){
		List<Category> list = repository.findAll();		
		return list.stream().map(x -> new CategoryDTO(x)).collect(Collectors.toList());		
		
	}
	
	@Transactional(readOnly = true)
	public CategoryDTO findById(Long id) {		
		Optional<Category> obj = repository.findById(id);
		Category entity = obj.orElseThrow(() -> new EntityNotFoundException("Categoria não encontrada"));
		return new CategoryDTO(entity);
		
	}
	
	@Transactional
	public CategoryDTO insert(CategoryDTO dto) {
		Category entity = new Category();
		entity.setName(dto.getName());
		entity = repository.save(entity);
		
		return new CategoryDTO(entity);
		
	}
	
	
}
