---
external: false
title: "Simplifying Complex Logic: Harnessing the State Pattern for Better Code Organization"
description: "How the State Pattern Simplifies Complex Logic and Enhances Code Organization"
date: 2023-05-24
tags: ["Principles", "software-architecture"]
---

# Introduction:

Software development often involves dealing with objects that exhibit different behaviors and functionalities depending on their current state. In such cases, the State Pattern provides an effective solution for managing state-specific behaviors in a flexible and maintainable manner. This blog article aims to provide an overview of the State Pattern, discuss its use cases, highlight the differences between the State Pattern and the Strategy Pattern, and explore how the State Pattern relates to state machines.

## Overview of the State Pattern:

The State Pattern is a behavioral design pattern that allows an object to alter its behavior when its internal state changes. It encapsulates each state into its own class and enables the object to switch between different states seamlessly. By decoupling the state-specific behavior from the object's core logic, the State Pattern promotes cleaner code, improved extensibility, and simplified maintenance.

## Use Cases for the State Pattern:

The State Pattern is suitable in scenarios where an object's behavior significantly changes depending on its internal state. Some common use cases include:

Finite State Machines (FSMs): When modeling systems with a finite number of states and well-defined state transitions, the State Pattern can effectively represent the FSM's states as separate classes, simplifying the management of state-specific logic.
User Interface (UI) Components: Graphical user interfaces often have elements that behave differently based on user interactions or system events. The State Pattern can help handle these dynamic UI components by separating their behavior into distinct states.
Game Development: Games often involve various game states, such as menu screens, gameplay, paused state, and game over. Implementing these states using the State Pattern can enhance code organization and facilitate the addition of new states without affecting existing logic.

## State Pattern vs. Strategy Pattern:

While the State Pattern and the Strategy Pattern share similarities, their main difference lies in their intent and application.

The State Pattern focuses on managing an object's internal state and its corresponding behavior, enabling seamless state transitions. It encapsulates state-specific behavior within individual state classes and allows the object to delegate behavior to the current state. The primary objective is to enable an object to change its behavior at runtime based on its internal state.

On the other hand, the Strategy Pattern emphasizes the interchangeability of algorithms or strategies that can be selected and switched dynamically. It abstracts different algorithms into separate strategy classes, allowing clients to choose the desired strategy at runtime. The primary intent is to provide a flexible way to vary an object's behavior independently of its internal state.

## State Pattern and State Machines:

The State Pattern and state machines are closely related concepts. State machines represent a set of states and the transitions between them based on defined conditions. By applying the State Pattern, each state in a state machine is implemented as an individual class, encapsulating its specific behavior and transition logic.

Using the State Pattern for modeling state machines improves modularity, readability, and maintainability. Each state class becomes responsible for handling its own transitions, resulting in code that is easier to understand and modify. Additionally, adding new states or modifying existing ones becomes a straightforward process without impacting the overall system.

## Example of the State Pattern in TypeScript and React:

The following example demonstrates the State Pattern in TypeScript. It models a traffic light system with three states: Red, Yellow, and Green. The traffic light controller is implemented using the State Pattern, where each state is represented by a separate class. The controller can switch between states and handle state-specific actions. In our implementation, the individual states are responsible for handling their own transitions.Also we want to archieve a high level ob seperation of concerns. We do not want our react application to know about our domain logic. Therefore we use the controller as a bridge between our react application and our domain logic.

```typescript
// Define the interface for the states
interface IState {
  enterState(controller: TrafficLightController): void;
  exitState(controller: TrafficLightController): void;
  handleAction(controller: TrafficLightController): void;
}

// Implement the different state classes
class RedState implements IState {
  enterState(controller: TrafficLightController): void {
    console.log("Entering Red State");
    // Additional logic when entering Red State
  }

  exitState(controller: TrafficLightController): void {
    console.log("Exiting Red State");
    // Additional logic when exiting Red State
  }

  handleAction(controller: TrafficLightController): void {
    console.log("Red State: Handling action...");
    // Red State specific action handling
    controller.changeState(new GreenState());
  }
}

class YellowState implements IState {
  enterState(controller: TrafficLightController): void {
    console.log("Entering Yellow State");
    // Additional logic when entering Yellow State
  }

  exitState(controller: TrafficLightController): void {
    console.log("Exiting Yellow State");
    // Additional logic when exiting Yellow State
  }

  handleAction(controller: TrafficLightController): void {
    console.log("Yellow State: Handling action...");
    // Yellow State specific action handling
    controller.changeState(new RedState());
  }
}

class GreenState implements IState {
  enterState(controller: TrafficLightController): void {
    console.log("Entering Green State");
    // Additional logic when entering Green State
  }

  exitState(controller: TrafficLightController): void {
    console.log("Exiting Green State");
    // Additional logic when exiting Green State
  }

  handleAction(controller: TrafficLightController): void {
    console.log("Green State: Handling action...");
    // Green State specific action handling
    controller.changeState(new YellowState());
  }
}

// Implement the TrafficLightController class
class TrafficLightController {
  private currentState: IState;

  constructor() {
    this.currentState = new RedState();
    this.currentState.enterState(this);
  }

  public handleAction(): void {
    this.currentState.handleAction(this);
  }

  public changeState(newState: IState): void {
    this.currentState.exitState(this);
    this.currentState = newState;
    this.currentState.enterState(this);
  }

  public getCurrentStateName(): string {
    return this.currentState.constructor.name;
  }
}

// Implement the component that uses the TrafficLightController
const TrafficLight: React.FC<{ controller: TrafficLightController }> = ({
  controller,
}) => {
  const [currentState, setCurrentState] = useState(
    controller.getCurrentStateName()
  );

  const handleAction = () => {
    controller.handleAction();
    setCurrentState(controller.getCurrentStateName());
  };

  return (
    <div>
      <h3>Current State: {controller.getCurrentStateName()}</h3>
      <button onClick={handleAction}>Change State</button>
    </div>
  );
};

// Usage of TrafficLight and TrafficLightController
const App: React.FC = () => {
  const controller = new TrafficLightController();

  return (
    <div>
      <h2>Traffic Light System</h2>
      <TrafficLight controller={controller} />
    </div>
  );
};

export default App;
```

In this implementation, we have used the State Pattern to encapsulate the different states of a traffic light system. Each state is represented by a class that implements the IState interface, defining methods for entering the state, exiting the state, and handling actions specific to that state.

We have also introduced a TrafficLightController class that serves as the central component responsible for managing the state transitions and logic of the traffic light system. It interacts with the state objects and controls the flow of state changes.

By separating the business logic into the TrafficLightController class, we have achieved a higher level of encapsulation, keeping the React components (TrafficLight and App) focused on rendering the UI and interacting with the controller rather than directly handling the state transitions.

Regarding other design patterns, in this implementation, we can observe the following:

State Pattern: The State Pattern is used to represent the different states of the traffic light system and encapsulate their behaviors. Each state class handles its own logic for entering, exiting, and handling actions, providing a clean separation of concerns and enabling easy addition or modification of states.
Dependency Injection: The TrafficLight component receives an instance of TrafficLightController as a prop. This follows the Dependency Injection principle, allowing the component to rely on an external dependency (the controller) and enabling easier testing and decoupling of components.
Single Responsibility Principle (SRP): Each class has a single responsibility. The state classes (RedState, YellowState, GreenState) are responsible for their specific state behavior, while the TrafficLightController handles the overall control and state transitions. The React components (TrafficLight and App) are responsible for rendering the UI and interacting with the controller.
Separation of Concerns: The React components (TrafficLight and App) focus solely on their rendering and user interaction responsibilities. They delegate the state transitions and logic to the TrafficLightController, adhering to the principle of separating concerns and promoting modular and reusable code.

By employing these design patterns and principles, we achieve a more modular, maintainable, and testable codebase. The business logic of the traffic light system is encapsulated within the TrafficLightController, allowing for easy extension and modification while keeping the React components clean and focused on their UI rendering tasks.

## Conclusion:

The State Pattern is a valuable tool for managing object states in software development. By employing separate state classes, it enables objects to alter their behavior dynamically, improving code organization, flexibility, and maintainability. It finds applications in diverse domains, ranging from UI components to game development. Understanding the State Pattern and its distinctions from the Strategy Pattern allows developers to choose the most appropriate design pattern for their specific requirements and create robust, adaptable systems.
