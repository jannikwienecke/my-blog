---
external: false
title: "Deep Dive into `@RequestBody` and `@Valid` in Spring Controllers"
description: "Deep Dive into `@RequestBody` and `@Valid` in Spring Controllers"
date: 2023-12-30
tags: ["Spring", "Kotlin", "cheat-sheet"]
---

In Spring MVC, `@RequestBody` and `@Valid` annotations play a crucial role in handling and validating incoming data in web applications. Let's explore these annotations in more detail with a comprehensive example.

---

## Understanding `@RequestBody`
The `@RequestBody` annotation is used to bind the HTTP request body to a domain object in a method parameter. It's typically used with POST or PUT HTTP methods. Spring automatically deserializes incoming JSON or XML into a Java object.

### Example: Handling JSON Requests
Consider an API endpoint for registering a new user, where the client sends user details in a JSON format.

```kotlin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

data class UserRegistrationRequest(
    val username: String,
    val email: String,
    val password: String
)

@RestController
class UserController {

    @PostMapping("/register")
    fun registerUser(@RequestBody request: UserRegistrationRequest): String {
        // Handle user registration logic here
        return "Registered user: ${request.username}"
    }
}
```

In this example, when a JSON request is received at `/register`, Spring automatically maps it to a `UserRegistrationRequest` object.

---

## Understanding `@Valid`
The `@Valid` annotation triggers validation of the annotated object, based on constraints defined in the object class. It's commonly used alongside `@RequestBody`.

### Example: Adding Validation
Let's enhance the `UserRegistrationRequest` class with validation constraints.

```kotlin
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

data class UserRegistrationRequest(
    @field:NotBlank(message = "Username must not be blank")
    val username: String,

    @field:NotBlank(message = "Email must not be blank")
    @field:Email(message = "Invalid email format")
    val email: String,

    @field:Size(min = 6, message = "Password must be at least 6 characters")
    val password: String
)
```

Now, update the `registerUser` method to include `@Valid`.

```kotlin
@RestController
@Validated
class UserController {

    @PostMapping("/register")
    fun registerUser(@RequestBody @Valid request: UserRegistrationRequest): String {
        // Registration logic
        return "Registered user: ${request.username}"
    }
}
```

In this updated example, the `@Valid` annotation triggers the validation of the request body against the constraints defined in `UserRegistrationRequest`. If validation fails, Spring automatically sends a 400 Bad Request response with details about the validation errors.

---

### Handling Validation Errors
To customize the response for validation errors, you can use a `ControllerAdvice`.

```kotlin
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.http.ResponseEntity

@ControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException::class)
    fun handleValidationExceptions(exception: MethodArgumentNotValidException): ResponseEntity<List<String>> {
        val errors = exception.bindingResult
            .fieldErrors
            .map { "${it.field}: ${it.defaultMessage}" }
        return ResponseEntity.badRequest().body(errors)
    }
}
```

This `ControllerAdvice` captures validation errors and returns them in a more readable format.

---

## Conclusion
Combining `@RequestBody` and `@Valid` in Spring Controllers allows for effective handling and validation of incoming data. It simplifies the process of ensuring that the data passed to your controllers meets your application's requirements. Remember to handle validation errors gracefully for a better user experience. This approach is essential for building robust, secure Spring applications.