import IMAGES from "@/constants/images";

export const blogs = [
  {
    id: 1,
    title: "Flutter and Firebase Integration: Building Robust Mobile Apps",
    heroImage: IMAGES.firebaseflutter,
    mainHeading: [
      {
        title: "Why Choose Firebase with Flutter?",
        paragraphs: [
          "Flutter, Google's UI toolkit, empowers developers to create fast and natively compiled applications for mobile, web, and desktop from a single codebase. It streamlines the development process with an intuitive UI, rich libraries, and high-performance rendering.",
          "Firebase complements Flutter perfectly by providing a robust Backend-as-a-Service (BaaS) offering. It includes features like real-time databases, cloud storage, authentication services, and analytics, which are essential for building scalable applications.",
        ],
      },
      {
        title: "Seamless Integration of Firebase into Flutter Apps",
        paragraphs: [
          "The integration of Firebase into a Flutter app makes backend management and real-time functionalities easy to implement. Firebase offers a range of services such as Firestore, Firebase Authentication, and Firebase Cloud Messaging, which are natively supported in Flutter.",
          "With Firebase's cloud-based solutions, Flutter developers can quickly scale their applications while maintaining a seamless and highly responsive user experience.",
        ],
      },
    ],
    subheadings: [
      {
        heading: "Setting Up Firebase in Flutter",
        desc: "Integrating Firebase with your Flutter project involves configuring Firebase services on both Android and iOS platforms. Below are the key steps to set up Firebase in your Flutter app:",
        code: `dependencies:
  flutter:
    sdk: flutter
  firebase_core: ^latest_version
  firebase_auth: ^latest_version
  cloud_firestore: ^latest_version

# iOS specific setup
platform :ios, '10.0'

# Add the Firebase SDK to your iOS project by following the instructions in the Firebase Console
`,
      },
      {
        heading: "Firebase Authentication in Flutter",
        desc: [
          "Firebase Authentication enables your app to easily manage user authentication with a variety of sign-in methods. You can use Firebase Authentication to integrate email/password login, Google Sign-In, and other authentication mechanisms.",
          "Here’s how to implement Firebase Authentication in Flutter to allow users to sign in using their email and password.",
        ],
        code: `import 'package:firebase_auth/firebase_auth.dart';

Future<User?> signInWithEmail(String email, String password) async {
  try {
    UserCredential userCredential = await FirebaseAuth.instance.signInWithEmailAndPassword(email: email, password: password);
    return userCredential.user;
  } catch (e) {
    print("Error: $e");
    return null;
  }
}

Future<void> signUpWithEmail(String email, String password) async {
  try {
    UserCredential userCredential = await FirebaseAuth.instance.createUserWithEmailAndPassword(email: email, password: password);
    print("User signed up successfully!");
  } catch (e) {
    print("Error: $e");
  }
}`,
      },
      {
        heading: "Using Cloud Firestore for Data Storage",
        desc: "Cloud Firestore is a flexible, scalable database for mobile, web, and server development. It’s a cloud-hosted, NoSQL database that provides real-time synchronization, offline support, and powerful querying features. Below is an example of how to store and retrieve data using Firestore in Flutter:",
        code: `import 'package:cloud_firestore/cloud_firestore.dart';

Future<void> addUserData(String userId, String name, String email) async {
  CollectionReference users = FirebaseFirestore.instance.collection('users');
  await users.doc(userId).set({
    'name': name,
    'email': email,
    'created_at': Timestamp.now(),
  });
  print("User data added to Firestore");
}

Future<void> getUserData(String userId) async {
  try {
    DocumentSnapshot doc = await FirebaseFirestore.instance.collection('users').doc(userId).get();
    if (doc.exists) {
      print(doc.data());
    } else {
      print("No such user found!");
    }
  } catch (e) {
    print("Error: $e");
  }
}`,
      },
      {
        heading:
          "Implementing Push Notifications with Firebase Cloud Messaging",
        desc: "Firebase Cloud Messaging (FCM) is used for sending notifications to users on iOS, Android, and web platforms. It is extremely useful for real-time updates, promotional offers, or any other alert system within your app.",
        code: `import 'package:firebase_messaging/firebase_messaging.dart';

Future<void> configureFCM() async {
  FirebaseMessaging messaging = FirebaseMessaging.instance;
  String? token = await messaging.getToken();
  print("FCM Token: $token");

  FirebaseMessaging.onMessage.listen((RemoteMessage message) {
    print('Message received:');
    // Handle the message notification
  });

  FirebaseMessaging.onMessageOpenedApp.listen((RemoteMessage message) {
    print('Notification clicked!');
  });
}

Future<void> sendPushNotification(String token, String title, String body) async {
  // Call the Firebase Cloud Messaging API to send a notification
}`,
      },
    ],
    images: [],

    writtenBy: "Faiz Hassan",
    writtenDate: "2021-02-03",
  },

  {
    id: 2,
    title:
      "Implementing User Authentication in a MERN Stack Application: A Comprehensive Guide",
    heroImage: IMAGES.authentication,
    mainHeading: [
      {
        title: "Introduction to MERN Stack Authentication",
        paragraphs: [
          "The MERN stack, which includes MongoDB, Express.js, React, and Node.js, is a popular set of technologies for building full-stack web applications. One crucial aspect of any web application is user authentication, which allows users to securely log in and access protected resources.",
          "This guide will walk you through setting up authentication in a MERN stack application, covering everything from creating user models in MongoDB to implementing secure authentication mechanisms using JWT (JSON Web Tokens).",
        ],
      },
      {
        title: "Setting Up MongoDB and User Model",
        paragraphs: [
          "MongoDB is a NoSQL database used in the MERN stack. To implement authentication, we first need to define a user model that will store user credentials such as email, password, and JWT tokens.",
          "Here’s an example of how to create a User model with Mongoose in MongoDB:",
        ],
      },
    ],
    subheadings: [
      {
        heading: "Creating the User Schema in MongoDB",
        desc: "The first step is to create a user schema that will be used to store user data, including email, password, and JWT tokens.",
        code: `const mongoose = require('mongoose');
  const bcrypt = require('bcryptjs');
  
  const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    tokens: [{
      token: {
        type: String,
        required: true
      }
    }]
  });
  
  userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'secretkey');
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
  };
  
  userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    next();
  });
  
  const User = mongoose.model('User', userSchema);
  module.exports = User;`,
      },
      {
        heading: "User Registration Endpoint",
        desc: "Now, let's create a registration endpoint to allow users to sign up. This will involve hashing the user's password and saving the user data to the database.",
        code: `const express = require('express');
  const router = new express.Router();
  const User = require('../models/User');
  
  router.post('/register', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = new User({ email, password });
      await user.save();
      const token = await user.generateAuthToken();
      res.status(201).send({ user, token });
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  module.exports = router;`,
      },
      {
        heading: "User Login Endpoint",
        desc: "Next, let's create a login endpoint where users can authenticate themselves using their email and password. We will compare the entered password with the one stored in the database and issue a JWT token upon successful login.",
        code: `const express = require('express');
  const router = new express.Router();
  const User = require('../models/User');
  
  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({ error: 'Invalid login credentials' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send({ error: 'Invalid login credentials' });
      }
      const token = await user.generateAuthToken();
      res.send({ user, token });
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  module.exports = router;`,
      },
      {
        heading: "Protecting Routes with JWT Authentication",
        desc: "To protect certain routes, we can verify the JWT token on incoming requests. This ensures that only authenticated users can access protected resources.",
        code: `const express = require('express');
  const jwt = require('jsonwebtoken');
  const User = require('../models/User');
  
  const auth = async (req, res, next) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, 'secretkey');
      const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
      if (!user) {
        throw new Error();
      }
      req.token = token;
      req.user = user;
      next();
    } catch (e) {
      res.status(401).send({ error: 'Please authenticate.' });
    }
  };
  
  module.exports = auth;`,
      },
    ],
    images: [],
    writtenBy: "Qasim Ali",
    writtenDate: "2024-08-04",
  },

  {
    id: 3,
    title: "Securing APIs in Express.js: Best Practices and Implementation",
    heroImage: IMAGES.secureapi,
    mainHeading: [
      {
        title: "Why API Security is Crucial for Web Applications",
        paragraphs: [
          "APIs are the backbone of modern web applications, allowing different services to communicate. With the rise of cyber-attacks, securing these APIs is crucial to ensure data privacy, prevent unauthorized access, and protect against malicious activities.",
          "Express.js is one of the most popular web frameworks for building APIs in Node.js, but without proper security measures, your APIs can be exposed to a wide range of vulnerabilities. This guide covers the best practices and implementation steps for securing APIs in Express.js.",
        ],
      },
      {
        title: "Common API Security Risks and Threats",
        paragraphs: [
          "Before diving into securing your APIs, it's important to understand the common risks and threats that APIs face, such as:",
          "- **Injection Attacks:** Malicious data inputted into API requests can lead to SQL injections or other forms of code injection.",
          "- **Cross-Site Scripting (XSS):** Attackers inject malicious scripts into responses that can be executed on a user's browser.",
          "- **Cross-Site Request Forgery (CSRF):** Attackers trick users into performing actions on an authenticated site without their consent.",
          "- **Unauthorized Access:** Without authentication, anyone can access your API endpoints, leading to data breaches.",
        ],
      },
    ],
    subheadings: [
      {
        heading: "Securing API Routes with Authentication",
        desc: "The first line of defense for securing APIs is ensuring that only authorized users can access certain routes. This can be achieved by implementing authentication mechanisms like JWT (JSON Web Tokens). Below is an example of how to implement JWT authentication for API routes.",
        code: "const jwt = require('jsonwebtoken');\n\nconst authenticate = (req, res, next) => {\n  const token = req.header('Authorization')?.replace('Bearer ', '');\n  if (!token) {\n    return res.status(401).json({ message: 'Access denied' });\n  }\n  try {\n    const decoded = jwt.verify(token, 'your_jwt_secret');\n    req.user = decoded;\n    next();\n  } catch (error) {\n    res.status(400).json({ message: 'Invalid token' });\n  }\n};\n\nmodule.exports = authenticate;",
      },
      {
        heading: "Implementing Rate Limiting to Prevent Abuse",
        desc: "Rate limiting is a method of limiting the number of requests a client can make to an API in a given time period. This is useful in preventing abuse, brute force attacks, and ensuring fair usage of your APIs.",
        code: "const rateLimit = require('express-rate-limit');\n\nconst apiLimiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100, // Limit each IP to 100 requests per windowMs\n  message: 'Too many requests from this IP, please try again later.'\n});\n\napp.use('/api/', apiLimiter);",
      },
      {
        heading: "Sanitizing Inputs to Prevent Injection Attacks",
        desc: "Injecting malicious code into API inputs is one of the most common attack methods. To prevent such attacks, it's crucial to sanitize inputs before processing them. Libraries like `express-validator` or `validator` can be used to sanitize user input in API requests.",
        code: "const { body, validationResult } = require('express-validator');\n\napp.post('/login', [\n  body('email').isEmail().normalizeEmail(),\n  body('password').isLength({ min: 6 })\n], (req, res) => {\n  const errors = validationResult(req);\n  if (!errors.isEmpty()) {\n    return res.status(400).json({ errors: errors.array() });\n  }\n  // Continue with login logic\n});",
      },
      {
        heading: "Enabling HTTPS to Secure API Communication",
        desc: "APIs should always be served over HTTPS to ensure that communication between clients and servers is encrypted and secure. HTTPS protects sensitive information from being intercepted or tampered with during transmission.",
        code: "const https = require('https');\nconst fs = require('fs');\n\nconst server = https.createServer({\n  key: fs.readFileSync('private-key.pem'),\n  cert: fs.readFileSync('certificate.pem')\n}, app);\n\nserver.listen(3000, () => {\n  console.log('API is running on HTTPS://localhost:3000');\n});",
      },
      {
        heading: "Handling CORS (Cross-Origin Resource Sharing)",
        desc: "Cross-Origin Resource Sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain. It’s important to configure CORS properly to prevent unauthorized domains from making requests to your API.",
        code: "const cors = require('cors');\n\napp.use(cors({\n  origin: 'https://your-frontend-domain.com',\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n  allowedHeaders: ['Content-Type', 'Authorization']\n}));",
      },
      {
        heading: "Protecting Against Cross-Site Request Forgery (CSRF)",
        desc: "CSRF is a type of attack where a malicious actor can trick a user into performing actions they didn’t intend. To prevent CSRF, use anti-CSRF tokens or same-site cookies.",
        code: "const csrf = require('csurf');\n\nconst csrfProtection = csrf({ cookie: true });\n\napp.post('/api/submit', csrfProtection, (req, res) => {\n  // Process request\n  res.json({ message: 'Request successful' });\n});",
      },
    ],
    images: [],
    writtenBy: "Shayan Zameer",
    writtenDate: "2025-1-12",
  },
];
