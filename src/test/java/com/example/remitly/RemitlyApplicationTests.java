package com.example.remitly;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class RemitlyApplicationTests {

    @Test
    void contextLoads() {
        System.out.println("Hello World!");
    }

    @Test
    void work() {
        String chromeDriverPath = "src/test/java/com/example/remitly/chromedriver.exe";
        System.setProperty("webdriver.chrome.driver", chromeDriverPath);


        WebDriver driver = new ChromeDriver();
        driver.get("http://localhost:8081");
        String pageTitle = driver.getTitle();
        System.out.println("Page title is: " + pageTitle);
        driver.quit();
    }
}
