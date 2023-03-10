# Remitly_Assesment

Java Application
================

This is a Java application that converts currencies using NBP API. Here are the instructions on how to run it.

**Basically I have written similar app in Django, and did tests using Selenium. I have setup app on Java but I haven't
rewritten tests into Java code.
I will leave link to tests in Python I have done to same code written in Python only: https://github.com/PsimonL/djangoWebApp/blob/master/functional_tests/test_Converter.py**

Prerequisites
-------------

Before you can run the Java application, you will need to have the following installed on your machine:

-   Java Development Kit (JDK) 11.0.16 or later
-   Apache Maven 3.9.0 or later

Installation
------------

1.  Clone the repository from GitHub:

    bashCopy code

    `git clone`

2.  Navigate to the root directory of the project:

    bashCopy code

    `cd java-application`

3.  Build the project using Maven:

    Copy code

    `mvn clean install`

Running the Application
-----------------------

To run the Java application, execute the following command from the root directory of the project:

bashCopy code

`java -jar target/application.jar`

Replace `application.jar` with the name of the JAR file generated by Maven during the installation process.

Configuration
-------------

The Java application uses a configuration file located in `src/main/resources/config.properties`. 
You can modify the values in this file to configure the application as per your requirements.
For example changing port.

License
-------

This Java application is open source software released under the MIT License. See the LICENSE file for details.