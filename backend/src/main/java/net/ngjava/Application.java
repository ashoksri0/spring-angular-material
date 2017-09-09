package net.ngjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * Created by marcomolteni on 10.04.17.
 */
    @SpringBootApplication
    @ComponentScan(basePackages = "net.ngjava")
    public class Application {
        public static void main(String [] args){
            SpringApplication.run(Application.class, args);
        }
    }
