# SmartCalc Studio

A modern multi-purpose calculator web application built with HTML, CSS, JavaScript, and PHP. The project combines essential mathematical tools, geometry calculators, BMI analysis, unit conversions, and educational utility pages into a single responsive platform.

---

## Overview

SmartCalc Studio is designed as an academic and practical utility project that demonstrates front-end web development concepts combined with mathematical problem-solving features. The application provides users with multiple calculators and utility tools through a clean browser-based interface.

The project focuses on:

* Responsive web design
* Interactive mathematical calculations
* Educational utility tools
* Beginner-friendly UI/UX
* Multi-page web application structure
* Lightweight deployment without complex dependencies

---

# Features

## Core Calculator Features

### Basic Calculator

* Arithmetic operations
* Addition, subtraction, multiplication, and division
* Real-time calculation functionality
* User-friendly calculator interface

### Area Calculator

Calculate areas for different geometric shapes including:

* Circle
* Rectangle
* Square
* Triangle
* Parallelogram

### Volume Calculator

Supports volume calculations for:

* Cube
* Cuboid
* Cylinder
* Sphere
* Cone

### BMI Calculator

* Body Mass Index calculation
* Height and weight input support
* Health category interpretation

### Unit Conversion Utilities

Includes conversion tools for:

* Length
* Weight
* Temperature
* Other mathematical conversions

---

# Additional Website Pages

| Page             | Description                        |
| ---------------- | ---------------------------------- |
| `home.html`      | Main dashboard and navigation page |
| `index.html`     | Application landing page           |
| `calcy.html`     | Basic calculator module            |
| `area.html`      | Area calculation utilities         |
| `volume.html`    | Volume calculation utilities       |
| `bmi.html`       | BMI and health calculator          |
| `contactus.html` | Contact and feedback form          |
| `info.html`      | Developer/project information      |
| `founder.html`   | Educational/history content        |
| `login1.html`    | Login interface demo               |
| `reg.html`       | Registration interface demo        |
| `college.html`   | Academic/project-related page      |

---

# Technology Stack

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* PHP (for form processing and backend handling)

## Build Tools

* Gradle
* Maven

## IDE Support

* IntelliJ IDEA project configuration included

---

# Project Structure

```text
Calculator/
│
├── area.html                # Area calculator page
├── bmi.html                 # BMI calculator page
├── calcy.html               # Main calculator
├── volume.html              # Volume calculator
├── home.html                # Dashboard/home page
├── index.html               # Landing page
├── contactus.html           # Contact form
├── login1.html              # Login page
├── reg.html                 # Registration page
├── founder.html             # Educational content
├── info.html                # Developer information
│
├── data.php                 # PHP backend handling
├── sample.php               # Sample PHP functionality
├── problem.php              # PHP utility file
│
├── build.gradle             # Gradle configuration
├── pom.xml                  # Maven configuration
├── settings.gradle          # Gradle settings
│
├── gradlew                  # Gradle wrapper script
├── gradlew.bat              # Windows Gradle wrapper
│
└── assets/images            # Project images and UI assets
```

---

# Installation & Setup

## Option 1: Run Directly in Browser

Since the project is primarily static HTML/CSS/JS, you can run it directly.

### Steps

1. Download or clone the repository.
2. Extract the project folder.
3. Open:

```text
index.html
```

or

```text
home.html
```

in your browser.

---

## Option 2: Run Using PHP Local Server

If you want PHP functionality enabled:

### Requirements

* PHP installed locally

### Start Local Server

```bash
php -S localhost:8000
```

### Open in Browser

```text
http://localhost:8000/home.html
```

---

# Build Configuration

The project includes both Maven and Gradle configuration files.

## Maven

```bash
mvn clean install
```

## Gradle

```bash
./gradlew build
```

For Windows:

```bash
gradlew.bat build
```

---

# Screenshots

The repository already contains multiple UI preview images:

* `calcy.jpeg`
* `area.jpeg`
* `volume.jpeg`
* `bmi.jpeg`
* `home.jpg`
* `contactus.jpg`

These can be added to the README preview section if publishing the project online.

Example:

```markdown
![Home Page](home.jpg)
```

---

# Educational Purpose

This project is suitable for:

* Web development mini projects
* College academic submissions
* Front-end practice
* JavaScript learning
* Mathematical utility demonstrations
* Beginner PHP integration practice

---

# Future Improvements

Potential enhancements for the project:

* Dark mode support
* Scientific calculator module
* Database integration
* User authentication system
* Mobile application version
* API-based calculations
* Cloud deployment
* React or Angular migration
* Advanced graph plotting
* Calculation history storage

---

# Deployment Suggestions

You can deploy this project on:

* GitHub Pages (static pages)
* Netlify
* Vercel
* InfinityFree (for PHP support)
* 000WebHost
* Apache/Nginx servers

---

# Contributing

Contributions are welcome.

## Steps to Contribute

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

# License

This project is intended for educational and learning purposes.

You may modify and use it for personal, academic, or portfolio projects.

---

# Author

Developed as a multi-functional calculator and utility web application project.

---

# Quick Start

```bash
# Clone repository
git clone <repository-url>

# Enter project directory
cd Calculator

# Start PHP local server
php -S localhost:8000
```

Open:

```text
http://localhost:8000
```

---

# Summary

SmartCalc Studio is a lightweight and practical web-based calculator suite that demonstrates responsive UI design, JavaScript-based mathematical logic, and basic PHP integration. The project is well suited for students, beginners, and developers looking to explore utility-based web application development.
