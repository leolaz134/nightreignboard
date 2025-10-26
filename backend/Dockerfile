#Use Java17 to build Spring boot app
FROM openjdk:17-jdk-slim

#Set working directory
WORKDIR /app

#Copy jar file
COPY target/nightreignboard-0.0.1-SNAPSHOT.jar app.jar

#Expose port if the hosted port doesnt work
EXPOSE 8080

#Run the jar and use the port Render gives you
ENTRYPOINT ["sh", "-c", "java -Dserver.port=$PORT -jar app.jar"]