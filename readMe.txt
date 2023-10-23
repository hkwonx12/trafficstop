Project Name: TRAFFIC STOP

Date: 14-22 October 2022, Women Who Code Hackathon for Social Good 2023

Description: Help stop human trafficking by entering your missing loved one's information and signing up for alerts.

Traffic Guards:
    - Helen Yoo (team lead and frontend design)
    - Wanda McCrae (backend design)
    - Heather DePesa (researcher)

Backend: trafficstop API built with Python (Django)
Frontend: React.js and Passage by 1Password

Missing Functionality:
- Backend authorization to protect missing persons or sightings from being edited by the person who entered them.
- Links from the missing person record to the user account for the reporter
- Frontend components allowing the logged in user to edit or delete the missing person or sighting records they created. (This functionality exists on the backend, but without the backend authorization, anyone can edit that data, if it was shown on the frontend.)

Future Plans:
- Complete missing functionality.
- Tabs on the Missing Persons page to show missing persons entered by the logged in user on one tab and all other missing persons on the other tab.
- Ability to search for missing people by the reporter's name.
- Ability to search for sightings by the sighting reporter's name.
- Ability to upload photos for the missing person details and the sighting details.
- Sightings are added to a queue and are not displayed until the person who reported them missing person approves them.
