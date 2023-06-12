# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: 
The super keyword lets us control everything within a certain class, I believe. 

Researched answer:
In Ruby, the super keyword is a command that lets us access and use the powers of a superclass from within a subclass. It's like having a secret button that says, "Hey, do everything the superclass does, and then I'll add my own twist!" When we call super inside a method of a subclass, it searches up the family tree to find a method with the same name in the superclass. Once it finds it, it activates the superclass's method, allowing us to reuse its existing code. This way, we can build upon the foundation laid by the superclass and customize it to fit our specific needs in the subclass.

2. What is a gem?

Your answer: 
A gem is special code that is like a shortcut. We install it to do certain things. Like testing Ruby.

Researched answer:
In Ruby, a "gem" is a special package that contains ready-to-use code created by other developers. It's kind of like a treasure chest full of useful stuff that we can add to our own Ruby projects. These gems can do all sorts of things, from helping us with common tasks to providing entire frameworks or applications. We can easily install and manage gems using RubyGems, which is like a manager for these packages. Gems have their own names, versions, and information that tells us what they do and how to use them. They save us time and effort by letting us use code that others have already written and shared with the community. It's like having a shortcut to building cool stuff with Ruby!

3. What is a relational database? Are there other kinds of databases?

Your answer:
Ah damn, I can't remember this one. I really hate having to answer questions with this answer. I do have memory problems and I am trying to study as much as I can to overcome them. I just remember that databases are like storage for data. But I honestly can't remember anything else. 

Researched answer:
A relational database is like a structured way to store and organize data. It's all about tables, with rows and columns, and the cool thing is that we can define relationships between the tables. We use keys to make these connections. A primary key helps us identify each row uniquely in a table, and a foreign key lets us link one table to another. This way, we can find and work with data efficiently. But there are also other types of databases! Like NoSQL databases, which are great for handling unstructured or big data, and they have different flavors like document databases and key-value stores. There are also object-oriented databases that work well with object-oriented programming languages, hierarchical databases that use a tree-like structure, and network databases that allow for more complex relationships. So, depending on what we need and how our data is structured, we choose the type of database that suits our needs.

4. What are primary keys? Why purpose does a primary key serve?

Your answer:
A primary key is a unique identifier within a database table that serves as a way to uniquely identify each record. It ensures data integrity, facilitates efficient data retrieval, and enables relationships between tables in a relational database. 

Researched answer:
Primary keys are important in a database. They are special columns in a table that make sure each row has a unique identifier. You can think of them like a fingerprint for each record. They serve several purposes. First, they guarantee that no two rows have the same key value, so we don't end up with duplicates or conflicting data. Second, they help with data integrity, making sure our data is accurate and reliable. Third, primary keys can be used to create relationships between tables, which is like connecting related data together. This makes it easier to work with data across different tables. Lastly, primary keys are indexed by the database system, so we can find and retrieve specific records faster. So, primary keys are like the superheroes of a database, keeping our data organized, unique, and easy to access!

5. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:

Researched answer:
The five HTTP verbs are GET, POST, PUT, DELETE, and PATCH. The corresponding CRUD actions are: GET retrieves data, POST creates new data, PUT updates existing data, DELETE removes data, and PATCH partially updates existing data.

The five HTTP verbs, which also represent CRUD actions, are pretty important in web development. GET is for reading or retrieving data from a server, like when we want to see information on a website. POST is for creating new data, like when we submit a form and it adds something to the server. PUT is for updating or replacing existing data, which is useful when we need to change something completely. PATCH is for making partial updates to existing data, like when we want to modify just a few fields. Lastly, DELETE is for removing or deleting data from the server, like when we want to get rid of something for good. So, these HTTP verbs help us perform different actions and interact with web servers in a structured way.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations:
Model validations are rules or checks that are applied to the data within a model in order to ensure its correctness and integrity. In the context of web development, specifically with frameworks like Ruby on Rails, model validations are used to validate the data before it is saved to a database. These validations can enforce constraints on attributes, such as ensuring they are present, unique, within a specific range, or meet certain format requirements. By implementing model validations, developers can maintain data consistency and prevent invalid or inconsistent data from being stored.

2. RESTful routes:
RESTful routes, also known as RESTful APIs or RESTful endpoints, are a set of standardized conventions for defining the routes and actions in a web application's API (Application Programming Interface). REST, which stands for Representational State Transfer, is an architectural style that emphasizes a stateless and resource-based approach to web services. RESTful routes define the operations that can be performed on resources, such as creating, reading, updating, and deleting (CRUD) data. These routes follow a consistent pattern and are often named after the resources they manipulate, making it easier for developers to design, understand, and interact with APIs in a predictable manner.

3. ERB:
ERB stands for Embedded Ruby. It is a templating language used in Ruby-based web frameworks like Ruby on Rails. ERB allows developers to embed Ruby code within HTML or other markup files. With ERB, you can dynamically generate content by including Ruby expressions, loops, conditionals, and variable interpolation directly in the template files. During the rendering process, the embedded Ruby code is executed, and its results are combined with the surrounding markup to generate the final output. ERB provides a powerful way to generate dynamic web pages and separate logic from presentation.

4. Params:
In web development, "params" (short for parameters) refer to the data or information sent from a client to a server as part of an HTTP request. Params typically consist of key-value pairs and can include data from various sources, such as form inputs, query strings, or route parameters. They allow the client to send specific information to the server, which can then be used to perform operations or make decisions. In server-side programming, developers can access and process these params to retrieve user input, pass data to database queries, or perform other actions based on the received parameters.

5. API:
API stands for Application Programming Interface. It is a set of rules, protocols, and tools that allows different software applications to communicate and interact with each other. APIs define the methods and data formats that applications can use to request or exchange information. They act as intermediaries, enabling different systems or components to work together by providing a standardized way of accessing functionality or data. APIs are widely used in web development to integrate services, retrieve data from external sources, or expose functionality for other developers to use. They play a vital role in enabling interoperability and building modular, extensible software systems.
