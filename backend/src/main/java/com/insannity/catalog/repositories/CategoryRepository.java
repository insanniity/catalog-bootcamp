package com.insannity.catalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.insannity.catalog.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{
	
}
