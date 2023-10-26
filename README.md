# TrussOptimization

| Branch  | Build Status |
| ------------- | ------------- |
| main | [![Build Status](https://michalzeg.visualstudio.com/GitHub/_apis/build/status%2FCalculators%2Fmichalzeg.TrussOptimization?branchName=main)](https://michalzeg.visualstudio.com/GitHub/_build/latest?definitionId=35&branchName=main) |


<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
<!-- ABOUT THE PROJECT -->
## About The Project
Genetic algorithm implementation for structural elements. Algorith finds such sections of the truss girder so that the weight of the girder is the lower under applied loads.

![image](https://github.com/michalzeg/TrussOptimization/assets/16364170/1d633c5a-193d-442a-9453-89d0154fb848)

### Built With

* .NET
* Vue.js
* Genetic.Sharp ([more info](https://github.com/giacomelli/GeneticSharp))
* Bootstrap
* svg.js
* three.js

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Before you start please make sure you have installed the following software
* Node.js
* .NET SDK

### Installation
Clone the repo
   ```sh
   git clone https://github.com/michalzeg/TrussOptimization.git
   ```
Run the project using provided PowerShell script
   ```sh
   .\run.ps1
   ```
Open in your browser http://localhost:8080

OR use the provided docker image
   ```sh
   docker-compose -f .\build\docker-compose.yml up
   ```
and open in your browser http://localhost:5000
<!-- USAGE EXAMPLES -->
## Usage

You can see usage on the follwing animation

![trussoptimization](https://github.com/michalzeg/TrussOptimization/assets/16364170/7de87530-0e76-4fc3-b79f-309e3626b898)

<!-- LICENSE -->
## License

Distributed under the MIT License.
