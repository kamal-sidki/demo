package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	CommandLineRunner start(RepoCustom customerRepository){
		return args -> {
			customerRepository.save(new Custom(null,"Enset","contact@enset-media.ma"));
			customerRepository.save(new Custom(null,"FSTM","contact@fstm.ma"));
			customerRepository.save(new Custom(null,"ENSAM","contact@ensam.ma"));
			customerRepository.save(new Custom(null,"ENSAM2","contact@ensam.ma"));
			customerRepository.save(new Custom(null,"ENSAM3","contact@ensam.ma"));
			customerRepository.findAll().forEach(System.out::println);
		};
	}

}
