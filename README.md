> [!Note]
> Capstone [FrontEnd](https://github.com/iiSurf/capstoneFrontEnd)

### Back End

## Description

This is the back-end part of the Breathing Skills App, which provides RESTful API services for managing goals, tracking progress, and delivering instructional videos. Currently only the goals page and videos page is functional.

## Features

- **CRUD Operations for Goals**: Create, Read, Update, and Delete breathing goals.
- **Progress Tracking**: Record and retrieve user progress.
- **Video Management**: Store and deliver instructional videos.

## Tech Used

- Node.js
- Express.js
- MongoDB
- Mongoose for MongoDB

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
clone from https://github.com/iiSurf/capstoneBackEnd
2. cd breathing-skills-backend

3. npm install

4. Message me for mongodb connection string access

5. ### Start server

npm run server

## API Endpoints

- Goals

GET /front/goals - Fetch all goals
POST /front/goals - Add a new goal
PUT /front/goals/:id - Update a goal
DELETE /front/goals/:id - Delete a goal

- Progress

GET /front/progress - Fetch all progress records
POST /front/progress - Add a new progress record
PUT /front/progress/:id - Update a progress record
DELETE /front/progress/:id - Delete a progress record

- Videos

GET /front/videos - Fetch all videos
POST /front/videos - Add a new video
PUT /front/videos/:id - Update a video
DELETE /front/videos/:id - Delete a video