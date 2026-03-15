FROM eclipse-temurin:25-jre
WORKDIR /app
COPY target/backend-*.jar app.jar
COPY uploads uploads
ENTRYPOINT ["java", "-jar", "app.jar"]