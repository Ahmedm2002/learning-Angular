# Angular Concepts

## Project Initalization

### Angular Cli

Install angular cli to create and manage angular projects

```
npm i -g @angluar/cli
```

Creating a Project

```
ng new <ProjectName>
```

### Files Details

1. #### Package.json

Creates entries of packages along with their version

2. #### Angular.json

Contains the configurations/settings of angular projects.

3. #### Main.ts

Starting Point of the application

4. #### app.config

Configuration file for the app component

## Core Concepts

Angular is a Single Page Appliation one page is present in Angular which is index.html
all the application is rendered in this page

By default app component is rendered as it has been used in the main.ts file

Actual code is present in the app component

## Components

### What is a Component

A component is a resulable block and serves as a building block in angular which contains HTML, CSS and TS

Component Includes:

1. Template (HTML)
2. Styles (CSS)
3. Class (Typescript)

### Creating Component

Command

```
ng generate component <componentName>
```

Or

```
ng g c <componentName>
```

E.g Component build : user

This creates a folder of the component which contains four files

1.  user.component.html (Template)
2.  user.component.css (Styles)
3.  user.component.ts (Class)
4.  user.component.spec.ts (Testing)

### 1. Template

Contains Structure of the component

### 2. Styles

Contains Styles of the component

### 3. Class ( Most Imp )

#### Structure

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',                      // unique selector through which it can be rendered
  imports: [],                                // Contains imports
  templateUrl: './user.component.html',      // Template import
  styleUrl: './user.component.css'           // Styles import
})
export class AdminComponent {
  // Business Logic
}
```

### Rendering Component

To use Component in another component first import it in the component.

Then write to component as an html tag to be rendered.

Code:

```
imports: [userComponent],
```

Then in Template file write the name that is provided in the module's named selector to render it

```
<app-user> </app-user>
```

Or

```
<app-user />
```
