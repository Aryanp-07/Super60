from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient(os.getenv("MONGO_URI"))
db = client['student_database']
students_collection = db['students']

UPLOAD_FOLDER = './uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
ALLOWED_EXTENSIONS = {'pdf'}

# Function to check file extension
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Route to get all students
@app.route('/students', methods=['GET'])
def get_students():
    students = list(students_collection.find({}, {'name': 1}))
    return jsonify(students)

# Route to get a specific student profile
@app.route('/students/<id>', methods=['GET'])
def get_student_profile(id):
    student = students_collection.find_one({'_id': ObjectId(id)})
    if student:
        return jsonify(student)
    return jsonify({"error": "Student not found"}), 404

# Route to update notes for a student
@app.route('/students/<id>/update_notes', methods=['PUT'])
def update_notes(id):
    data = request.json
    students_collection.update_one({'_id': ObjectId(id)}, {'$set': data})
    return jsonify({"message": "Notes updated successfully"})

# Route to upload PDF files
@app.route('/students/<id>/upload_bio', methods=['POST'])
def upload_bio(id):
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        students_collection.update_one({'_id': ObjectId(id)}, {'$set': {'bio_pdf': filename}})
        return jsonify({"message": "File uploaded successfully"})
    return jsonify({"error": "Invalid file type"}), 400

if __name__ == "__main__":
    app.run(debug=True)
