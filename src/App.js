import React, { useState } from 'react';
import './App.css';
import goldenImage from './Golden.png';
import beagleImage from './Beagle.png';

function App() {
  const [petDetails, setPetDetails] = useState({
    name: '',
    breed: '',
    age: '',
    gender: '',
    dateOfJoining: '',
    weight: '',
    color: '',
    bloodTest: '',
    ctScan: '',
    vaccination: '',
    disease: '',
    monthlyCheckup: '',
    ownerName: '',
    contactDetails: '',
    placeFound: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <div className="logo"></div>
          <h1 className="title">MUDITA</h1>
        </div>
        <div className="edit-link">Edit</div>
      </header>
      <div className="form-container">
        <div className="left-image">
          <img src={goldenImage} alt="Golden Retriever" className="dog-image" />
        </div>
        <div className="form-content">
          <div className="form-box">
            <div className="image-upload">
              <input type="file" id="upload" name="upload" onChange={handleImageUpload} />
              <label htmlFor="upload">Upload</label>
            </div>
            <div className="pet-info">
              <div className="input-group">
                <label>Name:</label>
                <input type="text" name="name" value={petDetails.name} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Breed:</label>
                <input type="text" name="breed" value={petDetails.breed} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Age:</label>
                <input type="text" name="age" value={petDetails.age} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Gender:</label>
                <input type="text" name="gender" value={petDetails.gender} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Date of Joining:</label>
                <input type="date" name="dateOfJoining" value={petDetails.dateOfJoining} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Weight:</label>
                <input type="text" name="weight" value={petDetails.weight} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Color:</label>
                <input type="text" name="color" value={petDetails.color} onChange={handleChange} />
              </div>
            </div>
            <h2>Medical Records</h2>
            <div className="medical-records">
              <div className="input-group">
                <label>Blood Test:</label>
                <input type="text" name="bloodTest" value={petDetails.bloodTest} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>CT Scan:</label>
                <input type="text" name="ctScan" value={petDetails.ctScan} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Vaccination:</label>
                <input type="text" name="vaccination" value={petDetails.vaccination} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Disease:</label>
                <input type="text" name="disease" value={petDetails.disease} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Monthly Check-up:</label>
                <input type="text" name="monthlyCheckup" value={petDetails.monthlyCheckup} onChange={handleChange} />
              </div>
            </div>
            <h2>Owner's Information</h2>
            <div className="owner-info">
              <div className="input-group">
                <label>Name:</label>
                <input type="text" name="ownerName" value={petDetails.ownerName} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Contact Details:</label>
                <input type="text" name="contactDetails" value={petDetails.contactDetails} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Place Found:</label>
                <input type="text" name="placeFound" value={petDetails.placeFound} onChange={handleChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="right-image">
          <img src={beagleImage} alt="Beagle" className="dog-image" />
        </div>
      </div>
    </div>
  );
}

export default App;
