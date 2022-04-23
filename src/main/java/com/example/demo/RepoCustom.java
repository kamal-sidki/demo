package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RepoCustom extends JpaRepository<Custom,Long> {
}
