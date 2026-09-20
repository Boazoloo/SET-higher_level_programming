# AI Lab: Pair Programming with AI - Part 2

## Project Overview

This project demonstrates the use of structured prompt engineering and AI-assisted code analysis to identify and refactor structural problems in a JavaScript class.

The analysis focuses on:

* Scope and closures
* The Single Responsibility Principle (SRP)
* Modularity and maintainability
* Code testability
* Critical review of AI-generated suggestions

## Files

### `task_queue_legacy.js`

Contains the intentionally flawed `TaskQueue` implementation provided for the exercise. The class mixes task management, logging, and scheduling responsibilities and contains a closure-related scope issue to analyze.

### `task_queue_clean.js`

Contains the refactored implementation after reviewing the AI-generated recommendations. The refactoring separates task management from logging and scheduling responsibilities.

## AI-Assisted Audit

The first prompt asks the AI to analyze the `addTask` method, with particular attention to:

* The scope of the `notify` function
* Variables captured by the closure
* How closures are created in this context
* Block scoping using `let` and `const`
* Potential scope-related problems and predictable code behavior

## AI-Assisted Refactoring

The second prompt asks the AI to identify violations of the Single Responsibility Principle in `addTask` and propose a modular refactoring.

The analysis focuses on separating:

* Task management
* Logging
* Scheduling/processing

The purpose of the refactoring is to make the code easier to test, understand, modify, and maintain.

## Verification

A final AI prompt is used to review `task_queue_clean.js` and verify that:

* The identified SRP violations have been addressed
* Scope and closure issues have been considered
* Responsibilities are appropriately separated
* The resulting implementation is maintainable and testable

## Reflection

LLMs are pattern-matching engines, so their suggestions still need to be reviewed and verified by the developer. Asking the AI to identify structural problems such as SRP violations, scope, and closure behavior helped me understand why the code was problematic instead of simply receiving a replacement solution. This made the exercise more valuable because I could evaluate the reasoning behind the refactoring and understand how modular design improves maintainability.

## Author

Boaz Oloo

