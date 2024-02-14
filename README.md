# Character-Recognition
Template matching is a technique used for character recognition in which a sample image, known as a template, is compared with a larger image to determine if the template exists within the larger image. This technique is often used in optical character recognition (OCR) systems to identify and extract text from images. The template matching process begins by extracting the character from the image or document and then comparing it to a set of templates.
It typically involves the following steps:

•	Preprocessing: The larger image is preprocessed to enhance its features and remove any noise or distortion. This may include image binarization, noise reduction, and image smoothing.
•	Template creation: A template image of the character or symbol to be recognized is created. This template should be a clear, high-resolution image of the character or symbol.
•	Comparison: The template image is then compared with the larger image using a comparison algorithm. This algorithm compares the features of the template image with those of the larger image to determine if there is a match.
•	Matching: If a match is found, the algorithm will identify the location of the character or symbol within the larger image. The character or symbol can then be extracted and recognized.
There are several different comparison algorithms that can be used for template matching, including correlation-based algorithms, feature-based algorithms, and machine learning-based algorithms. Each algorithm has its own advantages and disadvantages, and the choice of algorithm will depend on the specific application.

One of the main advantages of template matching is that it is relatively simple and easy to implement. It is also relatively fast, making it suitable for real-time applications. However, template matching can be sensitive to changes in the image and character.

METHODOLOGY & IMPLEMENTATION
In our project, we shall be dealing with the problem of machine reading typewritten/handwritten characters. This corresponds to the ability of human beings to recognize such characters, which they are able to do little or no difficulty. 
The aim is to program a system that classifies a given input as belonging to a certain class rather than to identify them uniquely, as every input pattern. The system performs character recognition by quantification of the character into a mathematical matrix entity using the geometrical properties of the character image. The scope of our system is limited to the recognition of a single character.

We implemented this system using JavaScript programming language. Our web application allows the user to input any alphabetical character of their choice using the system grid and train the system. After a user is done training the system, they can begin by inputting the exact character the entered in the beginning or something similar to the previously entered input and verify whether or not the system can successfully recognize the input character. This is made significantly better with the additional functionality we added to our application that allows users to pick their desired error percentage rate and carry our multiple tests.
