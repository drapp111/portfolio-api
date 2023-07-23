<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/drapp111/portfolio-api">
    <img src="logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Custom Portfolio Website Backend</h3>

  <p align="center">
    A backend API for my custom portfolio website.
    <br />
    <a href="https://github.com/drapp111/portfolio-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://declanrappdesign.com">View Site</a>
    ·
    <a href="https://github.com/drapp111/portfolio-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/drapp111/portfolio-api/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#deployed-on">Deployed On</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://declanrappdesign.com)

Welcome to the API and Server portion of my custom lighting design website project! In this section, I'll give you a brief overview of how the backend of my custom portfolio website is structured and the technologies used to ensure seamless functionality.

🌐 Backend API with Express:
The backend API is the backbone of the website, responsible for handling database interactions and email functionality. Developed using Express, a fast and flexible Node.js framework, it provides a robust and efficient platform for managing data and serving requests from the frontend.

💾 PostgreSQL Database:
To store and manage data, I've integrated a PostgreSQL database with the backend API. PostgreSQL is a powerful, open-source relational database that ensures data integrity and provides excellent support for complex queries.

📧 Gmail Integration:
Staying connected with site visitors is crucial. That's why I've integrated Google OAuth and the Gmail API to enable email functionalities. Visitors can easily interact with the website and send feedback/requests through a contact form.

🖥️ Nginx on Linux Server with SSL:
To serve the website securely and optimize its performance, I've set up a custom Linux server on a personal Raspberry Pi, with Nginx as a reverse proxy. Nginx efficiently handles incoming requests and acts as a gateway to the backend API. SSL is also configured, ensuring all data exchanged is encrypted and secure.

🔁 Continuous Integration and Deployment (CI/CD):
Making updates and deploying changes should be a breeze, which is why I've established a seamless CI/CD pipeline using GitHub Actions. This system automates testing and deployment processes, ensuring a smooth and reliable development workflow.

Your feedback and contributions are highly appreciated as I continue to enhance and refine the API and server setup.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Express][Express.js]][Express-url]
* [![PostgreSQL][Postgres]][Postgres-url]

### Deployed On

* [![Raspberry Pi][Pi]][Pi-url]
* [![Nginx][Nginx]][Nginx-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Add additional functionality for web site
    - [ ] Login/Authentication feature for site editing
    - [ ] Database update functions for easier updates of text/image paths
- [ ] Security Enhancements
    - [ ] Configure encryption between client and server
        - [ ] Part of a hobby project, no sensitive data is being passed between client and server
    - [ ] Configure security on routes/API to allow for some routes to be made public
- [ ] Allow public access
    - [ ] Eventually open up some routes publicly, just for fun

See the [open issues](https://github.com/drapp111/portfolio-api/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Declan Rapp - declanrapp@gmail.com

Project Link: [https://github.com/drapp111/portfolio-api](https://github.com/drapp111/portfolio-api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Kelsey Doolittle - QA Tester and Design Assistance](https://www.linkedin.com/in/kelsey-doolittle)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/docs/)
* [Node-Postgres](https://node-postgres.com/)
* [Raspberry Pi](https://www.raspberrypi.com/documentation/)
* [Nginx](https://docs.nginx.com/)
* [Othneil Drew - Readme template](https://github.com/othneildrew/Best-README-Template/tree/master)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/drapp111/portfolio-api.svg?style=for-the-badge
[contributors-url]: https://github.com/drapp111/portfolio-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/drapp111/portfolio-api.svg?style=for-the-badge
[forks-url]: https://github.com/drapp111/portfolio-api/network/members
[stars-shield]: https://img.shields.io/github/stars/drapp111/portfolio-api.svg?style=for-the-badge
[stars-url]: https://github.com/drapp111/portfolio-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/drapp111/portfolio-api.svg?style=for-the-badge
[issues-url]: https://github.com/drapp111/portfolio-api/issues
[license-shield]: https://img.shields.io/github/license/drapp111/portfolio-api.svg?style=for-the-badge
[license-url]: https://github.com/drapp111/portfolio-api/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/declanrapp
[product-screenshot]: site-screenshot.png
[Express.js]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Postgres]: https://img.shields.io/badge/Postgres-20232A?style=for-the-badge&logo=postgresql&logoColor=61DAFB
[Postgres-url]: https://www.postgresql.org/docs/
[Pi]: https://img.shields.io/badge/Raspberry_Pi-20232A?style=for-the-badge&logo=raspberrypi&logoColor=c7053d
[Pi-url]: https://www.raspberrypi.com/documentation/
[Nginx]: https://img.shields.io/badge/Nginx-20232A?style=for-the-badge&logo=nginx&logoColor=009900
[Nginx-url]: https://docs.nginx.com/
