# WaCoDiS Job Manager UI
User friendly web-based UI for creating processing jobs via WaCoDiS [Job Defintion API](https://github.com/WaCoDiS/job-definition-api).

**Table of Content**  
1. [WaCoDiS Project Information](#wacodis-project-information)
2. [Overview](#overview) 
3. [Installation / Building Information](#installation--building-information)
4. [Deployment](#deployment)
5. [Developer Information](#developer-information)
6. [Contact](#contact)
7. [Credits and Contributing Organizations](#credits-and-contributing-organizations)

## WaCoDiS Project Information
<p align="center">
  <img src="https://raw.githubusercontent.com/WaCoDiS/apis-and-workflows/master/misc/logos/wacodis.png" width="200">
</p>
Climate changes and the ongoing intensification of agriculture effect in increased material inputs in watercourses and dams.
Thus, water industry associations, suppliers and municipalities face new challenges. To ensure an efficient and environmentally
friendly water supply for the future, adjustments on changing conditions are necessary. Hence, the research project WaCoDiS
aims to geo-locate and quantify material outputs from agricultural areas and to optimize models for sediment and material
inputs (nutrient contamination) into watercourses and dams. Therefore, approaches for combining heterogeneous data sources,
existing interoperable web based information systems and innovative domain oriented models will be explored.

### Architecture Overview
For a detailed overview about the WaCoDiS system architecture please visit the 
**[WaCoDiS Core Engine](https://github.com/WaCoDiS/core-engine)** repository.  

## Overview  
The WaCoDiS Job Manager UI is a light-weight interface which facilitates the communication with the WaCoDiS backend via the
WaCoDiS [Job Defintion API](https://github.com/WaCoDiS/job-definition-api). It allows to view all scheduled jobs as well as
scheduling new and the deletion of redundant jobs. 

### Technologies/Dependencies
* __Angular__:
WaCoDiS Job Manager UI is implemented by the use of the web framework [Angular](https://angular.io/).
* __Bootstrap__
The UI style relies on the CSS framework [Bootstrap](https://getbootstrap.com/).
[ng-bootstrap](https://ng-bootstrap.github.io/#/home) is integrated for using Bootstrap components with Angular.

## Installation / Building Information
### Build from Source
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a
production build.

### Build with Docker
The repository contains a Dockerfile for building a Docker image. Just run `docker build -t wacodis/job-manager-ui .` from the
project root to build the image.

The [deployment section](#run-with-docker) provides helpful information for running the UI as Docker container.

### Configuration
#### Parameters
Adopt the environment files inside the _src/environments/_ folder to your runtime environment specific needs:
* `production`: Indicates whether the environment file should be used in production mode or not
* `wacodisAPI`: URL that points to the WaCoDiS Job Defintion API
* `processMappingsPath`: Path to a process mappings file that contains definitions for supported processes. The project
comes with a mappings file inside the _src/assets_ folder.

To use the locally running API components, in the file environment.ts, set the parameter `wacodisAPI` to the relevant URL,
which is generally 'http://localhost:8080/wacodis-job-definition-api/jobDefinitions'. 

#### Process mappings
The WaCoDiS system supports arbitrary EO processes, whose execution will be triggered in accordance to job descriptions
that can be created via Job Definition API. Each process has certain requirements regarding the type of inputs that will be
used for process execution. Hence, the Job Manager UI is designed in way that enables the dynamically rendering of forms
that take into account the characteristics of each process. To do so, you have to provide a JSON-based configuration file
that contains process descriptions. You will find such a file inside the _src/assets_ folder. Just have a look into the
file 'processMappings.json'. Here, you will get to know how to specify job objects depending on the selected process.

## Deployment
### Dependencies
WaCoDiS Job Manager UI serves as frontend for WaCoDiS Job Defintion API. Hence, Job Defintion API must be deployed in
beforehand, otherwise the UI can not send API requests to it. To install the backend components, follow the instructions as
described here: https://github.com/WaCoDiS/job-definition-api. We recommend to run the Job Definition API as Docker
container to speed up deployment. Once installed and configured, to use the API on your local system you will need to
configure the Angular app accordingly. 

### Run with Docker
Start the Docker container by running `docker run --rm -it --name app-job-manager-container -e PORT=80 -p 8080:80 wacodis/job-manager-ui`.
The repository also contains a docker-compose file you can use for starting the container with `docker-compose up`.
Subsequently, the Job Manager UI is available on http://localhost:8080/.

### Run on development server
Run `ng serve --open` for a dev server and opening a web browser window displaying the job manager on http://localhost:4200/jobs.

## Developer Information
This section contains information for developers.

### How to Contribute
Feel free to implement missing features by creating a pull request or get in touch with our friendly developers.

### Pending features
WaCoDiS Job Manager UI serves as a lightweight frontend for managing processing jobs. Using the UI avoids writing complex JSON in order to create new jobs via the REST based Job Definition API. However, some useful features are still pending and listed below:
* For convenience, different WaCoDiS job definition parameters are not supported by the Job Manager UI. E.g. this includes [execution setting parameters](https://github.com/WaCoDiS/apis-and-workflows/blob/7e6aa4e22cf57d9135f6264435b6dc52c62fef9c/openapi/src/main/definitions/wacodis-schemas.yml#L479-L504). To allow users of the UI the to make use of full potential of WaCoDiS, the UI should
be expanded by additional form elements.
* The area of interest for WaCoDiS Jobs has to be specified following GeoJSON bbox format [minLon, minLat, maxLon, maxLat]. Up to now, users have to look up the bounding box for an area of interest by using external applications. Embedding a map (e.g. using [Leaflet](https://leafletjs.com/)) would facilitate this workflow.
* The same applies to specifying the cron definition for a periodic job. The UI form links to https://crontab.guru/ which can be utilized for creating a cron expression. The implementation or embedding of a cron picker widget would ease this tremendously and implies a much better user experience.

### Branching
The master branch provides sources for stable builds. The develop branch represents the latest (maybe unstable) state of
development.

### License and Third Party Lib POM Plugins
[optional]

## Contact
|    Name   |   Organization    |    Mail    |
| :-------------: |:-------------:| :-----:|
| Sebastian Drost | Bochum University of Applied Sciences | sebastian.drost@hs-bochum.de |
| Arne Vogt | Bochum University of Applied Sciences | arne.vogt@hs-bochum.de |
| Andreas Wytzisk  | Bochum University of Applied Sciences | andreas.wytzisk@hs-bochum.de |
| Matthes Rieke | 52° North GmbH | m.rieke@52north.org |

## Credits and Contributing Organizations
- Department of Geodesy, Bochum University of Applied Sciences, Bochum
- 52° North Initiative for Geospatial Open Source Software GmbH, Münster
- Wupperverband, Wuppertal
- EFTAS Fernerkundung Technologietransfer GmbH, Münster

The research project WaCoDiS is funded by the BMVI as part of the [mFund programme](https://www.bmvi.de/DE/Themen/Digitales/mFund/Ueberblick/ueberblick.html)  
<p align="center">
  <img src="https://raw.githubusercontent.com/WaCoDiS/apis-and-workflows/master/misc/logos/mfund.jpg" height="100">
  <img src="https://raw.githubusercontent.com/WaCoDiS/apis-and-workflows/master/misc/logos/bmvi.jpg" height="100">
</p>

