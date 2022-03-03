package se.shirwac.pos.system.app;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import se.shirwac.pos.system.service.DatabaseSQL;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.io.FileNotFoundException;
import java.sql.SQLException;

@SpringBootApplication(scanBasePackages = {"se.shirwac.pos.system.*"})
@ComponentScan(basePackages = {"se.shirwac.pos.system.*"})
@EntityScan(basePackages = {"se.shirwac.pos.system.*"})
@EnableJpaRepositories(basePackages = {"se.shirwac.pos.system.*"})
@EnableSwagger2
public class App {
    public static void main(String[] args) throws SQLException, FileNotFoundException {
        SpringApplication.run(App.class, args);
        DatabaseSQL x = new DatabaseSQL();
        x.insert();
    }

  /*  @Bean
    public Docket swaggerConfiguration(){

        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("se.shirwac.pos.system.controller"))
                .build();

    }

   */
}
