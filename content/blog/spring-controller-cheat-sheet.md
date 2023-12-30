---
external: false
title: "Mastering Spring Controllers"
description:  "Mastering Spring Controllers: A Comprehensive Guide"
date: 2023-12-30
tags: ["Spring", "Kotlin", "cheat-sheet"]
---


Spring Controllers are central to building modern, robust web applications using Spring MVC. In this blog post, we'll explore 14 key aspects of Spring Controllers, each vital for a well-rounded understanding of handling HTTP requests and responses in Spring.

---

## 1. Basic Controller Declaration

Spring Controllers begin with the `@Controller` annotation, enabling them to handle HTTP requests.

```kotlin
@Controller
class MyController {
    @GetMapping("/greet")
    fun greet(model: Model): String {
        model.addAttribute("message", "Hello World")
        return "greet"
    }
}
```

Here, `MyController` maps HTTP GET requests to the `greet` method.

---

## 2. RESTful Web Services with `@RestController`

`@RestController` simplifies creating RESTful services by combining `@Controller` and `@ResponseBody`.

```kotlin
@RestController
class HelloRestController {
    @GetMapping("/hello")
    fun sayHello(): String {
        return "Hello, World!"
    }
}
```

This controller returns a string directly as the response body.

---

## 3. Handling Request Parameters with `@RequestParam`

Use `@RequestParam` to bind query parameters to method parameters.

```kotlin
@RestController
class ParameterController {
    @GetMapping("/welcome")
    fun welcomeUser(@RequestParam name: String): String {
        return "Welcome, $name!"
    }
}
```

`@RequestParam` binds the value of the query parameter `name`.

---

## 4. Extracting URI Variables with `@PathVariable`

Path variables extract values from the URI.

```kotlin
@RestController
class VariableController {
    @GetMapping("/user/{id}")
    fun getUserById(@PathVariable id: Long): String {
        return "User ID: $id"
    }
}
```

`@PathVariable` annotation binds a URI template variable.

---

## 5. Form Data Handling using `@ModelAttribute`

`@ModelAttribute` binds form data to domain objects.

```kotlin
@Controller
class FormController {
    @PostMapping("/submitForm")
    fun submitForm(@ModelAttribute userForm: UserForm, model: Model): String {
        model.addAttribute("user", userForm)
        return "formResult"
    }
}
```

Form submissions are handled and mapped to `UserForm`.

---

## 6. Exception Handling with `@ExceptionHandler`

Controllers can handle exceptions using `@ExceptionHandler`.

```kotlin
@RestControllerAdvice
class GlobalExceptionHandler {
    @ExceptionHandler(Exception::class)
    fun handleException(e: Exception): String {
        return e.message ?: "An error occurred"
    }
}
```

This example handles exceptions globally in your application.

---

## 7. Using `@RequestBody` for JSON/XML Payloads

Handle HTTP POST requests with JSON or XML payloads using `@RequestBody`.

```kotlin
@RestController
class UserController {
    @PostMapping("/users")
    fun createUser(@RequestBody userDto: UserDto): String {
        return "User created with username: ${userDto.username}"
    }
}
```

`@RequestBody` binds the request body to a domain object.

---

## 8. Building Custom Responses

Spring provides multiple ways to customize responses, including status codes and headers.

### 8.1 Custom Response Status

Set HTTP status codes using `@ResponseStatus`.

```kotlin
@RestController
class CustomStatusController {
    @GetMapping("/customStatus")
    @ResponseStatus(HttpStatus.CREATED)
    fun customStatus(): String {
        return "Resource created successfully"
    }
}
```

This returns a 201 (Created) status code.

### 8.2 ResponseEntity

`ResponseEntity` offers control over responses, including headers and status codes.

```kotlin
@RestController
class ResponseEntityController {
    @GetMapping("/responseEntity")
    fun responseEntity(): ResponseEntity<String> {
        val headers = HttpHeaders().apply {
            set("Custom-Header", "value")
        }
        return ResponseEntity
            .status(HttpStatus.ACCEPTED)
            .headers(headers)
            .body("Response with custom headers and status")
    }
}
```

Builds a complete response with headers and status code.

---

## 9. Input Validation with `@Valid`

Spring supports bean validation using the `@Valid` annotation.

```kotlin
@RestController
class ValidationController {
    @PostMapping("/validateUser")
    fun validateUser(@RequestBody @Valid userRequest: UserRequest): String {
        return "Validated user: ${userRequest.name}"
    }
}
```

`@Valid` triggers validation on the `UserRequest` object.

---

## 10. Global Error Handling with `@ControllerAdvice`

`@ControllerAdvice` handles exceptions across multiple controllers.

```kotlin
@ControllerAdvice
class GlobalExceptionHandler {
    @ExceptionHandler(Exception::class)
    fun handleAllExceptions(exception: Exception, request: HttpServletRequest): String {
        return "An error occurred: ${exception.message}"
    }
}
```

Handles all types of exceptions globally.

---

## 11. Content Negot

iation
Content negotiation returns different representations of a resource.

```kotlin
@RestController
class ContentNegotiationController {
    @GetMapping(value = ["/content"], produces = [MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE])
    fun getContent(): MyResponse {
        return MyResponse("Data")
    }
}
```

`produces` attribute specifies the media type.

---

## 12. Asynchronous Controllers

Spring supports asynchronous processing in controllers.

```kotlin
@RestController
class AsyncController {
    @GetMapping("/async")
    fun getAsyncData(): DeferredResult<String> {
        val output = DeferredResult<String>()
        Thread { output.setResult("Async response") }.start()
        return output
    }
}
```

`DeferredResult` for handling long-running requests.

---

## 13. API Versioning

Manage different API versions for backward compatibility.

```kotlin
@RestController
class ApiVersioningController {
    @GetMapping("/api/v1/items")
    fun getItemsV1(): String {
        return "API Version 1 - Items"
    }

    @GetMapping("/api/v2/items")
    fun getItemsV2(): String {
        return "API Version 2 - Items"
    }
}
```

Different methods for different API versions.

---

## 14. File Upload and Download

Controllers can handle file uploads and downloads.

```kotlin
@RestController
class FileController {
    @PostMapping("/upload")
    fun handleFileUpload(@RequestParam("file") file: MultipartFile): String {
        return "File uploaded successfully"
    }
}
```

`MultipartFile` for handling file uploads.

---

### Best Practices and Conclusion

Spring Controllers are a powerful part of the Spring MVC framework. Understanding these 14 aspects is crucial for building efficient, secure, and robust web applications. Remember to follow best practices, such as keeping controllers lightweight, using DTOs, and validating inputs. Stay updated with the latest Spring documentation and community best practices for the most effective use of Spring Controllers in your projects.

---

Happy coding with Spring! 🌿🌱
