# Reptile Cove
T3A2-A Full Stack Application (Part A) | By Taz Gibbs & Stephanie Duffieux | July 2020

* [Reptile Cove](http://www.reptilecove.ml/) - Live Website
* [GitHub Repository](https://github.com/HeyitsmeTazG/ReptileCove)

![Reptile Cove Splash](./docs/RC-Splash.png)

**Right click the image below and open in a new tab to view our trailer video**
[![Reptile Cove Trailer](http://img.youtube.com/vi/vd-9zEfhuto/0.jpg)](http://www.youtube.com/watch?v=vd-9zEfhuto)
## R1 Description of the Website

### Purpose

The purpose for our site is to create a platform that educates Australians on native reptile species, why they are vital to our ecosystems, and how we can better protect them.

Conservation is something all Australians are responsible for, however, there is a lack of easily accessible information available. Most information regarding Australia’s native reptile species are scientific journals, and other academic works. We want to change that.

The native population for snakes and other reptiles has been on a downhill slope for decades now. People either take the animals out of the wild, or they kill them out of fear. These decisions can have lasting impacts on natural ecosystems, and as the reptile population decimates, the ‘prey’ population increases. This imbalance has a domino effect on pest control, global warming, and several other issues (such as water availability and crop farming).

Our plan for this interactive site includes many features we feel are important for educating Australians, and how we can all do our part to protect our native reptile species.


### Functionality/Features

<details><summary><strong>Functionality</strong></summary>

##### "Home" Page
Welcomes the user to the website, includes a short video and purpose of the website. 

##### "Meet Us" Page
Introduces the user to the team behind Reptile Cove. The user can fill out a contact form if they wish to get in touch with the team.  

##### "Adopt a Reptile" Page
Users that are not signed in can view a list of reptiles available to adopt. A user must be signed in to enquire about a reptile. Users can also add a reptile for adoption, with relevant information, including age, medical history, temperament, and husbandry requirements.  

##### "Blog" Page
Users can view educational posts written by Reptile Cove's admin team. An admin user can log in and update blog posts, add new blog posts, or delete blog posts.

##### "Snake Catchers" Page

Users can find snake catchers in their local region by entering their postcode which will give them a list of their nearest catchers. This section is linked to google maps.

##### "Rescues" Page

Shows a list of rescue centres. Each rescue centre has a "Make a Donation" feature button allowing a user to make donations to a Rescue. This section is also linked to google maps, so a user can find other rescue centres near them.

##### Profile Page

When a user is logged in they can view their profile page which includes a history of their donations, a list of their reptile listings, and user/profile settings to update their details.

##### Sign Up/In Page

This page holds 2 forms, and renders either the Sign Up, or Sign In page depending on whether or not a user is signed in. There is a button to change the view from Sign Up to Sign In.

##### Footer

Includes a "Donate" button which directs the user to the "Rescues" page and a Sign In/Sign Out button.
</details>

<details><summary><strong>Features</strong></summary>

##### Donation Button
On Rescues page so users can donate to a list of our favourite reptile rescues.

##### Third Party Payment System
The payment system that facilitates the donations

##### Adoption enquiry
A form that can be sent to the email of the user who posted the adoption listing. A user must be signed in to send this

##### Email site admins
A form to email the site admins regarding any queries about the website.

##### Google maps
Available on the Rescues and Snake Catchers page, so users can find Rescues and Snake Catchers in their local area.

##### Sign Up/In/Out
Authentication and Authorisation, allows a user to create, edit, and delete their profile.

##### Admin Access
Site creators have admin access, and have full control of the site, such as deleting users profiles and posts if necessary. Admins are able to create/edit/delete blog posts on the blog page.

</details>

### Target Audience

##### Demographic

<details><summary><strong>Primary school to high school students</strong></summary>

Reptile Cove seeks to attract an audience of primary to high school students and aims to educate and raise awareness through educational blog posts on the role they can play from a young age in protecting Australia's native reptile species.
</details>

<details><summary><strong>Young to middle age adults</strong></summary>

Reptile Cove seeks to attract an audience of young to middle age adults who are passionate about reptiles  and want to contribute to protecting them through donations and adoptions. Reptile Cove also aims to educate its adult demographic on the importance and crucial role they can play in saving Australia's native reptile species.  
</details>

<details><summary><strong>Elder generations</strong></summary>

Reptile Cove seeks to attract an audience of all ages to educate Australians on how to respect and care for Australia's native reptile species. The Snake Catchers page is aimed to help Australians have unwanted reptile guests safely relocated. The blog posts are aimed to help educate all Australians, regardless of age, on why our native reptile species are cruicial to natural ecosystems and why they should be protected.
</details>

### Tech Stack

<details><summary><strong>Framework/structre</strong></summary>

* MERN Stack (MongoDB, Express, React, Node)
* HTML5
* JavaScript
</details>

<details><summary><strong>Styling</strong></summary>
* CSS3
* Bootstrap
</details>

<details><summary><strong>Deployment and Storage</strong></summary>

* Heroku (deployment platform)
* Cloudinary (Cloud storage)
</details>

<details><summary><strong>Third Party Tools</strong></summary>

* Stripe (Payment system)
* Google Maps (Map system)
</details>
<details><summary><strong>Development Tools</strong></summary>

* GitHub
* Visual Studio Code
* Discord (Collaboration & screen share)
</details>

<details><summary><strong>Planning and Design</strong></summary>

* Adobe Illustrator (Logo vector art)
* Adobe Photoshop (Image resizing)
* Figma (Wireframes)
* Adobe XD (Prototype)
* LucidChart (Diagrams)
* Unsplash (Free stock images)
* Trello (Project management, user stories)
* Keynote (Slide deck presentation)
</details>

## R2 Dataflow Diagram

![Reptile Cove Data Flow Diagram 1](./docs/rc-data-flow-1.png)
![Reptile Cove Data Flow Diagram 2](./docs/rc-data-flow-2.png)
![Reptile Cove Data Flow Diagram 3](./docs/rc-data-flow3.png)

## R3 Application Architecture Diagram

![Reptile Cove Architecture Diagram](./docs/reptileCove_architecture-diagram.png)

## Sitemap

![Reptile Cove Sitemap](./docs/reptileCove-sitemap.png)

## R4 User Stories 

<details>
<summary><strong>Standard User</strong></summary>
<ul>
<li>A user I want to have access to a navigation bar so I can navigate through the website</li>
<li>As a User I want to view a "Home" Page so I can have an understanding of the purpose of the website</li>
<li>As a user I want to have access to a "Meet the Team" page so I can view who created the website</li>
<li>As a user I want to have a contact form so that I can email the website creators with any feedback or enquiries about the site</li>
<li>As a user I want to have access to a "Blog" page so I can learn about reptiles and how to protect them</li>
<li>As a user I want to have access to an "Adopt" page so I can view any reptiles available for adoption</li>
<li>As a user I want to have a form so that I can enquire about a reptile I want to adopt</li>
<li>As a user I want to be able to sign up/in so I can list a reptile for adoption</li>
<li>As a user I want to have access to a "Rescue Centres" page so I can search for rescue centres in my local area</li>
<li>As a user I want to be able to sign up/in to make donations to a rescue centre</li>
<li>As a user I want to have access to a "Snake Catchers" page so I can find snake catchers in my local area</li>
</ul>
</details>

<details>
<summary><strong>Admin</strong></summary>
<ul>
<li>As an admin I want to be able to sign up/in so I can create blog posts</li>
<li>As an admin I want to be able to edit blog posts so I can update any changes I need to make (e.g spelling errors/photos)</li>
<li>As an admin I want to be able to delete a blog post so it doesnt appear on the site</li>
<li>As an admin I want to have full access of the site so I can remove any inapppropriate posts, and moderate user interaction</li>
<li>As an admin I want to be able to delete adoption listings made by other users if the listing does not meet the requirements, or has been adopted out or has passed</li>
</ul>
</details>

<details>
<summary><strong>Signed In User</strong></summary>
<ul>
<li>As a signed-in user I want to be able to list a reptile so that other users can enquire and adopt it</li>
<li>As a signed-in user I want to be able to delete one of my own adoption posts if the reptile I have listed has been adopted or has passed</li>
<li>As a signed-in user I want to be able to make a donation to one or more of the rescue centres</li>
<li>As a signed-in user I want to have a profile page so i can edit my profile and security deatils</li>
<li>As a signed-in user I want a sign out button so I can end my session on the website</li>
</ul>
</details>
<br>

![User Stories](./docs/RC-Trello-11072020.png)

## R5 Wireframes

[Link to all Wireframes](https://www.figma.com/file/fA9lz56lEUxDXQg75kgVoH/Reptile-Cove-Wireframes?node-id=0%3A1)


### Desktop

![Desktop Wireframes](./docs/desktop-wireframes.jpg)

### Tablet
![Tablet Wireframes](./docs/tablet-wireframes-1.jpg)

### Mobile
![Mobile Wireframes](./docs/mobile-wireframes.jpg)

## Style Guide
![Brand Style Guide](./docs/Brand-Style-Guide.jpg)

## Prototype

**Click the image below to view our application prototype**

[![Reptile Cove Prototype](./docs/app-prototype.png)](https://www.youtube.com/watch?v=9SI4JcEh-UI)

![Reptile Cove Prototype 1](./docs/prototype2.png)
![Reptile Cove Prototype 2](./docs/prototype3.png)
![Reptile Cove Prototype 3](./docs/prototype4.png)
![Reptile Cove Prototype 4](./docs/prototype5.png)
![Reptile Cove Prototype 5](./docs/prototype6.png)


## R6 Screenshots of Trello Board

[View Live Trello Board](https://trello.com/b/cBMk0jEf/reptile-cove)

#### Initial Stage - 11/07/2020
![Trello Board - Initial Stage](./docs/RC-Trello-11072020.png)

#### Progress - 12/07/2020
![Trello Board - 12/07/2020](./docs/RC-Trello-12072020.png)

#### Progress - 16/07/2020
![Trello Board - 16/07/2020](./docs/RC-Trello-16072020.png)
