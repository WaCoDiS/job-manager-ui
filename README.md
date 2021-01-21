# WaCoDiS Job Manager UI

**Table of Content**  
TODO  

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
The WaCoDiS Job Manager UI is a light-weight interface which facilitates the communication with the WaCoDiS backend via the WaCoDiS API (https://github.com/WaCoDiS/job-definition-api). It allows to view all scheduled jobs as well as scheduling new and the deletion of redundant jobs. 

### Technologies/Dependencies
Angular: 10.2.1
Bootstrap: 4.4.1

## Installation / Building Information
### Build from Source
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Build with Docker
TODO 
Docker run

### Configuration
To install the backend components, follow the instructions as described here : https://github.com/WaCoDiS/job-definition-api. Once installed and configured, to use the API on your local system you will need to configure the Angular app accordingly. 

#### Parameters
To use the locally running API components, in the file environment.ts, set the parameter 'wacodisAPI' to the relevant URL, which is generally 'http://localhost:8080/wacodis-job-definition-api/jobDefinitions'. 

TODO 
To create new jobs, have a look into the file 'processMappings.json'. Here, you will get to know how how to specify job objects depending on the selected process.

#### Development server
Run `ng serve --open` for a dev server and opening a web browser window displaying the job manager on http://localhost:4200/jobs.

### Deployment
TODO
This section describes deployment scenarios, options and preconditions.

## User Guide
To install the backend components, follow the instructions as described here : https://github.com/WaCoDiS/job-definition-api


## Contribution - Developer Information
This section contains information for developers.

### How to Contribute
TODO
Describe how to extend this module

### Branching
The master branch provides sources for stable builds. The develop branch represents the latest (maybe unstable) state of development.

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

