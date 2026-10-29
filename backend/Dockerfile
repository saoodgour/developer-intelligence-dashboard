
FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY . .
RUN chmod +x mvnw
RUN apt-get update && apt-get install -y maven
RUN mvn -DskipTests package
EXPOSE 8080
CMD ["java", "-jar", "target/SpringBootMavenApp-0.0.1-SNAPSHOT.jar"]
