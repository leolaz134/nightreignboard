#Use Java17 to build Spring boot app
FROM openjdk:17-jdk-slim

#Set working directory
WORKDIR /app

#Copy jar file
COPY target/nightreignboard-0.0.1-SNAPSHOT.jar app.jar

#Expose port
EXPOSE 9090

#Run the jar
ENTRYPOINT [ "java","-jar", "app.jar" ]