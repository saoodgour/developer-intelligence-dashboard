
package com.telusko.SpringBootMavenApp;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Assalamualaikum! My First Spring Boot Application";
    }

    @GetMapping("/api/dashboard")
    public String dashboard() {
        return "Developer Intelligence Dashboard API is working!";
    }

    @GetMapping("/api/developers")
    public List<Developer> developers() {
        return List.of(
            new Developer("Vikram Sethi", "vikram_wins", 66.4,
                List.of("Next.js", "FastAPI", "LangChain"), "Founding Engineer"),

            new Developer("Aakash Verma", "aakash_versatile", 62.6,
                List.of("Python", "TypeScript", "Go"), "Full Stack Engineer"),

            new Developer("Ananya Joshi", "ananya_rising", 61.9,
                List.of("FastAPI", "Next.js", "OpenAI SDK"), "AI Engineer")
        );
    }

    public record Developer(
        String name,
        String username,
        double score,
        List<String> skills,
        String role
    ) {}
}
