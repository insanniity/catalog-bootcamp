package com.insannity.catalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.insannity.catalog.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{
	
}
